/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {};

function MoviePage({}: Props) {
  return (
    <section className="max-container pt-20 w-full">
      <div className="pt-20 flex items-center justify-evenly">
        <div className="items-center mr-10">
          <div className="font-bold text-lg mb-2 mt-2  flex items-center gap-4 text-slate-500">
            <p>Ashoka Starwars . 2022 . PG-13 . 2h 10m</p>
            <span className="inline-block outline outline-1 rounded-full px-3 py-1 text-sm font-semibold text-red-500">
              Action
            </span>
            <span className="inline-block outline outline-1 rounded-full px-3 py-1 text-sm font-semibold text-red-500">
              Drama
            </span>
          </div>
        </div>
        <div className="ml-10">
          <div className="text-2xl flex items-center gap-2 justify-center">
            <img src="/star.png" alt="" width={30} />
            <p className="text-slate-300">8.5</p>
            <p className="text-slate-500">350k</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoviePage;
