import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizQuestionProps {
  question: string;
  options: string[];
  onAnswer: (answerIndex: number) => void;
  isVisible: boolean;
}

export const QuizQuestion = ({ question, options, onAnswer, isVisible }: QuizQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const handleSelect = (index: number) => {
    if (selectedOption !== null) return;
    
    setSelectedOption(index);
    
    // Delay before transitioning to next question
    setTimeout(() => {
      setIsAnimatingOut(true);
      setTimeout(() => {
        onAnswer(index);
        setSelectedOption(null);
        setIsAnimatingOut(false);
      }, 300);
    }, 600);
  };

  return (
    <div 
      className={cn(
        "w-full max-w-2xl mx-auto space-y-8 transition-all duration-300",
        isVisible && !isAnimatingOut ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground text-center leading-tight px-2">
        {question}
      </h2>

      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            disabled={selectedOption !== null}
            className={cn(
              "w-full p-4 md:p-5 text-left rounded-xl border-2 transition-all duration-300",
              "hover:scale-[1.02] hover:shadow-lg",
              "glass-card backdrop-blur-sm",
              selectedOption === index
                ? "border-primary-glow bg-primary/10 shadow-glow scale-[1.02]"
                : "border-border/30 hover:border-primary/50",
              selectedOption !== null && selectedOption !== index && "opacity-50"
            )}
          >
            <div className="flex items-center gap-4">
              <div 
                className={cn(
                  "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 shrink-0",
                  selectedOption === index
                    ? "border-primary-glow bg-primary-glow"
                    : "border-muted-foreground/30"
                )}
              >
                {selectedOption === index && (
                  <Check className="w-4 h-4 text-foreground animate-scale-in" />
                )}
              </div>
              <span 
                className={cn(
                  "text-sm md:text-base font-medium transition-colors",
                  selectedOption === index ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {option}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
