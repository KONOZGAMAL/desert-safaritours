import { memo } from "react";
import { FaStar } from "react-icons/fa";
import bg from "../../assets/dubai-1.jpg";
import { IoLocationSharp } from "react-icons/io5";

function Card() {
  return (
    <div>
      <div className="bg-white">
        <div className="relative h-[300px]">
          <img
            src={bg}
            alt="logo"
            className="bg-cover bg-center w-full h-full"
          />
          <div className="bg-accentColor text-white w-fit absolute right-0 top-4">
            <p className="py-1 px-5">Discount Offer</p>
          </div>
          <div className="absolute bottom-[-20px] w-full">
            <div className="w-[80%] py-2 mx-auto bg-primaryColor text-white">
              <p className="flex justify-center items-center gap-3">
                <IoLocationSharp />
                Dubai
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center py-10">
          <h3 className="font-semibold text-2xl text-center">
            Evening Desert Safari tours with BBQ dinner
          </h3>
          <p className="flex gap-2 items-center">
            (25 reviews)
            <div className="flex text-accentColor">
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </p>
          <p>Exclusive cars with professional drivers</p>
          <a className="bg-accentColor  transition-all duration-700 text-white py-3 px-4 font-normal cursor-pointer w-fit hover:bg-primaryColor">
            <span>More Details</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(Card);
