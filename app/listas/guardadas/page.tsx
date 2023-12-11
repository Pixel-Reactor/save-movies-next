"use client";
import React,{useState} from "react";
import { useMyContext } from "@/context/context";
import MovieCardList from "@/components/MovieCardList";
import SeriesCardList from "@/components/SeriesCard";
import { movie, series } from "@/types/intefaces";
const SavedMovies = () => {
  const { movieList, setmovieList,serieList,setserieList } = useMyContext();
  const [SearchType, setSearchType] = useState('movie')

  return (
    <div className="w-full min-h-screen">
       <h1 className="w-full max-w-lg mx-auto font-bebas text-2xl py-10 flex gap-3">
        <span
        onClick={()=>{setSearchType('movie')}} 
        className={`${SearchType === 'movie' && 'border-b-2 border-blue-600/80'} transition-all`}>Peliculas</span> 
        <span 
         onClick={()=>{setSearchType('series')}} 
        className={`${SearchType === 'series' && 'border-b-2 border-blue-600/80'} transition-all`}>Series</span>  </h1>
      <div className={`w-full ${movieList && movieList.length ? 'max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-2 gap-x-2 justify-items-center ' : ''} `}>
        {movieList && movieList.length && SearchType === 'movie' ? (
          movieList.map((item: movie) => (
            <MovieCardList key={item.id} movie={item} />
          ))
        ) : serieList && serieList.length && SearchType === 'series' ? (
          serieList.map((item: series) => (
            <SeriesCardList key={item.id} serie={item} />
          ))
        ) : ''}
      </div>
    </div>
  );
};

export default SavedMovies;
