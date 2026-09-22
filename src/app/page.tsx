import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Summary } from "@/components/sections/Summary";
import { Highlights } from "@/components/sections/Highlights";
import { Competencies } from "@/components/sections/Competencies";
import { Experience } from "@/components/sections/Experience";
import { Relevance } from "@/components/sections/Relevance";
import { Journey } from "@/components/sections/Journey";
import { Achievements } from "@/components/sections/Achievements";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { WhatIBring } from "@/components/sections/WhatIBring";
import { RecruiterSnapshot } from "@/components/sections/RecruiterSnapshot";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Summary />
        <Highlights />
        <Competencies />
        <Experience />
        <Relevance />
        <Journey />
        <Achievements />
        <Education />
        <Skills />
        <WhatIBring />
        <RecruiterSnapshot />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
