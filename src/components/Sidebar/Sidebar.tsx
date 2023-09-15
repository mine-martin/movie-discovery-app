"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

// icons
import { CgCalendarDates } from "react-icons/cg";
import { PiMonitorPlayLight } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

export const sidebarData = [
  { id: 1, name: "Home", path: "/", icon: <GoHome /> },
  { id: 2, name: "Movies", path: "/movies", icon: <BiCameraMovie /> },
  { id: 3, name: "TV Series", path: "/tvseries", icon: <PiMonitorPlayLight /> },
  { id: 4, name: "Upcoming", path: "/upcoming", icon: <CgCalendarDates /> },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [sidebarVisible, setSidebarVisible] = useState(true);

  return (
    <div className="">
      <div
        className={`${
          sidebarVisible
            ? "transform translate-x-0 transition-transform duration-300 ease-in-out"
            : "transform -translate-x-full transition-transform duration-300 ease-in-out"
        } absolute z-20 mt-4 ml-2 hover:cursor-pointer`}
        onClick={() => setSidebarVisible(!sidebarVisible)}
      >
        <Image src="/logo.svg" alt="" width={50} height={50} />
      </div>
      <div
        className={`sidebar relative rounded-r-[45px] border border-black border-opacity-30 transform transition-transform duration-300 ease-in-out ${
          sidebarVisible ? "translate-x-0" : "translate-x-full"
        } ${sidebarVisible ? "" : "hidden"}`}
      >
        <div
          className={`mt-9 ml-8 flex gap-[24px] justify-center items-center`}
        >
          <Link href="/">
            <span className="leading-[24px] text-2xl font-DMsans font-bold text-[#333] max-lg:text-[20px]">
              MovieBox
            </span>
          </Link>
        </div>
        <div className="mt-[90px]">
          {sidebarData.map((data, index) => (
            <Link href={data.path} key={index}>
              <div
                key={data.id}
                className={`w-max  group-hover:opacity-100 transition-opacity duration-300 ease-in-out ${
                  pathname === data.path ? "bg-[#BE123C]/10" : ""
                }`}
              >
                <div className="mt-[50px] flex gap-[15px] text-[20px] w-[226px] h-[82px] ml-5 justify-start">
                  <span>
                    <div className="w-[25px] h-[25px] mt-1.5">{data.icon}</div>
                  </span>
                  <h1 className="font-poppins font-[600] text-[#BE123C]">
                    {data.name}
                  </h1>
                  {pathname === data.path && (
                    <div className="bg-[#BE123C] h-[86px] flex absolute -right-0 ">
                      <div className="w-[6px] h-[100px]">{data.icon}</div>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className={`w-max flex ml-6 mt-[24px] `}>
          <div className="w-[170px] flex flex-col h-[210px] border p-[16px] border-[#BE123C] rounded-[20px] items-center justify-center ">
            <p className="text-[15px] font-[600]">
              Play movie quizes and earn free tickets
            </p>
            <p className="text-[12px] font-[500] mt-[9px]">
              50k people are playing now
            </p>
            <button className=" px-[17px] py-[2px] mt-[6px] bg-rose-200 rounded-[30px] h-[30px] text-[#BE123C] font-[12px]">
              Start playing
            </button>
          </div>
        </div>
        <Link href="/">
          <div className={`w-max`}>
            <div className="mt-[5px] flex gap-[15px] text-[20px] w-[226px] h-[82px] items-center justify-center group">
              <span>
                <Image src="/images/logout.svg" alt="" width={25} height={25} />
              </span>
              <h1 className=" font-[600] text-[#666]">Log out</h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
