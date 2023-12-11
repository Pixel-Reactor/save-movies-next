import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='bg-zinc-950/90 w-full flex flex-col mt-10 font-bebas text-center p-3'>
    <p>sitio desarrollado por <br /> <Link href={'https://www.pixel-reactor.com'}>www.pixel-reactor.com</Link></p>
    <p>powered by  <br /><Link href={'https://www.themoviedb.org/'}>ThemovieDB API</Link> </p>
      
    </div>
  )
}

export default Footer
