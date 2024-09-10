import { memo } from "react";
import HeadLines from "../Globel/HeadLines/HeadLines";
import image_1 from "../../assets/9_1.webp";
import image_2 from "../../assets/9_2.jpg";
import image_3 from "../../assets/9_3.jpg";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

function SectionNine() {
  return (
    <div className="bg-backGround py-24">
      <div className="container">
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="pr-0 md:pr-4">
            <HeadLines
              title={"OUR TOUR GALLERY"}
              suptitle={"BEST TRAVELER'S SHARED PHOTOS"}
            />
            <div className="flex flex-col gap-3">
            <p>Check Our YouTube Channel and Facebook For Photos.</p>
            <p>We are regularly sharing new photos and videos.</p>
            <div className="flex justify-center items-center gap-3">
              <a href="" className="text-2xl p-3 bg-[#3b5998] text-white rounded-md">
                <IoLogoFacebook />
              </a>
              <a href="" className="text-2xl p-3 text-white bg-[#262626] rounded-md">
                <FaInstagram />
              </a>
              <a href="" className="text-2xl p-3 text-white bg-[#cd201f] rounded-md">
                <FiYoutube />
              </a>
            </div>
            <img
              src={image_2}
              alt="image_2"
               className="w-full h-auto object-contain"
            />
            </div>
          </div>
        
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src={image_1}
                alt="image_1"
                className="w-full h-auto object-contain"
              />
              <img
                src={image_2}
                alt="image_2"
                className="w-full h-auto object-cover"
              />
            </div>
            <img
              src={image_3}
              alt="image_3"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(SectionNine);
