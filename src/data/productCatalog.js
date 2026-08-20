const imageModules = import.meta.glob("../assets/products-images/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", {
  eager: true,
  import: "default",
});

const slugify = (value) =>
  value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const findImage = (folder, file) => {
  const suffix = `/products-images/${folder}/${file}`;
  const entry = Object.entries(imageModules).find(([path]) => path.endsWith(suffix));
  return entry?.[1];
};

const woodenDecorNames = [
  "Rajasthani Couple Tealights", "Elephant Tealights Column", "Sawari Elephant Procession", "Peacock Quill Pen", "Rajasthani Quill pen",
  "Arched temple Mandir", "Peacock pen stand", "Rajasthani Folk Musician Wooden Décor Set", "Nine-box Spice", "Taj coaster & Drawer",
];

const marbleDecorProducts = [
  { name: "Verdant Marble Dispenser", file: "1.png", shortDescription: "A cylindrical green marble liquid-soap dispenser finished with a warm metallic pump for refined bathroom and vanity styling.", description: "Verdant Marble Dispenser pairs the natural depth of green stone with a streamlined silhouette and copper-tone pump. Its substantial marble body brings a premium, grounded presence to washbasins, guest bathrooms, spas, and hospitality interiors." },
  { name: "Stacked Marble Tealight Holders", file: "2.png", shortDescription: "A coordinated set of square white marble tealight holders with layered edges and softly recessed candle wells.", description: "Stacked Marble Tealight Holders turn clean geometric forms into an elegant ambient-light display. The natural veining and stepped construction suit dining tables, consoles, festive arrangements, and calm contemporary interiors." },
  { name: "Brass-Line Square Coasters", file: "3.png", shortDescription: "Four square white marble coasters accented with fine parallel brass lines for a polished modern table setting.", description: "Brass-Line Square Coasters combine cool natural stone with restrained metallic detailing. Their crisp square profile protects surfaces while adding a sophisticated accent to coffee tables, dining settings, bars, and premium gifting collections." },
  { name: "Rosebud Tealight", file: "4.png", shortDescription: "A rounded marble tealight enriched with colourful rosebud-inspired Meenakari artwork and a gold-edged rim.", description: "Rosebud Tealight celebrates traditional Indian surface decoration in a compact functional form. Hand-painted florals wrap the rounded body, creating a warm decorative glow for prayer rooms, festive tables, and curated gift sets." },
  { name: "Royal Lady Marble Portrait Plate", file: "5.png", shortDescription: "A decorative marble plate featuring a hand-painted royal lady portrait framed by an ornate yellow floral border.", description: "Royal Lady Marble Portrait Plate draws inspiration from classical Indian miniature painting. The expressive portrait and intricate border make it a distinctive display piece for consoles, cabinets, cultural interiors, and heritage-inspired gifting." },
  { name: "Ganesha Marble Chowki", file: "6.png", shortDescription: "A hand-painted Lord Ganesha idol seated on a raised square marble chowki with red, green, and gold detailing.", description: "Ganesha Marble Chowki combines devotional symbolism with detailed Meenakari-style artistry. The compact raised platform and vibrant finish make it suitable for home temples, festive décor, ceremonies, and meaningful corporate or personal gifts." },
  { name: "Peacock Fan Coaster Set", file: "7.png", shortDescription: "A round marble coaster set enriched with colourful peacock-feather and floral Meenakari motifs.", description: "Peacock Fan Coaster Set combines practical tabletop protection with richly painted Indian artistry. Its smooth stone construction and ornate peacock-inspired decoration make it a distinctive addition to dining spaces and gifting collections." },
  { name: "Peacock Photo Frame", file: "8.png", shortDescription: "An ornate round marble photo frame with a richly patterned peacock-inspired red, green, and gold border.", description: "Peacock Photo Frame surrounds a treasured photograph with detailed hand-painted ornamentation. Presented on a stand, it creates a graceful focal point for living rooms, entry consoles, hospitality spaces, and festive displays." },
  { name: "Meenakari Marble Surahi", file: "9.png", shortDescription: "A decorative marble surahi with a pointed lid, sculpted form, and vivid yellow, red, green, and gold artwork.", description: "Meenakari Marble Surahi reinterprets a traditional Indian vessel as an ornamental collectible. Its slender finial, rounded body, and intricate hand-painted panels lend height, colour, and cultural detail to curated interior displays." },
  { name: "Peacock Meenakari Marble Plate", file: "10.png", shortDescription: "A decorative marble plate showcasing twin peacocks among detailed floral vines in green, blue, pink, and gold.", description: "Peacock Meenakari Marble Plate celebrates an enduring Indian motif through fine hand-painted detail. The balanced twin-peacock composition and included display stand make it ideal for premium décor, wedding gifting, and cultural collections." },
];

