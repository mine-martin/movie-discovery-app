"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Image from "next/image";
import axios from "axios";

const FeaturedMovies = ({ movie }: { movie: any }) => {
  // const [movie, setMovie] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/trending/all/day",
      // url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmQ4YzhkZjRjZThiY2ZkYmY3MDU0ZjhmMDY0OGZjNiIsInN1YiI6IjY0ZmVhYjE0ZTBjYTdmMDEwZGU5NDRlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VuqL6ISDMxgNuq3j4pDv3RXhEb025TlipXb6eO5B5qI",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log("data:", response.data);
        setMovie(response.data.results.slice(0, 10));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
