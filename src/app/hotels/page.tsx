"use client";
import { useEffect, useState } from "react";
import SingleHotel from "@/components/hotels/SingleHotel";
import { useGetHotelsQuery } from "@/redux/fetchData/service";
import getMoreHotels from "@/utils/getMoreHotels";
import FullLoading from "@/components/loading/FullLoading";
interface SingleHotelProps {
  city: string;
  photoMainUrl: string;
  name: string;
  wishlistName: string;
  priceBreakdown: { grossPrice: { value: number; currency: string } };
  reviewScore: number;
  reviewScoreWord: string;
  reviewCount: number;
  checkoutDate: string;
  checkinDate: string;
  id: number;
}
function HotelsList() {
  const [search, setSearch] = useState<string>()
  useEffect(() => {
    const { search } = new URL(window?.location.href);
    setSearch(search)
  }, [])
  const [page, setPage] = useState(1);
  const [hotelList, setHotelList] = useState<SingleHotelProps[]>([]);
  const { data: hotelsResult, isLoading, isError } = useGetHotelsQuery(search);
  useEffect(() => {
    setHotelList(hotelsResult?.results);
  }, [hotelsResult?.results]);

  function showMore() {
    setPage(page + 1);
    getMoreHotels(`${search}&page_number=${page.toString()}`)
      .then((res) => {
        setHotelList((prev) => {
          return [...prev, ...res?.results];
        });
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      {isLoading ? (
        <FullLoading />
      ) : isError ? (
        <div className="flex items-center justify-center h-screen text-red-600 font-[600]">
          An error occured.
        </div>
      ) : (
        <div>
          <div className="min-h-screen flex flex-col lg:grid grid-cols-2 lg:gap-4 gap-y-4 px-[0.8rem] md:px-[3rem] lg:px-[5rem] my-10">
            {hotelList?.map((hotel) => {
              return (
                <SingleHotel
                  key={hotel.name + Math.random().toString()}
                  reviewCount={hotel.reviewCount}
                  reviewScoreWord={hotel.reviewScoreWord}
                  photoMainUrl={hotel.photoMainUrl}
                  name={hotel.name}
                  wishlistName={hotel.wishlistName}
                  priceBreakdown={hotel.priceBreakdown}
                  reviewScore={hotel.reviewScore}
                  id={hotel.id}
                  checkoutDate={hotel.checkoutDate}
                  checkinDate={hotel.checkinDate}
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
      )}
    </>
  );
}

export default HotelsList;
