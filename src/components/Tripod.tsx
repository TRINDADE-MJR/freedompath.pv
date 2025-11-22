import { Card } from "@/components/ui/card";
import { BookOpen, Brain, Zap } from "lucide-react";
import goldenTree from "@/assets/golden-tree.jpg";

interface TripodProps {
  t: {
    tripod: {
      title: string;
      subtitle: string;
      pillars: Array<{
        title: string;
        description: string;
      }>;
    };
  };
}

export const Tripod = ({ t }: TripodProps) => {
  const icons = [BookOpen, Brain, Zap];
  const gradients = [
    "from-primary/20 to-primary-glow/10",
    "from-primary-glow/20 to-primary/10",
    "from-primary/10 to-secondary/20",
  ];

  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={goldenTree}
          alt="Árvore dourada"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
            {t.tripod.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.tripod.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {t.tripod.pillars.map((pillar, index) => {
            const Icon = icons[index];
            return (
              <Card
                key={index}
                className={`p-6 md:p-8 bg-gradient-to-br ${gradients[index]} backdrop-blur-sm border-primary/20 hover:shadow-soft transition-all duration-300 hover:scale-105`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-glow">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
