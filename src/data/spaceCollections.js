import { productCatalog } from "./productCatalog";

const collectProducts = (selections) =>
  selections.flatMap(({ categorySlug, indexes, slugs }) => {
    const category = productCatalog.find((item) => item.slug === categorySlug);
    if (!category) return [];

    const selectedProducts = slugs
      ? slugs.map((slug) => category.products.find((product) => product.slug === slug))
      : indexes.map((index) => category.products[index]);

    return selectedProducts
      .filter(Boolean)
      .map((product) => ({ category, product }));
  });

export const spaceCollections = [
  {
    slug: "festive-decor",
    nameKey: "saffron.spaces.livingRoom",
    description: "Celebrate every occasion with handcrafted accents, candle holders, wall art and statement decor.",
    selections: [
      { categorySlug: "metal-table-decor", indexes: [0, 1, 2, 3, 4, 5, 8, 12] },
      { categorySlug: "metal-wall-decor", indexes: [0, 2, 4, 7, 8, 9] },
      { categorySlug: "polyresin-decor", indexes: [1, 5] },
    ],
  },
  {
    slug: "corporate-gifting",
    nameKey: "saffron.spaces.diningSpace",
    description: "Premium, useful and memorable gifting options curated for teams, clients and business occasions.",
    selections: [
      { categorySlug: "metal-table-decor", indexes: [0, 1, 2, 9] },
      { categorySlug: "polyresin-decor", indexes: [2, 3, 9] },
    ],
  },
  {
    slug: "office-study-decor",
    nameKey: "saffron.spaces.entryway",
    description: "Refined desk and study accents that bring personality, inspiration and utility to professional spaces.",
    selections: [
      { categorySlug: "metal-table-decor", indexes: [0, 3, 4, 5, 6, 9, 11] },
      { categorySlug: "polyresin-decor", indexes: [0, 2, 3, 6, 8, 9] },
      { categorySlug: "marble-decor", indexes: [0, 1, 6, 7] },
    ],
  },
  {
    slug: "living-room-decor",
    nameKey: "saffron.spaces.prayerRoom",
    description: "Statement wall pieces and sculptural accents selected to elevate modern living rooms.",
    selections: [
      { categorySlug: "metal-wall-decor", indexes: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12] },
      { categorySlug: "polyresin-decor", indexes: [0, 3, 4, 5, 6, 9] },
    ],
  },
  {
    slug: "divine-decor",
    nameKey: "saffron.spaces.workDesk",
    description: "Meaningful spiritual sculptures and devotional accents for serene, uplifting interiors.",
    selections: [
      { categorySlug: "polyresin-decor", indexes: [1, 3, 5, 8] },
      { categorySlug: "metal-wall-decor", indexes: [0, 1, 4, 7, 10] },
      { categorySlug: "metal-table-decor", indexes: [3, 5, 8, 12] },
    ],
  },
].map(({ selections, ...collection }) => ({
  ...collection,
  products: collectProducts(selections),
}));

export const getSpaceCollection = (spaceSlug) =>
  spaceCollections.find((collection) => collection.slug === spaceSlug);
