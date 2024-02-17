"use client";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import links from "@/utils/headerLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
function HeaderDesktop() {
  const pathname = usePathname();
  const activeLinkstyle = "font-[700] text-brown";

  return (
    <div className="hidden md:flex justify-between items-center md:px-[3rem] lg:px-[5rem] md:py-[1rem] lg:py-[1.5rem]">
      <Link href="/">
        <Image src={logo} className="w-[3.4rem] h-[1.7rem] " alt="logo" />
      </Link>

      <div className="flex items-center justify-between md:gap-x-[3rem] lg:gap-x-[4rem] xlg:gap-x-[6.5rem] ">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className={`text-[1rem] font-[500] leading-normal ${
              pathname === link.href ? activeLinkstyle : ""
            }`}
          >
            {link.text}
          </Link>
        ))}
      </div>

      <Link href="/" className="rounded-[0.3rem] lg:px-[2.3rem] md:px-[1.8rem] md:py-[0.7rem] lg:py-[0.9rem] bg-brown text-white ">
        Book now
      </Link>
    </div>
  );
}

export default HeaderDesktop;
