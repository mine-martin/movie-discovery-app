"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "@/components/Sidebar/Sidebar";
import MovieCard from "../MovieCard";
import SkeletonLoader from "../SkeletonLoader";

const MoviePage = ({ params: { movieid, runtime } }: any) => {
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (!movieid) return;

      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${movieid}?language=en-US`,
        headers: {
          accept: "application/json",
          Authorization: "Bearer YOUR_API_KEY_HERE",
        },
      };

      try {
        const { data: results } = await axios.request(options);
        setMovieDetails(results);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchData();
  }, [movieid]);

  const renderContent = () => {
    if (Object.keys(movieDetails).length === 0) {
      return <SkeletonLoader />;
    } else {
      return <MovieCard movieDetails={movieDetails} id={movieid} />;
    }
  };

  return (
    <section className="movie-overview max-lg:flex-col">
      <Sidebar />
      {renderContent()}
    </section>
  );
};

export default MoviePage;
