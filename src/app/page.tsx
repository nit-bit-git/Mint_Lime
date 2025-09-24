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
import ServiceComponent from "@/components/ui/services/servicesComponent";
import { Portfolio } from "@/components/ui/portfolio/projectTiles";
import { Testimonials } from "@/components/ui/testimonials/testimonialCards";
import { WeDo } from "@/components/ui/weDo/writup";
import { LinkedInIcon, InstagramIcon, XIcon } from "@/components/icons/icons";import { OurMission } from "@/components/ui/aboutUs/heading3";
import { OurMissionContent } from "@/components/ui/aboutUs/para3";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
;

export default function Home() {
 const [navVisible, setNavVisible] = useState< boolean | null>( true );

  return (
    <div className="relative font-sans grid grid-rows-[1fr_100px] items-center justify-items-center pb-20 sm:p-20 overflow-clip">
      <AnimatePresence>
        {navVisible !== null && (
          <motion.div
            className="absolute top-0 left-0 w-[100vw] h-inherit z-100"
            initial={{ width: navVisible ? 0 : "100vw", opacity: 0 }}
            animate={{ width: navVisible ? "100vw" : 0, opacity: navVisible ? 1 : 0 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <TopNavbar />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-0 w-full h-[800px] z-10 overflow-hidden ">
              <div className= "relative w-full oveflow-clip" style={{
                  transform: `translate(20%,40%) skewX(-20deg) scale(1.2) skewY(2deg) rotate(0deg) translateZ(0)`,
              }}>
                <Boxes className="flex w-full h-full "/>
              </div>
          <div className="absolute w-full h-fit z-10 bottom-0">
          <div className="absolute bottom-0 z-10 flex items-center-safe w-full h-60 bg-white">
            <div className="flex flex-row justify-center items-center  ">
              <Marquee />
            </div>  
          </div>
        </div>
          </div>
      <main className="row-start-1 grid grid-rows-[800px_auto_250px_1fr_100vh_250px_150vh_100vh] h-auto gap-2 w-full">
        <div className="relative row-start-1 flex flex-col w-full h-full items-center overflow-clip">
          <div className="flex flex-row w-full items-center-safe justify-between p-2 ">
            <div className="flex flex-col w-[40%] gap-2 z-20 p-5"> 
                <TagLine className=" rounded-xl p-5  bg-slate-500/20 " />
                  <div className="flex flex-row w-full justify-center z-20">
                <Line1 className="rounded-xl p-5 w-full bg-slate-500/20 "/>
            </div>
                </div>
            <div className="flex relative gap-2 w-[60%] z-30">
            <CarouselMain />
            </div>
          </div>
        </div>
        <div className="row-start-2 relative flex flex-col h-[200vh] w-full">
              <div className="absolute inset-0  bg-gray-100/20 w-full h-full rounded-3xl blur-3xl"></div>
              <div className="absolute inset-0  bg-gray-100/20 w-full h-full rounded-bl-3xl">
              <div className=" flex flex-row w-full h-auto items-center px-5 relative z-10">
                      <WhoAreWe />
                      <WhoUsContent className="flex max-w-[60%] h-full items-center justify-center-safe" />
                  <div className="flex flex-row  w-fit">
                    <MintLimeIllustration />
                  </div>
              </div>
              <div className=" flex px-8 w-full h-auto items-start relative z-10">
                <div className=" flex flex-col items-center-safe justify-center h-full w-full rounded-b-[70%] ">
                  <WhyUs className="p-10 flex items-center justify-center-safe" />
                 <WhyChooseUsCards className="flex flex-row items-center-safe justify-center h-full w-full "/>
                </div>
              </div>
              <div className="flex px-8 w-full h-auto relative z-10">
                <div className=" flex flex-col items-center-safe justify-center h-full w-full rounded-b-[70%] ">
                  <OurMission className="p-10 flex items-center justify-center-safe" />
                 <OurMissionContent className="flex flex-1 justify-around" />
                </div>
              </div>
              </div>     
        </div>
        <div className="row-start-3 relative h-full w-full">
          <div className="absolute top-5 bg-gray-100/10 w-full h-full [clip-path:polygon(0_50%,100%_0,100%_100%,0_100%)]"></div>
          <div className="absolute inset-0 bg-gray-100/20 w-full h-full [clip-path:polygon(0_40%,100%_0,100%_100%,0_100%)]"></div>     
        </div>
        <WeDo className=" row-start-4 h-full w-full bg-amber-500" />
         <div className="row-start-5 relative mt-10 h-full w-full flex flex-col py-10">
          <div className="absolute inset-0 bg-gray-100/20 w-full h-full"></div>
          <ServiceComponent className="flex flex-col gap-6 h-full w-full" />
        </div>
        <div className="row-start-6 my-5 relative h-full w-full">
          <div className="absolute inset-0  bg-gray-100/10 w-full h-full [clip-path:polygon(0_0,100%_0,100%_50%,0_100%)]"></div>
          <div className="absolute top-5 bg-gray-100/20 w-full h-full [clip-path:polygon(0_0,100%_0,100%_60%,0_100%)]"></div>
          <div className="absolute bottom-[-15] right-0 bg-gray-100/10 w-3/4 h-full [clip-path:polygon(0_100%,100%_65%,100%_100%,0_100%)]"></div>
        </div>
        <div className="row-start-7 relative mt-10 h-full w-full flex flex-col pt-10">
          <div className="absolute inset-0 bg-gray-100/20 w-full h-full"></div>
          <div className=" h-full w-full">
             <Portfolio setNavVisible={setNavVisible} />
          </div>
        </div>
        <div className="row-start-8 relative h-full w-full flex flex-col my-10">
          <div className="h-full w-full">
             <Testimonials />
         
          <div className="flex gap-4">
          <InstagramIcon className="w-6 h-6 text-white" />
          <XIcon className="w-6 h-6 text-white" />
          <LinkedInIcon className="w-6 h-6 text-white" />
          {/* <YouTubeIcon className="w-6 h-6 text-white" /> */}
        </div>  
         </div>
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
