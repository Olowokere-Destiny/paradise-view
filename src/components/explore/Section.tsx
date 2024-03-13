import React from "react";
import Image, { StaticImageData } from "next/image";
import { raleway } from "@/utils/fontExports";
interface Props {
    image: StaticImageData;
    title: string;
    text: string;
}
function Section({image, title, text}: Props) {
  return (
    <div className="flex flex-col">
      <div className="-z-50">
        <Image
          src={image}
          unoptimized
          width={150}
          height={100}
          alt="house image"
          className="w-full rounded-[1rem] md:rounded-[2rem]"
        />
      </div>
      <div className="bg-white rounded-[1rem] custom-shadow z-50 w-[90%] md:w-[75%] mx-auto p-4 -mt-7 md:-mt-12">
        <h2
          className={`text-center mb-4 text-brown ${raleway.className} font-[600] text-[1.2rem] md:text-[1.5rem]`}
        >
          {title}
        </h2>
        <p className={`text-center text-[0.9rem] ${raleway.className} font-[500]`}>
          {text}
        </p>
      </div>
    </div>
  );
}

export default Section;
