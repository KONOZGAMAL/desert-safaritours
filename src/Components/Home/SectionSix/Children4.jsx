import { memo } from "react";

function Children4() {
  return (
    <div className="flex flex-col gap-3 p-4">
      <h3 className="font-bold text-xl">
        BUFFET MENU FOR BREAKFAST/LUNCH/DINNER
      </h3>
      <p className="text-[19px]">
        The food at the Desert Safari is fresh, locally sourced, and prepared to
        perfection by our on-site chefs. The chefs follow the latest safety
        regulations in the kitchen while preparing and serving food to our
        guests during the Desert Safari Dubai. The high quality of food that we
        serve is a factor that makes us stand out from the other service
        providers. Live cooking and demonstration of authentic Arabic cuisine
        combined with other international dishes encourage the participation of
        the guests taking the experience to a whole new level.
      </p>
      <ul className="flex flex-col gap-2 text-[18px] list-disc">
        <li>
          <span className="font-bold">Photography Opportunities:</span>
          Take pictures of the perfect moments and frame and etch them to your
          life to experience the moments over and over again.
        </li>
        <li>
          <span className="font-bold">Henna Design that You Love:</span>
          For those who love to have experts do henna designs on your hand, we
          have got the best henna designers for you for free.
        </li>
        <li>
          <span className="font-bold">
            Dinner, Breakfast, Arabian Delicacies:
          </span>
          We know how integral food to any desert safari. Hence, no matter where
          and when, we make it all a treat you will sure love.
        </li>
        <li>
          <span className="font-bold">Unlimited, Free Soft Drinks: </span>
          We know it’s a hot desert. Hence, we bring you free soft drinks, tea,
          coffee, and water to keep you hydrated and energized throughout the
          safari.
        </li>
        <li>
          <span className="font-bold">Exciting Desert Camel Rides: </span>
          No desert safari, at morning or evening, is complete without an
          exciting camel ride. Hence, all safaris come loaded with a camel ride.
        </li>
        <li>
          <span className="font-bold">Desert Adventures: </span>
          What’s more thrilling and exciting than a few desert adventure
          activities such as dune bashing, sand bugging, and 4WD desert ride? We
          got them all.
        </li>
        <li>
          <span className="font-bold">Live Entertainment, Unlimited:</span>
          We create the most unique experience for you with every desert safari
          pack you pick with unlimited entertainment programs.
        </li>
      </ul>
    </div>
  );
}

export default memo(Children4);
