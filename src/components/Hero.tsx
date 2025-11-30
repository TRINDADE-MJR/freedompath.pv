import { Button } from "@/components/ui/button";
import heroChains from "@/assets/hero-chains.jpg";
import { Sparkles } from "lucide-react";

interface HeroProps {
  t: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
  };
}

export const Hero = ({ t }: HeroProps) => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-gradient relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <img src={heroChains} alt="Correntes se partindo em luz dourada" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background"></div>
      </div>

      {/* Floating golden particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-glow rounded-full animate-confetti-fall opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm mb-4">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            FreedomPath Premium
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight px-4">
          <span className="gradient-text animate-glow-pulse">
            {t.hero.title}
          </span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
          {t.hero.subtitle}
        </p>

        <div className="pt-8">
          <Button
            size="lg"
            onClick={scrollToPricing}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 rounded-full shadow-glow hover:shadow-soft transition-all duration-300 hover:scale-105 font-semibold"
          >
            {t.hero.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};
