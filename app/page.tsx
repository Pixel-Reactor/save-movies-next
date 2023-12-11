/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col gap-4 items-center w-full max-w-lg mx-auto justify-start p-3">
      <h1 className="font-bebas text-3xl my-10 w-full drop-shadow-white">
        {" "}
        Guarda tus peliculas para ver después.
      </h1>
      <div className="bg-[url('/spiderman.png')] shadow-lg h-64 bg-center bg-cover bg-no-repeat flex w-full max-w-lg mx-auto items-center">
      
        <p className="font-bebas text-4xl h-full w-full p-5 flex items-center justify-center bg-zinc-900/60 drop-shadow-lg ">
         <span className="drop-shadow-white">Peliculas populares o por nombre en el buscador</span> 
        </p>
      </div>
      <div className="bg-[url('/list.png')] shadow-lg h-64 bg-center bg-cover bg-no-repeat flex w-full max-w-lg mx-auto items-center">
      
        <p className="font-bebas text-4xl h-full w-full p-5 flex items-center justify-center bg-zinc-900/60 drop-shadow-lg ">
         <span className="drop-shadow-white">Añade o modifica tu lista</span> 
        </p>
      </div>
      <div className="bg-[url('/share.png')] shadow-lg h-64 bg-center bg-contain bg-no-repeat flex w-full max-w-lg mx-auto items-center">
      
        <p className="font-bebas text-4xl h-full w-full p-5 flex items-center justify-center bg-zinc-900/60 drop-shadow-lg ">
         <span className="drop-shadow-white">Mira los detalles y comparte con tus amigos</span> 
        </p>
      </div>
    </main>
  );
}
