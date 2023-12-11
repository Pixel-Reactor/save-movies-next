export interface movie{
   adult:boolean;
   backdrop_path:string;
   belongs_to_collection:{} | null;
   budget:number;
   genres:[];
   homepage:string;
   id:number;
   imdb_id:string;
   original_language:string;
   original_title:string;
   overview:string;
   popularity:number;
   poster_path:string;
   production_companies:[];
   production_coutries:[];
   release_date:string;
   revenue:number;
   runtime:number;
   spoken_languages:[];
   status:string;
   tagline:string;
   title:string ;
   video:boolean;
   vote_average:number;
   vote_count:number;
}

export interface series{
   adult:boolean;
   backdrop_path:string;
   belongs_to_collection:{} | null;
   budget:number;
   genres:[];
   homepage:string;
   id:number;
   imdb_id:string;
   original_language:string;
   original_title:string;
   overview:string;
   popularity:number;
   poster_path:string;
   production_companies:[];
   production_coutries:[];
   release_date:string;
   revenue:number;
   runtime:number;
   spoken_languages:[];
   status:string;
   tagline:string;
  name:string ;
   video:boolean;
   vote_average:number;
   vote_count:number;
}