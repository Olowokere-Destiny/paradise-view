"use client";
import { lora } from "@/utils/fontExports";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
interface Props {
  photoMainUrl: string;
  name: string;
  wishlistName: string;
  priceBreakdown: { grossPrice?: { value: number; currency: string } };
  reviewScore: number;
  reviewScoreCount: number;
  reviewScoreWord: string;
  id: number;
}
function SingleHotel({
  photoMainUrl,
  name,
  wishlistName,
  priceBreakdown,
  reviewScore,
  reviewScoreWord,
  reviewScoreCount,
  id,
}: Props) {
  const checkin = new URL(window?.location.href).searchParams.get(
    "checkin_date"
  );
  const checkout = new URL(window?.location.href).searchParams.get(
    "checkout_date"
  );
  const currency = new URL(window?.location.href).searchParams.get(
    "filter_by_currency"
  );
  const reviewScoreStyling = () => {
    if (Number(reviewScore) <= 3) {
      return "bg-red-100 text-red-400";
    } else if (Number(reviewScore) > 3 && Number(reviewScore) < 6) {
      return "bg-yellow-100 text-yellow-400";
    } else if (Number(reviewScore) >= 6) {
      return "bg-green-100 text-green-400";
    }
  };

  return (
    <div className="relative border border-gray-300 rounded-[0.3rem] p-4 hover:outline hover:outline-[3px] hover:outline-gray-200 outline-offset-1 hover:border-none">
      <div className="flex flex-col md:space-x-6 md:flex-row gap-y-3 md:gap-x-6 lg:justify-between lg:gap-x-3 ">
        {reviewScore ? (
          <div
            className={`${reviewScoreStyling()} absolute right-2 top-2 px-2 py-1 font-[700] text-[0.9rem] rounded-[0.3rem]`}
          >
            {reviewScore}
          </div>
        ) : null}
        <div className="md:w-[200px] h-[250px] md:h-[200px] overflow-hidden rounded-[8px] lg:w-[40%]">
          <Image
            src={photoMainUrl}
            width={150}
            height={100}
            alt="house"
            className="w-full rounded-[8px]"
          />
        </div>

        <div className="flex flex-col gap-y-1 lg:w-[60%]">
          <h2 className="font-[600] text-[1.2rem] text-brown overflow-auto">
            {name}
          </h2>
          <p className="text-gray-600 text-[0.8rem] font-[600] ">
            <span>{wishlistName}</span>
          </p>
          {reviewScoreWord && reviewScoreCount ? <p>This property is <b>{reviewScoreWord}</b> according to <b>{reviewScoreCount}</b> reviews </p> : null}
        </div>
      </div>
      <div className="flex justify-end mt-3">
        <h2
          className={`text-[1.2rem] font-[600] md:text-[1.4rem] text-orange-400 bg-orange-100 rounded-md p-2 w-max ${lora.className}`}
        >
          {priceBreakdown?.grossPrice?.currency}{" "}
          {priceBreakdown?.grossPrice?.value?.toFixed(0).toString()}
        </h2>
      </div>
      <div className="flex justify-center md:justify-end mt-3">
        <Link
          className="flex gap-x-2 items-center rounded-[0.8rem] text-[0.9rem] py-[0.6rem] px-7 lg:py-3 w-max bg-brown text-white font-[600]"
          href={`/hotels/${id.toString()}?checkin_date=${checkin}&checkout_date=${checkout}&locale=en-gb&currency=${currency}`}
        >
          <span>View</span>
          <span>
            <FaArrowRight className="text-white" />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default SingleHotel;
