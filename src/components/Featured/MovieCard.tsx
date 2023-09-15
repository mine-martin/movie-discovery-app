/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const MovieCard = ({ data, id }: { data: any; id: any }) => {
  return (
    <Link
      href={`/movie/${data.id}`}
      className=" hover:scale-102 rounded-md hover:shadow-lg transform transition duration-100 ease-in-out"
    >
      <div className="bg-white pb-4 justify-between items-start gap-3">
        <Image
          className="w-full h-auto"
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path}`}
          alt="Movie Poster"
          width={250}
          height={370}
        />
        <article className="absolute top-0 right-0 p-2 mr-2 mt-2 bg-slate-300 rounded-full">
          <Link href="/" className="items-center">
            <AiOutlineHeart />
          </Link>
        </article>
        <article className="absolute top-0 left-0 py-2 ml-2 mt-2 bg-slate-300 rounded-full px-1 uppercase text-gray-900">
          <Link href="/">
            <span className="text-[12px] font-bold">{data.media_type}</span>
          </Link>
        </article>
        <div className="p-1">
          <p className="text-gray-400 font-bold text-xs mt-2">
            {data.origin_country}, {data.release_date}
          </p>
          <div className="text-gray-900 font-bold text-lg mb-2 mt-2 ">
            {data.title}
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
              <div className="font-normal text-gray-900 text-xs">
                {data.vote_average}/100
              </div>
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
              <div className="font-normal text-gray-900 text-xs">
                {data.popularity}
              </div>
            </p>
          </div>
          <p className="text-gray-400 text-xs font-bold">
            {data.genre_ids}
            <br />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
