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
    <section className="mt-10 pt-10 pb-10">
      <div className="flex items-center justify-center flex-col gap-10">
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
        <div className="flex text-gray-900 items-center gap-12 font-bold text-[18px]">
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
        <div className="flex items-center gap-2 text-gray-500 font-bold ">
          <span className="text-[18px]">
            <AiOutlineCopyrightCircle />
          </span>
          <p className="max-lg:text-sm">2021 MovieBox by MARTIN WANGONDU</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
