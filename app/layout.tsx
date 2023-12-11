import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { MyContextProvider } from "../context/context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Watch it!",
  description: "Save your movies to watch later",
 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MyContextProvider>
      <html lang="es" >
        <body className='dark h-full w-full min-h-screen bg-zinc-50 '>
          <main  className="bg-zinc-900 dark:text-zinc-50 h-full   w-full min-h-screen "  >
          <Header />
          <NavBar />
          {children}
          <Footer />
          </main>
        </body>
      </html>
    </MyContextProvider>
  );
}
