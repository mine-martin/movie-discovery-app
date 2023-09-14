import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const apiKey = process.env.NEXT_PUBLIC_APIKEY;

  const searchMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${term}`
      );
      setResults(response.data.results);
    } catch (error) {
      console.error("No movie with that name", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-2 p-2 lg:border lg:border-white rounded-lg text-white">
      <input
        type="text"
        placeholder="What do you want to watch?"
        className="sm:flex-1 max-sm:w-full text-base leading-normal text-white pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-white max-sm:rounded-full bg-inherit white-placeholder"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <nav className="flex max-sm:justify-end items-center max-sm:w-full font-bold w-[16px] h-[16px]">
        <AiOutlineSearch />
      </nav>
    </div>
  );
};

export default Search;
