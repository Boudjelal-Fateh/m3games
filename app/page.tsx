import { About } from "@/components/About";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Productivity } from "@/components/productivity";
import { Expertise } from "@/components/Expertise";

import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex flex-col   bg-black   ">
      <Navbar />
      <Hero />
      <Productivity />
      <About />
      <Expertise />
    </main>
  );
}
