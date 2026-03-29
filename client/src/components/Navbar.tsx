import { Link } from "wouter";
import logoImg from "@assets/Black_Transparent_LOGO_1774717924652.png";

export default function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-foreground text-background py-1 text-center text-[10px] font-bold uppercase tracking-[0.2em]">
        <a 
          href="https://the-collective-purpose.myshopify.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          Drop 01 is Now Available — Shop the Collection
        </a>
      </div>
      <nav className="fixed top-[24px] left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src={logoImg} alt="TCP Logo" className="h-8 md:h-10 w-auto" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <a href="#philosophy" className="hover:text-muted-foreground transition-colors">Philosophy</a>
            <a href="#manifesto" className="hover:text-muted-foreground transition-colors">Manifesto</a>
            <a href="#projects" className="hover:text-muted-foreground transition-colors">Projects</a>
            <a href="#collection" className="hover:text-muted-foreground transition-colors">Collection</a>
          </div>
          
          <a 
            href="https://the-collective-purpose.myshopify.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-bold uppercase tracking-widest bg-foreground text-background px-6 py-3 hover:bg-foreground/80 transition-colors duration-300"
          >
            Shop Now
          </a>
        </div>
      </nav>
    </>
  );
}
