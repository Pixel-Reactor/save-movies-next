"use client";
import React,{useEffect,useState} from "react";
import { movie } from "@/types/intefaces";
import { useMyContext } from "@/context/context";
import { IoMdShare } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

import { FaCheck } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";

const HanldeButtons = ({movie}:{movie:movie}) => {
    const [isSaved, setisSaved] = useState(false);
    const {movieList,setmovieList} = useMyContext();
    const SaveMovie = () => {
        if (movieList) {
          if (!movieList.some((item: movie) => item.id === movie.id)) {
            setmovieList((oldArray: movie[] | null) => [...(oldArray || []), movie]);
          }else{return }
        } 
      };
   useEffect(() => {
 if(movieList ){
    !movieList.some((item: movie) => item.id === movie.id) ?  setisSaved(false) : setisSaved(true)
  
 }else{
   
 }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [movieList])
 
  return (
    <div className="flex ">
      <button
       onClick={() =>
        window.open(
          `https://api.whatsapp.com/send?text=${encodeURIComponent(`https://movie.pixel-reactor.com/movie/${movie.id}`)}`,
          "_blank"
        )
        }
        type="button"
        className="py-1.5 flex items-center justify-center gap-2 px-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
       <span><FaWhatsapp /></span> <p>Compartir</p>
      </button>
      <button
        onClick={() => SaveMovie()}
        type="button"
        disabled={isSaved}
        className="py-1.5 flex items-center gap-2 px-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
       {isSaved ? <>  <span><FaCheck /></span> <p>En tu lista</p></> : <>  <span><CiSaveDown2 /></span> <p>Guardar en tu lista</p></>} 
      </button>
    </div>
  );
}


export default HanldeButtons;
