/* eslint-disable @next/next/no-img-element */
'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import { movie } from '@/types/intefaces'
import { IoMdClose } from "react-icons/io";
import { IoMdShare } from "react-icons/io";
import { MdInfo } from "react-icons/md";
import { FaWhatsapp } from 'react-icons/fa';
const MovieCard = ({movie}:{movie:movie}) => {
    
  return (
    <div  className='hover:scale-110 hover:z-50 border transition-all border-zinc-900/10 dark:border-zinc-50/20 max-w-[250px] shadow-sm dark:shadow-white/20 relative'>
    <img src={movie.poster_path? `https://image.tmdb.org/t/p/w500/`+movie.poster_path : '/no-poster.png'} alt="Movie poster" />
    
    <div  className='p-2 py-4 font-bebas transition-all  opacity-0 hover:opacity-100  bg-zinc-900/95 absolute top-0 left-0 w-full h-full flex flex-col justify-between '>
        <p className={`${movie.title.length > 15? 'text-2xl' : 'text-4xl'}`}>{movie.title}</p>
        <p className='bg-zinc-900/5 font-barlow max-h-[120px] overflow-hidden bg-gradient-to-b from-zinc-50 via-zinc-50 to-zinc-50/10 bg-clip-text text-transparent'>{movie.overview}</p>
        <div className='flex flex-col gap-2 items-center justify-between w-full'>
        <Link className='w-full' href={`/movie/${movie.id}`} >
        <button type="button" className="py-1.5 px-2 w-full flex items-center justify-center gap-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        <span><MdInfo /></span> Detalles
        </button>
        </Link>
        <Link className='w-full' href={`/movie/${movie.id}`} >
        <button 
         onClick={()=> window.open('https://api.whatsapp.com/send?text=' + encodeURIComponent(`https://movie.pixel-reactor.com`+ `/movie/${movie.id}`), '_blank')} 
        type="button" 
        className="py-1.5 px-2 w-full flex items-center justify-center gap-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
         <span><FaWhatsapp /></span> Compartir
        </button>
        </Link>
       
       
        </div>
       
        
    </div>
    </div>
  )
}

export default MovieCard
