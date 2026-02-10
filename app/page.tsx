import { About } from "@/components/About";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Productivity } from "@/components/productivity";
import { Expertise } from "@/components/Expertise";
import { GamePlatform } from "@/components/GamePlatform";
import { AiSection } from "@/components/AiSection";
import { AiTransform } from "@/components/AiTransform";

import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex flex-col  overflow-x-hidden  bg-black   ">
      <Navbar />
      <Hero />
      <Productivity />
      <About />
      <Expertise />
      <GamePlatform />
      <AiSection />
      <AiTransform />
    </main>
  );
}
