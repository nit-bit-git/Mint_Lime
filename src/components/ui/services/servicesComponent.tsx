import { useEffect, useState } from "react";
import SubMenu from "./subMenu";
import { Heading, Paragraph } from "@/lib/componentUtils/text";
import { motion } from "framer-motion";
import Image from "next/image";
import { AspectRatio } from "@/lib/aspectRatio";
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
export default function ServiceComponent({className} : {className:string}) {
  const [selectedId, setSelectedId] = useState<number>(1);
  const [selectedSkill, setSelectedSkill] = useState<number>(0)
  const [content ,setContent] = useState<ContentState>({id:1, skill:0})
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
    useEffect(() => {
        setSelectedSkill(0) 
        }, [selectedId])

    useEffect(()=>{
        setContent({id:selectedId, skill:selectedSkill})
    }, [selectedSkill, selectedId])    

    const para = paraItems.find(item => content.id == item.id && content.skill == item.skill)?.content
    const sideImg = imgItems.find((item: ImageItem) => content.id == item.id && content.skill == item.skill)
  return (
    <div className={className}>
 
       <div className="relative flex flex-row items-center justify-center gap-6">
        {navItems.map((item) => (
            <button
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className="relative px-2 text-4xl"
            >
            <span className="cursor-pointer">
                <Heading color={selectedId === item.id ? "text-black" : "text-gray-600"} size="5xl">
                {item.name}
                </Heading>
            </span>

            {selectedId === item.id && (
                <motion.div
                layoutId="highlight"
                className="absolute inset-0 bg-white rounded-lg -z-10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
            )}
            </button>
        ))}
        </div>
       <div className="grid grid-cols-[40%_60%] h-full w-full gap-2 p-5">
        <div className="h-full w-full flex flex-col gap-2 p-2 bg-black">
         <SubMenu className="flex flex-col max-w-[50rem]" onSkillSelect={setSelectedSkill} selectedId={selectedId} selectedSkill={selectedSkill} />
         <div className="flex flex-1 items-center justify-center">
          <Paragraph className="h-fit text-center" size="xl">
            {para}
          </Paragraph>
        </div>
        </div>
        <div className="w-full h-full rounded-4xl bg-black overflow-hidden">
         {sideImg &&
          <AspectRatio ratio={4/3}>
          <Image src={sideImg.src} alt={sideImg.alt} 
              fill
              priority
              className="object-cover"/>
        </AspectRatio> }
        {!sideImg && <div className="w-full h-full flex items-center justify-center text-white">No Image ${selectedId} ${selectedSkill}</div>}
        </div>
     
        </div> 
       
    </div>
  );
}