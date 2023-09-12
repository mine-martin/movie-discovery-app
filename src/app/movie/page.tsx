/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Moviepage from "./moviepage";
import Movie from "./movie";

type Props = {};

const MoviePage = ({}: Props) => {
  return (
    <section className="max-container pt-5 movie-cont pl-10 pr-10 w-full mt-5 mb-[10rem] h-full p-4 ">
      <Link href="/">
        <div className="w-full relative">
          <Image src="/movie.png" alt="" height={600} width={1440} />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/Play.svg" alt="" width={54} height={54} />
            <Image
              src="/Ellipse4.svg"
              alt=""
              width={110}
              height={110}
              className="absolute"
            />
          </div>
        </div>
      </Link>
      <div className="pt-5 flex flex-col justify-evenly ">
        <div className="items-center ">
          <div className="mt-5 relative">
            <Moviepage />
          </div>
          <div className="mt-5 relative">
            <Movie />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviePage;