const lifestyleUtilityProducts = [
  { name: "Blue Blossom Quilted Pouch Set", file: "1.png", shortDescription: "A coordinated trio of quilted zip pouches in a fresh blue floral print for cosmetics, travel essentials, and everyday organisation.", description: "Blue Blossom Quilted Pouch Set brings flexible organisation to travel and daily routines. Three useful sizes keep beauty products, jewellery, stationery, chargers, and small accessories separated, while soft quilting helps protect their contents." },
  { name: "Crimson Jungle Quilted Tote", file: "2.png", shortDescription: "A spacious red quilted tote patterned with stylised trees and animals, finished with comfortable fabric handles.", description: "Crimson Jungle Quilted Tote combines a bold Indian-inspired print with a roomy, lightweight structure. It is suited to shopping, work, travel, or casual outings and folds easily when not in use." },
  { name: "Rose Stripe Quilted Tote", file: "3.png", shortDescription: "A structured pink-and-white striped quilted tote with delicate heart motifs and reinforced striped handles.", description: "Rose Stripe Quilted Tote offers a clean, cheerful carry-all for errands, gifting, and everyday essentials. Vertical quilting and coordinated handles give the soft textile bag a neat silhouette and dependable shape." },
  { name: "Festive Paisley Quilted Tote", file: "4.png", shortDescription: "A compact white quilted tote animated by colourful paisley motifs and pink striped handles and trim.", description: "Festive Paisley Quilted Tote balances a playful multicolour print with practical proportions. The padded construction is lightweight yet structured, making it a versatile choice for lunches, small shopping trips, gifts, or daily accessories." },
  { name: "Pink Palm Quilted Lunch Bag", file: "5.png", shortDescription: "A boxy pink quilted carry bag decorated with dark palm trees and finished with comfortable matching handles.", description: "Pink Palm Quilted Lunch Bag provides a compact, easy-carry format for meals, snacks, cosmetics, or small travel items. Its wide rectangular shape, soft padding, and tropical print make everyday utility feel bright and distinctive." },
  { name: "Scarlet Bloom Quilted Tote", file: "6.png", shortDescription: "A roomy pale-green quilted tote featuring vivid red botanical motifs and contrasting patterned handles.", description: "Scarlet Bloom Quilted Tote uses expressive floral pattern and tactile quilting to elevate a practical everyday bag. Its broad opening and generous body are suited to shopping, beach days, craft supplies, and casual travel." },
  { name: "Safari Sun Quilted Tote", file: "7.png", shortDescription: "A vibrant yellow quilted tote illustrated with zebras and tropical foliage for a playful statement carry-all.", description: "Safari Sun Quilted Tote pairs an adventurous animal print with a spacious, soft-sided silhouette. Strong fabric handles and a lightweight padded body support daily errands, weekend trips, and colourful gifting collections." },
  { name: "Indigo Wave Quilted Tote", file: "8.png", shortDescription: "A deep-indigo quilted tote with rhythmic white motifs, striped handles, and a relaxed handcrafted finish.", description: "Indigo Wave Quilted Tote draws on traditional resist-print aesthetics in a versatile contemporary bag. Its roomy shape carries everyday essentials comfortably while the dark palette makes it practical for frequent use." },
  { name: "Mustard Palm Quilted Pouch", file: "9.png", shortDescription: "A flat mustard-and-white striped quilted pouch with embroidered-style palm motifs and a convenient wrist loop.", description: "Mustard Palm Quilted Pouch keeps travel papers, cosmetics, cables, or small personal items neatly contained. The slim silhouette slips easily into larger bags, while the tropical embroidery-inspired surface gives it a premium resort character." },
  { name: "Indigo Boho Quilted Tote", file: "10.png", shortDescription: "A compact ivory quilted tote with indigo folk motifs, striped trim, and softly padded carry handles.", description: "Indigo Boho Quilted Tote combines a handcrafted block-print look with an easy upright form. Ideal for lunches, small errands, gifting, or accessories, it offers lightweight utility with a calm blue-and-white palette." },
];

