import Image, { StaticImageData } from "next/image";
interface Props {
  icon: StaticImageData;
  text: string;
}

function FacilitiesCard({ icon, text }: Props) {
  return (
    <div className="bg-[#fafafa] rounded-[0.4rem] flex items-center flex-col py-10 md:py-[3rem] hover:scale-[103%] transition-all hover:shadow-sm">
      <Image
        src={icon}
        width={150}
        height={100}
        unoptimized
        alt=""
        className="w-[2.7rem] h-[2rem]"
      />
      <p className="whitespace-nowrap mt-3 text-brown font-[500]">{text}</p>
    </div>
  );
}

export default FacilitiesCard;
