import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import tv from "@/public/elec/tv.png"
import ipun from "@/public/elec/ipun.png"

const TopElectricBrand = () => {
  return (
    <div className="my-20">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold pb-3 border-b-6 border-[#1163CF] w-max">
          Top Electronics Brand
        </h1>
        <div className="flex items-center gap-3">
          <ArrowLeft />
          <ArrowRight />
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <div
          className="h-[217px] relative"
          style={{
            backgroundImage: `url("/elec/laptop-bg.png")`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-[#F5D51D] absolute left-12 text-2xl top-12">
            10% Off On <br />
            Hp series
          </h1>
        </div>
        <div className="bg-[#ffcaba] flex items-center">
            <h1 className="text-[#DA1919] text-2xl pl-5">10% Off On Apple Mackbook series</h1>
            <Image src={tv.src} width={tv.width} height={50} alt="TV" />

        </div>
        <div className="bg-[#fee3bf] flex items-center">
            <h1 className= "text-2xl pl-5">10% Off On Iphone series</h1>
            <Image src={ipun.src} width={ipun.width} height={50} alt="Ipun" />

        </div>
      </div>
    </div>
  );
};

export default TopElectricBrand;
