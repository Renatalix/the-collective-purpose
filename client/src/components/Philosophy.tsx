import { motion } from "framer-motion";
import humanImg from "@/assets/images/human.png";
import natureImg from "@/assets/images/nature.png";
import machineImg from "@/assets/images/machine.png";

const forces = [
  {
    title: "Human",
    subtitle: "Meaning Makers",
    description: "Humans create culture, define values, and give purpose to tools and systems. Technology should amplify human potential—not erase identity.",
    image: humanImg
  },
  {
    title: "Nature",
    subtitle: "Foundational Intelligence",
    description: "The oldest intelligence on Earth. It embodies balance, regeneration, and resilience. Any future that ignores nature will ultimately collapse.",
    image: natureImg
  },
  {
    title: "Machine",
    subtitle: "New Capability",
    description: "The newest form of intelligence entering human systems. Machines expand what humanity can build, analyze, and create, but require human values to guide their use.",
    image: machineImg
  }
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">Core Philosophy</h2>
          <p className="text-3xl md:text-4xl leading-tight font-medium text-justify">
            The healthiest future emerges when these three systems evolve in alignment rather than opposition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {forces.map((force, index) => (
            <motion.div 
              key={force.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col"
            >
              <div className="aspect-[3/4] mb-8 overflow-hidden bg-muted relative group">
                <img 
                  src={force.image} 
                  alt={force.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{force.title}</h3>
              <div className="text-sm uppercase tracking-widest text-muted-foreground mb-4 pb-4 border-b border-border">
                {force.subtitle}
              </div>
              <p className="text-muted-foreground leading-relaxed text-justify">
                {force.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
