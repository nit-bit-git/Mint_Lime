import { useEffect, useState } from "react";
import SubMenu from "./subMenu";
import { Heading, Paragraph } from "@/lib/componentUtils/text";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { AspectRatio } from "@/lib/aspectRatio";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "@/lib/componentUtils/textGeneration";
import { useMediaQuery } from "@/lib/mediaQuery";
type ContentState = {
  id: number;
  skill: number;
}
type ImageItem = {
    alt: string;
    src: string;
    id: number;
    skill: number;
  }
interface ServiceComponentProps {
  className?: string;
}  
 const imgItems = [{
    alt:'development',
    src: '/images/page4/web_app.svg',
    id:1,
    skill:0
  },
{
    alt:'machine learning',
    src: '/images/page4/ai.jpg',
    id:1,
    skill:1
  },
{
    alt:'design',
    src: '/images/page4/ui.jpeg',
    id:2,
    skill:0
  },
{
    alt:'branding',
    src: '/images/page4/branding.jpeg',
    id:2,
    skill:1
  },
{
    alt:'data analysis',
    src: '/images/page4/da.svg',
    id:3,
    skill:0
  },
{
    alt:'digital marketing & seo',
    src: '/images/page4/seo.svg',
    id:3,
    skill:1
  },
{
    alt:'social media strategy',
    src: '/images/page4/socialMediaStrategy.svg',
    id:3,
    skill:2
  }]
  const navItems = [
    {
      name: "Build",
      id: 1
    },
    {
      name: "Design",
      id: 2
    },
   {
      name: "Grow",
      id: 3
    }
  ]
 
  const paraItems = [
    {
        id: 1,
        skill: 0,
        content: "Our developers are builders at heart — passionate tech enthusiasts who turn complex ideas into smooth, scalable platforms. From Python and React to cloud deployment, we ensure every app is fast, reliable, and future-ready."
    },
    {
        id: 1,
        skill: 1,
        content: "AI is in our DNA. Our dedicated ML engineers craft intelligent models, chatbots, and automation that don’t just work – they evolve. We aim to push boundaries, helping businesses step confidently into the AI-driven future."
    },
    {
        id: 2,
        skill: 0,
        content: "Our designers live for details. With an eye for simplicity and flow, they shape interfaces that feel natural and memorable. It’s not just design; it’s experiences that make your users want to stay longer, explore deeper, and come back often."
    },
    {
        id: 2,
        skill: 1,
        content: "Storytellers at their core, our branding team knows how to make a brand stick. We craft identities that are bold yet consistent — turning first impressions into lasting trust with creativity powered by Figma, Adobe, and more."
    },
    {
        id: 3,
        skill: 0,
        content: "Numbers don’t lie — but they do need a translator. Our data experts work on uncovering patterns and turning them into insights you can act on. With them, you’ll see not just what’s happening, but what’s possible."
    },
    {
        id: 3,
        skill: 1,
        content: "Our growth team is equal parts, creative and analytical. It’s not just simply the ads — We engineer campaigns that lower costs, maximize reach, and deliver measurable impact. Every move is tuned to help your brand rise above many of those noises." },
    {
        id: 3,
        skill: 2,
        content: "Our content strategists breathe social — they know when to spark a trend and when to ride one. From content calendars to influencer campaigns, we build communities that grow, engage, and actually stick around."}
  ]
