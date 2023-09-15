"use client";

import Sidebar from "@/components/Sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

const MoviePage = ({ params: { movieid, runtime } }: any) => {
  return (
    <section className="movie-overview max-lg:flex-col">
      <Sidebar />
      <MovieCard />
    </section>
  );
};

export default MoviePage;
