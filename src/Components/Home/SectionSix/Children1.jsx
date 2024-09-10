import { memo } from "react";

function Children1() {
  return (
    <div className="p-4">
      <ul className="flex flex-col gap-2 text-[18px] list-disc">
        <li>
          <span className="font-bold" >Pickup: </span>
           You are picked up from the hotel/home/agreed common meet-up
          point.
        </li>
        <li>
        <span className="font-bold" >Refreshments: </span>
        To keep you energized, refreshments are provided.</li>
        <li>
        <span className="font-bold">Adventure Activities: </span>
           It is time for you to enjoy the adventure
          activities at the desert.
        </li>
        <li>
        <span className="font-bold">Camel riding: </span>
           Get onto camels and go for a desert safari unlike
          anything before.
        </li>
        <li>
        <span className="font-bold">Live Entertainment: </span>
           Relish enthralling entertainment activities
          throughout the night.
        </li>
        <li>
        <span className="font-bold"> Delicious Dinner: </span>
          Enjoy any type of cuisine that you prefer at the
          night stay.
        </li>
      </ul>
    </div>
  );
}

export default memo(Children1);
