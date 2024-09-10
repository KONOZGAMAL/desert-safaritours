import { memo } from "react";

function Children2() {
  return (
    <div className="flex flex-col gap-3 p-4">
    <h3 className="font-bold text-xl">WHAT OUR SAFARI PACKAGES INCLUDE</h3>
    <p className="text-[19px]">In our efforts to make experience the best and more exciting for you, each type of desert safaris is packed with enthralling, wondrous, and exciting itineraries that you will love:</p>
      <ul className="flex flex-col gap-2 text-[18px] list-disc">
        <li>
          <span className="font-bold" >Photography Opportunities:</span>
          Take pictures of the perfect moments and frame and etch them to your life to experience the moments over and over again.
        </li>
        <li>
        <span className="font-bold" >Henna Design that You Love:</span>
        For those who love to have experts do henna designs on your hand, we have got the best henna designers for you for free.</li>
        <li>
        <span className="font-bold">Dinner, Breakfast, Arabian Delicacies:</span>
        We know how integral food to any desert safari. Hence, no matter where and when, we make it all a treat you will sure love.
        </li>
        <li>
        <span className="font-bold">Unlimited, Free Soft Drinks: </span>
        We know it’s a hot desert. Hence, we bring you free soft drinks, tea, coffee, and water to keep you hydrated and energized throughout the safari.
        </li>
        <li>
        <span className="font-bold">Exciting Desert Camel Rides: </span>
        No desert safari, at morning or evening, is complete without an exciting camel ride. Hence, all safaris come loaded with a camel ride.
        </li>
        <li>
        <span className="font-bold">Desert Adventures: </span>
        What’s more thrilling and exciting than a few desert adventure activities such as dune bashing, sand bugging, and 4WD desert ride? We got them all.
        </li>
        <li>
        <span className="font-bold">Live Entertainment, Unlimited:</span>
        We create the most unique experience for you with every desert safari pack you pick with unlimited entertainment programs.
        </li>
      </ul>
    </div>
  );
}

export default memo(Children2);
