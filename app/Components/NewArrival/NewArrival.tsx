import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import n1 from "@/public/new/n1.png";
import n2 from "@/public/new/n2.png";
import n3 from "@/public/new/n3.png";

const NewArrival = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold pb-4 border-b-9 border-[#1163CF] w-max">
          New Arrival
        </h1>
        <div className="flex items-center gap-3">
          <ArrowLeft />
          <ArrowRight />
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-10">
        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="w-full">
            <Image
              className="w-full h-[450px] md:h-[650px]"
              src={n1.src}
              width={n1.width}
              height={50}
              alt="New Phone"
            />
          </div>
          <div className="w-full">
            <Image
              className="w-full h-[450px] md:h-[650px] "
              src={n2.src}
              width={n2.width}
              height={50}
              alt="New Phone"
            />
          </div>
        </div>
        <div>
          <Image
            className="w-full"
            src={n3.src}
            width={n3.width}
            height={n3.height}
            alt="New Phone"
          />
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
