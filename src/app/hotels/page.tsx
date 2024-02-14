"use client";
import { useEffect, useState } from "react";
import SingleHotel from "@/components/hotels/SingleHotel";
import { useGetHotelsQuery } from "@/redux/fetchData/service";
import getMoreHotels from "@/utils/getMoreHotels";
interface SingleHotelProps {
  city: string;
  max_photo_url: string;
  hotel_name: string;
  accommodation_type_name: string;
  distances: [{ text: string }];
  price_breakdown: { gross_price: number | string; currency: string };
  review_score: string | number;
  hotel_id: number | string;
  address: string;
}
function HotelsList() {
  const { search } = new URL(window?.location.href);
  const [page, setPage] = useState(0);
  const [hotelList, setHotelList] = useState<SingleHotelProps[]>([]);
  // function constructObject() {
  //   const searchParams = new URLSearchParams(window?.location.search);
  //   const queryParamsObject: { [key: string]: string } = {};
  //   for (const [key, value] of searchParams) {
  //     queryParamsObject[key] = value;
  //   }
  //   return queryParamsObject;
  // }
  // const parameters = constructObject();
  const { data: hotelsResult } = useGetHotelsQuery(search);
  useEffect(() => {
    setHotelList(hotelsResult?.result);
  }, [hotelsResult?.result]);

  function showMore() {
    setPage(page + 1);
    getMoreHotels(`${search}&page_number=${page.toString()}`).then((res) => {
      setHotelList((prev) => {
        return [...prev, ...res?.result];
      });
    });
  }

  return (
    <div>
      <div className="flex flex-col lg:grid grid-cols-2 lg:gap-4 gap-y-4 px-[0.8rem] md:px-[3rem] lg:px-[5rem] my-10">
        {hotelList?.map((hotel) => {
          return (
            <SingleHotel
              key={hotel.hotel_name + Math.random().toString()}
              city={hotel.city}
              max_photo_url={hotel.max_photo_url}
              hotel_name={hotel.hotel_name}
              address={hotel.address}
              accommodation_type_name={hotel.accommodation_type_name}
              distances={hotel.distances}
              price_breakdown={hotel.price_breakdown}
              review_score={hotel.review_score?.toString()}
              hotel_id={hotel.hotel_id.toString()}
            />
          );
        })}
        {hotelList && (
          <div className="flex justify-center sticky bottom-2 lg:col-span-2">
          <button
            className="rounded-[0.8rem] text-[0.9rem] py-[0.8rem] px-7 lg:py-4 bg-brown text-white my-4"
            onClick={() => showMore()}
          >
            Show more
          </button>
            </div>
        )}
      </div>
    </div>
  );
}

export default HotelsList;
