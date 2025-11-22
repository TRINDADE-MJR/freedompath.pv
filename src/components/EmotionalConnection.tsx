import { Card } from "@/components/ui/card";
import { Heart, Users, Smile } from "lucide-react";

interface EmotionalConnectionProps {
  t: {
    emotional: {
      title: string;
      cards: Array<{
        title: string;
        description: string;
      }>;
    };
  };
}

export const EmotionalConnection = ({ t }: EmotionalConnectionProps) => {
  const icons = [Users, Heart, Smile];

  return (
    <section className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 gradient-text">
          {t.emotional.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {t.emotional.cards.map((card, index) => {
            const Icon = icons[index];
            return (
              <Card
                key={index}
                className="glass-card p-6 md:p-8 hover:shadow-card transition-all duration-300 hover:scale-105 border-primary/10"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.description}
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
