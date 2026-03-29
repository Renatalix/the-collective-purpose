import { motion } from "framer-motion";
import project1Img from "@/assets/images/project-1.png";
import project2Img from "@/assets/images/project-2.png";
import project3Img from "@/assets/images/project-3.png";

const projects = [
  {
    title: "Project Genesis: Eco-Habitats",
    category: "Architecture & Community",
    description: "Building the next generation of human habitats. These sustainable eco-villages seamlessly integrate advanced materials and smart grids into the natural landscape, proving that human expansion doesn't have to mean ecological destruction.",
    image: project1Img,
    status: "Active Development"
  },
  {
    title: "Aura: Reforestation AI",
    category: "Machine Intelligence",
    description: "Deploying autonomous robotic systems to map, plant, and nurture new forests at a scale impossible for humans alone. The machines act as stewards, regenerating the Earth's oldest intelligence.",
    image: project2Img,
    status: "Beta Testing"
  },
  {
    title: "The Abundance Lab",
    category: "Energy & Research",
    description: "A collaborative hub where scientists, artists, and engineers design open-source solutions for clean energy and sustainable materials. Accelerating the transition to a post-scarcity future.",
    image: project3Img,
    status: "Live"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">Partner Projects</h2>
            <h3 className="text-3xl md:text-5xl font-medium">
              Building our future of abundance right now.
            </h3>
          </div>
          <p className="text-muted-foreground mt-6 md:mt-0 max-w-sm text-lg text-justify">
            We partner with initiatives that are in full alignment with our vision. These aren't just concepts—they are active systems shaping tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col group"
            >
              <div className="relative aspect-[4/3] mb-8 overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur text-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
                  {project.status}
                </div>
              </div>
              
              <div className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
                {project.category}
              </div>
              <h4 className="text-2xl font-display font-bold mb-4">{project.title}</h4>
              <p className="text-muted-foreground leading-relaxed text-justify">
                {project.description}
              </p>
              
              <div className="mt-8">
                <a 
                  href="#"
                  className="text-sm font-bold uppercase tracking-widest border-b border-foreground/30 hover:border-foreground pb-1 transition-colors"
                >
                  Explore Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
