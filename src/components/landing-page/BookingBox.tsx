"use client";
import getLocations from "@/utils/getLocation";
import { useState, useEffect } from "react";
import { useRouter } from "next-nprogress-bar";
import validate from "@/utils/paramsValidator";
import currencies from "@/utils/currencies";
import InlineLoading from "../loading/InlineLoading";
import { IoWarning } from "react-icons/io5";
import getUserCountry from "@/utils/getCountry";
function BookingBox() {
  interface LocationProp {
    dest_id: string;
    dest_type: string;
    label: string;
    city_name: string;
  }
  interface ParamsProp {
    order_by: string;
    dest_type: string;
    dest_id: string;
    filter_by_currency: string;
    locale: string;
    units: string;
    room_number: string;
    adults_number: string;
    checkin_date: string;
    checkout_date: string;
    [key: string]: string;
  }
  const [url, setUrl] = useState<URL | undefined>();
  useEffect(() => {
    const url = new URL(`${window?.location.href}/hotels`);
    setUrl(url);
    getUserCountry().then(data => {
      setParams((prev) => (
        {...prev,
        filter_by_currency: currencies.find(item => item.country === data?.country_code)?.currency || "USD"
      }
      ))
    });
  }, []);
  const router = useRouter();
  const [trackInput, setTrackInput] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [validateError, setvalidateError] = useState<string | null>();
  const [params, setParams] = useState<ParamsProp>({
    order_by: "popularity",
    dest_type: "city",
    dest_id: "",
    filter_by_currency: "",
    locale: "en-gb",
    units: "metric",
    room_number: "",
    adults_number: "",
    checkin_date: "",
    checkout_date: "",
  });
  const [response, setResponse] = useState<null | any[]>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!params.dest_id || inputValue.trim().length < 3) {
      const timeoutFunc = setTimeout(() => {
        if (inputValue.trim().length > 1) {
          setLoading(true);
          setResponse(null);
          getLocations(inputValue)
            .then((res) => {
              if ("detail" in res) setError(true);
              setResponse(res);
              setLoading(false);
            })
            .catch((error) => {
              error && setError(true);
              setLoading(false);
              setResponse(null);
            });
        }
      }, 1000);
      return () => clearTimeout(timeoutFunc);
    }
  }, [inputValue, params.dest_id]);

  useEffect(() => {
    if (params.dest_id) {
      setParams((prev) => ({ ...prev, dest_id: "" }));
    }
  }, [trackInput]);

  useEffect(() => {
    setError(false);
    if (inputValue?.trim().length < 1) {
      setResponse(null);
    }
  }, [inputValue]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function getHotels(params: ParamsProp) {
    for (let x in params) {
      url?.searchParams.set(x, params[x]);
    }
    const validateRes: string | boolean = validate(params);
    if (validateRes !== true) {
      setvalidateError(validateRes);
      setTimeout(() => {
        setvalidateError(null);
      }, 1500);
    } else if (validateRes === true) {
      setvalidateError(null);
      router.push(`${url}`);
    }
  }

  // dropdown list
  function List() {
    function listAction(value: string, dest_id: string) {
      setResponse(null);
      setInputValue(value);
      setParams((prev) => ({
        ...prev,
        dest_id,
      }));
    }
    return (
      <div className="bg-white rounded-md absolute p-2 top-[110%] custom-shadow left-0">
        {error ? (
          <p className="text-center text-[0.9rem] font-[600] px-4 text-red-500 flex items-center gap-x-1">
            <span>
              <IoWarning />
            </span>
            An error occured.
          </p>
        ) : null}
        {loading && <InlineLoading styling="w-6 h-6 my-2 mx-10" />}
        {Array.isArray(response) &&
        response?.filter((city: LocationProp) => city.dest_type === "city")
          .length < 1 ? (
          <p className="text-center text-[0.9rem] font-[600]">Not Found.</p>
        ) : null}
        {Array.isArray(response) &&
          response
            ?.filter((city: LocationProp) => city.dest_type === "city")
            .map((city: LocationProp, i: number) => {
              return (
                <div
                  key={city.dest_id}
                  className="p-2 rounded-md cursor-pointer hover:bg-[#f7f7f7]"
                  onClick={() => listAction(city.label, city.dest_id)}
                >
                  <p key={i} className="text-[0.8rem] whitespace-nowrap ">
                    {city.city_name}
                  </p>
                  <p
                    key={i + 1}
                    className="text-[0.6rem] font-semibold whitespace-nowrap "
                  >
                    {city.label}
                  </p>
                </div>
              );
            })}
      </div>
    );
  }
  // end of dropdown list
  return (
    <div className="rounded-[0.6rem] p-4 border border-[#b1b1b1] my-12 md:my-16  mx-[0.8rem] md:mx-[3rem] lg:mx-[5rem]">
      <div className="relative my-2">
        <p className="font-[600]">Location</p>
        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setTrackInput((prev) => prev + 1);
          }}
          placeholder="Major city, town or Province"
          className="block border-[1.5px] border-[#666] w-full md:w-1/2 placeholder:text-[0.8rem] p-2 focus:outline-none rounded-md"
        />
        {error || response || loading ? <List /> : null}
      </div>
      <div className="custom-grid grid-cols-3 grid md:grid-cols-4 items-start md:items-center md:place-items-start gap-y-4 lg:flex lg:justify-between">
        <div>
          <p className="font-[600]">Currency</p>
          <select
            className="mt-2 md:-ml-1 w-[6rem] md:w-[8rem]"
            name="filter_by_currency"
            onChange={(e) => handleChange(e)}
            value={params.filter_by_currency}
          >
            {currencies.map((currency, i) => (
              <option key={currency + i.toString()} value={currency.currency}>
                {currency.currency}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p className="font-[600]">No. of rooms</p>
          <input
            type="number"
            min={0}
            name="room_number"
            onChange={(e) => handleChange(e)}
            value={params.rooms}
            className="block border-[1.5px] border-[#666] w-[6rem] md:w-[8rem] mt-2 p-2 focus:outline-none rounded-md"
          />
        </div>
        <div>
          <p className="font-[600]">No. of adults</p>
          <input
            type="number"
            min={0}
            name="adults_number"
            onChange={(e) => handleChange(e)}
            value={params.adults}
            className="block border-[1.5px] border-[#666] w-[6rem] md:w-[8rem] mt-2 p-2 focus:outline-none rounded-md"
          />
        </div>
        <div>
          <p className="font-[600]">Check in</p>
          <input
            type="date"
            name="checkin_date"
            onChange={(e) => handleChange(e)}
            value={params.checkin_date}
            className="block border-[1.5px] border-[#666] w-[6rem] md:w-[8rem] placeholder:text-[0.8rem] mt-2 p-2 focus:outline-none rounded-md"
          />
        </div>
        <div>
          <p className="font-[600]">Check out</p>
          <input
            type="date"
            name="checkout_date"
            onChange={(e) => handleChange(e)}
            value={params.checkout_date}
            className="block border-[1.5px] border-[#666] w-[6rem] md:w-[8rem] placeholder:text-[0.8rem] mt-2 p-2 focus:outline-none rounded-md"
          />
        </div>
      </div>
      {validateError ? (
        <p className="mt-3 font-[600] text-[0.8rem] text-red-500 text-center">
          {validateError}
        </p>
      ) : null}
      <div className="flex items-center lg:justify-end justify-center">
        <button
          className="rounded-[0.8rem] text-[0.9rem] py-3 px-7 lg:py-4 w-max bg-brown text-white mt-6 active:ring-2 active:ring-[#7c6a46] ring-offset-2"
          onClick={() => getHotels(params)}
        >
          Check availability
        </button>
      </div>
    </div>
  );
}

export default BookingBox;
