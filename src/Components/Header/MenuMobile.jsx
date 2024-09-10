import { memo } from "react";
import { IoIosClose } from "react-icons/io";
import DesertSafariDubal from "./DesertSafariDubal";
import GODESERTSAFARI from "./GODESERTSAFARI";
import { FaRegUser } from "react-icons/fa6";
import { CgShoppingCart } from "react-icons/cg";
import PropTypes from "prop-types";

function MenuMobile({ isOpen, setIsOpen }) {
  return (
    <div className="bg-gray-800 w-full h-full">
      <div className="flex flex-col p-3 text-slate-300">
        <div className="flex justify-end text-4xl cursor-pointer">
          <IoIosClose onClick={() => setIsOpen(!isOpen)} />
        </div>
        <div className="flex justify-center items-center gap-2 text-[22px] py-4">
          <FaRegUser />
          <CgShoppingCart />
          <span>$00 </span>
        </div>
        <div>
          <ul className="flex flex-col justify-center gap-3 text-[16px] font-medium">
            <li className="border-b border-neutral-500 pb-2">
              <a href="" className="uppercase hover:text-mainColor">
                Home
              </a>
            </li>
            <li className="border-b border-neutral-500 pb-2">
              <a href="" className="uppercase hover:text-mainColor">
                <DesertSafariDubal />
              </a>
            </li>
            <li className="border-b border-neutral-500 pb-2">
              <a href="" className="uppercase hover:text-mainColor">
                <GODESERTSAFARI />
              </a>
            </li>
            <li className="border-b border-neutral-500 pb-2">
              <a href="" className="uppercase hover:text-mainColor">
                Gallery
              </a>
            </li>
            <li className="border-b border-neutral-500 pb-2">
              <a href="" className="uppercase hover:text-mainColor">
                Blog
              </a>
            </li>
            <li className="border-b border-neutral-500 pb-2">
              <a href="" className="uppercase hover:text-mainColor">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default memo(MenuMobile);

MenuMobile.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
