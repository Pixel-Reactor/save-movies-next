"use client";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  SetStateAction,
  useEffect,
} from "react";
import { getCookie, setCookie } from "cookies-next";
import SetCookie from "@/utility/SetCookie";
import { movie,series } from "@/types/intefaces";
import VisitRegister from "@/utility/VisitRegister";
interface MyContextData {
  dark: boolean;
  setdark: React.Dispatch<SetStateAction<boolean>>;
  movieList: movie[] | null;
  serieList: series[] | null;
  setmovieList: React.Dispatch<SetStateAction<movie[]>>;
  setserieList: React.Dispatch<SetStateAction<series[]>>;
  lastSearch: { query: string; list: any[];type:string };
  setlastSearch: React.Dispatch<SetStateAction<{ query: string; list: [],type:string }>>;
}

const MyContext = createContext<MyContextData | undefined>(undefined);

export function MyContextProvider({ children }: { children: ReactNode }) {
  const [dark, setdark] = useState(false);
  const [movieList, setmovieList] = useState<movie[]>([]);
  const [serieList, setserieList] = useState<series[]>([]);
  const [lastSearch, setlastSearch] = useState({ query: "", list: [] ,type:''});

  useEffect(() => {
   

    console.log(movieList);
    if (movieList.length) {
      const ListString = JSON.stringify(movieList);
      localStorage.setItem("movies", ListString);
    }

    return () => {
      return;
    };
  }, [movieList]);
  useEffect(() => {
   

    console.log(serieList);
    if (serieList.length) {
      const ListString = JSON.stringify(serieList);
      localStorage.setItem("series", ListString);
    }

    return () => {
      return;
    };
  }, [serieList]);
  useEffect(() => {
    SetCookie();
    const handleBeforeUnload = (e: any) => {
      VisitRegister();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    const Movielist = localStorage.getItem("movies");
    const Serieslist = localStorage.getItem("series");
    if (Movielist) {
      const parseList = JSON.parse(Movielist);

      setmovieList(parseList);
    } else {
      console.log("no hay ");
    }
    if (Serieslist) {
      const parseList = JSON.parse(Serieslist);

      setserieList(parseList);
    } else {
      console.log("no hay ");
    }
    return () => {
      // Clean up the event listener when the component is unmounted.
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MyContext.Provider
      value={{
        dark,
        setdark,
        setmovieList,
        movieList,
        lastSearch,
        setlastSearch,
        serieList,
        setserieList
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error("useMyContext has to be used inside MyContext provider");
  }
  return context;
}
