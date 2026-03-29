import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Philosophy from "@/components/Philosophy";
import FirstPrinciples from "@/components/FirstPrinciples";
import Manifesto from "@/components/Manifesto";
import Projects from "@/components/Projects";
import ConversationStarters from "@/components/ConversationStarters";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Philosophy />
        <FirstPrinciples />
        <Manifesto />
        <Projects />
        <ConversationStarters />
        <Products />
      </main>
      <Footer />
    </div>
  );
}

