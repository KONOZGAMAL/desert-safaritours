import { memo } from "react";
import bg from "../../assets/img17.jpg";
import image from "../../assets/SectionTwelve.jpg";

import { HiOutlineMailOpen } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";
import { BsMap } from "react-icons/bs";

function SectionTwelve() {
  return (
    <div
      className="relative bg-cover bg-center w-full pt-12"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="bg-primaryColor w-full z-50 mt-7">
        <div className="container flex items-center flex-col xl:flex-row gap-8 text-white py-4">
          <img src={image} alt="image" className="h-auto -translate-y-12" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 w-full">
            <div className="flex flex-col gap-2 text-center md:text-start">
            <div className="text-center md:text-start">
            <HiOutlineMailOpen className="text-6xl mb-3 inline-block" />
            </div>

              <a
                href="mailto:sales@desertsafaritours.com"
                className="cursor-pointer font-medium"
              >
                sales@desertsafaritours.com
              </a>
              <a
                href="mailto:info@desertsafaritours.com"
                className="cursor-pointer font-medium"
              >
                info@desertsafaritours.com
              </a>
            </div>
            <div className="flex flex-col gap-2 border-y md:border-y-0 border-x-0  md:border-x border-[#FFFFFF40] px-0 py-5 md:py-0 md:px-5 text-center md:text-start">
            <div className="text-center md:text-start">
            <LuPhoneCall className="text-6xl mb-3 inline-block" />
            </div>
              <a href="tel:+009 715 026 61837" className="cursor-pointer font-medium">
                009 715 026 61837
              </a>
              <a href="tel: 009 715 44757544" className="cursor-pointer font-medium">
                009 715 44757544
              </a>
              <a href="tel: 009 714 392 5739" className="cursor-pointer font-medium">
                009 714 392 5739
              </a>
            </div>
            <div className="flex flex-col gap-2 text-center md:text-start">
              <div className="text-center md:text-start">
                <BsMap className="text-6xl mb-3 inline-block" />
              </div>
              <a
                href="mailto:sales@desertsafaritours.com"
                className="cursor-pointer font-medium"
              >
                Office Number 307,
              </a>
              <a
                href="mailto:info@desertsafaritours.com"
                className="cursor-pointer font-medium"
              >
                Dusseldorf Business Point,
              </a>
              <a
                href="mailto:info@desertsafaritours.com"
                className="cursor-pointer font-medium"
              >
                Al Barsha 1, Dubai - UAE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(SectionTwelve);
