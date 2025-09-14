"use client"
import TopNavbar from "@/components/ui/navigationBars/topNav"; // Adjust the path as needed
import CarouselMain from "@/components/ui/carousels/carouselMain";
import { use } from "react";
import { TagLine } from "@/components/ui/hero/tagLine";
import { Heading } from "@/lib/componentUtils/text";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[1px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="absolute top-0 left-0 w-[100vw] h-inherit z-20">
      <TopNavbar />
      </div>
      <main className="gap-[32px] row-start-2 grid grid-rows-[800px_100vh_100vh_100vh_100vh] h-auto w-full">
        <div className="row-start-1 flex flex-col w-full h-full items-">
          <div className="flex flex-row w-full items-center-safe justify-between p-2">
            <div className="flex flex-col w-[40%] gap-2 z-10 p-5"> 
                <TagLine className=" rounded-xl p-5  bg-slate-500/20 " />
                <button className="rounded-xl p-5 max-w-50 bg-slate-500/60 hover:bg-slate-700/60 transition text-xl">Get In Touch</button>
            </div>
            <div className="flex relative gap-2 w-[60%]">
            <CarouselMain />
            </div>
           </div>

          <div>
            <div className="flex w-full "> <div className="flex flex-row w-full  justify-center">
              <div>
                <Heading level={1} size="3xl" color=" text-white" className=" z-10">
                  We {"{"} 
                  <span className="text-blue-500"> Design </span> . 
                  <span className="text-green-500"> Code </span> . 
                  <span className="text-red-500"> Automate </span>  
                  {"}"} {"=>"} Your Success STORY
               </Heading>
              </div>
              </div>
            </div>
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
