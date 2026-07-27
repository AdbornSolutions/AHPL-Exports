export const EMAIL_PATTERN = "[^\\s@]+@[^\\s@]+\\.com";
export const PHONE_PATTERN =
  "\\+?[0-9](?:[0-9 ]|\\(|\\)|\\.|-){5,28}[0-9]";

export const normalizePhone = (value) => {
  const trimmedValue = value.trim();
  const digits = trimmedValue.replace(/\D/g, "");

  return trimmedValue.startsWith("+") ? `+${digits}` : digits;
};
