import { FaAngleLeft } from "react-icons/fa6";

interface SlideBtnProp {
  onClick?: () => void;
}
const PrevArrow = ({ onClick }: SlideBtnProp) => {
  return (
    <FaAngleLeft
      onClick={onClick}
      className="absolute left-[1.5rem] md:left-[4rem] lg:left-[6rem] top-[46%] z-[500] text-[1.5rem] cursor-pointer bg-black bg-opacity-30 text-white p-1 rounded-[3px]"
    />
  );
};
export default PrevArrow;
