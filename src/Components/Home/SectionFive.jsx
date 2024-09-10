import { memo } from "react";
import HeadLines from "../Globel/HeadLines/HeadLines";
import DUNES from "../../assets/img024.png";
import chicken from "../../assets/chicken-2.png";
import camel from "../../assets/camel-3.png";

function SectionFive() {
  return (
    <div className="bg-backGround">
      <div className="container py-[60px]">
        <HeadLines
          title={"CHECK OUR DETAILED TOUR DETAILS"}
          suptitle={"PACKAGE OVER VIEW"}
        />
        <p className="text-center py-5">
          Plunge into the countless activities – Take away memories for a
          lifetime. Dubai Desert Safari – Excitement Unlimited
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 py-4">
          <div className="flex flex-col justify-center items-center border text-center gap-4 p-4">
            <img src={DUNES} alt="logo" className="cursor-pointer"/>
            <p className="font-medium">BASH THE DUNES WITH ALL MIGHT</p>
          </div>
          <div className="flex flex-col justify-center items-center border text-center gap-4 p-4">
            <img src={chicken} alt="logo" className="cursor-pointer"/>
            <p className="font-medium">MOUTH-LICKING MULTI-CUISNES</p>
          </div>
          <div className="flex flex-col justify-center items-center border text-center gap-4 p-4" >
            <img src={camel} alt="logo" className="cursor-pointer"/>
            <p className="font-medium">RIDE ON THE SHIP OF DESERTS</p>
          </div>
          <div className="flex flex-col justify-center items-center border text-center gap-4 p-4">
            <img src={DUNES} alt="logo" className="cursor-pointer"/>
            <p className="font-medium">FEEL THE GIANT ON YOUR HANDS</p>
          </div>
          <div className="flex flex-col justify-center items-center border text-center gap-3 p-4">
            <img src={chicken} alt="logo" className="cursor-pointer"/>
            <p className="font-medium">BIKING AMID THE DESERTS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(SectionFive);
