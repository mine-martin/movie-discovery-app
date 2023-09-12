/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="max-w-[1440px] flex xl:flex-row flex-col p-1 bg-hero bg-cover mx-auto">
      <div className=" xl:w-2/5 flex flex-col  items-start w-full sm:px-16 px-8 mt-[10rem] ml-1 pb-20">
        <p className="text-[40px] font-bold text-white mt-4 pt-30">
          john Wick 3:
          <br />
          pallebulum
        </p>
        <div className="mt-2 flex gap-10">
          <p className="text-white flex gap-2 items-center">
            <span className="flex gap-3">
              <Image
                src={"/imdb.svg"}
                width={35}
                height={17}
                alt="imdb"
                priority={true}
              />
              <span className="text-white font-medium text-xs">800/100</span>
            </span>
          </p>
          <p className="text-white ml-8 flex gap-2 items-center">
            <span className="flex gap-3">
              <Image
                src={"/tomato.svg"}
                width={16}
                height={17}
                alt="tomato"
                priority={true}
              />
              <span className="text-white font-medium">97%</span>
            </span>
          </p>
        </div>
        <p className="text-sm text-white font-medium mt-4 mb-4 sm:max-w-sm">
          Discover new things Discover new things Discover new things Discover
          new things Discover new things Discover new things Discover new things
        </p>
        <button className="bg-rose-700 px-1.5 py-4 rounded-md flex gap-2 ">
          <Image
            src={"/play.svg"}
            width={20}
            height={20}
            alt="tomato"
            priority={true}
          />
          <span className="text-white font-bold uppercase text-sm">
            WATCH TRAILER
          </span>
        </button>
      </div>
    </section>
  );
}

export default Hero;