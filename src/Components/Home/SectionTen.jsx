import { memo } from "react";
import bg from "../../assets/roberto.jpg";
import { TiStarFullOutline } from "react-icons/ti";
import image_1 from "../../assets/img19.png";
// import image_2 from "../../assets/img22.png";
import image_3 from "../../assets/img23.png";
import image_4 from "../../assets/img21.png";

function SectionTen() {
  return (
    <div className="bg-backGround py-24">
      <div
        className="relative bg-fixed bg-cover bg-center w-full bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container">
          <div className="text-white bg-mainColor z-10 -translate-y-1/2">
           <div className="flex justify-evenly items-center py-4">
           <img src={image_1} alt="image_1"/>
           <img src={image_4} alt="image_4" className="hidden md:block"/>
           <img src={image_3} alt="image_3"/>
           </div>
          </div>
          <div className="flex justify-between items-center flex-wrap md:flex-nowrap gap-4 py-7">
            <div className="flex flex-col gap-8 text-white z-10 w-full">
              <h2 className="text-[28px] md:text-[45px] font-extrabold my-[10px] leading-[1.1em]">
                TESTIMONIALS
              </h2>
              <div>
                <p className="text-[16px] md:text-[18px] leading-[1.2em] font-extrabold pb-3">
                  Book Now with the Best Offers and Packages
                </p>
                <p className="text-white flex items-center gap-2 font-medium">
                  <span className="w-[60px] bg-accentColor h-[4px] sm:block hidden"></span>
                  SPEAK TO OUR CLIENT SUPPORT, NOW!
                </p>
              </div>
              <a className="bg-accentColor transition-all duration-700 text-white py-3 px-6 font-normal cursor-pointer w-fit hover:bg-primaryColor">
                <span>009 715 026 61837</span>
              </a>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 z-10 text-center text-white">
              <div className="flex">
                <span className="text-[#f0ad4e] text-[21px]">
                  <TiStarFullOutline />
                </span>
                <span className="text-[#f0ad4e] text-[21px]">
                  <TiStarFullOutline />
                </span>
                <span className="text-[#f0ad4e] text-[21px]">
                  <TiStarFullOutline />
                </span>
                <span className="text-[#f0ad4e] text-[21px]">
                  <TiStarFullOutline />
                </span>
              </div>
              <p>
                An amazing day and unique emotions once n a lifetime. I also
                recommend making optional experiences. The tour operator Dubai
                desert safari tours and tour guide service is exceptional.
                Highly recommended.
              </p>
              <p className="font-bold text-[20px]">--Sysubhash--</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(SectionTen);
