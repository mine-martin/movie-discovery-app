"use client";
/* eslint-disable @next/next/no-img-element */
import HeroCard from "@/components/Hero/HeroCard";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hero = ({ movie }: { movie: any }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: function (currentSlide: any, nextSlide: any) {},
    afterChange: function (currentSlide: any) {},
    appendDots: (
      dots:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | Iterable<React.ReactNode>
        | React.ReactPortal
        | React.PromiseLikeOfReactNode
        | null
        | undefined
    ) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="custompagination ">{i + 1}</div>
    ),
  };
  return (
    <section className="w-[1440px] flex xl:flex-row flex-col mx-auto relative">
      <Slider {...settings}>
        {movie.map((data: any, id: React.Key | null | undefined) => (
          <HeroCard key={id} data={data} />
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
