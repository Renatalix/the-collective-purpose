import { motion } from "framer-motion";
import firstPrinciplesImg from "@/assets/images/first-principles.png";

export default function FirstPrinciples() {
  return (
    <section id="first-principles" className="py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={firstPrinciplesImg}
          alt="The shift from old thinking to new understanding"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6">
              First Principles Thinking
            </h2>
            <blockquote className="text-2xl md:text-3xl font-medium leading-tight mb-4 border-l-2 border-white/30 pl-6 italic">
              "We cannot solve our problems with the same thinking we used when we created them."
            </blockquote>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-10 text-right pr-2">
              — Albert Einstein
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed text-justify mb-6">
              The future isn't something that happens to us. It is something we build. But to create our new reality, we need to go through a fundamental mindset shift.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed text-justify mb-10">
              <span className="font-semibold" style={{ color: '#00d4ff' }}>First Principles Thinking</span> strips away inherited assumptions and rebuilds understanding from the ground up. To find out how to shift your mindset, take the test.
            </p>
            <div className="flex justify-center">
            <a
              href="https://thecollectivepurpose.life"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-first-principles-test"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-neutral-200 transition-colors duration-300"
            >
              Free FPT Test
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex flex-col items-center justify-center"
          >
            <div className="relative">
              <svg
                viewBox="0 0 256 256"
                className="w-72 h-72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#00ff88" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <g transform="translate(128,128)">
                  <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  >
                    <circle r="120" stroke="white" strokeOpacity="0.05" strokeWidth="1" fill="none" />
                  </motion.g>
                  <motion.g
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  >
                    <circle r="105" stroke="white" strokeOpacity="0.08" strokeWidth="0.5" fill="none" strokeDasharray="4 8" />
                  </motion.g>
                </g>
                <g transform="translate(48, 38)" stroke="url(#brainGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                  <path d="M80 20 C60 20, 30 30, 25 55 C20 80, 30 100, 40 110 C30 115, 20 130, 25 148 C30 165, 50 175, 65 172 C70 180, 85 185, 95 180" opacity="0.9" />
                  <path d="M80 20 C100 20, 130 30, 135 55 C140 80, 130 100, 120 110 C130 115, 140 130, 135 148 C130 165, 110 175, 95 172 C90 180, 75 185, 65 180" opacity="0.9" />
                  <path d="M80 20 L80 180" strokeOpacity="0.15" />
                  <path d="M40 65 C55 60, 65 70, 80 65 C95 60, 105 70, 120 65" strokeOpacity="0.4" />
                  <path d="M35 90 C50 85, 65 95, 80 90 C95 85, 110 95, 125 90" strokeOpacity="0.4" />
                  <path d="M38 120 C55 115, 65 125, 80 118 C95 112, 108 122, 122 118" strokeOpacity="0.35" />
                  <path d="M42 145 C55 140, 68 150, 80 145 C92 140, 105 148, 118 145" strokeOpacity="0.3" />
                  <circle cx="80" cy="55" r="3" fill="url(#brainGrad)" stroke="none" opacity="0.6" />
                  <circle cx="55" cy="80" r="2" fill="url(#brainGrad)" stroke="none" opacity="0.5" />
                  <circle cx="105" cy="80" r="2" fill="url(#brainGrad)" stroke="none" opacity="0.5" />
                  <circle cx="65" cy="110" r="2.5" fill="url(#brainGrad)" stroke="none" opacity="0.4" />
                  <circle cx="95" cy="110" r="2.5" fill="url(#brainGrad)" stroke="none" opacity="0.4" />
                  <circle cx="80" cy="140" r="2" fill="url(#brainGrad)" stroke="none" opacity="0.35" />
                </g>
              </svg>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-24 h-24 rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)' }} />
              </motion.div>
            </div>
            <p className="text-neutral-500 text-sm uppercase tracking-[0.2em] mt-8 text-center">
              Are you ready to rethink everything?
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
