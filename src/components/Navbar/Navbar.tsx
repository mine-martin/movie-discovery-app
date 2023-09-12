/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <header className="sm:px-16 px-8 py-8 absolute z-10 w-full ml-14 ">
      <div className="flex items-center gap-4 justify-between max-lg:flex-col">
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

        <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-2 p-2 lg:border lg:border-white rounded-lg text-white">
          <input
            type="text"
            placeholder="What do you want to watch?"
            className="sm:flex-1 max-sm:w-full text-base leading-normal text-white pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-white max-sm:rounded-full bg-inherit white-placeholder"
          />
          <nav className="flex max-sm:justify-end items-center max-sm:w-full font-bold w-[16px] h-[16px]">
            <AiOutlineSearch />
          </nav>
        </div>

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
