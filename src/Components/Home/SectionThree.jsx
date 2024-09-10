import { memo } from "react";
import HeadLines from "../Globel/HeadLines/HeadLines";
import Card from "./Card";

function SectionThree() {
  return (
    <div className="bg-backGround">
    <div className="container py-[60px]">
      <div className="flex flex-col gap-5 my-5">
        <HeadLines
          title={"BEST LUXURY DESERT SAFARI IN DUBAI"}
          suptitle={"DUBAI SAFARI DESERT BEST OFFERS"}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-9 py-4">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        <div className="text-center my-3">
        <a className="bg-primaryColor text-[19px] transition-all duration-700 text-white py-3 px-4 font-normal cursor-pointer w-fit hover:bg-accentColor">
        VIEW ALL PACKAGES</a>
        </div>
        </div>
    </div>
    </div>
  );
}

export default memo(SectionThree);
