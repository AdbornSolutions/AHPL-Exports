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

const findGalleryImages = (folder, productNumber) => {
  const galleryPath = `/products-images/${folder}/${productNumber}/`;

  return Object.entries(imageModules)
    .filter(([path]) => path.includes(galleryPath))
    .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath, undefined, { numeric: true }))
    .map(([, image]) => image);
};

const sharedNames = [
  "Rudra-Ansh (Black)", "Ashwa", "Mayureshwar", "Night-Charm (White)", "Gaj-Jhoola",
  "Carbon Horse", "Aura-Hawk", "Midnight Monk (White)", "Chhatrapati", "Twin Grace",
];

const categoryDefinitions = [
  {
    slug: "metal-table-decor", folder: "Metal-table", title: "Metal Table Decor",
    material: "Iron, Aluminum, Brass & Stainless Steel", finish: "Powder Coated, Antique, Matte, Glossy & Custom",
    subtitle: "Handcrafted Decorative Accent for Refined Interiors",
    names: ["Mangal- Jyoti(Black)", "Alaap", "Glow Wing", "Hoot Holder", "Symphony (Orange)", "The Modak Leaf (Green)", "Lume Lady (Single)", "Kalam Kashti", "Pedal Post", "Mayur"],
    files: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png"],
  },
  {
    slug: "metal-wall-decor", folder: "Metal-wall", title: "Metal Wall Decor",
    material: "Iron, Aluminum, Brass & Stainless Steel", finish: "Matte, Glossy, Antique, Gold, Black & Custom",
    subtitle: "Artistic Wall Accent Crafted for Global Interiors",
    names: ["Turban Tales", "The Divine Hour", "Turban Art", "Bansuri Bliss", "Gilded Ganesha", "Bloom Basket (Golden)", "The Holy Hook", "Gaj-Kriti", "Time Trek", "Symphony Strings"],
    files: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png"],
  },
  {
    slug: "polyresin-decor", folder: "Poyresin Decor", title: "Polyresin Decor", material: "Premium Polyresin",
    finish: "Matte, Glossy, Antique, Metallic & Custom", subtitle: "Precision-Crafted Sculpture for Distinctive Spaces",
    names: sharedNames, files: ["1.jpg", "2.png", "3.jpg", "4.jpg", "5.jpg", "6.png", "7.png", "8.png", "9.png", "10.png"],
  },
  {
    slug: "marble-decor", folder: "Marble Decor", title: "Marble Decor", material: "Premium Natural Marble",
    finish: "Polished, Matte, Honed & Custom", subtitle: "Timeless Natural Stone Decor with Artisan Detailing",
    names: sharedNames, files: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png"],
  },
  {
    slug: "lifestyle-utility", folder: "Lifestyle & Utility", title: "Lifestyle & Utility", material: "Textile, Metal, Wood & Mixed Materials",
    finish: "Natural, Printed, Matte & Custom", subtitle: "Functional Design Made Beautiful for Everyday Living",
    names: sharedNames, files: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png"],
  },
  {
    slug: "wooden-decor", folder: "Wooden Decor", title: "Wooden Decor", material: "Premium Seasoned Wood",
    finish: "Natural, Matte, Polished, Painted & Custom", subtitle: "Handcrafted Wooden Accent Rich in Indian Artistry",
    names: sharedNames,
    files: ["6701fc4d7aa36dceaa70d80a3fa4dd7010ea260e.png", "f038f01e05810928096069f8527344bcdcf0c6e1.png", "a3f9d599f0cd64cbe18c0708f49bf51e403ee1e9.png", "0e8e63cfbb3ae41c380795921df983572402e08e.png", "3496779946eec74591dbcce19895a12a1aef3c67.png", "75b720287b12baa753351c0291600f1efac219ee.png", "c3ddf796d77dad048e227e2acd800d9fdb0ac4d4.png", "0b26e21418452cfd7b5314055e989679bace97da.png", "dd78483c0f9915db215b5cba59056c46d134b8cf.png", "f174ea1760b33510a1eb8a25fecbdcc59cd2d420.png"],
  },
];

export const productCatalog = categoryDefinitions.map((category) => ({
  ...category,
  products: category.names.map((name, index) => ({
    name,
    slug: slugify(name),
    image: findImage(category.folder, category.files[index]),
  })),
}));


export const getProduct = (categorySlug, productSlug) => {
  const category = productCatalog.find((item) => item.slug === categorySlug);
  const product = category?.products.find((item) => item.slug === productSlug);
  return category && product ? { category, product } : null;
};

export { slugify };

