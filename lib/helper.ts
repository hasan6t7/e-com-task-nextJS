interface CatType {
  name: string;
  hasSub: boolean;
  href: string;
}
export const categories: CatType[] = [
  { name: "Woman’s Fashion", href: "/womens-fashion", hasSub: true },
  { name: "Men’s Fashion", href: "/mens-fashion", hasSub: true },
  { name: "Electronics", href: "/electronics", hasSub: false },
  { name: "Home & Lifestyle", href: "/home-lifestyle", hasSub: false },
  { name: "Medicine", href: "/medicine", hasSub: false },
  { name: "Sports & Outdoor", href: "/sports-outdoor", hasSub: false },
  { name: "Baby’s & Toys", href: "/babys-toys", hasSub: false },
  { name: "Groceries & Pets", href: "/groceries-pets", hasSub: false },
  { name: "Health & Beauty", href: "/health-beauty", hasSub: false },
];
