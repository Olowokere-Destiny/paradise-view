"use client";
import Slide from "@/components/react-slick/Slide";
import { raleway } from "@/utils/fontExports";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoFastFoodOutline, IoWifiOutline } from "react-icons/io5";
import { FaLocationDot, FaCircleCheck } from "react-icons/fa6";
import {
  useGetPhotosQuery,
  useLazyGetDescriptionQuery,
  useGetHotelDetailsQuery,
} from "@/redux/fetchData/service";
import FullLoading from "@/components/loading/FullLoading";
import InlineLoading from "@/components/loading/InlineLoading";
import { useEffect, useState } from "react";
import GMap from "@/components/map/GMap";
import { VscLoading } from "react-icons/vsc";
interface Props {
  params: {
    hotelId: string;
  };
}
interface HotelData {
  url: string;
  hotel_name: string;
  city: string;
  latitude: number;
  longitude: number;
  accommodation_type_name?: string;
  address: string;
  country_trans: string;
  hotel_id: number;
  wifi_review_score: {
    rating: number;
  };
  breakfast_review_score: {
    review_score_word: string;
    review_score: number;
  };
  facilities_block: {
    facilities: { name: string }[];
  };
  composite_price_breakdown: {
    gross_amount: {
      currency: string;
      value: number;
    };
  };
}

export interface CheckoutPayload {
  amount: number;
  currency: string;
  images?: string[];
  name: string;
  cancel_url: string;
}

function constructDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  const today = `${year}-${month}-${day}`;

  const nextWeek = new Date(currentDate);
  nextWeek.setDate(currentDate.getDate() + 7);
  const year2 = nextWeek.getFullYear();
  const month2 = (nextWeek.getMonth() + 1).toString().padStart(2, "0");
  const day2 = nextWeek.getDate().toString().padStart(2, "0");
  const nextWeekDate = `${year2}-${month2}-${day2}`;
  return {
    today,
    nextWeekDate,
  };
}
const alternativeDates = constructDate();

