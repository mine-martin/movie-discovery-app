"use client";

import Sidebar from "@/components/Sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import axios from "axios";
import SkeletonLoader from "../SkeletonLoader";

const MoviePage = ({ params: { movieid, runtime } }: any) => {
  const [movieDetails, setMovieDetails] = useState([]);
  const fetchData = async () => {
    if (!movieid) return;

    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movieid}?language=en-US`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmQ4YzhkZjRjZThiY2ZkYmY3MDU0ZjhmMDY0OGZjNiIsInN1YiI6IjY0ZmVhYjE0ZTBjYTdmMDEwZGU5NDRlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VuqL6ISDMxgNuq3j4pDv3RXhEb025TlipXb6eO5B5qI",
      },
    };

    try {
      const results = await axios.request(options);

      setMovieDetails(results.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [movieid]);

  return (
    <section className="movie-overview max-lg:flex-col">
      <Sidebar />
      {Object.keys(movieDetails).length > 0 ? (
        <MovieCard movieDetails={movieDetails} id={movieid} />
      ) : (
        <SkeletonLoader />
      )}
    </section>
  );
};

export default MoviePage;
