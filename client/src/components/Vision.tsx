import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import visionVideo from "@/assets/videos/tcp-vision.mp4";

export default function Vision() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      const start = viewportHeight;
      const end = -sectionHeight;
      const current = rect.top;
      const progress = Math.max(0, Math.min(1, (start - current) / (start - end)));

      setScrollProgress(progress);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const crawlY = 100 - scrollProgress * 250;
  const crawlOpacity = scrollProgress < 0.1
    ? scrollProgress / 0.1
    : scrollProgress > 0.7
      ? Math.max(0, 1 - (scrollProgress - 0.7) / 0.3)
      : 1;

  return (
    <section id="vision" className="relative bg-foreground text-background overflow-hidden">
      <div
        ref={sectionRef}
        className="relative overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        <div className="sticky top-0 h-screen overflow-hidden" style={{ perspective: "300px" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-foreground via-transparent to-foreground z-20 pointer-events-none" />

          <div
            className="absolute inset-x-0 px-6"
            style={{
              transform: `translateY(${crawlY}%) rotateX(20deg)`,
              transformOrigin: "50% 100%",
              opacity: crawlOpacity,
              transition: "none",
            }}
          >
            <div className="max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-background/70 mb-8 block text-left">
                The Vision
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight mb-10">
                We are living through the most powerful transformation in human history.
              </h2>

              <div className="space-y-6 text-background/80 text-lg md:text-xl leading-relaxed font-medium text-justify">
                <p>
                  For years we were told the future would be a battle. Humans versus machines. Technology versus nature. A future defined by conflict.
                </p>
                <p>
                  But that story is wrong. Because the real future isn't about competition. It is about alignment.
                </p>
                <p className="text-background font-bold text-xl md:text-2xl pt-4">
                  Human creativity. Machine intelligence. Nature wisdom. Three forces that can evolve together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto relative aspect-video rounded-sm overflow-hidden border border-background/20"
          >
            <video
              src={visionVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/10 mix-blend-multiply pointer-events-none"></div>
            <div className="absolute top-4 left-4 w-4 h-[1px] bg-background/50"></div>
            <div className="absolute top-4 left-4 w-[1px] h-4 bg-background/50"></div>
            <div className="absolute bottom-4 right-4 w-4 h-[1px] bg-background/50"></div>
            <div className="absolute bottom-4 right-4 w-[1px] h-4 bg-background/50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
