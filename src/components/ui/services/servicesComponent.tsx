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
        content: "dsdhskhdaldjsbldjbsmdbsldbsdbsbdsb"
    },
    {
        id: 1,
        skill: 1,
        content: "dsdhskhdaldjsbldjbsmdbsldbsdbsbdsbccjxmczbncb,cb,zccbdbcdb"
    }
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
        <div className="h-full w-full flex flex-col justify-between bg-black">
         <SubMenu className="flex flex-col max-w-[50rem]" onSkillSelect={setSelectedSkill} selectedId={selectedId} selectedSkill={selectedSkill} />
         <Paragraph>
            {para}
         </Paragraph>
        </div>
        <div className="w-full h-full rounded-4xl bg-black overflow-hidden">
         {sideImg &&
          <AspectRatio ratio={4/3}>
          <Image src={sideImg.src} alt={sideImg.alt} 
              fill
              priority
              className="object-cover"/>
        </AspectRatio> }
        </div>
     
        </div> 
       
    </div>
  );
}