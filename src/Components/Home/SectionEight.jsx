import { memo } from "react";
import HeadLines from "../Globel/HeadLines/HeadLines";
import Card from "./SectionEight/Card";
import image_1 from "../../assets/8_1.jpg";
import image_2 from "../../assets/8_2.jpg";
import image_3 from "../../assets/8_3.jpg";


function SectionEight() {
  return (
    <div className="bg-backGround py-24">
      <div className="container">
        <HeadLines
          title={"ENJOY BEST DEALS IN DUBAI"}
          suptitle={"OUR TOP SELLING VIP PACKAGES"}
        />
        <p className="text-center pt-1 pb-3">
          Indulge in unparalleled luxury and exclusive experiences with our
          top-selling VIP packages, curated to fulfill your wildest safari
          dreams.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-9 py-4">
        <Card image={image_1}/>
        <Card image={image_2}/>
        <Card image={image_3}/>
        </div>
      </div>
    </div>
  );
}

export default memo(SectionEight);
