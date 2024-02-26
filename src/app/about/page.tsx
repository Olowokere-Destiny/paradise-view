import Image from "next/image";
import "./style.css";
import { raleway } from "@/utils/fontExports";
import ceo from "../../assets/ceo.svg";
import nnpc from "../../assets/nnpc.svg";
import cbn from "../../assets/cbn.svg";
import ncc from "../../assets/ncc.svg";
import unicef from "../../assets/unicef.svg";
import nirsal from "../../assets/nirsal.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Paradise View",
};

function About() {
  return (
    <div>
      <div className="hero-bg-img flex flex-col gap-y-4 md:gap-y-6 items-center justify-center text-white">
        <h2
          className={`text-[1.5rem] md:text-[2rem] font-[700] ${raleway.className}`}
        >
          About Us
        </h2>
        <p className="w-5/6 md:w-1/2 text-center text-[0.9rem] md:text-[1.1rem]">
          The elegant luxury bedrooms in this gallery showcase custom interior
          designs & decorating ideas. View pictures and find your perfect luxury
          bedroom design.
        </p>
      </div>

      <div className="my-10 px-[0.8rem] md:px-[3rem] lg:px-[5rem]">
        <div>
          <p className="text-[1rem] md:text-[1.1rem]">
            Welcome to Paradise View, where your dream getaway begins. At
            Paradise View, we&apos;re more than just a hotel booking platform –
            we&apos;re your passport to unforgettable experiences. Our mission
            is to transform your travel aspirations into reality, offering a
            curated selection of exquisite accommodations tailored to your
            preferences. Whether you seek a beachfront retreat, a cozy mountain
            hideaway, or a bustling urban escape, Paradise View has the perfect
            stay for every traveler. We pride ourselves on seamless booking
            experiences, ensuring that your journey from reservation to
            check-out is as enjoyable as your stay. With a commitment to
            excellence, personalized service, and a passion for wanderlust,
            Paradise View is not just a booking platform; it&apos;s the key to
            unlocking the door to your next extraordinary adventure.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start xlg:items-center gap-y-6 justify-between mt-10">
          <div className="w-[80%] md:w-[40%] lg:w-[30%]">
            <Image
              src={ceo}
              width={150}
              height={100}
              alt="ceo picture"
              className="w-full"
            />
            <p className="font-semibold text-[1.3rem] text-center mt-2">
              Chidinma James (CEO)
            </p>
          </div>

          <p className="md:w-1/2 text-[1rem] md:text-[1.1rem]">
            Meet Chidinma Jones, the visionary CEO at the helm of innovation and
            leadership. With a keen eye for strategic business development,
            Chidinma has led our company with unwavering determination and a
            commitment to excellence. Under her guidance, we&apos;ve seen
            unprecedented growth and success, fueled by a passion for fostering
            a collaborative and inclusive work culture. Chidinma Jones is not
            just a leader; she&apos;s a driving force, steering the company
            towards new heights of achievement and setting a standard for
            success in the industry.
          </p>
        </div>
      </div>

      <div className="my-10">
        <h2
          className={`text-center font-[600] text-[1.5rem] md:text-[1.8rem] ${raleway.className}`}
        >
          Clients
        </h2>
        <div className="my-6 flex px-[0.8rem] md:px-0 justify-between md:justify-center md:gap-x-10 lg:gap-x-[3rem] items-center">
          <Image
            src={nnpc}
            width={150}
            height={100}
            alt="logo"
            className="w-[3rem] md:w-[4.5rem]"
          />
          <Image
            src={cbn}
            width={150}
            height={100}
            alt="logo"
            className="w-[3rem] md:w-[4.5rem]"
          />
          <Image
            src={ncc}
            width={150}
            height={100}
            alt="logo"
            className="w-[3rem] md:w-[4.5rem]"
          />
          <Image
            src={unicef}
            width={150}
            height={100}
            alt="logo"
            className="w-[3rem] md:w-[4.5rem]"
          />
          <Image
            src={nirsal}
            width={150}
            height={100}
            alt="logo"
            className="w-[3rem] md:w-[4.5rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
