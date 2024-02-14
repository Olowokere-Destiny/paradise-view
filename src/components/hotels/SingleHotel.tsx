import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  address: string;
  city: string;
  max_photo_url: string;
  hotel_name: string;
  accommodation_type_name: string;
  distances: [{ text: string }];
  price_breakdown: { gross_price: number | string; currency: string };
  review_score: string | number;
  hotel_id: string | number;
}
function SingleHotel({
  city,
  max_photo_url,
  hotel_name,
  address,
  accommodation_type_name,
  distances,
  price_breakdown,
  review_score,
  hotel_id,
}: Props) {
  return (
    <div className="relative border border-gray-300 rounded-[0.3rem] p-4 hover:outline hover:outline-[3px] hover:outline-gray-300 outline-offset-1 hover:border-none">
      <div className="flex flex-col md:space-x-6 md:flex-row gap-y-3 md:gap-x-6 lg:justify-between lg:gap-x-3 ">
        {review_score ? (
          <div className="bg-brown absolute right-2 top-2 px-2 py-1 text-white font-[700] text-[0.9rem] rounded-[0.3rem]">
            {review_score}
          </div>
        ) : null}
        <div className="md:w-[200px] h-[250px] md:h-[200px] overflow-hidden rounded-[8px] lg:w-[40%]">
          <Image
            src={max_photo_url}
            width={150}
            height={100}
            alt="house"
            className="w-full rounded-[8px]"
          />
        </div>

        <div className="flex flex-col gap-y-1 lg:w-[60%]">
          <p className="text-blue-300 text-[0.8rem] md:text-[1rem]">
            {accommodation_type_name}
          </p>
          <h2 className="font-[600] text-[1.2rem] text-brown overflow-auto">
            {hotel_name}
          </h2>
          <p className="text-gray-600 text-[0.8rem] font-[600] ">
            <span>{city}</span> . <span>{distances[0].text}</span>
          </p>
          <p className="text-gray-600 text-[0.8rem]">{address}</p>
        </div>
      </div>
      <div className="flex justify-end mt-3">
        <h2 className="text-[1.2rem] font-[600] md:text-[1.4rem] text-gray-950 bg-gray-300 rounded-md p-2 w-max">
          {price_breakdown.currency} {price_breakdown.gross_price}
        </h2>
      </div>
      <div className="flex justify-center md:justify-end mt-3">
        <Link
          className="rounded-[0.8rem] text-[0.9rem] py-[0.65rem] px-7 lg:py-4 w-max bg-brown text-white font-[600]"
          href={`/hotel/${hotel_id}`}
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default SingleHotel;
