import { memo } from "react";
import propTypes from "prop-types";

function Card({ image }) {
  return (
    <div className="relative my-6">
      <div className="relative">
        <img src={image} alt="image" className="w-full h-full" />
        <div className="flex justify-center text-xl items-center flex-col rounded-full bg-accentColor w-[90px] h-[90px] text-white absolute -right-2 -top-8">
          <p className="font-medium">10%</p>
          <p>Off</p>
        </div>
      </div>
      <div className="absolute left-0 bottom-[-90px]">
        <div className="w-[90%] m-auto bg-white p-[30px] text-center flex flex-col items-center gap-5 shadow-md">
          <h3 className="text-primaryColor text-xl font-bold">DESERT SAFARI WITH BBQ LUNCH DUBAI</h3>
          <p>
            Tour including pickup and drop off, camel riding, dune driving, sand
            boarding, quad biking, picture with Arabian Falcon, smoking sheesha,
            Arabic dress for pictures and BBQ lunch.
          </p>
          <a className="bg-accentColor py-3 px-4 transition-all duration-700 text-white font-normal cursor-pointer w-fit hover:bg-primaryColor">
            <span>Leran More</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(Card);

Card.propTypes = {
  image: propTypes.string.isRequired,
};
