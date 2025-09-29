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
import { OurMission } from "@/components/ui/aboutUs/heading3";
import { OurMissionContent } from "@/components/ui/aboutUs/para3";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Footer } from "@/components/ui/footer/footer";
import { Hills } from "@/components/ui/footer/hill";

export default function Home(): React.ReactElement {
  // State management
  const [navVisible, setNavVisible] = useState<boolean | null>(true);

  return (
    <div className="relative min-h-screen max-w-screen mx-auto flex flex-col font-sans overflow-clip items-center space-y-8  bg-gradient-to-b from-black via-gray-50/30 to-black ">
      {/* Navigation Layer */}
      <AnimatePresence>
        {navVisible !== null && (
          <motion.nav
            className="fixed top-5 w-full h-auto z-50 max-w-7xl"
            initial={{ 
              width: navVisible ? 0 : "100vw", 
              opacity: 0 
            }}
            animate={{ 
              width: navVisible ? "100vw" : 0, 
              opacity: navVisible ? 1 : 0 
            }}
            exit={{ 
              width: 0, 
              opacity: 0 
            }}
            transition={{ 
              duration: 0.4, 
              ease: "easeInOut" 
            }}
          >
            <TopNavbar />
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Background Effects Layer */}
       <div className=" hidden lg:block absolute top-0 w-full h-[650px] lg:h-[750px] z-0 overflow-hidden pointer-events-auto">
              <div className= " lg:block relative w-full oveflow-clip" 
              style={{
                  transform: `translate(20%,40%) skewX(-20deg) scale(1.2) skewY(2deg) rotate(0deg) translateZ(0)`,
              }}>
                <Boxes className="flex w-full h-full  "/>
              </div>
              {/* Marquee Section */}
          <div className="absolute w-full h-fit z-10 bottom-0 bg-amber-50">
          
            <div className="flex justify-center items-center h-full px-4 ">
              <Marquee />
          </div>
        </div>
          </div>  
        
      {/* Main Content Grid */}
      <main className="relative z-10 flex flex-col gap-4 2xl:grid 2xl:auto-rows-max  2xl:gap-8 w-full min-h-screen pt-20 pointer-events-none">
        
        {/* Hero Section */}
        <section 
          className="relative flex flex-col w-full min-h-[600px] lg:min-h-[800px] items-center overflow-clip"
          aria-label="Hero section"
        >
          <div className="flex flex-col lg:flex-row w-full h-full items-center justify-between lg:items-start lg:bg-transparent  pointer-events-none py-2 lg:p-6 lg:p-8 gap-4 lg:gap-8">
            {/* Hero Text Content */}
            <div className=" lg:bg-white/10 rounded-2xl flex flex-col items-center flex-1 w-full lg:max-w-[40%] order-2 lg:order-1 gap-2 lg:gap-6 z-20 py-4 lg:p-8 pointer-events-none">
              <TagLine className=" w-2/3 lg:w-full rounded-xl lg:rounded-2xl p-2 lg:p-6 backdrop-blur-sm shadow-lg border border-white/20 pointer-events-none" />
              <div className="flex flex-col justify-center w-full h-full z-20">
                <Line1 className="rounded-xl lg:rounded-2xl p-2 lg:p-6 w-full h-full backdrop-blur-sm shadow-lg lg:border border-white/20" />
              <div className=" w-full h-fit z-10 bg-amber-50 lg:hidden">
                  <div className="flex justify-center items-center h-full">
                    <Marquee />
                </div>
              </div>
              </div>
              
            </div>

            {/* Hero Carousel */}
            <div className="flex relative w-full lg:max-w-[60%] order-1 lg:order-2 z-30 h-full lg:h-1/2 pointer-events-auto overflow-visible">
              <CarouselMain />
            </div>
          </div>
        </section>
        {/* About Section */}
        <section 
          className="relative flex flex-col min-h-[150vh] lg:min-h-[200vh] w-full pointer-events-auto"
          aria-label="About us section"
        >
          {/* Background Layers */}
            
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100/10 via-blue-50/20 to-gray-100/30 w-full h-full rounded-xl lg:rounded-3xl blur-sm lg:blur-2xl " />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent w-full h-full rounded-b-xl lg:rounded-b-3xl lg:[clip-path:polygon(0_20%,100%_15%,100%_100%,0_100%)]" />

          <div className="relative z-10 space-y-8 lg:space-y-16 p-4 lg:p-8">
            {/* Who Are We */}
            <div className="flex flex-col lg:flex-row w-full items-center gap-4 lg:gap-8 ">
              <div className="w-full lg:w-auto">
                <WhoAreWe />
              </div>
              <WhoUsContent className="flex w-full lg:max-w-[60%] h-full items-center justify-center" />
              <div className="hidden lg:flex flex-row w-full lg:w-fit justify-center">
                <MintLimeIllustration />
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="flex flex-col items-center justify-center space-y-8 lg:space-y-10">
              <div className="w-full max-w-6xl  rounded-[30px] lg:rounded-t-[70px] bg-white/50 backdrop-blur-sm border-t border-white/20 shadow-xl">
                <WhyUs className="p-8 flex items-center justify-center" />
                <WhyChooseUsCards />
              </div>
            </div>

            {/* Our Mission */}
            <div className="flex flex-col items-center justify-center lg:space-y-8">
              <div className="w-full max-w-6xl mx-auto rounded-[30px] lg:rounded-b-[70px] bg-gradient-to-b from-slate-500/60 to-slate-900/60 backdrop-blur-sm border border-white/30 shadow-xl">
                <OurMission className="p-4 lg:p-5 flex items-center justify-center bg-black" />
                <OurMissionContent className="flex flex-col lg:flex-1  px-4 lg:px-8  lg:pb-16 gap-4 lg:gap-0" />
              </div>
            </div>
          </div>
        </section>

        {/* Decorative Transition */}
        <section 
          className="hidden lg:block relative lg:h-32 w-full overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute top-0 left-0 bg-gradient-to-tl from-indigo-100/20 to-transparent w-3/5 h-full lg:[clip-path:polygon(0_0,100%_0,0%_40%,0_40%)] backdrop-blur-sm" />            
     
         <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-blue-100/20 w-full h-full lg:[clip-path:polygon(0_50%,100%_0,100%_100%,0_100%)] backdrop-blur-sm" />
          <div className="absolute top-4 lg:top-8 bg-gradient-to-br from-blue-100/30 to-purple-100/30 w-full h-full lg:[clip-path:polygon(0_50%,100%_0,100%_100%,0_100%)] backdrop-blur-sm" />
          </section>

        {/* Services Preview */}
        <section 
          className="relative h-fit px-4 lg:h-full w-full"
          aria-label="What we do section"
        >
          <WeDo className="h-full w-full lg:bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500 rounded-2xl lg:rounded-3xl shadow-2xl" />
        </section>

        {/* Services Detail */}
        <section 
          className="relative min-h-fit max-h-screen lg:min-h-screen  w-full flex flex-col py-8 lg:py-16 pointer-events-auto"
          aria-label="Services section"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100/20 via-white/10 to-gray-100/20 w-full h-full rounded-xl lg:rounded-3xl" />
          <div className="relative z-10 flex flex-col h-full w-full p-2 lg:p-8">
            <ServiceComponent className="flex flex-col gap-4 lg:gap-12 h-full w-full" />
          </div>
        </section>

        {/* Portfolio Transition */}
        <section 
          className="hidden lg:block relative lg:h-32 w-full overflow-hidden my-4 lg:my-8 "
          aria-hidden="true"
        >
          <div className="absolute top-8 bg-gradient-to-br from-purple-100/20 to-blue-100/20 w-full h-full lg:[clip-path:polygon(0_0,100%_0,100%_40%,0_100%)] backdrop-blur-sm" />
          <div className="absolute bg-gradient-to-br from-blue-100/30 to-purple-100/30 w-full h-full lg:[clip-path:polygon(0_0,100%_0,100%_40%,0_100%)] backdrop-blur-sm" />
          <div className="absolute -bottom-2 lg:-bottom-4 right-0 bg-gradient-to-tl from-indigo-100/20 to-transparent w-3/5 h-full lg:[clip-path:polygon(0_100%,100%_55%,100%_100%,0_100%)] backdrop-blur-sm" />            
        </section>

        {/* Portfolio Section */}
        <section 
          className="relative min-h-fit lg:min-h-screen w-full flex flex-col p-2 lg:p-4 pointer-events-auto"
          aria-label="Portfolio section"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-100/90 w-full h-full rounded-xl lg:rounded-t-3xl backdrop-blur-sm" />
          <div className="relative z-10 h-full w-full px-4 lg:px-0 ">
            <Portfolio setNavVisible={setNavVisible} />
          </div>
        </section>

        {/* Testimonials & Social */}
        <section 
          className="relative mt-20 min-h-[50vh] lg:mt-0 lg:min-h-screen w-full flex flex-col my-8 lg:my-16 pointer-events-auto"
          aria-label="Testimonials section"
        >
          <div className="h-full w-full flex  flex-col items-center justify-center px-4 lg:px-0">
            <Testimonials />
          </div>
          <Hills />
        </section>
      </main>
      <div className="relative w-full h-inherit z-20 text-black">
      {/* Footer content */}
        <Footer className="relative z-10 flex items-center justify-center w-full text-black pt-16 lg:pt-24" />
      </div>
</div>
  );
}