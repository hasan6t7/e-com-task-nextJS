import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Phone from "@/public/cat/Category-CellPhone.png";
import Computer from "@/public/cat/Category-Computer.png";
import SmartWatch from "@/public/cat/Category-SmartWatch.png";
import Camera from "@/public/cat/Category-Camera.png";
import HeadPhone from "@/public/cat/Category-Headphone.png";
import Gaming from "@/public/cat/Category-Gamepad.png";

const TopCategory = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold pb-4 border-b-9 border-[#1163CF] w-max">
          Shop From <span className="text-[#1163CF] ">Top Category</span>
        </h1>
        <div className="flex items-center gap-3">
          <ArrowLeft />
          <ArrowRight />
        </div>
      </div>
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-7">
        <div className="bg-[#BDECF9] p-4 rounded border border-[#BDECF930] flex flex-col items-center justify-center">
          <Image src={Phone.src} width={60} height={60} alt="Phone" />
          <p className="mt-2 text-lg">Phones</p>
        </div>
        <div className="bg-[#F5C90A] p-4 rounded border border-[#F5C90A30] flex flex-col items-center justify-center">
          <Image src={Computer.src} width={60} height={60} alt="Computer" />
          <p className="mt-2 text-lg">Computers</p>
        </div>
        <div className="bg-[#CBFEB0] p-4 rounded border border-[#CBFEB030] flex flex-col items-center justify-center">
          <Image src={SmartWatch.src} width={60} height={60} alt="Smart Watches" />
          <p className="mt-2 text-lg">Smart Watches</p>
        </div>
        <div className="bg-[#91BEF8] p-4 rounded border border-[#91BEF830] flex flex-col items-center justify-center">
          <Image src={Camera.src} width={60} height={60} alt="Camera" />
          <p className="mt-2 text-lg">Camera</p>
        </div>
        <div className="bg-[#FF974C] p-4 rounded border border-[#FF974C30] flex flex-col items-center justify-center">
          <Image src={HeadPhone.src} width={60} height={60} alt="Headphones" />
          <p className="mt-2 text-lg">Headphones</p>
        </div>
        <div className="bg-[#F5B2FF] p-4 rounded border border-[#F5B2FF30] flex flex-col items-center justify-center">
          <Image src={Gaming.src} width={60} height={60} alt="Gamepad" />
          <p className="mt-2 text-lg">Gamepads</p>
        </div>
      </div>
    </div>
  );
};

export default TopCategory;
