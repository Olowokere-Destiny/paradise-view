import { FaAngleRight } from "react-icons/fa6";

interface SlideBtnProp {
  onClick?: () => void;
}
const NextArrow = ({ onClick }: SlideBtnProp) => {
  return (
    <FaAngleRight
      onClick={onClick}
      className="absolute right-[1.5rem] md:right-[4rem] lg:right-[6rem] top-[46%] z-[500] text-[1.5rem] cursor-pointer"
    />
  );
};
export default NextArrow;
