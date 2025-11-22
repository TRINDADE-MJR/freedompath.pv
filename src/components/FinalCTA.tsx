import { Button } from "@/components/ui/button";
import handsPeace from "@/assets/hands-peace.jpg";

interface FinalCTAProps {
  t: {
    finalCTA: {
      title: string;
      cta: string;
    };
  };
}

export const FinalCTA = ({ t }: FinalCTAProps) => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={handsPeace}
          alt="Mãos abertas recebendo paz"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50"></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight gradient-text animate-glow-pulse">
          {t.finalCTA.title}
        </h2>

        <Button
          size="lg"
          onClick={scrollToPricing}
          className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow text-primary-foreground text-xl px-12 py-8 rounded-full font-semibold transition-all duration-300 hover:scale-110 shadow-glow"
        >
          {t.finalCTA.cta}
        </Button>

        <p className="text-muted-foreground text-lg">
          ▶ 7 dias 100% grátis • Cancele quando quiser
        </p>
      </div>

      {/* Floating confetti */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-primary-glow rounded-full animate-confetti-fall opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};
