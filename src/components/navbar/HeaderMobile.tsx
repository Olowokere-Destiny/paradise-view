"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.svg";
import hamburger from "../../assets/mobile-menu-toggle.svg";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import SideBarContent from "./SideBarContent";

function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="md:hidden flex items-center justify-between px-[0.8rem] py-4">
      <Link href="/">
        <Image src={logo} className="w-[2.8rem] h-[1.4rem] " alt="logo" />
      </Link>
      <div>
        <Image
          onClick={toggleDrawer}
          src={hamburger}
          width={150}
          height={100}
          alt=""
          className="w-[1.7rem] h-[1.7rem] cursor-pointer"
        />
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="md:hidden px-[2.5rem]"
        >
          <div
            className="absolute top-[1.5rem] text-[1.2rem] right-[1rem] font-[600] text-brown cursor-pointer"
            onClick={toggleDrawer}
          >
            Close
          </div>
          <SideBarContent toggleDrawer={toggleDrawer} />
        </Drawer>
      </div>
    </div>
  );
}

export default HeaderMobile;
