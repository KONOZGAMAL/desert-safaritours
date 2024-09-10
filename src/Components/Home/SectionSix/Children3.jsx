import { memo } from "react";

function Children3() {
  return (
    <div className="p-4">
      <ul className="flex flex-col gap-2 text-[18px] list-disc">
        <li>
          <span className="font-bold" >Pick Up Time: </span>
          03.00 PM to 03.30 PM
        </li>
        <li>
        <span className="font-bold" >Arrival at Dubai Desert: </span>
        04.15 PM to 04.30 PM</li>
        <li>
        <span className="font-bold">Desert Dune driving : </span>
        04.30 PM to 05.15 PM
        </li>
        <li>
        <span className="font-bold">Desert Sunset Photography: </span>
        05.15 PM to 05.45 PM
        </li>
        <li>
        <span className="font-bold">Arriving Bedouin style Desert Camp: </span>
        06.00 PM to 06.20 PM
        </li>
        <li>
        <span className="font-bold">Desert BBQ Dinner:  </span>
        07.00 AM to 07.30 PM
        </li>
        <li>
        <span className="font-bold">Live Show: </span>
        07.30PM to 08.30 PM
        </li>
        <li>
        <span className="font-bold">Drop Off Time: </span>
        09.00 PM to 09.30 PM
        </li>
        <li>
        <span className="font-bold">Total Duration: </span>
      06.00 Hrs to 07.00 Hrs
        </li>
      </ul>
    </div>
  );
}

export default memo(Children3);
