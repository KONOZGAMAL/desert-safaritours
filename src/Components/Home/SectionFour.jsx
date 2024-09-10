import { memo } from "react";
import modal from "../../assets/modal.jpg";

function SectionFour() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen">
      <div className="flex-1 md:flex-grow-0  md:translate-x-[5rem]">
        <div className="relative w-full h-full md:w-96 md:h-auto">
          <img
            className="w-full h-full object-cover"
            src={modal}
            alt="Safari Tours"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-8 h-8 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11.414v6.828a1 1 0 001.618.786l4-3.414a1 1 0 000-1.572l-4-3.414A1 1 0 009 6.586z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 p-20 text-white  bg-blue-500 h-full z-0">
      <p className="flex items-center gap-2 font-medium text-white">
      <span className="w-[60px] bg-white h-[4px] sm:block hidden"></span>
      CALLBACK FOR MORE
    </p>
    <h2 className="text-white text-[28px] md:text-[45px] font-extrabold my-[20px] leading-[1.1em]">
    GO TRAVEL. DISCOVER. REMEMBER US!! DESERT SAFARI TOURS
    </h2>
        <p className="text-md md:text-lg mb-6">
          Embark on an unforgettable journey of exploration, where every
          destination leaves an indelible mark on your soul.
        </p>

        {/* Stats */}
        <div className="flex space-x-4 mt-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold">4K+</h3>
            <p>Satisfied Clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">945+</h3>
            <p>TripAdvisor Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(SectionFour);
