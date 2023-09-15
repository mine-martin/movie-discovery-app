"use client";
import Sidebar from "@/components/Sidebar/Sidebar";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Card from "./MovieCard";

function MoviePage({ params: { movieid, runtime } }: any) {
  return (
    <section className="movie-overview max-lg:flex-col">
      <Sidebar />
      <Card />
    </section>
  );
}

export default MoviePage;
