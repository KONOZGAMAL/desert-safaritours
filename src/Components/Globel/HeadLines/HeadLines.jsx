import { memo } from "react";
import PropTypes from "prop-types";

function HeadLines({title,suptitle}) {
  return (
    <div className="text-center">
      <p className="text-accentColor flex justify-center items-center gap-2 font-medium">
        <span className="w-[60px] bg-accentColor h-[4px] sm:block hidden"></span>
        {title}
      </p>
      <h2 className="text-secondaryColor text-[28px] md:text-[45px] font-extrabold my-[20px] leading-[1.1em]">
       {suptitle}
      </h2>
    </div>
  );
}

export default memo(HeadLines);

HeadLines.propTypes = {
    title: PropTypes.node, 
    suptitle: PropTypes.node,
  };
