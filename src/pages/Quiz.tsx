import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { QuizProgress } from "@/components/quiz/QuizProgress";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { QuizResult } from "@/components/quiz/QuizResult";
import { Sparkles } from "lucide-react";

const Quiz = () => {
  const { translations } = useLanguage();
  const t = translations.quiz;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Scoring weights - higher index = more severe
  const questionWeights = [
    [1, 2, 3, 4, 4],  // Q1: frequency
    [4, 3, 2, 2, 1],  // Q2: duration (inverted - shorter is worse)
    [3, 4, 4, 5, 5],  // Q3: mental state
    [2, 3, 4, 5, 4],  // Q4: fears
    [5, 4, 4, 3, 4],  // Q5: prayer to Jesus
    [2, 3, 4, 4, 3],  // Q6: escalation
    [4, 3, 2, 4, 5],  // Q7: harmful behaviors
  ];

  const calculateScore = () => {
    const totalPoints = answers.reduce((sum, answer, index) => {
      return sum + (questionWeights[index]?.[answer] || 3);
    }, 0);
    
    const maxPoints = questionWeights.reduce((sum, weights) => sum + Math.max(...weights), 0);
    const minPoints = questionWeights.reduce((sum, weights) => sum + Math.min(...weights), 0);
    
    // Normalize to 60-98% range
    const normalizedScore = ((totalPoints - minPoints) / (maxPoints - minPoints)) * 38 + 60;
    return Math.round(Math.min(98, Math.max(60, normalizedScore)));
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < t.questions.length - 1) {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1);
        setIsVisible(true);
      }, 300);
    } else {
      setShowResult(true);
    }
  };

  // Check if user selected concerning options in last question
  const showSupportMessage = answers[6] === 0 || answers[6] === 3 || answers[6] === 4;

  return (
    <div className="min-h-screen hero-gradient relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 bg-primary-glow rounded-full animate-confetti-fall opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              FreedomPath
            </span>
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-4 leading-tight px-2">
            {t.title}
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* Progress Bar */}
        {!showResult && (
          <div className="max-w-2xl mx-auto mb-10 animate-fade-in-up">
            <QuizProgress 
              currentQuestion={currentQuestion + 1}
              totalQuestions={t.questions.length}
              label={t.progressLabel.replace("{current}", String(currentQuestion + 1)).replace("{total}", String(t.questions.length))}
            />
          </div>
        )}

        {/* Quiz Content */}
        <div className="min-h-[60vh] flex items-center justify-center">
          {!showResult ? (
            <QuizQuestion
              question={t.questions[currentQuestion].question}
              options={t.questions[currentQuestion].options}
              onAnswer={handleAnswer}
              isVisible={isVisible}
            />
          ) : (
            <QuizResult 
              score={calculateScore()}
              t={t}
              showSupportMessage={showSupportMessage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
