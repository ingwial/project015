const categories = [
  {
    code: 1,
    name: "microprocessors",
  },
  {
    code: 2,
    name: "mainboards",
  },
];

const subcategories = [
  {
    code: 1,
    categoryCode: 1,
    name: "Intel Core I5",
    price: 1000,
  },
  {
    code: 2,
    categoryCode: 1,
    name: "Intel Core I7",
    price: 2000,
  },
  {
    code: 3,
    categoryCode: 2,
    name: "Mainboard Asrock",
    price: 2000,
  },
];

export { categories };
export { subcategories };