export default function ServiceComponent({ className }: ServiceComponentProps): React.ReactElement {
  // State management
  const [selectedId, setSelectedId] = useState<number>(1);
  const [selectedSkill, setSelectedSkill] = useState<number>(0);
  const [content, setContent] = useState<ContentState>({ id: 1, skill: 0 });
  const isMobile = useMediaQuery("(max-width: 768px)")
  // Reset skill selection when main category changes
  useEffect(() => {
    setSelectedSkill(0);
  }, [selectedId]);

  // Update content when selections change
  useEffect(() => {
    setContent({ id: selectedId, skill: selectedSkill });
  }, [selectedSkill, selectedId]);

  // Find current content and image
  const para = paraItems.find(item => content.id === item.id && content.skill === item.skill)?.content;
  const sideImg = imgItems.find((item: ImageItem) => content.id === item.id && content.skill === item.skill);

  return (
    <section 
      className={cn("relative w-full h-full flex flex-col", className)}
      aria-label="Our services"
    >
      {/* Service Category Navigation - Compact */}
      <div className="relative flex-shrink-0  md:py-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-purple-50/20 to-indigo-50/20 rounded-xl blur-lg -z-10" />
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 px-4">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="relative px-3 md:px-4 py-2 md:py-3 rounded-lg transition-all duration-300 group w-full md:w-auto"
              aria-pressed={selectedId === item.id}
            >
              {/* Animated background highlight */}
              {selectedId === item.id && (
                <motion.div
                  layoutId="service-highlight"
                  className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white rounded-lg shadow-md border border-white/40"
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 30
                  }}
                />
              )}

              {/* Button content */}
              <span className="relative z-10 cursor-pointer">
                <Heading 
                  color={selectedId === item.id ? "text-gray-900" : "text-white group-hover:text-gray-700"} 
                  size={isMobile ? "xl": "3xl"}
                  className="font-semibold transition-colors duration-200"
                >
                  {item.name}
                </Heading>
              </span>
              <div className={`absolute bottom-0 left-4 right-0 h-px bg-gradient-to-r from-white/20 to-transparent transition-opacity duration-200 opacity-100`} />
            
              {/* Hover effect for non-selected items */}
              {selectedId !== item.id && (
                <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Content Area - Takes remaining height */}
      <div className="relative flex-1 min-h-0 py-2 md:py-4">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-gray-900/30 rounded-xl md:rounded-2xl blur-sm -z-10" />
        
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-4 md:gap-6 px-4 h-full">
          
          {/* Left Panel - Content */}
          <motion.div
            key={`content-${selectedId}-${selectedSkill}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-full flex flex-col min-h-0  rounded-lg md:rounded-4xl"
          >
            {/* Submenu - Compact */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 backdrop-blur-md " />
              <div className="relative z-10">
                <SubMenu 
                  className="flex flex-col w-full text-white" 
                  onSkillSelect={setSelectedSkill} 
                  selectedId={selectedId} 
                  selectedSkill={selectedSkill} 
                />
              </div>
            </div>

            {/* Content description - Flexible height */}
            <div className="flex-1 md:min-h-0 ">
              <div className="relative w-full">
                <div className="absolute inset-0 backdrop-blur-sm rounded-lg md:rounded-xl" />
                <div className="relative z-10 p-4 md:p-6 text-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedId}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="max-h-[200px] md:max-h-[300px] overflow-y-auto"
                    >
                      {para ? (
                        <TextGenerateEffect key={para} words={para} />
                      ) : (
                        <Paragraph className="text-white/80" size="md">
                          Select a service to learn more about our expertise and approach.
                        </Paragraph>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Image */}
          <motion.div
            key={`image-${selectedId}-${selectedSkill}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-full h-full min-h-[150px] rounded-lg md:rounded-xl overflow-hidden group"
          >
            {/* Background gradient for loading state */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-black" />
            
            {sideImg ? (
              <>
                {/* Image container */}
                
                  <AspectRatio ratio={16 / 9} className="w-full h-full relative">
                  <Image 
                    src={sideImg.src} 
                    alt={sideImg.alt}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </AspectRatio>

                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Image caption */}
                <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-black/70 backdrop-blur-sm rounded-md p-2">
                    <Paragraph size="sm" className="text-white font-medium">
                      {sideImg.alt}
                    </Paragraph>
                  </div>
                </div>
              </>
            ) : (
              /* Fallback content */
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center mb-3">
                  <svg 
                    className="w-6 h-6 md:w-8 md:h-8 text-white/60" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                    />
                  </svg>
                </div>
                <Paragraph className="text-white/80 mb-1" size="sm">
                  Image coming soon
                </Paragraph>
                <Paragraph className="text-white/60 text-xs font-mono">
                  ID: {selectedId} | Skill: {selectedSkill}
                </Paragraph>
              </div>
            )}

            {/* Loading indicator */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center pointer-events-none"
            >
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Compact Decorative elements */}
      <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-lg pointer-events-none" />
      <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full blur-lg pointer-events-none" />
    </section>
  );
}