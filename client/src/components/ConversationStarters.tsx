import { motion } from "framer-motion";
import harmoniousImg from "@assets/Harmonious_3.0_1773015586574.png";
import earthWarriorImg from "@assets/Earth_Warrior_1774775055938.png";
import saveOurPlanetImg from "@assets/HR_Save_our_Planet_1774775285071.png";

const artworks = [
  {
    title: "Harmonious 3.0",
    subtitle: "The Merger of Human, Nature & Machine",
    story: "We do not have to choose between technological advancement and ecological preservation. Harmonious 3.0 visualizes the exact moment of alignment: intelligent systems built to protect and coexist with organic life, guided by human curiosity. The machine is not a conqueror; it is a guardian. The humans are not displaced; they are explorers. The nature is not destroyed; it is thriving.",
    image: harmoniousImg,
    productLink: "https://the-collective-purpose.myshopify.com"
  },
  {
    title: "Earth Warrior",
    subtitle: "Human & Machine United for Nature",
    story: "The greatest alliance of our time is not between nations or corporations. It is between human ingenuity and machine intelligence, working together to protect the living world. We develop new solutions for our planet to thrive — regenerative systems, intelligent ecosystems, technologies that heal rather than extract. Because a healthy planet is not a luxury. It is essential for us all to live in abundance.",
    image: earthWarriorImg,
    productLink: "https://the-collective-purpose.myshopify.com"
  },
  {
    title: "Save Our Planet",
    subtitle: "A Shared March Toward Abundance",
    story: "We march together towards a world of abundance. We respect and nurture all that is alive on our planet. We defend human rights as a shared right — also for nature and for machines. We treat them with respect and listen to their voices as part of our decisions for our future. We work together to save our planet.",
    image: saveOurPlanetImg,
    productLink: "https://the-collective-purpose.myshopify.com"
  }
];

export default function ConversationStarters() {
  return (
    <section id="conversations" className="py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">The Canvas Series</h2>
          <p className="text-3xl md:text-4xl leading-tight font-medium text-justify">
            Wearable signals of worldview.
          </p>
          <p className="text-3xl md:text-4xl leading-tight font-medium mt-2 text-justify">
            Our art is designed to start conversations about our shared future.
          </p>
        </div>

        <div className="space-y-32">
          {artworks.map((art, index) => (
            <motion.div 
              key={art.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-square md:aspect-[4/3] bg-muted overflow-hidden group">
                  <img 
                    src={art.image} 
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Subtle overlay for premium feel */}
                  <div className="absolute inset-0 border border-black/5 z-10 pointer-events-none"></div>
                </div>
              </div>

              {/* Story Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-[1px] w-12 bg-foreground"></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Exhibit {String(index + 1).padStart(2, '0')}</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-display font-bold mb-4">{art.title}</h3>
                <p className="text-lg text-foreground/80 font-medium mb-8 pb-8 border-b border-border">
                  {art.subtitle}
                </p>
                
                <p className="text-muted-foreground leading-relaxed text-lg mb-10 text-justify">
                  {art.story}
                </p>
                
                <a 
                  href={art.productLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-transparent border border-foreground text-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors w-fit"
                >
                  Shop This Edition
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