function Hotel({ params: { hotelId } }: Props) {
  const [checkin, setCheckin] = useState<string>();
  const [checkout, setCheckout] = useState<string>();
  const [currency, setCurrency] = useState<string>();
  const [descVisible, setDescVisible] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  useEffect(() => {
    const checkin =
      new URL(window?.location.href).searchParams.get("checkin_date") ||
      alternativeDates.today;
    const checkout =
      new URL(window?.location.href).searchParams.get("checkout_date") ||
      alternativeDates.nextWeekDate;
    const currency =
      new URL(window?.location.href).searchParams.get("currency") || "NGN";
    setCheckin(checkin);
    setCheckout(checkout);
    setCurrency(currency);
  }, []);

  const {
    data: hotelData,
    isLoading: hotelDataLoading,
    isError: hotelDataError,
  } = useGetHotelDetailsQuery(
    `hotel_id=${hotelId}&checkout_date=${checkout}&checkin_date=${checkin}&currency=${currency}&locale=en-gb`
  ) as { data: HotelData; isLoading: boolean; isError: boolean };
  const [
    getDesc,
    {
      data: descriptionData,
      isLoading: descriptionLoading,
      isError: descriptionError,
    },
  ] = useLazyGetDescriptionQuery();
  const {
    data: photosArr,
    isLoading: photosLoading,
    isError: photosError,
  } = useGetPhotosQuery(hotelId);
  const photos = photosArr?.map((obj: { url_max: string }) => obj.url_max);

  function fetchDesc() {
    setDescVisible(true);
    getDesc(`hotel_id=${hotelId}&locale=en-gb`);
  }

  const handleCheckout = async () => {
    const currency =
      hotelData?.composite_price_breakdown?.gross_amount?.currency || "USD";
    const amount =
      hotelData?.composite_price_breakdown?.gross_amount?.value.toFixed(0);
    const payload: CheckoutPayload = {
      name: hotelData?.hotel_name,
      amount: parseFloat(amount),
      currency,
      cancel_url: window.location.href
    };

    if (photos && photos.length) {
      payload.images = [photos[0]];
    }

    try {
      setPaymentLoading(true);
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as { url?: string; error?: string };

      if (data?.url) {
        window.location.href = data.url;
      } else {
        alert("Could not initialize payment.");
      }
    } catch (err) {
      alert("Checkout error.");
    } finally {
      setPaymentLoading(false);
    }
  };

  return (
    <>
      {hotelDataError ? (
        <div className="flex items-center justify-center h-screen text-red-600 font-[600]">
          An error occured.
        </div>
      ) : hotelDataLoading ? (
        <FullLoading />
      ) : (
        <div className="">
          <div className="bg-[#fdfdfd] py-5 relative">
            {hotelData?.accommodation_type_name && (
              <span className="absolute z-[500] top-4 md:top-0 right-[1.2rem] md:right-[3rem] lg:right-[5rem] text-[0.7rem] rounded-md ml-2 px-2 py-1 bg-light-brown text-white self-start mt-3">
                {hotelData?.accommodation_type_name}
              </span>
            )}
            <div className="relative flex flex-col md:flex-row md:justify-between lg:justify-start md:gap-x-8 lg:gap-x-[3rem] md:items-center gap-y-4 mx-[0.8rem] md:mx-[3rem] lg:mx-[5rem]">
              <div className="w-full max-h-[300px] md:max-w-[50%] md:max-h-[400px] overflow-hidden rounded-[8px]">
                {photos ? (
                  <Image
                    src={photos[0]}
                    width={150}
                    height={100}
                    alt="property image"
                    unoptimized
                    className="w-full rounded-[8px]"
                  />
                ) : null}
              </div>

              <div className="text-center md:text-left">
                <p
                  className={`font-[600] text-brown text-[1.5rem] lg:text-[2.3rem] ${raleway.className}`}
                >
                  {hotelData?.hotel_name}
                </p>
                <p className="font-[500]">
                  <span className="font-[600] text-[1.1rem]">Address: </span>
                  <span className="text-slate-700 ">{hotelData?.address}</span>
                </p>
                <p className="whitespace-nowrap font-[600] text-slate-700 text-[1rem] md:text-[1.2rem] flex items-center md:justify-start mt-3 justify-center">
                  <span>
                    <FaLocationDot className="mr-[2px]" />
                  </span>{" "}
                  {hotelData?.city}, {hotelData?.country_trans}
                </p>
                {hotelData?.url ? (
                  <Link
                    target="_blank"
                    href={hotelData?.url}
                    className="text-blue-500 mx-auto w-max md:mx-0 font-[500] hover:underline mt-3 lg:mt-5 flex items-center gap-x-2"
                  >
                    See on BOOKING.com <FaExternalLinkAlt />
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
          {photosLoading ? (
            <InlineLoading />
          ) : photosError ? (
            <p className="text-center m-4 text-red-500 font-[600]">
              There was an error getting photos. Try again later
            </p>
          ) : (
            <Slide photos={photos} />
          )}

          {!descVisible ? (
            <button
              onClick={() => {
                fetchDesc();
              }}
              className="text-[0.8rem] text-slate-600 underline block mx-auto"
            >
              Show Description
            </button>
          ) : null}
          {descriptionLoading ? (
            <InlineLoading />
          ) : descriptionError ? (
            <p className="text-center m-4 text-red-500 font-[600]">
              There was an error getting description. Try again later
            </p>
          ) : (
            descriptionData?.description && (
              <div
                className={`px-[0.8rem] md:px-[3rem] lg:px-[5rem] my-[3rem] md:my-[6rem]`}
              >
                <h2 className="font-[600] text-[1.4rem] md:text-[1.8rem] text-black">
                  Description
                </h2>
                <p
                  className={`${raleway.className} font-[500] text-[1.1rem] md:text-[1.3rem] text-slate-700`}
                >
                  {descriptionData?.description}
                </p>
              </div>
            )
          )}

          <div className="my-6 px-[0.8rem] md:px-[3rem] lg:px-[5rem]">
            <h2 className="text-center font-[600] text-[1.6rem] md:text-[1.8rem]">
              Hotel offerings
            </h2>
            <div className="flex flex-col gap-y-3 justify-center items-center md:flex-row md:justify-around mt-4">
              {hotelData?.breakfast_review_score && (
                <p className="font-[600] text-[1rem] flex items-center">
                  <IoFastFoodOutline className="mr-2 text-[1.6rem]" />
                  <span>Breakfast is available</span>{" "}
                  <FaCircleCheck className="text-green-500 ml-2" />
                </p>
              )}
              {hotelData?.wifi_review_score && (
                <p className="font-[600] text-[1rem] flex items-center">
                  <IoWifiOutline className="mr-2 text-[1.6rem]" />
                  <span>Wi-FI is available</span>{" "}
                  <FaCircleCheck className="text-green-500 ml-2" />
                </p>
              )}
            </div>
            {hotelData?.facilities_block?.facilities && (
              <>
                <h2 className="text-center mt-4 underline text-[1.2rem] font-[600]">
                  Utilities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3 gap-y-2 gap-x-3">
                  {hotelData?.facilities_block?.facilities.map((util, i) => {
                    return (
                      <p
                        className={`${raleway.className} font-[600] text-slate-700`}
                        key={i}
                      >
                        {util.name}
                      </p>
                    );
                  })}
                </div>
              </>
            )}
          </div>
          <div className="flex justify-center">
            <button
              disabled={paymentLoading}
              className="rounded-[0.8rem] text-[0.9rem] md:text-[1.1rem] py-[0.8rem] px-7 lg:py-4 bg-brown text-white my-4 active:ring-2 active:ring-[#7c6a46] ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
              onClick={() => {
                handleCheckout();
              }}
            >
              {paymentLoading ? (
                <VscLoading
                  style={{ color: "white" }}
                  className="animate-spin h-5 w-5"
                />
              ) : (
                <>
                  Pay{" "}
                  {hotelData?.composite_price_breakdown?.gross_amount?.currency}{" "}
                  {hotelData?.composite_price_breakdown?.gross_amount?.value.toFixed(
                    0
                  )}
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {hotelData?.latitude && hotelData?.longitude ? (
        <div className="px-[0.8rem] md:px-[3rem] lg:px-[5rem] mb-8">
          <GMap
            lat={hotelData?.latitude}
            lon={hotelData?.longitude}
            zoom={15}
          />
        </div>
      ) : null}
    </>
  );
}

export default Hotel;
