import { raleway } from "@/utils/fontExports";
import Image, { StaticImageData } from "next/image";

interface Props {
  img: StaticImageData;
  title: string;
  desc: string;
}
function RoomCard({ img, title, desc }: Props) {
  return (
    <div className="rounded-[0.6rem] px-[1.7rem] pt-[1.7rem] bg-white pb-[0.8rem] grow-0 shrink-0 w-full md:w-[48%] lg:w-[32%]">
      <div className="relative">
        <div className="absolute top-3 right-3 px-[0.4rem] py-1 rounded-[0.2rem] text-[0.9rem] font-[600] bg-brown text-white">
          {title}
        </div>
        <Image src={img} className="rounded-[0.32rem] w-full" alt="room" />
      </div>
      <p className={`${raleway.className} text-[1rem] font-[400] mt-[0.8rem]`}>
        {desc}
      </p>
    </div>
  );
}

export default RoomCard;
