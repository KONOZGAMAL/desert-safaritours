import { memo } from "react";
import tripadvisor from "../../assets/tripadvisor2.jpg";

function SectionThirteen() {
  return (
    <div>
    <div className="container">
      <h2 className="text-[32px] md:text-[45px] text-secondaryColor font-bold leading-[1.1em] py-3">
        Evening Desert Safari with BBQ Dinner
      </h2> 
      </div>
      <div className="bg-backGround">
      <div className="container flex justify-between flex-wrap py-5 gap-4">
        <div className="flex flex-col gap-6">
          <h3 className="text-[20px] uppercase font-semibold">Call Us</h3>
          <div>
            <a
              href="tel:+009 715 026 61837"
              className="cursor-pointer font-medium block"
            >
              009 715 026 61837
            </a>
            <a
              href="tel: 009 715 44757544"
              className="cursor-pointer font-medium block"
            >
              009 715 44757544
            </a>
            <a
              href="tel: 009 714 392 5739"
              className="cursor-pointer font-medium block"
            >
              009 714 392 5739
            </a>
          </div>
          <h3 className="text-[20px] uppercase font-semibold">Email</h3>
          <a
            href="mailto:sales@desertsafaritours.com"
            className="cursor-pointer font-medium"
          >
            sales@desertsafaritours.com
          </a>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-[20px] uppercase font-semibold">Address</h3>
          <div className="flex flex-col gap-4 md:gap-7">
            <a href="#" className="cursor-pointer font-medium">
              Office Number 307,
            </a>
            <a
              href="mailto:info@desertsafaritours.com"
              className="cursor-pointer font-medium"
            >
              Dusseldorf Business Point,
            </a>
            <a
              href="mailto:info@desertsafaritours.com"
              className="cursor-pointer font-medium"
            >
              Al Barsha 1
            </a>
            <a
            href="mailto:info@desertsafaritours.com"
            className="cursor-pointer font-medium"
          >
          Dubai - United Arab Emirates
          </a>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-[20px] uppercase font-semibold">Quick Links</h3>
          <div className="flex flex-col gap-4 list-disc marker:text-mainColor">
          <li>
          <a href="#" className="cursor-pointer font-medium hover:underline">
          About Us
          </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer font-medium hover:underline">
              FAQ’s
            </a>
            </li>
            <li>
            <a href="#" className="cursor-pointer font-medium hover:underline">
              Privacy Policy
            </a>
            </li>
            <li>
            <a href="#" className="cursor-pointer font-medium hover:underline">
              Terms and Conditions
            </a>
            </li>
            <li>
            <a href="#" className="cursor-pointer font-medium hover:underline">
              Contact Us
            </a>
            </li>
          </div>
        </div>
        <div>
          <img src={tripadvisor} alt="tripadvisor" />
        </div>
      </div>
      </div>
    </div>
  );
}

export default memo(SectionThirteen);
