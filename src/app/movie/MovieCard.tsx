/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Moviepage from "./moviepage";
import Movie from "./movie";
import { useParams } from "next/navigation";

const MovieCard = ({ movieDetails }: any) => {
  return (
    <section className="max-container w-full mt-5 mb-[10rem] h-full relative">
      <Link href="/">
        <div className="w-full relative ">
          <div className="relative bg-black bg-opacity-10 backdrop-blur-sm h-[475px] rounded-lg max-xs:h-[200px]">
            <div className="h-full w-full relative">
              <Image
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movieDetails.backdrop_path}`}
                alt=""
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/play.svg" alt="" width={54} height={54} />
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
            <Moviepage movieDetails={movieDetails} />
          </div>
          <div className="mt-5 relative">
            <Movie movieDetails={movieDetails} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieCard;
