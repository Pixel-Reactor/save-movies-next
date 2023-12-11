import React from "react";
import MovieCard from "@/components/MovieCard";
import { movie } from "@/types/intefaces";
const GetPopulars = async () => {

  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          `Bearer ${process.env.API_KEY}`,
      },
    }
  );
  const data = await res.json();
  const results = data.results
  return results
};
const Populars = async() => {
 const data = await GetPopulars();
  return (
  <div className="w-full min-h-screen max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-2 gap-x-2 justify-items-center ">
    {data && data.map((item:movie)=>(  <MovieCard key={item.id} movie={item} />))}
  
   </div>)
};

export default Populars;
