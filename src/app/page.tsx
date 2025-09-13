"use client"
import TopNavbar from "@/components/ui/navigationBars/topNav"; // Adjust the path as needed
import CarouselMain from "@/components/ui/carousels/carouselMain";
import { use } from "react";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[1px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="absolute top-0 left-0 w-[100vw] h-inherit z-20">
      <TopNavbar />
      </div>
      <main className="gap-[32px] row-start-2 grid grid-rows-[800px_100vh_100vh_100vh_100vh] h-auto w-full bg-amber-200/60">
        <div className="row-start-1 flex flex-col w-full h-full items-">
          <div className="flex flex-row gap-2 w-full h-[50%]">
            <div className="flex items-center h-[70%] w-[40%]"> <div className=" h-full w-full bg-white"></div> </div>
            <div className="flex gap-2 w-[60%]">
            <CarouselMain />
            </div>
          </div>
          <div>
            <div className="relative h-[70%] w-[60%]"> <div className=" absolute inset-0 h-full w-full bg-white"></div> </div>
          </div>
        </div>
        </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          /> */}
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          /> */}
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          /> */}
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