const categoryDefinitions = [
  {
    slug: "biomass-pellets", title: "Biomass Pellets", material: "Wood, Bamboo & Agricultural Biomass",
    finish: "Natural, Densified & Custom Grades", subtitle: "Renewable Fuel Pellets for Efficient Industrial Energy",
    predefinedProducts: biomassProducts,
  },
  {
    slug: "copper-articles", title: "Copper Articles", material: "Premium Copper",
    finish: "Hammered, Embossed, Polished, Antique & Custom", subtitle: "Handcrafted Copperware with Timeless Indian Character",
    predefinedProducts: copperProducts,
  },
  {
    slug: "dehydrated-powders", title: "Dehydrated Powders", material: "Dehydrated Vegetables & Spices",
    finish: "Fine Powder, Bulk & Retail-Ready", subtitle: "Shelf-Stable Natural Ingredients for Global Food Applications",
    predefinedProducts: dehydratedPowderProducts,
  },
  {
    slug: "makhana", title: "Makhana", material: "Popped Lotus Seeds",
    finish: "Natural, Roasted, Seasoned & Retail-Ready", subtitle: "Premium Indian Fox Nuts for Modern Snacking",
    predefinedProducts: makhanaProducts,
  },
  {
    slug: "multani-mitti", title: "Multani Mitti", material: "Natural Fuller's Earth Clay",
    finish: "Raw, Fine Powder, Bulk & Retail-Ready", subtitle: "Naturally Purifying Clay for Beauty and Wellness",
    predefinedProducts: multaniMittiProducts,
  },
  {
    slug: "metal-table-decor", folder: "Metal-table", title: "Metal Table Decor",
    material: "Iron, Aluminum, Brass & Stainless Steel", finish: "Powder Coated, Antique, Matte, Glossy & Custom",
    subtitle: "Handcrafted Decorative Accent for Refined Interiors",
    featured: [
      {
        name: "Rosecrest Silver Photo Frame",
        file: "decor1.png",
        shortDescription: "An ornate silver-tone tabletop frame shaped with sculpted roses, leaves, and fine vintage detailing to give treasured photographs a graceful focal point.",
        description: "Rosecrest Silver Photo Frame blends traditional floral ornamentation with an elegant antique-silver finish. Its richly modelled border creates depth and character while the balanced tabletop silhouette makes it a refined accent for consoles, bedside tables, and living-room displays.",
        descriptionTwo: "Designed for gifting and curated interiors, the frame pairs beautifully with classic, transitional, and contemporary décor. Each sculptural detail is finished to highlight the raised floral work and give the piece a distinctive handcrafted presence.",
      },
      {
        name: "Golden Branch Votive Tree",
        file: "decor3.png",
        shortDescription: "A sculptural golden branch candleholder with three textured glass votives, designed to cast a warm glow across dining tables, consoles, and festive settings.",
        description: "Golden Branch Votive Tree transforms organic branch forms into a functional tabletop sculpture. Three crackle-textured glass cups rest at varied heights on a lustrous metallic tree, creating a layered display that feels elegant even when the candles are unlit.",
        descriptionTwo: "The branching composition distributes light beautifully and works as a centrepiece for intimate dinners, celebrations, and premium hospitality spaces. Its polished finish and artisanal form make every placement feel thoughtfully styled.",
      },
      {
        name: "Royal Carriage Keepsake Jar",
        file: "decor 2.png",
        shortDescription: "A whimsical carriage-inspired metal stand carrying a pierced white keepsake jar, finished with warm gold accents and a wood-look lid.",
        description: "Royal Carriage Keepsake Jar combines useful storage with storybook charm. A delicately pierced ceramic-style vessel sits inside a handcrafted golden carriage frame, while the fitted lid keeps small essentials neatly contained.",
        descriptionTwo: "Ideal for dressing tables, entry consoles, festive displays, or gifting, the piece brings an imaginative accent to the home without sacrificing function. The open floral pattern and airy metalwork keep the design light, decorative, and easy to style.",
      },
    ],
    names: ["Mangal- Jyoti(Black)", "Alaap", "Glow Wing", "Hoot Holder", "Symphony (Orange)", "The Modak Leaf (Green)", "Lume Lady (Single)", "Kalam Kashti", "Pedal Post", "Mayur"],
    files: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png"],
  },
  {
    slug: "metal-wall-decor", folder: "Metal-wall", title: "Metal Wall Decor",
    material: "Iron, Aluminum, Brass & Stainless Steel", finish: "Matte, Glossy, Antique, Gold, Black & Custom",
    subtitle: "Artistic Wall Accent Crafted for Global Interiors",
    featured: [
      {
        name: "Ganesha Mudra Wall Hooks",
        file: "wall1.png",
        shortDescription: "A hand-painted metal wall organiser featuring Lord Ganesha and symbolic mudra forms, finished with three practical hanging hooks.",
        description: "Ganesha Mudra Wall Hooks brings devotional artistry and everyday organisation together in one expressive wall accent. The sculpted Ganesha profile and colourful hand-painted details celebrate Indian folk craft, while the sturdy hooks provide a practical place for keys, scarves, or lightweight accessories.",
        descriptionTwo: "Its antique-gold metalwork, jewel-like accents, and warm palette make it especially suited to entryways, prayer spaces, and festive interiors. The piece is designed to be both meaningful and useful, with artisanal variations that add individual character.",
      },
      {
        name: "Hasta Handcrafted Wall Rack",
        file: "wall2.png",
        shortDescription: "A compact artisan-made wall rack with two decorative hand motifs and three durable hooks for keys, jewellery, or everyday accessories.",
        description: "Hasta Handcrafted Wall Rack turns the expressive language of Indian hand gestures into a functional décor piece. Embellished metal palms hang from a warm antique-finished rail, with carefully painted borders and coloured accents adding a lively handcrafted quality.",
        descriptionTwo: "The three integrated hooks offer convenient storage without overwhelming smaller walls. Place it near an entrance, dressing area, or creative workspace to introduce colour, cultural detail, and practical organisation.",
      },
      {
        name: "Folk Musician Bell Wall Art",
        file: "wall3.png",
        shortDescription: "A vibrant circular metal wall artwork featuring a folk musician and suspended hand-painted bells in green, blue, and antique gold.",
        description: "Folk Musician Bell Wall Art captures the rhythm and colour of Indian folk performance through layered metalwork. A stylised musician sits within a textured circular frame, accompanied by suspended bells that add movement and a playful sculptural dimension.",
        descriptionTwo: "Hand-painted floral motifs and contrasting jewel tones make the artwork a lively focal point for living rooms, corridors, cafés, and cultural spaces. Its balanced composition celebrates traditional storytelling in a format suited to modern interiors.",
      },
    ],
    names: ["Turban Tales", "The Divine Hour", "Turban Art", "Bansuri Bliss", "Gilded Ganesha", "Bloom Basket (Golden)", "The Holy Hook", "Gaj-Kriti", "Time Trek", "Symphony Strings"],
    files: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png"],
  },
  {
    slug: "polyresin-decor", folder: "Poyresin Decor", title: "Polyresin Decor", material: "Premium Polyresin",
    finish: "Matte, Glossy, Antique, Metallic & Custom", subtitle: "Precision-Crafted Sculpture for Distinctive Spaces",
    featured: [
      {
        name: "Hip-Hop Butler Dog Tray",
        file: "resgin1.png",
        shortDescription: "A playful black-and-gold polyresin dog butler carrying a serving tray and boombox, created as a bold decorative organiser for modern spaces.",
        description: "Hip-Hop Butler Dog Tray combines pop-culture attitude with practical display space. Dressed in statement sunglasses, trainers, and a golden chain, the sculpted dog holds a removable-style tray for keys, accessories, wrapped treats, or decorative objects.",
        descriptionTwo: "The matte black body and metallic gold highlights create a premium contrast that suits contemporary homes, studios, cafés, and gifting collections. Crisp moulded details give the character personality from every viewing angle.",
      },
      {
        name: "Krishna Divine Flute Sculpture",
        file: "resign2.png",
        shortDescription: "A devotional polyresin composition of graceful hands holding Krishna's flute, accented with a peacock feather, jewellery, and luminous gold detailing.",
        description: "Krishna Divine Flute Sculpture interprets an iconic spiritual motif through elegant hand forms, a delicately rendered flute, and a radiant peacock-feather backdrop. Soft ivory tones are enriched with hand-painted colour and jewellery-inspired embellishment.",
        descriptionTwo: "Created for prayer rooms, meditation corners, consoles, and meaningful gifting, the sculpture brings serenity and visual refinement to its setting. The balanced composition is expressive without being oversized, making it easy to place in curated interiors.",
      },
      {
        name: "Dr. A.P.J. Abdul Kalam Tribute Bust",
        file: "resign3.png",
        shortDescription: "A dignified antique-bronze tribute bust of Dr. A.P.J. Abdul Kalam, crafted for offices, libraries, institutions, and inspirational displays.",
        description: "Dr. A.P.J. Abdul Kalam Tribute Bust honours one of India's most respected scientists and leaders with a carefully modelled portrait and formal sculptural presence. The antique-bronze finish emphasises the facial expression, signature hairstyle, and fine garment details.",
        descriptionTwo: "Mounted on a wood-look presentation base, this commemorative piece is ideal for educational institutions, offices, libraries, and thoughtful gifting. It serves as a lasting reminder of curiosity, humility, public service, and the power of aspiration.",
      },
    ],
    names: [
      "Rudra-Ansh (Black)", "Bowing Colt", "Mayureshwar", "Snow Owl", "Elephant Trail",
      "Brocade Stallion", "Winged Ascent", "Powder Blue Bust", "Chhatrapati", "Twin Grace",
    ],
    files: ["1.jpg", "2.png", "3.jpg", "4.jpg", "5.jpg", "6.png", "7.png", "8.png", "9.png", "10.png"],
  },
  {
    slug: "marble-decor", folder: "Marble Decor", title: "Marble Decor", material: "Premium Natural Marble",
    finish: "Polished, Matte, Honed & Custom", subtitle: "Timeless Natural Stone Decor with Artisan Detailing",
    detailedProducts: marbleDecorProducts,
  },
  {
    slug: "lifestyle-utility", folder: "Lifestyle & Utility", title: "Lifestyle & Utility", material: "Textile, Metal, Wood & Mixed Materials",
    finish: "Natural, Printed, Matte & Custom", subtitle: "Functional Design Made Beautiful for Everyday Living",
    featured: [
      {
        name: "Marigold Meadow Quilted Pouch",
        file: "life_bags_3.png",
        shortDescription: "A softly quilted white utility pouch scattered with red and orange floral sprigs, finished with a secure zip and convenient fabric loops.",
        description: "Marigold Meadow Quilted Pouch pairs a fresh botanical print with a structured, padded construction. The spacious zip compartment keeps cosmetics, travel essentials, stationery, or small accessories protected and easy to organise.",
        descriptionTwo: "Lightweight and packable, it works equally well inside luggage, a tote, or a dressing-table arrangement. The warm floral palette and tactile quilting give this everyday utility piece an inviting handcrafted character.",
      },
      {
        name: "Crimson Garden Quilted Pouch",
        file: "life_bags.png",
        shortDescription: "A roomy quilted organiser with red floral block prints, decorative lattice detailing, striped piping, and a smooth zip closure.",
        description: "Crimson Garden Quilted Pouch is designed for organised travel and beautiful everyday storage. Its padded body protects personal essentials, while the broad opening makes cosmetics, toiletries, cables, and accessories easy to reach.",
        descriptionTwo: "Traditional floral motifs are arranged within a delicate lattice print and finished with contrasting striped piping. The result is a practical textile accessory that brings Indian craft-inspired pattern to modern routines.",
      },
      {
        name: "Pink Lotus Quilted Pouch",
        file: "life_bags2.png",
        shortDescription: "A cheerful pink quilted pouch enriched with hand-drawn lotus-inspired florals, offering padded storage for travel and daily essentials.",
        description: "Pink Lotus Quilted Pouch combines a vibrant floral surface with a soft, protective structure. Its generous zipped interior is suited to beauty products, jewellery, stationery, chargers, or other small items that need a dedicated place.",
        descriptionTwo: "The tonal pink palette and illustrated botanical print make it a distinctive gifting and lifestyle accessory. Durable quilting helps the pouch maintain its form while remaining lightweight enough for effortless packing.",
      },
    ],
    detailedProducts: lifestyleUtilityProducts,
  },
  {
    slug: "wooden-decor", folder: "Wooden Decor", title: "Wooden Decor", material: "Premium Seasoned Wood",
    finish: "Natural, Matte, Polished, Painted & Custom", subtitle: "Handcrafted Wooden Accent Rich in Indian Artistry",
    names: woodenDecorNames,
    files: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png"],
  },
];

