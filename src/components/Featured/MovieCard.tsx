/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

type Props = {};

function MovieCard({}: Props) {
  return (
    <Link
      href="/movie"
      className=" hover:scale-102 rounded-md hover:shadow-lg transform transition duration-100 ease-in-out"
    >
      <div className="bg-white pb-4 justify-between items-start gap-3">
        <Image
          className="w-full h-auto"
          src={"/Ashoka.jpg"}
          alt="Movie Poster"
          width={250}
          height={370}
        />
        <article className="absolute top-0 right-0 p-2 mr-2 mt-2 bg-slate-300 rounded-full">
          <Link href="/">
            <AiOutlineHeart />
          </Link>
        </article>
        <article className="absolute top-0 left-0 py-2 ml-2 mt-2 bg-slate-300 rounded-full px-1 uppercase text-gray-900">
          <Link href="/">
            <span className="text-[12px] font-bold">TV SERIES</span>
          </Link>
        </article>
        <div className="p-1">
          <p className="text-gray-400 font-bold text-xs mt-2">USA,2016</p>
          <div className="text-gray-900 font-bold text-lg mb-2 mt-2 ">
            Ashoka Starwars
          </div>
          <div className="flex justify-between gap-10 mt-4">
            <p className=" flex gap-2.5 items-center">
              <span>
                <Image
                  src={"/imdb.svg"}
                  width={35}
                  height={17}
                  alt="imdb"
                  priority={true}
                />
              </span>
              <div className="font-normal text-gray-900 text-xs">800/100</div>
            </p>
            <p className=" ml-8 flex gap-2.5 items-center">
              <span>
                <Image
                  src={"/tomato.svg"}
                  width={16}
                  height={17}
                  alt="tomato"
                  priority={true}
                />
              </span>
              <div className="font-normal text-gray-900 text-xs">97%</div>
            </p>
          </div>
          <p className="text-gray-400 text-xs font-bold">
            Drama, Comedy, Action,
            <br />
          </p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;

{
  /* <div className=" flex flex-col w-fit max-sm:w-full p-4 justify-center outline">
        <div className="relative flex items-center justify-center bg-black rounded-md ">
          <img
            src="/hero1.png"
            alt="movie"
            className="w-[200px] h-[300px] cover object-cover relative"
          />
          <div className="absolute top-0 right-0 p-2 bg-slate-300 rounded-full">
            <a href="/">
              <AiOutlineHeart />
            </a>
          </div>
        </div>

        <div className="flex gap-2 items-center justify-between mt-auto">
          <h3 className="mt-3 text-[13px] leading-normal font-bold font-Montserrat ">
            Something
          </h3>
          <p className="mt-2  leading-normal text-[12px]">Ksh:400</p>
        </div>
        <p className="text-[12px] mt-2 font-Montserrat">Something</p>
        <div className="mt-2 flex justify-start gap-2">
          <AiFillStar />
          <p className="font-extralight text-[14px] leading-normal text-gray-500">
            (5)
          </p>
        </div>
        <div className="mt-4 leading-normal">
          <button></button>
        </div>
      </div> */
}
