import { PiCheckCircleDuotone } from "react-icons/pi"
import "./style.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Successful",
  description: "Paradise View hotel website payment success page."
}
const Success = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
        <div className="">
          <PiCheckCircleDuotone color="green" className="mx-auto fade-in" size={80} />
            <p className="text-[1.2rem] text-green-500 font-semibold mt-4 fade-in">Payment processed successfully.</p>
            <Link href="/" className="block text-center w-4/6 rounded-[0.8rem] text-[0.9rem] md:text-[1.1rem] py-[0.8rem] px-7 lg:py-4 bg-brown text-white my-4 active:ring-2 active:ring-[#7c6a46] ring-offset-2 uppercase mx-auto">back to home</Link>
        </div>
    </div>
  )
}

export default Success