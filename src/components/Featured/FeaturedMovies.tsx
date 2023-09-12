/* eslint-disable @next/next/no-img-element */
import React from "react";
import MovieCard from "./MovieCard";
import Image from "next/image";

const FeaturedMovies = () => {
  return (
    <section className="max-container">
      <div className="flex flex-row justify-between gap-5">
        <p className=" text-black font-bold text-[36px]">Featured Movie</p>
        <div className="font-normal flex flex-row justify-between gap-2 text-rose-700 text-lg relative left-0">
          See more
          <div>
            <Image src={"/chevron.svg"} width={20} height={20} alt="see more" />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 mt-10">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </section>
  );
};

export default FeaturedMovies;
