import React from "react";
import { categories } from "@/lib/helper";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="flex">
      <aside className="w-60 pl-3 pt-2 hidden md:block">
        <div className="flex flex-col gap-3 text-lg font-semibold">
          {categories.map((cat, ind) => (
            <Link
              className="flex items-center justify-between"
              key={ind}
              href={cat.href}
            >
              {cat.name}
              {cat.hasSub && <ChevronRight />}
            </Link>
          ))}
        </div>
      </aside>
      <div className="flex-1">
        <Carousel className="">
          <CarouselContent>
            <CarouselItem>
              <div
                className="h-[220px] md:h-[350px] lg:h-[485px] bg-no-repeat bg-center bg-contain md:bg-cover relative"
                style={{
                  backgroundImage: `url("/banner.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h1 className="text-[#FF36BC] text-2xl md:text-5xl font-semibold text-center absolute left-6  lg:left-28 top-10 lg:top-28">
                  Up to 15% off <br /> Voucher
                </h1>
                <h4 className="absolute text-white text-xl md:text-3xl font-semibold top-28 md:top-40 lg:top-56  left-6 lg:left-28">
                  On all types of products
                </h4>
                <div>
                  <Button className="bg-[#220AF5] text-sm font-normal absolute top-40 left-6 lg:left-32 md:top-64 lg:top-80">Shop Now</Button>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
