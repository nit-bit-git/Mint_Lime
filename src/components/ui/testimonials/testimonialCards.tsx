"use client";

import React from "react";
import { InfiniteMovingCards } from "@/lib/componentUtils/infinteScrollCards"
import { Heading } from "@/lib/componentUtils/text";

export function Testimonials() {
  return (
    <div className="h-fit rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <Heading size="6xl">
        What Our Clients Say...
      </Heading>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "We were drowning in manual data entry, but **Mint Lime** completely streamlined our workflow. The transition was seamless, and we saw an **immediate 40% reduction in processing time**. It was truly a game-changer for our small team.",
    name: "Sarah Chen",
    title: "Operations Director, Apex Solutions",
  },
  {
    quote:
      "The **support team is phenomenal**. Whenever we hit a snag, they responded within minutes, not hours. It's rare to find a company that backs up a great product with such a high level of **personal, attentive service**.",
    name: "Marcus Jones",
    title: "VP of Product, Stellar Innovations",
  },
  {
    quote:
      "I was skeptical about integrating a new platform, but the **onboarding process was incredibly smooth**. Their dedicated specialist made sure our entire team was up and running and **feeling confident** in less than a week. Highly recommend!",
    name: "Emily Rodriguez",
    title: "Marketing Manager, GeoMetrics",
  },
  {
    quote:
      "The new **reporting dashboard is exactly what we needed**. It’s so intuitive and gives us clarity on our KPIs that we simply didn't have before. We can finally make **data-driven decisions** quickly and efficiently.",
    name: "David Kim",
    title: "Founder & CEO, Velocity Agency",
  },
  {
    quote:
      "We've been using this service for over a year, and it just keeps getting better. The continuous updates and new features show they're **committed to staying ahead of the curve**. It's an **essential tool** that pays for itself many times over.",
    name: "Jessica Miller",
    title: "Senior Analyst, FinTech Global",
  },
];