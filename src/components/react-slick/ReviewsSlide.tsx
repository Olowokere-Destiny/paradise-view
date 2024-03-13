"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import reviews from "@/utils/reviews";
import johnDoe from "/src/assets/john_doe.png";
import janeSmith from "/src/assets/jane_smith.png";
import alexJohnson from "/src/assets/alex_johnson.png";
import emilyWhite from "/src/assets/emily_white.png";
import michaelBrown from "/src/assets/michael_brown.png";

function ReviewsSlide() {
  const photos = [johnDoe, janeSmith, alexJohnson, emilyWhite, michaelBrown];
  const settings = {
    dots: true,
    infinite: false,
    autoScroll: true,
    speed: 500,
    arrows: false,
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
    <Slider {...settings} className="mt-4 md:mt-6">
      {reviews.map((review, i) => {
        return (
          <div key={i} className="md:p-2 relative">
            <div className="bg-slate-100 p-4 rounded-lg h-[150px] custom-height">
              <p className="italic text-[0.8rem] font-semibold">
                &quot;{review.review}&quot;
              </p>
              <div className="absolute flex items-center gap-x-2 right-4 bottom-4 text-right text-[0.8rem] font-bold">
                <p>-{review.name}</p>
                <Image
                  src={photos[i]}
                  alt="user"
                  unoptimized
                  width={100}
                  height={100}
                  className="rounded-full w-7 h-7"
                />
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

export default ReviewsSlide;
