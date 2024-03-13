import "./styles.css";
import { dancingScript, raleway } from "@/utils/fontExports";
import heroHouse from "../assets/landing-hero-house.png";
import Image from "next/image";
import FacilitiesCard from "@/components/landing-page/FacilitiesCard";
import bag from "../assets/baggage.jpg";
import swimmingIcon from "../assets/swimming-svg.svg";
import wifiIcon from "../assets/wifi-svg.svg";
import breakfastIcon from "../assets/chicken-svg.svg";
import washerIcon from "../assets/washer-svg.svg";
import gymbarIcon from "../assets/gym-weight-svg.svg";
import parkingIcon from "../assets/parking-space-svg.svg";
import gamepadIcon from "../assets/gamepad-svg.svg";
import lightbulbIcon from "../assets/lightbulb-svg.svg";
import RoomCard from "@/components/landing-page/RoomCard";
import singleBed from "../assets/single-bed.png";
import doubleBed from "../assets/double-bed.png";
import doubleBedLuxury from "../assets/double-bed-luxury.png";
import BookingBox from "@/components/landing-page/BookingBox";
import { Metadata } from "next";
import ReviewsSlide from "@/components/react-slick/ReviewsSlide";


export const metadata: Metadata = {
  title: "Home",
  description: "Paradise View booking home page",
};

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <div className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between px-[0.8rem] md:px-[3rem] lg:px-[5rem]">
        <div className="md:w-1/2 md:flex md:flex-col">
          <h2
            className={`${dancingScript.className} text-brown text-[1.8rem] md:text-[2.8rem]`}
          >
            Paradise View
          </h2>
          <h2
            className={`${raleway.className} text-[#1c1c1c] font-[600] md:font-[700] text-[1.7rem] md:text-[2.8rem] xlg:text-[3.2rem] mt-4`}
          >
            Hotels for every moment rich in emotion
          </h2>
          <p
            className={`${raleway.className} text-[#1c1c1c] text-[1rem] lg:text-[1.3rem] font-[500] mt-[0.7rem] lg:mt-4`}
          >
            Every moment feels like the first time
            <br className="hidden md:block" /> in the hotels we offer.
          </p>
          <p
            className={`${raleway.className} text-[#1c1c1c] text-[1rem] lg:text-[1.3rem] font-[500] mt-[0.7rem] lg:mt-4`}
          >
            Search for a location of your choice below and see available hotels,
            apartments and more.
          </p>
        </div>
        <Image
          src={heroHouse}
          width={150}
          height={100}
          unoptimized
          alt="house"
          className="rounded-[0.3rem] md:rounded-none w-full md:w-[47%]"
        />
      </div>

      <BookingBox />

      <div className="mt-[3rem]">
        <h2 className="text-center text-[1.7rem] md:text-[2.3rem] font-[500] ">
          Hotel Facilities
        </h2>
        <p className="w-[70vw] md:w-full mx-auto text-center text-[1rem] font-[500] mt-3 ">
          Our hotels offer modern (5 star) hotel facilities for your comfort.
        </p>
        <div className="mt-[3rem] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2rem] md:gap-[3.4rem] px-[0.8rem] md:px-[3rem] lg:px-[5rem] ">
          <FacilitiesCard icon={swimmingIcon} text="Swimming pool" />
          <FacilitiesCard icon={wifiIcon} text="Wifi" />
          <FacilitiesCard icon={breakfastIcon} text="Breakfast" />
          <FacilitiesCard icon={gymbarIcon} text="Gym" />
          <FacilitiesCard icon={gamepadIcon} text="Game center" />
          <FacilitiesCard icon={lightbulbIcon} text="24/7 light" />
          <FacilitiesCard icon={washerIcon} text="Laundry" />
          <FacilitiesCard icon={parkingIcon} text="Parking space" />
        </div>
      </div>

      <div className="mt-[5rem] rooms-section px-[0.8rem] md:px-[3rem] lg:px-[5rem] ">
        <h2
          className={`${raleway.className} text-center text-[1.5rem] md:text-[2.3rem] lg:text-[2.7rem] text-white`}
        >
          Luxurious Rooms
        </h2>
        <div className="bg-white h-1 w-[8rem] mx-auto my-4"></div>
        <p
          className={`text-center text-white font-[500] ${raleway.className} text-[1rem]`}
        >
          All rooms are designed for your comfort
        </p>
        <div className="flex flex-col md:flex-row overflow-auto gap-4 mt-8 md:mt-[4rem] pb-[3rem]">
          <RoomCard
            img={singleBed}
            desc="Television set, Extra sheets and Breakfast"
            title="Single Bed"
          />
          <RoomCard
            img={doubleBed}
            desc="Television set, Extra sheets, Breakfast, and fireplace"
            title="Double bed"
          />
          <RoomCard
            img={doubleBedLuxury}
            desc="Television set, Extra sheets, Breakfast, and fireplace, Console and bed rest"
            title="Double bed luxury"
          />
        </div>
      </div>

      <div className="world-bg px-[0.8rem] md:px-0 md:pl-[3rem] lg:px-0 lg:pl-[5rem] flex flex-col md:flex-row items-center gap-x-8 gap-y-4 justify-between my-10">
        <div className="md:w-1/2 flex flex-col gap-y-2">
          <h1 className="font-[700] text-[2.3rem] lg:text-[3.2rem] gradient-text ">
            Find your next adventure!
          </h1>
          <p className="text-[1.1rem] md:text-[1.4rem] lg:text-[1.8rem] font-[600] ">
            You love travelling? Yes? You can find hotels, apartments and
            attractions from any location around the globe!{" "}
          </p>
        </div>
        <div className="md:w-1/2 self-stretch">
          <Image
            src={bag}
            width={150}
            height={100}
            alt="bag"
            unoptimized
            className="w-full"
          />
        </div>
      </div>

      {/* Remarks section */}
      <div className="my-8 md:my-12">
        <div className="flex justify-center items-center gap-x-1">
          <div className="bg-brown rounded-md w-1 h-[1.2rem] md:h-[1.4rem]"></div>
          <h1
            className={`${raleway.className} font-[600] text-[1.2rem] md:text-[1.4rem]`}
          >
            User reviews
          </h1>
          <div className="bg-brown rounded-md w-1 h-[1.2rem] md:h-[1.4rem]"></div>
        </div>
        <div className="px-[0.8rem] md:px-[3rem] lg:px-[5rem] remarks-bg">
          <ReviewsSlide />
        </div>
      </div>
    </div>
  );
}
