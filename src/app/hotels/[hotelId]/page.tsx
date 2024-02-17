"use client";
import Slide from "@/components/react-slick/Slide";
import { raleway } from "@/utils/fontExports";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import {
  useGetPhotosQuery,
  useGetDescriptionQuery,
  useGetHotelDetailsQuery,
} from "@/redux/fetchData/service";
import FullLoading from "@/components/loading/FullLoading";
import InlineLoading from "@/components/loading/InlineLoading";
import { useEffect, useState } from "react";
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
  composite_price_breakdown: {
    gross_amount: {
      currency: string;
      value: number;
    };
  };
}

const photos = [
  "https://cf.bstatic.com/xdata/images/hotel/max1280x900/331395602.jpg?k=469cc9865e3ee3d32bc8f9916c293bc82b754b778c3436ff19c2b2b069870a14&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max1280x900/54629815.jpg?k=faedd002cc7aa5b14a21e2464c185530fb166f6a0c7ebb57ee12c66349ae1b9e&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max1280x900/58016890.jpg?k=e05fcff350c8d7d8e1d40f4a368255e004058ce6e86b4355214e0ec399d28754&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max1280x900/54631278.jpg?k=3b37c2dd55100f78a19fe8ff178d2a7717dafc9ed3c1d6983cac360ee7916506&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max1280x900/188927080.jpg?k=521e70cb127adc857d948a364eaa295cb10728745973fe66eb59e33b2b4b006e&o=",
];
const description =
  "Guests travelling with children must inform the property in advance how many will be staying and of their ages upon booking. Contact details can be found on the booking confirmation. When booking 10 rooms or more, different policies and additional supplements may apply. In response to Coronavirus (COVID-19), additional safety and sanitation measures are in effect at this property.";

const hotelData: HotelData = {
  url: "https://www.booking.com/hotel/de/riu-plaza-berlin.html",
  hotel_name: "Riu Plaza Berlin",
  city: "Berlin",
  accommodation_type_name: "Hotel",
  latitude: 52.5002932226084,
  longitude: 13.3467457829422,
  address: "Martin-Luther-Strasse 1",
  country_trans: "Germany",
  composite_price_breakdown: {
    gross_amount: {
      currency: "AED",
      value: 612.671783780459,
    },
  },
  hotel_id: 1377073,
};

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

// dummy states
const hotelDataLoading = false;
const descriptionLoading = false;
const photosLoading = false;
const hotelDataError = false;
const descriptionError = false;
const photosError = false;

function Hotel({ params: { hotelId } }: Props) {
  const [checkin, setCheckin] = useState<string>();
  const [checkout, setCheckout] = useState<string>();
  const [currency, setCurrency] = useState<string>();
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

  // const {
  //   data: hotelData,
  //   isLoading: hotelDataLoading,
  //   isError: hotelDataError,
  // } = useGetHotelDetailsQuery(
  //   `hotel_id=${hotelId}&checkout_date=${checkout}&checkin_date=${checkin}&currency=${currency}&locale=en-gb`
  // ) as { data: HotelData; isLoading: boolean; isError: boolean };
  // const {
  //   data: description,
  //   isLoading: descriptionLoading,
  //   isError: descriptionError,
  // } = useGetDescriptionQuery(`hotel_id=${hotelId}&locale=en-gb`);
  // const {
  //   data: photosArr,
  //   isLoading: photosLoading,
  //   isError: photosError,
  // } = useGetPhotosQuery(hotelId);
  // const photos = photosArr?.map((obj: { url_max: string }) => obj.url_max);

  return (
    <>
      {hotelDataError ? (
        <div className="flex items-center justify-center h-screen text-red-600 font-[500]">
          An error occured.
        </div>
      ) : hotelDataLoading ? (
        <FullLoading />
      ) : (
        <div className="">
          <div className="bg-[#fdfdfd] py-5">
            <div className="relative flex flex-col md:flex-row md:justify-between lg:justify-start md:gap-x-8 lg:gap-x-[3rem] md:items-center gap-y-4 mx-[0.8rem] md:mx-[3rem] lg:mx-[5rem]">
              <div className="w-full max-h-[300px] md:max-w-[50%] md:max-h-[400px] overflow-hidden rounded-[8px]">
                {photos ? (
                  <Image
                    src={photos[0]}
                    width={150}
                    height={100}
                    alt="house"
                    className="w-full rounded-[8px]"
                  />
                ) : null}
              </div>

              <div className="text-center md:text-left">
                <p
                  className={`flex items-center justify-center font-[600] text-brown text-[2rem] md:text-[2.3rem] ${raleway.className}`}
                >
                  {hotelData?.hotel_name}
                  {hotelData?.accommodation_type_name && (
                    <span className="text-[0.7rem] rounded-md ml-2 px-1 bg-light-brown text-white">
                      {hotelData?.accommodation_type_name}
                    </span>
                  )}
                </p>
                <p className="font-[500]">
                  <span className="font-[600] text-[1.1rem]">Address: </span>
                  <span className="text-slate-700 ">{hotelData?.address}</span>
                </p>
                <p className="font-[600] text-slate-700 text-[1.2rem] flex items-center md:justify-start mt-3 justify-center">
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
            <p className="text-center m-4 text-red-500">
              There was an error getting photos
            </p>
          ) : (
            <Slide photos={photos} />
          )}
          {descriptionLoading ? (
            <InlineLoading />
          ) : descriptionError ? (
            <p className="text-center m-4 text-red-500">
              There was an error getting description.
            </p>
          ) : (
            <div
              className={`font-[500] px-[0.8rem] md:px-[3rem] lg:px-[5rem] my-[3rem] md:my-[6rem] text-[1.1rem] md:text-[1.3rem] ${raleway.className} text-slate-700 `}
            >
              {description}
            </div>
          )}
          <div className="flex justify-center">
            <button className="rounded-[0.8rem] text-[0.9rem] md:text-[1.1rem] py-[0.8rem] px-7 lg:py-4 bg-brown text-white my-4">
              Pay {hotelData?.composite_price_breakdown?.gross_amount?.currency}{" "}
              {hotelData?.composite_price_breakdown?.gross_amount?.value.toFixed(
                0
              )}
            </button>
          </div>
        </div>
      )}

      {/* map goes here */}
      {/* Looking for a map service without that doesn't ask for my card details :( */}
      {/* <div>

      </div> */}
    </>
  );
}

export default Hotel;
