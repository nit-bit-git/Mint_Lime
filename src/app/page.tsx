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
    <div className="relative min-h-screen font-sans overflow-clip bg-gradient-to-b from-black via-gray-50/30 to-black ">
      {/* Navigation Layer */}
      <AnimatePresence>
        {navVisible !== null && (
          <motion.nav
            className="fixed  top-5 md:top-0 left-0 w-full h-auto z-50 md:pointer-events-none"
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
       <div className=" absolute top-0 w-full h-[600px] md:h-[750px] z-0 overflow-hidden pointer-events-auto">
              <div className= "hidden md:block relative w-full oveflow-clip" 
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
      <main className="relative z-10 flex flex-col gap-4 md:grid md:auto-rows-max  md:gap-8 w-full min-h-screen pt-20 pointer-events-none hide-scrollbar overflow-y-scroll">
        
        {/* Hero Section */}
        <section 
          className="relative flex flex-col w-full min-h-[600px] md:min-h-[800px] items-center overflow-clip"
          aria-label="Hero section"
        >
          <div className="flex flex-col md:flex-row w-full items-center justify-between md:bg-transparent  pointer-events-none p-2 md:p-6 lg:p-8 gap-4 md:gap-8">
            {/* Hero Text Content */}
            <div className="flex flex-col w-full md:max-w-[40%] order-2 md:order-1 gap-2 md:gap-6 z-20 p-4 md:p-8 pointer-events-none">
              <TagLine className="rounded-xl md:rounded-2xl p-2 md:p-6 md:bg-white/40 backdrop-blur-sm shadow-lg border border-white/20 pointer-events-none" />
              <div className="flex justify-center w-full z-20">
                <Line1 className="rounded-xl md:rounded-2xl p-2 md:p-6 w-full md:bg-white/30 backdrop-blur-sm shadow-lg md:border border-white/20" />
              </div>
            </div>

            {/* Hero Carousel */}
            <div className="flex relative w-full md:max-w-[60%] order-1 md:order-2 z-30 min-h-fit  ">
              <CarouselMain />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section 
          className="relative flex flex-col min-h-[150vh] md:min-h-[200vh] w-full pointer-events-auto"
          aria-label="About us section"
        >
          {/* Background Layers */}
            
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100/10 via-blue-50/20 to-gray-100/30 w-full h-full rounded-xl md:rounded-3xl blur-sm md:blur-2xl " />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent w-full h-full rounded-b-xl md:rounded-b-3xl md:[clip-path:polygon(0_20%,100%_15%,100%_100%,0_100%)]" />

          <div className="relative z-10 space-y-8 md:space-y-16 p-4 md:p-8">
            {/* Who Are We */}
            <div className="flex flex-col md:flex-row w-full items-center gap-4 md:gap-8 ">
              <div className="w-full md:w-auto">
                <WhoAreWe />
              </div>
              <WhoUsContent className="flex w-full md:max-w-[60%] h-full items-center justify-center" />
              <div className="hidden md:flex flex-row w-full md:w-fit justify-center">
                <MintLimeIllustration />
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="flex flex-col items-center justify-center space-y-8 md:space-y-12">
              <div className="w-full max-w-6xl  rounded-[30px] md:rounded-t-[70px] bg-white/50 backdrop-blur-sm border-t border-white/20 shadow-xl">
                <WhyUs className="p-8 md:p-16 flex items-center justify-center" />
                <WhyChooseUsCards />
              </div>
            </div>

            {/* Our Mission */}
            <div className="flex flex-col items-center justify-center md:space-y-8">
              <div className="w-full max-w-6xl mx-auto rounded-[30px] md:rounded-b-[70px] bg-gradient-to-b from-slate-500/60 to-slate-900/60 backdrop-blur-sm border border-white/30 shadow-xl">
                <OurMission className="p-4 md:p-16 flex items-center justify-center" />
                <OurMissionContent className="flex flex-col md:flex-1 md:justify-around px-4 md:px-8  md:pb-16 gap-4 md:gap-0" />
              </div>
            </div>
          </div>
        </section>

        {/* Decorative Transition */}
        <section 
          className="hidden md:block relative md:h-32 w-full overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute top-0 left-0 bg-gradient-to-tl from-indigo-100/20 to-transparent w-3/5 h-full md:[clip-path:polygon(0_0,100%_0,0%_40%,0_40%)] backdrop-blur-sm" />            
     
         <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-blue-100/20 w-full h-full md:[clip-path:polygon(0_50%,100%_0,100%_100%,0_100%)] backdrop-blur-sm" />
          <div className="absolute top-4 md:top-8 bg-gradient-to-br from-blue-100/30 to-purple-100/30 w-full h-full md:[clip-path:polygon(0_50%,100%_0,100%_100%,0_100%)] backdrop-blur-sm" />
          </section>

        {/* Services Preview */}
        <section 
          className="relative h-fit px-4 md:h-full w-full"
          aria-label="What we do section"
        >
          <WeDo className="h-full w-full md:bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500 rounded-2xl md:rounded-3xl shadow-2xl" />
        </section>

        {/* Services Detail */}
        <section 
          className="relative h-fit min-h-[100vh]  w-full flex flex-col py-8 md:py-16 pointer-events-auto"
          aria-label="Services section"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100/20 via-white/10 to-gray-100/20 w-full h-full rounded-xl md:rounded-3xl" />
          <div className="relative z-10 flex flex-col h-full w-full p-2 md:p-8">
            <ServiceComponent className="flex flex-col gap-4 md:gap-12 h-full w-full" />
          </div>
        </section>

        {/* Portfolio Transition */}
        <section 
          className="hidden md:block relative md:h-32 w-full overflow-hidden my-4 md:my-8 "
          aria-hidden="true"
        >
          <div className="absolute top-8 bg-gradient-to-br from-purple-100/20 to-blue-100/20 w-full h-full md:[clip-path:polygon(0_0,100%_0,100%_40%,0_100%)] backdrop-blur-sm" />
          <div className="absolute bg-gradient-to-br from-blue-100/30 to-purple-100/30 w-full h-full md:[clip-path:polygon(0_0,100%_0,100%_40%,0_100%)] backdrop-blur-sm" />
          <div className="absolute -bottom-2 md:-bottom-4 right-0 bg-gradient-to-tl from-indigo-100/20 to-transparent w-3/5 h-full md:[clip-path:polygon(0_100%,100%_55%,100%_100%,0_100%)] backdrop-blur-sm" />            
        </section>

        {/* Portfolio Section */}
        <section 
          className="relative min-h-[60vh] md:min-h-screen w-full flex flex-col p-2 md:p-4 pointer-events-auto"
          aria-label="Portfolio section"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-100/90 w-full h-full rounded-xl md:rounded-t-3xl backdrop-blur-sm" />
          <div className="relative z-10 h-full w-full px-4 md:px-0 ">
            <Portfolio setNavVisible={setNavVisible} />
          </div>
        </section>

        {/* Testimonials & Social */}
        <section 
          className="relative mt-20 min-h-[50vh] md:mt-0 md:min-h-screen w-full flex flex-col my-8 md:my-16 pointer-events-auto"
          aria-label="Testimonials section"
        >
          <div className="h-full w-full flex  flex-col items-center justify-center px-4 md:px-0">
            <Testimonials />
          </div>
          <Hills />
        </section>
      </main>
              
    <div className="relative w-full h-inherit z-20 text-black">

    
  
  {/* Footer content */}
  <Footer className="relative z-10 flex items-center justify-center w-full text-black pt-16 md:pt-24" />
</div>
</div>
  );
}