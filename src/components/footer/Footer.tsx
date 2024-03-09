import { dancingScript, raleway } from "@/utils/fontExports";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-brown px-[0.8rem] md:px-[3rem] lg:px-[5rem] text-white pt-[1.7rem] md:pt-8">
      <div className="grid grid-cols-2 gap-y-4 gap-x-8 md:grid-cols-3">
        <div className="">
          <h2
            className={`${dancingScript.className} text-[1.8rem] lg:text-[2.3rem]`}
          >
            Paradise view
          </h2>
          <p className={`text-[0.8rem] font-[500] ${raleway.className}`}>
            Our hotels and properties offer the very best combination of luxury, comfort, scenery and lifestyle.
            We hope you enjoy your stay.
          </p>
        </div>

        <div className="shrink-0 flex flex-col md:items-center">
          <h2 className="font-[600] text-[0.9rem] md:-ml-3">Quick Links</h2>
          <div className="mt-3 flex flex-col gap-y-2 text-[0.8rem]">
            <Link href="/">Paradise View</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>

        <div className="shrink-0 flex flex-col col-span-2 md:col-span-1">
          <h2 className="font-[600] text-[0.9rem]">Newsletter</h2>
          <div className="mt-3 text-[0.8rem]">
            <p>
              Kindly subscribe to our newsletter to get latest deals on our
              rooms and vacation discount.
            </p>
          </div>
          <div className="bg-white rounded-[0.3rem] flex gap-x-2 items-center justify-between mt-3 p-2 text-black">
            <input
              className="w-1/2 placeholder:text-[#bbb] placeholder:text-[0.8rem] focus:outline-none"
              placeholder="Enter your email"
            />
            <div className="bg-brown px-4 text-white text-[0.9rem] py-2 rounded-[0.3rem]">
              <span className="hidden md:block lg:hidden">Send</span>
              <span className="md:hidden lg:block">Subscribe</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center font-[600] mt-[1.7rem] md:mt-8 text-[0.8rem]">
        &copy;Paradise view {new Date().getFullYear()}.
      </p>
    </div>
  );
}

export default Footer;
