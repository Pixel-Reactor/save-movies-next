'use client'
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
    const [selected, setselected] = useState('home')
    return (

<nav className="w-full  mx-auto p-2 flex justify-start items-center max-w-lg">
    
    <ul className="w-full p-2 flex justify-start items-center gap-2 font-bebas">
        <li className={`${selected === 'home' && 'bg-blue-500/10 border-b'}   p-1 rounded-sm px-4 transition-all`}><Link href='/' onClick={()=>setselected('home')} >Home</Link></li>
        <li className={`${selected === 'yours' && 'bg-blue-500/10 border-b'} p-1 px-4  rounded-sm transition-all`}><Link onClick={()=>setselected('yours')} href='/listas/guardadas'>Tus peliculas</Link></li>
        <li className={`${selected === 'populars' && 'bg-blue-500/10 border-b'}  p-1 px-4  rounded-sm transition-all`}><Link onClick={()=>setselected('populars')} href='/populares'>Populares</Link></li>
        <li className={`${selected === 'search' && 'bg-blue-500/10 border-b'}  p-1 px-4  rounded-sm transition-all`}><Link onClick={()=>setselected('search')} href='/buscar'>Buscar</Link></li>
    </ul>
</nav>

    )
}