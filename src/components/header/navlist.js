export const navlist = [
  { label: "men", path: "all-men" },
  { label: "women", path: "all-ladies" },
  { label: "accessories", path: "men-accessories,ladies-accessories" },
];

export const genClothingList = (label) => `/clothing/${label}`;

export const secondaryNavlist = (priamry) => [
  { label: "all items", path: `all-${priamry}` },
  { label: "shirts", path: `${priamry}-shirt` },
  { label: "shoes", path: `${priamry}-shoes` },
  { label: "accessories", path: `${priamry}-accessories` },
];
