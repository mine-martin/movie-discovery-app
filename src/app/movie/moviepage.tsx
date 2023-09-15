import { type } from "os";
import React from "react";

type Props = {};

const moviepage = ({ movieDetails }: any) => {
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="font-extrabold text-[23px] mb-2 mt-2  flex items-center gap-4 text-[#404040]">
        <p>
          {movieDetails.original_title} . {movieDetails.release_date} . PG-13 .{" "}
          {movieDetails.runtime}
        </p>

        {movieDetails.genres.map(
          (
            genre:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | React.PromiseLikeOfReactNode
              | null
              | undefined,
            id: React.Key | null | undefined
          ) => (
            <span
              className="inline-block border border-[#F8E7EB] rounded-[15px] px-3 py-1 text-sm font-[500] text-[#B91C1C] leading-normal"
              key={id}
            >
              {genre}
            </span>
          )
        )}
      </div>
      <div className="ml-10">
        <div className="text-2xl flex items-center gap-2 justify-center  leading-normal">
          <img src="/star.png" alt="" width={30} height={30} />
          <p className="text-[#E8E8E8] text-[25px] font-[500]">
            {movieDetails.popularity} <span>|</span>
          </p>
          <p className="text-[#666] text-[20px] font-[500]">
            {movieDetails.vote_count}k
          </p>
        </div>
      </div>
    </div>
  );
};

export default moviepage;
