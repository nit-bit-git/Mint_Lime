"use client";

import React from "react";
import { PortfolioMobile } from "@/lib/componentUtils/portfolioCarousel";


export default function PortfolioSection() {
  return (
    <PortfolioMobile 
      cards={cards} 
      direction="left"
      speed="slow"// Disabled for better mobile experience
    />
  );
}

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