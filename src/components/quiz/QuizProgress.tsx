interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  label: string;
}

export const QuizProgress = ({ currentQuestion, totalQuestions, label }: QuizProgressProps) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="w-full space-y-3">
      <div className="flex justify-between items-center text-sm">
        <span className="text-muted-foreground font-medium">{label}</span>
        <span className="gradient-text font-bold">{Math.round(progress)}%</span>
      </div>
      <div className="h-3 bg-muted/30 rounded-full overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{ 
            width: `${progress}%`,
            background: 'var(--gradient-feminine)'
          }}
        />
      </div>
    </div>
  );
};
