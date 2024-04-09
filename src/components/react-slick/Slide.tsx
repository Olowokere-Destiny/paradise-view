import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import Image from "next/image";

function Slide({ photos }: { photos: string[] }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="px-[0.8rem] md:px-[2.5rem] lg:px-[4.5rem] relative my-6">
      {photos?.map((photo, i, arr) => {
        return (
          <div
            key={photo}
            className="md:p-2 relative h-[230px] md:h-[250px] overflow-hidden"
          >
            <Image
              src={photo}
              width={200}
              height={200}
              alt="property image"
              unoptimized
              className="w-full mr-2 h-full object-cover rounded-md"
            />
            <div className="rounded-md px-2 absolute right-4 bottom-4 bg-black bg-opacity-40 text-white text-[0.9rem]">{i+1} / {arr.length}</div>
          </div>
        );
      })}
    </Slider>
  );
}

export default Slide;
