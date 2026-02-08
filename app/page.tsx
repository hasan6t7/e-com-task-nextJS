import BestSellingProduct from "./Components/BestSelling/BestSellingProduct";
import Hero from "./Components/Hero/Hero";
import NewArrival from "./Components/NewArrival/NewArrival";
import ProductsPage from "./Components/Products/ProductsPage";
import TopCategory from "./Components/TopCategory/TopCategory";
import TopElectricBrand from "./Components/TopElectricBrand/TopElectricBrand";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <Hero />
      <TopCategory />
      <TopElectricBrand />
      <BestSellingProduct />
      <NewArrival />
      <ProductsPage />
    </div>
  );
}
