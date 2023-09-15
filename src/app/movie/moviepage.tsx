import Image from "next/image";
import React from "react";

const moviepage = ({ movieDetails }: any) => {
  return (
    <div className="flex items-center justify-between max-xl:flex-col max-lg:flex-col mt-4">
      <div className="font-extrabold text-[23px] mb-2 mt-2  flex items-center gap-4 text-[#404040]">
        <p className="max-xl:text-[20px] max-sm:text-[12px]">
          <span data-testid="movie-title">{movieDetails.original_title}</span>.
          <span data-testid="movie-release-date">
            {" "}
            {movieDetails.release_date}
          </span>
          . PG-13 .{" "}
          <span data-testid="movie-runtime">{movieDetails.runtime}</span>
        </p>

        {movieDetails.genres.map(
          (
            genre: {
              name:
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
                | undefined;
            },

            id: React.Key | null | undefined
          ) => (
            <span
              key={id}
              className="inline-block border border-[#F8E7EB] rounded-[15px] max-sm:px-1 max-sm:text-[8px] px-3 py-1 text-sm font-[500] text-[#B91C1C] leading-normal"
            >
              {genre.name}
            </span>
          )
        )}
      </div>
      <div className="lg:ml-10 max-lg:flex-col">
        <div className="text-2xl flex items-center gap-2 justify-center  leading-normal">
          <Image src="/star.png" alt="" width={30} height={30} />

          <p className="text-[#E8E8E8] text-[25px] font-[500] max-sm:text-[15px]">
            {movieDetails.popularity} <span>|</span>
          </p>
          <p className="text-[#666] text-[20px] font-[500]  max-sm:text-[15px]">
            {movieDetails.vote_count}k
          </p>
        </div>
      </div>
    </div>
  );
};

export default moviepage;
