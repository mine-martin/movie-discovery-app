"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Image from "next/image";
import axios from "axios";

const FeaturedMovies = ({ movie }: { movie: any }) => {
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
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 mt-10">
        {movie.map((data: any, id: React.Key | null | undefined) => (
          <MovieCard key={id} data={data} id={id} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedMovies;

function setMovie(arg0: any) {
  throw new Error("Function not implemented.");
}
