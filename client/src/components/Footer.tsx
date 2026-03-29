import { useState } from "react";
import logoImg from "@assets/Black_Transparent_LOGO_1774717924652.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message);
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <footer className="bg-background py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <img src={logoImg} alt="TCP Logo" className="h-10 w-auto mb-6" />
            <p className="text-muted-foreground max-w-sm mb-8 text-justify">
              A future-facing cultural brand exploring how humanity can navigate the age of AI without losing meaning.
            </p>
            {status === "success" ? (
              <p data-testid="text-subscribe-success" className="text-sm font-medium text-foreground max-w-md py-3">
                {message}
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md">
                <div className="flex border border-border">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address" 
                    data-testid="input-email"
                    required
                    className="bg-transparent px-4 py-3 w-full outline-none text-sm placeholder:text-muted-foreground"
                  />
                  <button 
                    type="submit" 
                    data-testid="button-subscribe"
                    disabled={status === "loading"}
                    className="px-6 py-3 bg-foreground text-background text-sm font-bold uppercase tracking-wider hover:bg-foreground/90 transition-colors disabled:opacity-50"
                  >
                    {status === "loading" ? "..." : "Subscribe"}
                  </button>
                </div>
                {status === "error" && (
                  <p data-testid="text-subscribe-error" className="text-sm text-destructive">{message}</p>
                )}
              </form>
            )}
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Platform</h3>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-foreground transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Social</h3>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li>
                <a 
                  href="https://instagram.com/collective_purpose" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-foreground transition-colors"
                >
                  Instagram @collective_purpose
                </a>
              </li>
              <li><a href="#" className="hover:text-foreground transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} The Collective Purpose. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
