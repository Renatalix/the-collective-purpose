import { motion } from "framer-motion";
import logoWhite from "@assets/white_transparent_1774718022583.png";

export default function Manifesto() {
  return (
    <section id="manifesto" className="py-40 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8 text-xl md:text-3xl leading-snug font-medium text-justify"
          >
            <p className="text-background/60">
              We are living through the most profound shift in human history. Machines are learning. Technology is accelerating. And the world is asking what it means to be human.
            </p>
            
            <p className="text-background/60">
              Some people believe the future belongs to machines. Others believe we must return to the past.
            </p>
            
            <p className="text-background">
              We believe something different.
            </p>
            
            <p className="text-background/80">
              The future will belong to those who learn to align intelligence in all its forms. Human. Natural. Artificial.
            </p>
            
            <p className="text-background font-bold tracking-tight">
              Not in competition. But in collaboration.
            </p>
            
            <div className="pt-12 border-t border-background/20 mt-12 flex items-center justify-between">
              <span className="text-sm uppercase tracking-[0.2em]">The Collective Purpose</span>
              <img src={logoWhite} alt="TCP Logo" className="w-12 h-12 object-contain mix-blend-screen" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
