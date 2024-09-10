import { memo } from "react";
import { GoGift } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

function BESTPRICES() {
  return (
    <div className="flex flex-wrap xl:flex-nowrap gap-7">
      <div className="flex justify-center items-center gap-4 flex-col md:flex-row w-full">
        <div className="bg-primaryColor text-[34px] text-white p-4">
          <RiMoneyDollarCircleLine />
        </div>
        <div className="text-center md:text-start">
          <h3 className="text-secondaryColor text-[21px] mb-2  font-semibold">BEST PRICES EVER</h3>
          <p>
            From budget to premium, we have all options available at best rates
            for families
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 flex-col md:flex-row w-full">
        <div className="bg-primaryColor text-[34px] text-white p-4">
          <GoGift />
        </div>
        <div className="text-center md:text-start">
        <h3 className="text-secondaryColor text-[21px] mb-2  font-semibold">
        CUSTOM PACKAGES</h3>
        <p>
        From budget to premium, we have all options available at best rates for families
        </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 flex-col md:flex-row w-full">
        <div className="bg-primaryColor text-[34px] text-white p-4">
          <MdSupportAgent />
        </div>
        <div className="text-center md:text-start">
        <h3 className="text-secondaryColor text-[21px] mb-2  font-semibold">SATISFACTION ASSURANCE</h3>
        <p>
        Through your stay and safari, we keep your comfortable by all means
        </p>
        </div>
      </div>
    </div>
  );
}

export default memo(BESTPRICES);
