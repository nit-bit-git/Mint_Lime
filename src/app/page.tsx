"use client"
import TopNavbar from "@/components/ui/navigationBars/topNav"; // Adjust the path as needed
import CarouselMain from "@/components/ui/carousels/carouselMain";
import { Boxes } from "@/components/ui/hero/bg";
import { TagLine } from "@/components/ui/hero/tagLine";
import { Line1 } from "@/components/ui/hero/typeWriter";
import { Marquee } from "@/components/ui/hero/marquee";
import { WhoAreWe } from "@/components/ui/aboutUs/heading1";
import { WhoUsContent } from "@/components/ui/aboutUs/para1";
import { MintLimeIllustration } from "@/components/ui/aboutUs/placeholder1";
import { WhyChooseUsCards } from "@/components/ui/aboutUs/placeholder2";
import { WhyUs } from "@/components/ui/aboutUs/heading2";
import { WeDo } from "@/components/ui/weDo/writeup";
import { WeDoCards } from "@/components/ui/weDo/imagesHolder";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[1px_1fr_100px] items-center justify-items-center min-h-screen p-8 pb-20 gap-10 sm:p-20 overflow-clip">
      <div className="absolute top-0 left-0 w-[100vw] h-inherit z-20">
      <TopNavbar />
      </div>
      <main className="row-start-2 grid grid-rows-[800px_1fr_250px_200vh_250px_100vh_100vh] h-auto w-full">
        <div className="row-start-1 flex flex-col w-full h-full items-center">
          <div className="absolute top-0 w-full h-screen z-0 overflow-hidden">
              <div className= "relative w-full oveflow-clip" style={{
                  transform: `translate(20%,40%) skewX(-20deg) scale(1.2) skewY(2deg) rotate(0deg) translateZ(0)`,
              }}>
                <Boxes className="flex w-full h-full"/>
              </div>
          
          </div>
          <div className="flex flex-row w-full items-center-safe justify-between p-2">
            <div className="flex flex-col w-[40%] gap-2 z-10 p-5"> 
                <TagLine className=" rounded-xl p-5  bg-slate-500/20 " />
                </div>
            <div className="flex relative gap-2 w-[60%]">
            <CarouselMain />
            </div>
          </div>
          <div className="flex flex-row w-inherit justify-center z-10">
                <Line1 className="rounded-xl p-5 bg-slate-500/20 "/>
          </div>
         <div className="relative w-full h-inherit z-10">
          <div className="absolute flex items-center-safe left-[-80] w-screen h-60 bg-white">
            <div className="flex flex-row justify-center items-center  ">
              <Marquee />
            </div>  
          </div>
        </div>
        </div>
        <div className="row-start-2 mt-10 relative h-[150vh] w-full">
              <div className="absolute inset-0  bg-gray-100/20 w-full h-full rounded-3xl blur-3xl"></div>
              <div className="absolute inset-0  bg-gray-100/20 w-full h-full rounded-bl-3xl">
              <div className=" flex mt-5 px-8 w-full flex-1 items-center justify-center">
                <div className="bg-black grid grid-cols-[60%_40%] py-5 w-full ">
                  <div className="col-start-1 col-end-1 p-10 flex items-center gap-10">
                    <div className="max-w-full">
                      <WhoAreWe />
                    </div>
                    <span className="flex w-full h-full items-center justify-center-safe">
                      <WhoUsContent />
                    </span>
                  </div>
                  <div className="col-start-2 flex flex-col items-center justify-center-safe">
                    <MintLimeIllustration />
                  </div>
                </div>
              </div>
              <div className=" flex px-8 w-full flex-1">
                <div className="bg-black flex flex-col items-center-safe justify-center h-full w-full pb-10 rounded-b-[70%] ">
                  <WhyUs className="p-10 flex items-center justify-center-safe" />
                 <WhyChooseUsCards className="flex flex-row items-center-safe justify-center h-full w-full "/>
                </div>
              </div>
              </div>     
        </div>
        <div className="row-start-3 relative h-full w-full">
          <div className="absolute top-5 bg-gray-100/10 w-full h-full [clip-path:polygon(0_50%,100%_0,100%_100%,0_100%)]"></div>
          <div className="absolute inset-0 bg-gray-100/20 w-full h-full [clip-path:polygon(0_40%,100%_0,100%_100%,0_100%)]"></div>     
        </div>
        <div className="row-start-4 my-5 grid grid-cols-2 relative h-full w-full">
          <div className="absolute inset-0 bg-gray-100/20 w-full h-full"></div>
          <WeDoCards className="col-start-1 flex flex-col items-center justify-center m-10" />
          <WeDo className="col-start-2 flex flex-col items-center justify-center" />
        </div>
        <div className="row-start-5 my-5 relative h-full w-full">
          <div className="absolute inset-0  bg-gray-100/10 w-full h-full [clip-path:polygon(0_0,100%_0,100%_50%,0_100%)]"></div>
          <div className="absolute top-5 bg-gray-100/20 w-full h-full [clip-path:polygon(0_0,100%_0,100%_60%,0_100%)]"></div>
        </div>

        </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center bg-slate-200 w-full h-full text-black">
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
