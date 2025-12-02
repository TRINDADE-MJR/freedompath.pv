import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface QuizResultProps {
  score: number;
  t: {
    result: {
      calculating: string;
      title: string;
      subtitle: string;
      insight: string;
      cta: string;
      support: string;
      levels: {
        low: string;
        medium: string;
        high: string;
        critical: string;
      };
    };
  };
  showSupportMessage: boolean;
}

export const QuizResult = ({ score, t, showSupportMessage }: QuizResultProps) => {
  const navigate = useNavigate();
  const [displayScore, setDisplayScore] = useState(0);
  const [isCalculating, setIsCalculating] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Animate score counting up
  useEffect(() => {
    if (isCalculating) {
      const timer = setTimeout(() => {
        setIsCalculating(false);
        setShowContent(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isCalculating]);

  useEffect(() => {
    if (!isCalculating && displayScore < score) {
      const timer = setTimeout(() => {
        setDisplayScore(prev => Math.min(prev + 1, score));
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [displayScore, score, isCalculating]);

  const getMessage = () => {
    if (score >= 91) return t.result.levels.critical;
    if (score >= 81) return t.result.levels.high;
    if (score >= 71) return t.result.levels.medium;
    return t.result.levels.low;
  };

  const handleCTA = () => {
    navigate("/sales");
    setTimeout(() => {
      document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Calculating animation
  if (isCalculating) {
    return (
      <div className="w-full max-w-2xl mx-auto text-center space-y-8 animate-fade-in-up">
        <div className="relative w-40 h-40 mx-auto">
          <div className="absolute inset-0 rounded-full border-4 border-muted/30"></div>
          <div 
            className="absolute inset-0 rounded-full border-4 border-t-primary-glow animate-spin"
            style={{ animationDuration: '1s' }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Heart className="w-12 h-12 text-primary-glow animate-pulse" />
          </div>
        </div>
        <p className="text-xl font-medium text-muted-foreground animate-pulse">
          {t.result.calculating}
        </p>
      </div>
    );
  }

  return (
    <div 
      className={`w-full max-w-2xl mx-auto text-center space-y-8 transition-all duration-500 ${
        showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Confetti */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-3 h-3 rounded-full animate-confetti-fall"
            style={{
              left: `${Math.random() * 100}%`,
            background: i % 2 === 0 
              ? 'hsl(45 93% 58%)' 
              : 'hsl(24 95% 40%)',
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Score Circle */}
      <div className="relative w-48 h-48 mx-auto">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="hsl(var(--muted) / 0.3)"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${(displayScore / 100) * 283} 283`}
            className="transition-all duration-100"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(24 95% 40%)" />
              <stop offset="100%" stopColor="hsl(45 93% 58%)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-bold gradient-text">{displayScore}%</span>
        </div>
      </div>

      {/* Title */}
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
          {t.result.title.replace("{score}", score.toString())}
        </h2>
        <p className="text-lg text-muted-foreground">
          {getMessage()}
        </p>
      </div>

      {/* Insight */}
      <div className="glass-card p-6 rounded-2xl border border-border/30">
        <p className="text-muted-foreground leading-relaxed">
          {t.result.insight}
        </p>
      </div>

      {/* Support Message (if needed) */}
      {showSupportMessage && (
        <div className="bg-primary/10 border border-primary/30 rounded-xl p-4">
          <p className="text-sm text-muted-foreground">
            {t.result.support}
          </p>
        </div>
      )}

      {/* CTA */}
      <Button 
        size="lg" 
        onClick={handleCTA}
        className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg md:text-xl px-10 py-7 rounded-full shadow-glow hover:shadow-soft transition-all duration-300 hover:scale-105 font-semibold"
      >
        {t.result.cta}
      </Button>
    </div>
  );
};
