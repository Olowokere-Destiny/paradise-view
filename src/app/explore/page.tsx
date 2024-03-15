import Image from "next/image";
import heroImg from "../../assets/explore-hero-image.svg";
import { raleway } from "@/utils/fontExports";
import Section from "@/components/explore/Section";
import sectionRoom from "../../assets/section-room.svg";
import sectionGym from "../../assets/section-gym.svg";
import sectionBar from "../../assets/section-bar.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore - Paradise View",
  description: "Explore Paradise View",
};
function Explore() {
  return (
    <div>
      {/* Hero section */}
      <Image
        src={heroImg}
        unoptimized
        width={150}
        height={100}
        alt="house image"
        className="w-full"
      />

      <h2
        className={`text-[#1c1c1c] ${raleway.className} font-[600] text-[1.3rem] md:text-[2rem] lg:text-[2.3rem] text-center my-[1.5rem] md:my-8 lg:my-10`}
      >
        Take a tour
      </h2>
      <div className="px-[0.8rem] md:px-[3rem] lg:px-[5rem] flex flex-col gap-y-4 md:gap-y-8 lg:gap-y-10 mb-[5rem]">
        <Section
          image={sectionRoom}
          title="Luxurious rooms"
          text="The opulent luxury bedrooms in this gallery exhibit bespoke interior designs & decorating concepts. Explore images and discover your ideal luxury bedroom design. Lavish bedrooms that will ensure you never want to leave your room again. Explore more ideas about luxurious bedrooms, bedroom design."
        />
        <Section
          image={sectionGym}
          title="Gymnasia"
          text="Indulge in the epitome of fitness luxury with our meticulously designed gymnasia. Immerse yourself in a world of bespoke interior designs and cutting-edge decorating ideas that elevate your workout experience. Browse through a captivating gallery of images showcasing our custom fitness spaces, each tailored to inspire and motivate."
        />
        <Section
          image={sectionBar}
          title="Bar"
          text="Step into a world of refined indulgence at our sophisticated bar, where every detail is a testament to exquisite taste and design. Immerse yourself in an ambiance that seamlessly fuses elegance and conviviality. Our gallery presents a visual symphony of bespoke interior designs and enchanting decorating ideas, capturing the essence of our bar's allure."
        />
      </div>
    </div>
  );
}

export default Explore;
