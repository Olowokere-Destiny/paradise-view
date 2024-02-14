"use client";
import links from "@/utils/sidebarContent";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
function SideBarContent({ toggleDrawer }: { toggleDrawer: () => void }) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-y-6 mt-[90%]">
      {links.map((link, i) => (
        <Link
          href={link.href}
          key={i}
          onClick={toggleDrawer}
          className={`rounded-[0.5rem] text-[1.1rem] font-[600] text-center py-[0.6rem] ${
            pathname === link.href ? "bg-light-brown text-white" : ""
          }`}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default SideBarContent;
