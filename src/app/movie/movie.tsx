import Image from "next/image";
import React from "react";

type Props = {};

const movie = ({ movieDetails }: any) => {
  return (
    <div className="relative items-center">
      <div className="flex justify-between gap-[24px] items-center max-lg:flex-col max-xl:flex-col  max-lg:w-fit">
        <div className="font-poppins font-[400] text-[17px] max-lg:text-[17px] max-sm:text-[10px]  ">
          <p className="text-[#333]" data-testid="movie-overview">
            {movieDetails.overview}
          </p>
          <div className="relative mt-10">
            <div className="flex flex-col gap-[31px] font-[400] text-[20px] max-lg:text-[10px]">
              <p className="text-[#333]">
                Director :
                <span className="text-[#BE123C]"> Joseph konsinki</span>
              </p>
              <p className="text-[#333]">
                Writers :
                <span className="text-[#BE123C]">
                  {" "}
                  Jim Cash, Jack Epps Jr, Peter Craig
                </span>
              </p>
              <p className="text-[#333]">
                Director :
                <span className="text-[#BE123C]">
                  {" "}
                  Tom Cruise, Jennifer Connelly, Miles Teller
                </span>
              </p>
            </div>
            <div className="w-full mt-6 flex items-center  gap-2 border border-[#C7C7C7] h-[55px] rounded-[10px] text-white">
              <button className="text-white bg-[#BE123C] w-[253px]  h-[55px] text-xl rounded-[10px] max-sm:w-[100px] max-xs:w-[70px] max-xs:text-[8px]">
                Top rated movie #25
              </button>
              <input
                type="text"
                placeholder="Awards 9 nominations"
                className=" text-black font-poppins font-[500] text-[20px] max-xs:text-[10px] bg-inherit outline-none "
              />
              <div className="flex absolute right-4 items-center font-extrabold">
                <Image
                  src={"/Expand.png"}
                  alt=""
                  width={30}
                  height={30}
                  className="text-black"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="items-center w-full pb-4">
          <div className=" flex flex-col items-center justify-center gap-[24px]">
            <button className="w-full flex gap-[10px] bg-[#BE123C] text-white font-medium text-xl  leading-normal items-center justify-center h-[55px] rounded-[10px]">
              <Image src={"/ticket.png"} alt="" width={25} height={25} />
              See Showtimes
            </button>
            <button className="w-full flex gap-[10px] bg-[#F8E7EB] text-[#333] font-medium text-xl  leading-normal items-center justify-center h-[55px] rounded-[10px] border border-[#BE123C]">
              <Image src={"/List.png"} alt="" width={23} height={23} />
              More watch options
            </button>
            <div className="w-full relative rounded-[15px]">
              <Image
                src="/movie2.png"
                alt=""
                width={360}
                height={229}
                className="w-full"
              />
              <div className="absolute bottom-0 left-0 right-0 rounded-[15px] h-[52px]  flex bg-black bg-opacity-10 backdrop-blur-sm items-center justify-center text-[#E8E8E8] gap-[12px]">
                <Image src={"/List2.svg"} alt="" width={23} height={23} />
                <p className="">The Best Movies Shows in September</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default movie;
