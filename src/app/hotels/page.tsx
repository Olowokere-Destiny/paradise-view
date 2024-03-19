"use client";
import { useEffect, useState } from "react";
import SingleHotel from "@/components/hotels/SingleHotel";
import { useGetHotelsQuery } from "@/redux/fetchData/service";
import getMoreHotels from "@/utils/getMoreHotels";
import FullLoading from "@/components/loading/FullLoading";
import InlineLoading from "@/components/loading/InlineLoading";
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
  const [search, setSearch] = useState<string>();
  const [scrollY, setScrollY] = useState<number>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const { search } = new URL(window?.location.href);
    setSearch(search);
  }, []);
  const [page, setPage] = useState(1);
  const [hotelList, setHotelList] = useState<SingleHotelProps[]>([]);
  const { data: hotelsResult, isLoading, isError } = useGetHotelsQuery(search);
  useEffect(() => {
    setHotelList(hotelsResult?.results);
  }, [hotelsResult?.results]);

  function showMore() {
    const { scrollY } = window;
    setScrollY(scrollY);
    setPage(page + 1);
    const currentScrollPos = scrollY;
    setScrollY(currentScrollPos);
    window?.scrollTo({
      top: currentScrollPos,
    });
    setLoading(true);
    getMoreHotels(`${search}&page_number=${page.toString()}`)
      .then((res) => {
        if ("detail" in res) {
          setError(true);
          setLoading(false);
        } else {
          setLoading(false);
        }
        setHotelList((prev) => {
          return [...prev, ...res?.results];
        });
      })
      .catch((error) => {
        if (error) {
          setError(true);
          setLoading(false);
        }
      });
  }

  return (
    <>
      {isLoading ? (
        <FullLoading />
      ) : isError ? (
        <div className="flex items-center justify-center h-screen text-red-600 font-[600]">
          An error occured.
        </div>
      ) : hotelList?.length < 1 ? (
        <div className="flex items-center justify-center h-screen text-red-600 font-[600]">
          No hotels found.
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
          </div>
          {hotelList && (
            <div className="flex justify-center items-center">
              <button
                className="rounded-[0.8rem] text-[0.9rem] py-[0.8rem] px-7 lg:py-4 bg-brown text-white my-4 active:ring-2 active:ring-[#7c6a46] ring-offset-2"
                onClick={() => showMore()}
              >
                {loading && (
                  <InlineLoading
                    style={{ margin: 0 }}
                    styling="text-white w-[1.5rem] h-[1.5rem]"
                  />
                )}
                {error && <p>Error!</p>}
                {!loading && !error && <p>Show more</p>}
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default HotelsList;
