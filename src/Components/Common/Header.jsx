import { memo, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";

import DesertSafariDubal from "../Header/DesertSafariDubal";
import GODESERTSAFARI from "../Header/GODESERTSAFARI";
import MenuMobile from "../Header/MenuMobile";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div className={`py-[5px] ${
      isTopOfPage ? "bg-transparent text-white " : "bg-white text-black"
    } transition sticky top-0 left-0 z-30 p-5`}>
        <div className="container flex items-center justify-between">
          <a className="text-2xl font-bold text-gray-800 w-[300px] pr-[50px] grow">
            <img
              src={logo}
              alt="logo"
              className="object-contain w-[180px] md:w-[230px]"
            />
          </a>
          <nav className="hidden xl:flex grow">
            <ul className="flex items-center gap-14 text-[17px] font-medium">
              <li>
                <a href="" className="uppercase hover:text-mainColor">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="uppercase hover:text-mainColor">
                  <DesertSafariDubal />
                </a>
              </li>
              <li>
                <a href="" className="uppercase hover:text-mainColor">
                  <GODESERTSAFARI />
                </a>
              </li>
              <li>
                <a href="" className="uppercase hover:text-mainColor">
                  Gallery
                </a>
              </li>
              <li>
                <a href="" className="uppercase hover:text-mainColor">
                  Blog
                </a>
              </li>
              <li>
                <a href="" className="uppercase hover:text-mainColor">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <div className="block xl:hidden">
            <AiOutlineMenu
              className="text-[25px] cursor-pointer text-mainColor"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          {isOpen && (
            <div className="fixed top-0 bottom-0 right-0 w-[250px] h-screen transition-all duration-700">
              <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default memo(Header);
