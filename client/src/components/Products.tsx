import { motion } from "framer-motion";
import saveOurPlanetTee from "@assets/save-our-planet-green-tshirt.jpg";
import hoodieImg from "@assets/Screenshot_2026-03-08_at_23.53.36_1773014023539.png";

const products = [
  {
    name: "Save Our Planet Tee",
    price: "$28",
    description: "Heather Forest green. 100% combed and ring-spun cotton. Save Our Planet print.",
    image: saveOurPlanetTee
  },
  {
    name: "TCP Logo Hoodie",
    price: "$95",
    description: "Premium black hoodie featuring the signature TCP structural logo.",
    image: hoodieImg
  }
];

export default function Products() {
  return (
    <section id="collection" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-destructive animate-pulse"></span>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">Drop 01 — Available Now</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-medium">Wearable signals of worldview.</h3>
          </div>
          <p className="text-muted-foreground mt-6 md:mt-0 max-w-sm text-justify">
            Not just merchandise. Each item functions as a conversation starter and a symbol of shared values. Limited quantities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group flex flex-col"
            >
              <a 
                href="https://the-collective-purpose.myshopify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-square bg-background mb-6 relative overflow-hidden flex items-center justify-center p-12 border border-border/50"
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-foreground text-background px-6 py-3 text-sm font-bold uppercase tracking-widest">
                    View Product
                  </div>
                </div>
              </a>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-bold">{product.name}</h4>
                  <p className="text-sm text-muted-foreground mt-2">{product.description}</p>
                </div>
                <span className="text-sm font-medium">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://the-collective-purpose.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-foreground text-background px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-foreground/90 transition-colors"
          >
            Shop Entire Collection
          </a>
        </div>
      </div>
    </section>
  );
}
