import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineCopyrightCircle,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <section className="mt-10 pt-10 pb-10 max-sm:mt-5">
      <div className="flex items-center justify-center flex-col gap-10 max-sm:gap-6">
        <div className="text-4xl flex flex-row gap-12">
          <Link href="/">
            <AiFillFacebook />
          </Link>
          <Link href="/">
            <AiOutlineInstagram />
          </Link>
          <Link href="/">
            <AiOutlineTwitter />
          </Link>
          <Link href="/">
            <AiFillYoutube />
          </Link>
        </div>
        <div className="flex text-gray-900 items-center gap-12 max-sm:gap-6 font-bold text-[18px]">
          <Link href="/">
            <p className=" "> Condition of Use</p>
          </Link>
          <Link href="/">
            <p className=""> Privacy & policy</p>
          </Link>
          <Link href="/">
            <p className="">Press Room</p>
          </Link>
        </div>
        <div className="flex items-center gap-2 text-gray-500 font-bold max-sm:flex-col-reverse">
          <span className="text-[18px]">
            <AiOutlineCopyrightCircle />
          </span>
          <p className="max-lg:text-sm max-sm:text-xs ">
            2021 MovieBox by MARTIN WANGONDU
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
