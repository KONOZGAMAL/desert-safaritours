import { memo } from "react";
import ScrollTop from "../ScrollTop/ScrollTop";

function Footer() {
  return (
    <div className="w-full bg-black">
      <div className="container py-5">
        <div className="flex justify-center text-center gap-4 items-center flex-col-reverse md:flex-row md:justify-between
         h-full flex-wrap">
        <div className="text-[#bababa]">
          <p>
            © Desert Safari Tours 2022 Designed and Developed by
            desertsafaritours.com{" "}
          </p>
        </div>
        <ScrollTop/>
      </div>
    </div>
    </div>
  );
}

export default memo(Footer);
