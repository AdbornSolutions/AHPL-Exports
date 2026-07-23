import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const sourceDirectory = path.resolve("public/locales/en");
const localesDirectory = path.resolve("public/locales");
const languages = ["de", "es", "fr", "pt", "ru", "zh"];
const languageNames = {
  english: "English",
  hindi: "हिन्दी",
  german: "Deutsch",
  spanish: "Español",
  french: "Français",
  portuguese: "Português",
  russian: "Русский",
  mandarin: "中文",
};
const placeholderPattern = /\{\{[^}]+\}\}/g;
const requestQueue = [];
let activeRequests = 0;
const requestLimit = 8;

const delay = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

async function withRequestSlot(callback) {
  if (activeRequests >= requestLimit) {
    await new Promise((resolve) => requestQueue.push(resolve));
  }
  activeRequests += 1;
  try {
    return await callback();
  } finally {
    activeRequests -= 1;
    requestQueue.shift()?.();
  }
}

async function translateText(text, language, attempt = 1) {
  if (!text || /^[\d\s+><&./:-]+$/.test(text)) return text;

  const placeholders = text.match(placeholderPattern) ?? [];
  const protectedText = placeholders.reduce(
    (value, placeholder, index) =>
      value.replace(placeholder, `__PLACEHOLDER_${index}__`),
    text,
  );
  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.search = new URLSearchParams({
    client: "gtx",
    sl: "en",
    tl: language,
    dt: "t",
    q: protectedText,
  });

  try {
    const payload = await withRequestSlot(async () => {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    });
    const translated = payload[0].map(([segment]) => segment).join("");
    return placeholders.reduce(
      (value, placeholder, index) =>
        value.replace(`__PLACEHOLDER_${index}__`, placeholder),
      translated,
    );
  } catch (error) {
    if (attempt >= 4) throw error;
    await delay(500 * attempt);
    return translateText(text, language, attempt + 1);
  }
}

async function translateValue(value, language) {
  if (typeof value === "string") return translateText(value, language);
  if (Array.isArray(value))
    return Promise.all(value.map((item) => translateValue(item, language)));
  if (value && typeof value === "object") {
    const entries = await Promise.all(
      Object.entries(value).map(async ([key, item]) => [
        key,
        await translateValue(item, language),
      ]),
    );
    return Object.fromEntries(entries);
  }
  return value;
}

const files = (await readdir(sourceDirectory)).filter((file) =>
  file.endsWith(".json"),
);

for (const language of languages) {
  const destination = path.join(localesDirectory, language);
  await mkdir(destination, { recursive: true });
  for (const file of files) {
    const source = JSON.parse(
      await readFile(path.join(sourceDirectory, file), "utf8"),
    );
    const translated = await translateValue(source, language);
    if (file === "common.json") {
      Object.assign(translated.language, languageNames);
    }
    await writeFile(
      path.join(destination, file),
      `${JSON.stringify(translated, null, 2)}\n`,
      "utf8",
    );
    console.log(`${language}/${file}`);
  }
}
