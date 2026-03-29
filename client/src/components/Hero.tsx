import { motion } from "framer-motion";
import heroBg from "@/assets/images/hero-bg.png";
import heroLogo from "@assets/white_transparent_1774718022583.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground text-background pt-28">
      {/* Background with subtle texture */}
      <div 
        className="absolute inset-0 z-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 md:mb-8"
        >
          <img 
            src={heroLogo} 
            alt="The Collective Purpose Logo" 
            className="w-32 md:w-40 h-auto mx-auto object-contain mix-blend-screen" 
          />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter max-w-5xl text-balance leading-[1.1]"
        >
          Human <span className="text-background/40 mx-2">+</span> 
          Nature <span className="text-background/40 mx-2">+</span> 
          Machine
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 text-lg md:text-xl text-background/70 max-w-2xl text-balance tracking-wide"
        >
          Working together toward one future. The most important transition in human history requires conscious alignment.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a 
            href="#manifesto" 
            className="px-10 py-4 text-sm font-bold uppercase tracking-widest border border-background/30 hover:border-background transition-colors"
          >
            Read Manifesto
          </a>
          <a 
            href="https://the-collective-purpose.myshopify.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative px-10 py-4 text-sm font-bold uppercase tracking-widest text-background transition-all duration-300 overflow-hidden bg-gradient-to-r from-[#00aaff] to-[#00ff80] hover:opacity-90"
          >
            Shop The Collection
          </a>
        </motion.div>
      </div>
    </section>
  );
}
