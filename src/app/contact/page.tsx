"use client";
import DynamicMap from "@/components/map";
function Contact() {
  const lat = 6.5244;
  const lon = 3.3792;
  return (
    <div>
      <div className="my-10 px-[0.8rem] md:px-[3rem] lg:px-[5rem]">
        <form>
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                placeholder="Enter your full name"
                className="block border-[1.5px] border-[#666] placeholder:text-[0.8rem] mt-2 p-2 focus:outline-none w-full md:w-[40vw] lg:w-[30vw] "
              />
            </div>
            <div className="">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                placeholder="Enter your email"
                className="block border-[1.5px] border-[#666] placeholder:text-[0.8rem] mt-2 p-2 focus:outline-none w-full md:w-[40vw] lg:w-[30vw] "
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="border-[1.5px] border-[#666] w-full placeholder:text-[0.8rem] mt-2 focus:outline-none p-3 h-[15rem] "
              placeholder="Message goes here"
            />
          </div>

          <div className="mt-3 flex justify-end">
            <button className="py-2 px-4 bg-brown text-white rounded-[0.3rem]">
              Submit
            </button>
          </div>
        </form>
        <div className="my-8">
          <DynamicMap center={{ lat, lon }} popupText="Lagos, Nigeria" zoom={10} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
