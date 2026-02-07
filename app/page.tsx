import Hero from "./Components/Hero/Hero";
import TopCategory from "./Components/TopCategory/TopCategory";
import TopElectricBrand from "./Components/TopElectricBrand/TopElectricBrand";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <Hero />
      <TopCategory />
      <TopElectricBrand />
    </div>
  );
}
