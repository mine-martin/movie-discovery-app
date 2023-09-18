import React, { useState } from "react";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";
import MovieCard from "../Featured/MovieCard";

const MovieSearch = () => {
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);
  // const [movie, setMovie] = useState(null);
  const [movie, setMovie] = useState<any>(null); // Explicitly specify 'any' type here

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/movie?query=${term}&include_adult=false&language=en-US&page=1`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmQ4YzhkZjRjZThiY2ZkYmY3MDU0ZjhmMDY0OGZjNiIsInN1YiI6IjY0ZmVhYjE0ZTBjYTdmMDEwZGU5NDRlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VuqL6ISDMxgNuq3j4pDv3RXhEb025TlipXb6eO5B5qI",
    },
  };

  const searchMovie = async () => {
    try {
      setLoading(true);
      const response = await axios.request(options);
      const firstResult = response.data.results[0];

      if (firstResult) {
        // If there's a result, set the first movie found.
        setMovie(firstResult);
      } else {
        // If no results are found, reset the movie state.
        setMovie(null);
      }
    } catch (error) {
      console.error("Error searching for the movie", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-2 p-2 lg:border lg:border-white rounded-lg text-white sm:w-[20%]">
      <input
        type="text"
        placeholder="Search for a movie..."
        className="sm:flex-1 max-sm:w-full text-base leading-normal text-white pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-white max-sm:rounded-full bg-inherit white-placeholder"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button
        className="flex max-sm:justify-end max-sm:absolute max-sm:mt-6 max-sm:mr-[100px] max-sm:w-full font-bold xl:w-[16px] xl:h-[16px]"
        onClick={searchMovie}
        // disabled={loading}
      >
        <AiOutlineSearch />
      </button>

      <div className="absolute mt-[40rem]">
        {movie && <MovieCard data={movie} id={movie.id} />}
      </div>
    </div>
  );
};

export default MovieSearch;
