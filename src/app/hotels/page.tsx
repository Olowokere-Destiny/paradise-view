"use client";
import { useEffect, useState } from "react";
import SingleHotel from "@/components/hotels/SingleHotel";
import { useGetHotelsQuery } from "@/redux/fetchData/service";
import getMoreHotels from "@/utils/getMoreHotels";
interface SingleHotelProps {
  city: string;
  photoMainUrl: string;
  name: string;
  wishlistName: string;
  priceBreakdown: { grossPrice: {value: number, currency: string} };
  reviewScore: number;
  reviewScoreWord: string;
  reviewScoreCount: number;
  id: number;
}
function HotelsList() {
  const { search } = new URL(window?.location.href);
  const [page, setPage] = useState(0);
  const [hotelList, setHotelList] = useState<SingleHotelProps[]>([]);

  const { data: hotelsResult } = useGetHotelsQuery(search);
  useEffect(() => {
    setHotelList(hotelsResult?.results);
  }, [hotelsResult?.results]);

  function showMore() {
    setPage(page + 1);
    getMoreHotels(`${search}&page_number=${page.toString()}`).then((res) => {
      setHotelList((prev) => {
        return [...prev, ...res?.results];
      });
    });
  }

  return (
    <div>
      <div className="flex flex-col lg:grid grid-cols-2 lg:gap-4 gap-y-4 px-[0.8rem] md:px-[3rem] lg:px-[5rem] my-10">
        {hotelList?.map((hotel) => {
          return (
            <SingleHotel
              key={hotel.name + Math.random().toString()}
              reviewScoreCount={hotel.reviewScoreCount}
              reviewScoreWord={hotel.reviewScoreWord}
              photoMainUrl={hotel.photoMainUrl}
              name={hotel.name}
              wishlistName={hotel.wishlistName}
              priceBreakdown={hotel.priceBreakdown}
              reviewScore={hotel.reviewScore}
              id={hotel.id}
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