export const productCatalog = categoryDefinitions.map((category) => {
  const catalogProducts = category.predefinedProducts?.map((product) => ({
    ...product,
    slug: slugify(product.name),
    images: [product.image],
    shortDescription: product.description,
  })) ?? category.detailedProducts?.map((product) => {
    const mainImage = findImage(category.folder, product.file);
    const baseName = product.file.replace(/\.[^/.]+$/, "");
    const extension = product.file.split(".").pop();
    const images = [
      mainImage,
      findImage(category.folder, `${baseName}-top.${extension}`),
      findImage(category.folder, `${baseName}-bottom.${extension}`),
    ].filter(Boolean);

    return {
      ...product,
      slug: slugify(product.name),
      image: mainImage,
      images,
    };
  }) ?? category.names.map((name, index) => {
    const file = category.files[index];
    const mainImage = findImage(category.folder, file);

    const baseName = file.replace(/\.[^/.]+$/, "");
    const ext = file.split(".").pop();
    const topImage = findImage(category.folder, `${baseName}-top.${ext}`);
    const bottomImage = findImage(category.folder, `${baseName}-bottom.${ext}`);

    const images = [];
    if (mainImage) images.push(mainImage);
    if (topImage) images.push(topImage);
    if (bottomImage) images.push(bottomImage);

    return {
      name,
      slug: slugify(name),
      image: mainImage,
      images: images.length > 0 ? images : [mainImage],
    };
  });

  const featuredProducts = (category.featured ?? []).map((product) => {
    const image = findImage(category.folder, product.file);
    const baseName = product.file.replace(/\.[^/.]+$/, "");
    const extension = product.file.split(".").pop();
    const topImage = findImage(
      category.folder,
      `${baseName}-top.${extension}`,
    );
    const bottomImage = findImage(
      category.folder,
      `${baseName}-bottom.${extension}`,
    );
    const images = [image, topImage, bottomImage].filter(Boolean);

    return {
      ...product,
      slug: slugify(product.name),
      image,
      images,
    };
  });

  return {
    ...category,
    products: [...featuredProducts, ...catalogProducts],
    handpickedProducts:
      featuredProducts.length > 0
        ? featuredProducts
        : catalogProducts.slice(0, 3),
  };
});


export const getProduct = (categorySlug, productSlug) => {
  const category = productCatalog.find((item) => item.slug === categorySlug);
  const product = category?.products.find((item) => item.slug === productSlug);
  return category && product ? { category, product } : null;
};

export { slugify };
import {
  biomassProducts,
  copperProducts,
  dehydratedPowderProducts,
  makhanaProducts,
  multaniMittiProducts,
} from "./otherProductRanges";
