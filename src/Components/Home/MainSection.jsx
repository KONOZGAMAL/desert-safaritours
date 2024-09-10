import { memo } from "react";
import bg from "../../assets/bg.jpg"
import { FaSuitcaseRolling } from "react-icons/fa6";

function MainSection() {
  return (
    <div style={{height:"calc(100vh - 60px)"}}>
    <div className="absolute top-0 w-full z-[-1]">
    <div className="relative h-screen bg-cover bg-center w-full" style={{ backgroundImage:`url('${bg}')` }}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="container relative z-10 flex flex-col justify-center h-full text-white gap-2">
    <h1 className="text-4xl md:text-8xl font-bold pt-4">DESERT SAFARI TOURS DUBAI</h1>
      <p className="mt-4 text-[16px] text-red-500">ADRENALINE, AMBIANCE AND LEISURE - DUBAI IS REALLY A DREAM TOURS DESTINATION</p>
       <div className="flex justify-center items-center gap-2 w-fit">
       <span className="text-[32px]">.</span>
       <span className="text-[32px]">.</span>
       <span className="text-[32px]">.</span>
       <span className="text-[32px]">.</span>
       <FaSuitcaseRolling className="mt-4 text-[22px]"/>
       <span className="text-[32px]">.</span>
       <span className="text-[32px]">.</span>
       <span className="text-[32px]">.</span>
       <span className="text-[32px]">.</span>
       </div>
      <button className="mt-4 px-8 py-4 bg-blue-500 text-white font-semibold hover:bg-blue-600 transition w-fit">BOOK NOW</button>
    </div>
  </div>
    </div>
    </div>
  );
}

export default memo(MainSection);
