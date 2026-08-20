const productImages = import.meta.glob(
  "../assets/products-images/ahpl others product image/**/*.png",
  { eager: true, import: "default" },
);

const image = (folder, fileName) => {
  const assetPath = `../assets/products-images/ahpl others product image/${folder}/${fileName}.png`;

  if (!productImages[assetPath]) {
    throw new Error(`Missing product image: ${assetPath}`);
  }

  return productImages[assetPath];
};

const createRange = (folder, products) =>
  products.map((product, index) => ({
    ...product,
    image: image(folder, index + 1),
  }));

export const biomassProducts = createRange("Biomass pattette enhanced", [
  { name: "Wood Biomass Pellets", description: "Uniform renewable-fuel pellets for boilers, furnaces, and industrial heating systems." },
  { name: "Torrefied Biomass Pellets", description: "Dense, dark pellets designed for improved storage stability and dependable combustion." },
  { name: "Agro-Waste Biomass Pellets", description: "Plant-residue fuel pellets offering a practical alternative to conventional fossil fuels." },
  { name: "Bamboo Biomass Pellets", description: "Bamboo-based pellets made for efficient heat generation and bulk industrial use." },
  { name: "Blended Biomass Pellets", description: "Custom biomass blends supplied in consistent sizes to suit varied heating applications." },
  { name: "High-Density Biomass Pellets", description: "Compact pellets engineered for easier handling, transport, and controlled fuel feeding." },
  { name: "Industrial Biomass Pellets", description: "Robust bulk-grade pellets suited to continuous commercial and industrial operations." },
  { name: "Hardwood Biomass Pellets", description: "High-density wood pellets developed for steady heat output and efficient combustion." },
  { name: "Softwood Biomass Pellets", description: "Light-coloured wood pellets suitable for clean, consistent thermal-energy applications." },
  { name: "Custom Biomass Pellet Grades", description: "Multiple sizes and feedstock blends available for buyer-specific fuel requirements." },
]);

export const copperProducts = createRange("copper article enhanced", [
  { name: "Copper Drinkware Set", description: "Coordinated bottle, jug, glass, and serveware set with a warm handcrafted finish." },
  { name: "Hammered Copper Water Jug", description: "Tall hammered jug crafted for elegant table service, gifting, and everyday use." },
  { name: "Designer Copper Matka Set", description: "Decorative black-and-copper water pot paired with a matching drinking cup." },
  { name: "Pierced Copper Décor Jar", description: "Ornamental lidded jar with detailed cutwork for premium interior styling." },
  { name: "Copper Lord Shiva Idol", description: "Finely detailed devotional sculpture suited to pooja spaces, décor, and gifting." },
  { name: "Copper Jug & Kettle Collection", description: "Traditional hammered serving vessels in coordinated sizes for hospitality and retail." },
  { name: "Embossed Copper Mugs", description: "Decorative handled mugs with raised floral detailing and a polished copper finish." },
  { name: "Hammered Copper Bottle", description: "Reusable copper bottle featuring a textured surface and secure matching cap." },
  { name: "Copper Pooja Thali Set", description: "Complete worship and serving set with thali, tumbler, spoon, and small bowls." },
  { name: "Copper Hanuman Idol", description: "Detailed standing Hanuman figurine created for spiritual décor and thoughtful gifting." },
]);

export const dehydratedPowderProducts = createRange("dehyadrated powder enhanced", [
  { name: "Dehydrated Onion Powder", description: "Fine onion powder for seasoning blends, sauces, snacks, and ready-to-cook foods." },
  { name: "Dehydrated Garlic Powder", description: "Concentrated garlic flavour in a convenient, shelf-stable powdered format." },
  { name: "Dehydrated Beetroot Powder", description: "Naturally vibrant beetroot powder for beverages, bakery, nutrition, and food colouring." },
  { name: "Purple Beetroot Powder", description: "Deep-colour beet powder ideal for premium blends and visually distinctive formulations." },
  { name: "Retail Ginger Powder", description: "Shelf-ready ginger powder packaging for private-label and consumer retail programs." },
  { name: "Retail Beetroot Powder", description: "Convenient packaged beetroot powder suited to health-food and wellness retail ranges." },
  { name: "Natural Ginger Powder", description: "Aromatic dehydrated ginger powder for spice mixes, teas, foods, and nutraceutical use." },
  { name: "Fine Beetroot Powder", description: "Finely milled beetroot powder designed for easy blending and consistent dispersion." },
  { name: "Fine Ginger Powder", description: "Uniform fine-grade ginger powder for industrial processing and dry-mix applications." },
  { name: "Premium Ginger Powder", description: "Carefully processed ginger powder supplied for flavour, wellness, and beverage products." },
]);

export const makhanaProducts = createRange("makhana enhanced", [
  { name: "Natural Makhana", description: "Clean, unseasoned fox nuts with a light texture for snacking or further processing." },
  { name: "Premium Plain Makhana", description: "Large, carefully selected popped lotus seeds suited to premium retail packs." },
  { name: "Roasted Masala Makhana", description: "Crunchy roasted makhana coated with a balanced savoury Indian spice blend." },
  { name: "Turmeric Masala Makhana", description: "Golden roasted fox nuts seasoned for a bright, savoury snacking experience." },
  { name: "Magic Masala Makhana", description: "Bold masala-flavoured makhana presented in convenient, shelf-ready packaging." },
  { name: "Classic Salted Makhana", description: "Lightly roasted and seasoned fox nuts made for everyday mindful snacking." },
  { name: "Peri-Peri Makhana", description: "Roasted makhana with a lively chilli and herb seasoning for a spicy finish." },
  { name: "Spicy Roasted Makhana", description: "Crisp, richly seasoned fox nuts created for modern snack and retail ranges." },
  { name: "Peri-Peri Makhana Jar", description: "Spicy peri-peri makhana packed in a practical jar for retail display and freshness." },
  { name: "Classic Makhana Jar", description: "Premium plain fox nuts in consumer-friendly packaging for healthy-snack shelves." },
]);

export const multaniMittiProducts = createRange("multani mitti enhanced", [
  { name: "Natural Multani Mitti Powder", description: "Traditional fuller’s earth powder for face masks, skincare, and cleansing formulations." },
  { name: "Herbal Face-Pack Clay", description: "Multani Mitti suited to customised clay masks blended with botanical ingredients." },
  { name: "Retail Multani Mitti Pouch", description: "Consumer-ready fuller’s earth packaging for beauty, wellness, and personal-care brands." },
  { name: "Herbal Multani Mitti Blend", description: "A versatile clay base for herbal face packs and natural cosmetic preparations." },
  { name: "Premium Multani Mitti", description: "Refined fuller’s earth presented for premium skincare and gifting collections." },
  { name: "Bulk Multani Mitti Powder", description: "Export-ready loose powder format for repacking, formulation, and wholesale supply." },
  { name: "Raw & Powdered Multani Mitti", description: "Natural fuller’s earth available in both raw clay pieces and processed powder." },
  { name: "Fine-Grade Multani Mitti", description: "Finely processed clay powder for smooth application and consistent product blending." },
  { name: "Cosmetic-Grade Fuller’s Earth", description: "Uniform cosmetic clay suitable for masks, cleansers, soaps, and body-care products." },
  { name: "Spa-Grade Multani Mitti", description: "Smooth natural clay powder developed for spa, salon, and home-care applications." },
]);
