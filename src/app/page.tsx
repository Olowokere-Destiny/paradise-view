"use client";
import "./styles.css";
import { dancingScript, raleway } from "@/utils/fontExports";
import heroHouse from "../assets/landing-hero-house.png";
import Image from "next/image";
import FacilitiesCard from "@/components/landing-page/FacilitiesCard";
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

export default function Home() {
  // const currentUrl = new URL(window.location.href);
  // function appendQuery() {
  //   currentUrl.searchParams.set("type", "cars");
  //   currentUrl.searchParams.set("price", "20K");
  //   console.log(currentUrl.toString())
  // }
  // function getQuery() {
  //   const extract = currentUrl.searchParams.get("price");
  //   console.log(extract?.toString())
  // }

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
        </div>
        <Image
          src={heroHouse}
          width={150}
          height={100}
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
    </div>
  );
}
