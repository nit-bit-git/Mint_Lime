import React, { useEffect, useRef, useState } from "react";
import {
  DraggableCardBody,
} from "@/lib/componentUtils/draggableCards";
import { OurWork } from "./title";
import { ExpandableCardDemo } from "./expandable";
import { AnimatePresence, motion } from "motion/react";
import { useMediaQuery } from "@/lib/mediaQuery";
import PortfolioSection from "./mobileView";
const cards = [
    {
      title: "AI Plays Flappy Bird",
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-[60%] left-[40%] rotate-[8deg]",
      content: () => {
      return (
        <p>
          a Python-based AI agent using neuroevolution of augmenting topologies to play Flappy Bird
        </p>
      );
    },
    },
    {
      title: "Ecommerce Website",
      image:
        "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-[5%] left-[55%] rotate-[-10deg]",
      content: () => {
      return (
        <p>
         A fully functional ERP based Ecommerce website, leverage existing platform to go market faster and efficiently manage process flows. Fully designed and developed and tested. A complete turnkey Ecommerce solution.
        </p>
      );
    },
    },
    {
      title: "License Calculator",
      image:
        "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-[60%] right-[5%] rotate-[2deg]",
      content: () => {
      return (
        <p>
          A visually made BI Dashboard that would calculate pricing, editions and give a comparsion for the user as to which BI tool would be benifical. Bild in Quicksight with SQL logics
        </p>
      );
    },
    },
    {
      title: "Bridge-Plate",
      image:
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-[20%] left-[75%] rotate-[-7deg]",
      content: () => {
      return (
        <p>
          Mobile platform focussed on minimizing food wastage
        </p>
      );
    },
    },
    {
      title: "Canada",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-[50%] left-[10%] rotate-[4deg]",
      content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>
      );
    },
    },
     {
      title: "The Weather_informant",
      image:
        "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-[30%] left-[15%] rotate-[-7deg]",
      content: () => {
      return (
        <p>
          AWS LEX designed chat bot that would take in user requirements and fetch informations from API&lsquo;s, also included other aws services such as SNS, SES, etc
        </p>
      );
    },
    },
    {
      title: " I am Retiring",
      image:
        "https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-[8%] left-[3%] rotate-[5deg]",
      content: () => {
      return (
        <p>
         an AI personal assistant using NLP (TensorFlow, Hugging Face), handling emails, WhatsApp, and news, deployed via Docker. 

        </p>
      );
    },
    }
  ];
export function Portfolio( {setNavVisible}:{setNavVisible: React.Dispatch<any>}) {
  const isMobile = useMediaQuery("(max-width: 768px)")  
  const parentRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
        setNavVisible(true);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
      setNavVisible(false);
    } else {
      document.body.style.overflow = "auto";
      setNavVisible(true);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, setNavVisible]);
 const [isDragging, setIsDragging] = useState(false);
  return (
    <>
            <div ref={parentRef} className="hidden md:flex relative min-h-full w-full p-10 justify-center rounded-xl [perspective:3000px] bg-slate-500/70 ">
              <OurWork className=" flex flex-col justify-center mx-auto max-w-sm text-center font-black text-neutral-400  dark:text-neutral-800"/>
            
              {cards.map((item, index) => (
          <DraggableCardBody 
            key={index} 
            parentRef={parentRef} 
            className={item.className}
            setDragging={setIsDragging}
            
          >
            <div
              onClick={() =>{if(!isDragging)setActive(item)}}
              className="flex flex-col items-center cursor-pointer"
            >
              <motion.img
                layoutId={`image-${item.title}`}
                src={item.image}
                alt={item.title}
                className="pointer-events-none relative z-10 h-80 w-80 object-cover"
              />
              <motion.h3
                layoutId={`title-${item.title}`}
                className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300"
              >
                {item.title}
              </motion.h3>
            </div>
          </DraggableCardBody>
        ))}
            <AnimatePresence>
          {active && (
            <ExpandableCardDemo active={active} setActive={setActive} />
          )}
        </AnimatePresence>
            </div>

      {isMobile && (
        <PortfolioSection />
      )}    
    </>
   
  );
}

//   {
//     description: "Lana Del Rey",
//     title: "Summertime Sadness",
//     src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
//     ctaText: "Visit",
//     ctaLink: "https://ui.aceternity.com/templates",
    
//   },
//   {
//     description: "Babbu Maan",
//     title: "Mitran Di Chhatri",
//     src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
//     ctaText: "Visit",
//     ctaLink: "https://ui.aceternity.com/templates",
//     content: () => {
//       return (
//         <p>
//           Babu Maan, a legendary Punjabi singer, is renowned for his soulful
//           voice and profound lyrics that resonate deeply with his audience. Born
//           in the village of Khant Maanpur in Punjab, India, he has become a
//           cultural icon in the Punjabi music industry. <br /> <br /> His songs
//           often reflect the struggles and triumphs of everyday life, capturing
//           the essence of Punjabi culture and traditions. With a career spanning
//           over two decades, Babu Maan has released numerous hit albums and
//           singles that have garnered him a massive fan following both in India
//           and abroad.
//         </p>
//       );
//     },
//   },
 
//   {
//     description: "Metallica",
//     title: "For Whom The Bell Tolls",
//     src: "https://assets.aceternity.com/demos/metallica.jpeg",
//     ctaText: "Visit",
//     ctaLink: "https://ui.aceternity.com/templates",
//     content: () => {
//       return (
//         <p>
//           Metallica, an iconic American heavy metal band, is renowned for their
//           powerful sound and intense performances that resonate deeply with
//           their audience. Formed in Los Angeles, California, they have become a
//           cultural icon in the heavy metal music industry. <br /> <br /> Their
//           songs often reflect themes of aggression, social issues, and personal
//           struggles, capturing the essence of the heavy metal genre. With a
//           career spanning over four decades, Metallica has released numerous hit
//           albums and singles that have garnered them a massive fan following
//           both in the United States and abroad.
//         </p>
//       );
//     },
//   },
//   {
//     description: "Lord Himesh",
//     title: "Aap Ka Suroor",
//     src: "https://assets.aceternity.com/demos/aap-ka-suroor.jpeg",
//     ctaText: "Visit",
//     ctaLink: "https://ui.aceternity.com/templates",
//     content: () => {
//       return (
//         <p>
//           Himesh Reshammiya, a renowned Indian music composer, singer, and
//           actor, is celebrated for his distinctive voice and innovative
//           compositions. Born in Mumbai, India, he has become a prominent figure
//           in the Bollywood music industry. <br /> <br /> His songs often feature
//           a blend of contemporary and traditional Indian music, capturing the
//           essence of modern Bollywood soundtracks. With a career spanning over
//           two decades, Himesh Reshammiya has released numerous hit albums and
//           singles that have garnered him a massive fan following both in India
//           and abroad.
//         </p>
//       );
//     },
//   },
// ];