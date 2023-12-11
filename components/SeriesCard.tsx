
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { series} from "@/types/intefaces";
import { IoMdClose } from "react-icons/io";
import { IoMdShare } from "react-icons/io";
import { MdInfo } from "react-icons/md";
import { useMyContext } from "@/context/context";
import { FaWhatsapp } from "react-icons/fa";

const SeriesCardList = ({ serie }: { serie: series }) => {
  const { movieList, setmovieList,serieList,setserieList } = useMyContext();
  const deleteMovie = (id) => {
    const filterList = serieList?.filter((item:series)=>{return item.id !== serie.id})
    setserieList(filterList)
  };
  return (
    <div className=" border border-zinc-900/10 dark:border-zinc-50/20 max-w-[250px] shadow-sm dark:shadow-white/20 relative">
      <img
       src={serie.poster_path? `https://image.tmdb.org/t/p/w500/`+serie.poster_path : '/no-poster.png'}
        alt="Movie poster"
      />

      <div className="p-2 py-4 font-bebas transition-all  opacity-0 hover:opacity-100  bg-zinc-900/95 absolute top-0 left-0 w-full h-full flex flex-col justify-between ">
        <p className={`${serie.name.length > 15 ? "text-2xl" : "text-4xl"}`}>
          {serie.name}
        </p>
        <p className="bg-zinc-900/5 font-barlow max-h-[120px] overflow-hidden bg-gradient-to-b from-zinc-50 via-zinc-50 to-zinc-50/10 bg-clip-text text-transparent">
          {serie.overview}
        </p>
        <div className="flex flex-col gap-2 items-center justify-between w-full">
          <Link className="w-full" href={`/series/${serie.id}`}>
            <button
              type="button"
              className="py-1.5 px-2 w-full flex items-center justify-center gap-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <span>
                <MdInfo />
              </span>{" "}
              Detalles
            </button>
          </Link>
          <Link className="w-full" href={`/series/${serie.id}`}>
            <button
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send?text=" +
                    encodeURIComponent(
                      `https://movie.pixel-reactor.com` + `/series/${serie.id}`
                    ),
                  "_blank"
                )
              }
              type="button"
              className="py-1.5 px-2 w-full flex items-center justify-center gap-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <span>
                <FaWhatsapp />
              </span>{" "}
              Compartir
            </button>
          </Link>
        </div>
      </div>
      <div 
      onClick={()=>deleteMovie(serie.id)}
      className="absolute top-[-8px] right-[-8px] p-1 border-2 border-zinc-50/80 rounded-full bg-red-600/80 flex items-center justify-center font-bold text-xl">
        <IoMdClose />
      </div>
    </div>
    
  );
};

export default SeriesCardList;
