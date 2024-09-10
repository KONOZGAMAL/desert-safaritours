import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (

      <button
        className="
       flex items-center justify-center  h-12 w-12
         text-[#bababa] hover:bg-slate-300 hover:text-black transition-all duration-700
     "
        style={{ display: visible ? "" : "none" }}
        onClick={scrollToTop}
      >
        <MdKeyboardArrowUp className="size-[32px] font-bold" />
      </button>
  );
}
