'use server'
export const SearchMovieQuery = async(query:string,type:string) => {
    try {
    const Movieurl =`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=es-ES&page=1`;
    const Seriesurl =`https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=es-ES&page=1`;

     const res = await fetch(type === 'movie'? Movieurl : Seriesurl, {
         method: "GET",
         headers: {
           accept: "application/json",
           Authorization: `Bearer ${process.env.API_KEY}`,
         },
       })
     const data = res.json()
     return data 
    } catch (error) {
        return null
    }
   
   };