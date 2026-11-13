import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Updates from "@/components/Updates";
import Community from "@/components/Community";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";

export default function Page() {
  return (
    <>
      <Particles />
      <div className="relative z-10">
        <Navbar />
        <main className="overflow-x-clip">
          <Hero />
          <Features />
          <About />
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr]">
            <Updates />
            <Community />
          </div>
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
