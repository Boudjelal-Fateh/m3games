import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Productivity } from "@/components/productivity";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex flex-col rounded-[20px]  bg-black   ">
      <Navbar />
      <Hero />
      <Productivity />
    </main>
  );
}
