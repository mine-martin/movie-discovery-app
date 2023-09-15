/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Search from "../Search/Search";

const Navbar = () => {
  return (
    <header className="sm:px-16 px-8 py-8 absolute z-10 w-full md:w-full sm:w-full  max-lg:ml-5 lg:h-[600px] ">
      <div className="flex sm:flex-row xl:items-center gap-4 justify-between sm:justify-start md:justify-start max-lg:flex-col sm:gap-0 sm:w-[1000px]">
        <div className="mr-20">
          {" "}
          <Link href="/" className="flex gap-6 items-center">
            <Image
              src={"/logo.svg"}
              width={50}
              height={50}
              alt="Logo"
              priority={true}
            />
            <span className="font-bold text-2xl text-white max-lg:text-[20px]">
              MovieBox
            </span>
          </Link>
        </div>

        <Search />

        <div className="ml-20">
          <ul className="flex-1 flex justify-center items-center gap-4 max-lg:hidden">
            <Link href="/" className="text-white font-bold text-xs">
              Sign In
            </Link>
            <a href="/">
              <Image
                src={"/menu.png"}
                alt=""
                width={36}
                height={36}
                className="bg-white rounded-full"
              />
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
