import { memo } from "react";
import BESTPRICES from "./BESTPRICES";
import HeadLines from "../Globel/HeadLines/HeadLines";

function SectionTwo() {
  return (
    <div className="container">
      <div className="flex flex-col gap-5 my-5">
        <HeadLines
          title={"THINGS TO DO IN DESERT SAFARI DUBAI"}
          suptitle={"DESERT SAFARI TOURS IN DUBAICREATE GREAT MEMORIES FOREVER"}
        />

        <div className="flex gap-9 md:gap-12 flex-wrap xl:flex-nowrap text-[15px]">
          <div className="flex flex-col gap-5">
            <p>
              #1: Are you excited to join back the fun of desert safari Tours in
              Dubai, again? We are! Dipped in the thrills of unlimited fun and
              excitement, we bring you the best of desert safari experiences in
              Dubai. Whether you crave a matchless experience of morning,
              evening, or overnight safari in Dubai, we have got you covered. We
              have been the most trusted Tour Operator in Dubai since 1998.
            </p>
            <p>
              #2: We providing the best Desert Safari Tours for 22 years and
              offer the most advanced and matchless selection of Adventure Tours
              and Safari in Dubai.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p>
              #3: We give you the perfect opportunity to experience and love the
              miracles that Arabian deserts have in store for you. With each
              desert safari experience, you can relish the thrills of a lifetime
              ride amidst the wonders that the Arabian deserts have stored for
              you.
            </p>
            <p>
              We have arranged a myriad of desert safari activities, adventure
              programs, and fun activities that you will never forget in your
              life. Once you enjoy the desert Tours that we offer, you will
              always yearn to come back for more.
            </p>
          </div>
        </div>
        <div className="mt-[30px]">
          <BESTPRICES />
        </div>
      </div>
    </div>
  );
}
export default memo(SectionTwo);
