import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PricingProps {
  t: {
    pricing: {
      title: string;
      scarcity: string;
      plans: Array<{
        name: string;
        price: string;
        period: string;
        badge?: string;
        cta: string;
        trial?: string;
        popular?: boolean;
      }>;
      guarantee: string[];
    };
  };
}

export const Pricing = ({ t }: PricingProps) => {
  const handleCheckout = () => {
    window.open(
      "https://freedrompath.lemonsqueezy.com/buy/bf52c61d-e35e-4f16-a750-c99e0d602862?logo=0",
      "_blank"
    );
  };

  return (
    <section id="pricing" className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 gradient-text">
          {t.pricing.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {t.pricing.plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-6 md:p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-primary shadow-glow md:scale-105 lg:scale-110 bg-gradient-to-br from-card to-primary/5"
                  : "border-primary/10 hover:shadow-card md:hover:scale-105"
              }`}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-4 py-1 shadow-glow">
                  {plan.badge}
                </Badge>
              )}

              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  {plan.name}
                </h3>

                {plan.trial && (
                  <div className="bg-primary/10 border border-primary/30 rounded-full px-4 py-2 inline-block">
                    <p className="text-primary font-semibold text-sm">
                      🎁 {plan.trial}
                    </p>
                  </div>
                )}

                <div>
                  <div className="text-4xl md:text-5xl font-bold gradient-text">
                    {plan.price}
                  </div>
                  <p className="text-muted-foreground mt-2">{plan.period}</p>
                </div>

                <Button
                  size="lg"
                  onClick={handleCheckout}
                  className={`w-full rounded-full text-lg py-6 font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow text-primary-foreground"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Guarantee Section */}
        <Card className="glass-card p-6 md:p-8 border-primary/10 max-w-3xl mx-auto">
          <div className="space-y-4">
            {t.pricing.guarantee.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Scarcity */}
        <div className="text-center mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20 max-w-2xl mx-auto">
          <p className="text-foreground font-medium text-sm md:text-base">
            {t.pricing.scarcity}
          </p>
        </div>
      </div>
    </section>
  );
};
