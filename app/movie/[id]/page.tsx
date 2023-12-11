/* eslint-disable @next/next/no-img-element */
import React, { Suspense } from "react";
import LoadingPage from "./loading";
import HanldeButtons from "@/components/HanldeButtons";
interface params {
  params: { id: number };
}
const GetMovie = async (id: number) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=es-ES`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    }
  );
  const data = await res.json();

  return data;
};

const GetById = async ({ params }: { params: { id: number } }) => {
  const movie = await GetMovie(params.id);
  return (
    <div className="p-5 w-full">
      <div className="flex flex-col sm:flex-row justify-between border border-zinc-900/60 w-full ">
        <div className="w-full sm:w-60">
          <img 
          className="object-cover"
           src={movie.poster_path? `https://image.tmdb.org/t/p/w500/`+movie.poster_path : '/no-poster.png'}
            alt="Movie poster"
          />
        </div>
        <div className="w-full flex flex-col gap-4 font-bebas p-2 justify-between">
          <p className=" text-4xl ">{movie.title}</p>
          <p className="flex">
            <span>Productora :</span>
            <span className="max-w-[300px]">{movie.production_companies.map((item:{name:string}) => (
              <span key={item.name} className="m-[2px]">{item.name},</span>
            ))}</span>
            
          </p>
          <div >
            <div className="flex items-center gap-2">
              <p>Generos:</p>
              <div className="flex items-center max-w-xs flex-wrap gap-2">
                {movie.genres.map((item:{name:string;id:number}) => (
                  <p
                    className="px-2 py-0.5 bg-blue-600 rounded-lg  "
                    key={item.id}
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <p className="">fecha lanzamiento : {movie.release_date}</p>
          <div>
         <HanldeButtons movie={movie}/>
          </div>
        </div>
      </div>
      <h2 className="mt-5 font-bebas text-2xl">Descripción </h2>
      <p className=" font-barlow text-lg">{movie.overview}</p>
    </div>
  );
};

export default GetById;
