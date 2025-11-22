import { Card } from "@/components/ui/card";
import { 
  Check, 
  Clock, 
  HeadphonesIcon, 
  BookMarked, 
  Sparkles, 
  Moon, 
  Wifi, 
  Zap 
} from "lucide-react";

interface FeaturesProps {
  t: {
    features: {
      title: string;
      items: string[];
    };
  };
}

export const Features = ({ t }: FeaturesProps) => {
  const icons = [
    Zap,
    Clock,
    HeadphonesIcon,
    BookMarked,
    Sparkles,
    Moon,
    Wifi,
    Check,
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 gradient-text">
          {t.features.title}
        </h2>

        <Card className="glass-card p-6 md:p-10 border-primary/10">
          <div className="grid md:grid-cols-2 gap-6">
            {t.features.items.map((item, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground leading-relaxed pt-1">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
};
