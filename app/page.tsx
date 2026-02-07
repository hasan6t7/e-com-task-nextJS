import Hero from "./Components/Hero/Hero";
import TopCategory from "./Components/TopCategory/TopCategory";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <Hero />
      <TopCategory />
    </div>
  );
}
