"use client";
import React, { useEffect, useState,Suspense } from "react";
import { movie, series } from "@/types/intefaces";
import { useMyContext } from "@/context/context";
import MovieCard from "./MovieCard";
import SeriesCardList from "./SeriesCardList";
import { SearchMovieQuery } from "@/utility/SearchQuery";
const SearchMovie = () => {
  const { lastSearch, setlastSearch } = useMyContext();
  const [isSaved, setisSaved] = useState(false);
  const [query, setquery] = useState<string | null>(null);
  const [moviesQuery, setMoviesQuery] = useState<movie[] | series[]>(null);
  const [seriesQuery, setSeriesQuery] = useState<movie[] | series[]>(null);
  const [SearchType, setSearchType] = useState('movie')

  const HandleChange = (e) => {
    setquery(e.target.value);
    console.log(query);
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const res = await SearchMovieQuery(query,SearchType);
    
    if (res && res.results) {
      setMoviesQuery(res.results);
      setlastSearch({query:query,list:res.results,type:SearchType})
    } else {
      setMoviesQuery(null);
      setlastSearch({query:'',list:[],type:''})
    }
  };
  useEffect(() => {
    if(lastSearch.query && lastSearch.list){
      setSearchType(lastSearch.type)
      setMoviesQuery(lastSearch.list);
      setquery(lastSearch.query)
    }
    return () => {
     
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className="w-full">
      <h1 className="w-full max-w-lg mx-auto font-bebas text-2xl flex gap-3">
        <span
        onClick={()=>{setMoviesQuery(null);setSearchType('movie')}} 
        className={`${SearchType === 'movie' && 'border-b-2 border-blue-600/80'} transition-all`}>Peliculas</span> 
        <span 
         onClick={()=>{setMoviesQuery(null);setSearchType('series')}} 
        className={`${SearchType === 'series' && 'border-b-2 border-blue-600/80'} transition-all`}>Series</span>  </h1>
      <form onSubmit={HandleSubmit} className="max-w-lg mx-auto mt-10">
        <div className="mb-5">
          <label
            htmlFor="movie"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nombre de la pelicula
          </label>
          <input
            type="text"
            id="movie"
            value={query || ""}
            onChange={HandleChange}
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ej. Spiderman"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Buscar
        </button>
      </form>
      <div
        className={`w-full ${
          moviesQuery && moviesQuery.length
            ? " max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-2 gap-x-2 justify-items-center "
            : ''
        } mt-10 `}
      >
        <Suspense fallback={'loading'} >
        {moviesQuery && SearchType === 'movie'  ? (
          moviesQuery.map((item) => <MovieCard key={item.id} movie={item} />)
        ) : (
        moviesQuery && SearchType === 'series'  ? moviesQuery.map((item) => <SeriesCardList key={item.id} serie={item} />)
       :<p className="w-full max-w-lg font-bebas text-2xl "></p> )}
       {moviesQuery && !moviesQuery.length && <p className="w-full max-w-lg font-bebas text-2xl mx-auto">No hay resultados</p>}
      </Suspense></div>
    </div>
  );
};

export default SearchMovie;
