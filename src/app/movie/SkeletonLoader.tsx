import React from "react";

const SkeletonLoader = () => {
  return (
    <section className="max-container w-full mt-5 mb-[10rem] h-full relative">
      <div className="w-full relative">
        <div
          className="bg-gray-300 animate-pulse"
          style={{ height: "600px", width: "1440px" }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <div className="bg-gray-300 rounded-full h-14 w-14 animate-pulse"></div>
            <p className="absolute font-medium text-[#E8E8E8] text-2xl mr-5 animate-pulse">
              {/* Watch Trailer */}
            </p>
          </div>
          <div className="bg-gray-300 rounded-full h-28 w-28 animate-pulse absolute"></div>
        </div>
      </div>
      <div className="pt-5 flex flex-col justify-evenly ">
        <div className="items-center ">
          <div className="mt-5 relative">
            <div
              className="bg-gray-300 animate-pulse"
              style={{ height: "300px", width: "100%" }}
            ></div>
          </div>
          <div className="mt-5 relative">
            <div
              className="bg-gray-300 animate-pulse"
              style={{ height: "300px", width: "100%" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkeletonLoader;
