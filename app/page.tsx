import Hero from "@/components/sections/Hero";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}

