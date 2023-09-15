"use client";
require("dotenv").config();
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar/Navbar";
import FeaturedMovies from "@/components/Featured/FeaturedMovies";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  const [movie, setMovie] = useState([]);

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
        setMovie(response.data.results.slice(0, 10));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main className="w-max bg-white px-0">
      <section>
        <Navbar />
      </section>
      <section className="">
        <Hero movie={movie} />
      </section>
      <section className=" px-1 sm:py-5 py-4 ">
        <FeaturedMovies movie={movie} />
      </section>
      <section className="">
        <Footer />
      </section>
    </main>
  );
}
