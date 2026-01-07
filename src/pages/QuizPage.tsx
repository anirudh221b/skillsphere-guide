import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { QuizSkeleton } from "@/components/ui/skeleton";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Question {
  id: number;
  question: string;
  options: string[];
  category: string;
}

const mockQuestions: Question[] = [
  {
    id: 1,
    question: "I enjoy solving puzzles and logical problems.",
    options: ["Strongly Agree", "Agree", "Neutral", "Disagree"],
    category: "Analytical",
  },
  {
    id: 2,
    question: "I like working with my hands and building things.",
    options: ["Strongly Agree", "Agree", "Neutral", "Disagree"],
    category: "Practical",
  },
  {
    id: 3,
    question: "I enjoy reading books and writing stories or essays.",
    options: ["Strongly Agree", "Agree", "Neutral", "Disagree"],
    category: "Creative",
  },
  {
    id: 4,
    question: "I am interested in how businesses work and make money.",
    options: ["Strongly Agree", "Agree", "Neutral", "Disagree"],
    category: "Business",
  },
  {
    id: 5,
    question: "I enjoy helping others and working in groups.",
    options: ["Strongly Agree", "Agree", "Neutral", "Disagree"],
    category: "Social",
  },
  {
    id: 6,
    question: "I am curious about how the human body works.",
    options: ["Strongly Agree", "Agree", "Neutral", "Disagree"],
    category: "Scientific",
  },
  {
    id: 7,
    question: "I enjoy drawing, painting, or other creative activities.",
    options: ["Strongly Agree", "Agree", "Neutral", "Disagree"],
    category: "Artistic",
  },
  {
    id: 8,
    question: "I like working with numbers and calculations.",
    options: ["Strongly Agree", "Agree", "Neutral", "Disagree"],
    category: "Mathematical",
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const question = mockQuestions[currentQuestion];
  const totalQuestions = mockQuestions.length;
  const isFirstQuestion = currentQuestion === 0;
  const isLastQuestion = currentQuestion === totalQuestions - 1;
  const hasAnswered = answers[question?.id] !== undefined;

  const handleSelect = (optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [question.id]: optionIndex }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      handleSubmit();
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (!isFirstQuestion) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    navigate("/results");
  };

  if (isLoading) {
    return (
      <Layout showFooter={false}>
        <div className="container max-w-2xl py-8">
          <QuizSkeleton />
        </div>
      </Layout>
    );
  }

  if (isSubmitting) {
    return (
      <Layout showFooter={false}>
        <div className="container max-w-2xl py-16 text-center animate-fade-in">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-current border-t-transparent" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Analyzing your responses...</h2>
          <p className="text-muted-foreground">
            We're finding the best career paths for you.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout showFooter={false}>
      <div className="container max-w-2xl py-8 animate-fade-in">
        {/* Progress */}
        <div className="mb-8">
          <ProgressBar value={currentQuestion + 1} max={totalQuestions} />
        </div>

        {/* Question Card */}
        <div className="rounded-xl border bg-card p-6 md:p-8 shadow-card mb-6">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
            {question.category}
          </span>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 leading-relaxed">
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                className={cn(
                  "w-full p-4 rounded-lg border-2 text-left font-medium transition-all duration-200",
                  "hover:border-primary/50 hover:bg-primary/5",
                  answers[question.id] === index
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-muted bg-background"
                )}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs",
                      answers[question.id] === index
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-muted-foreground/30"
                    )}
                  >
                    {answers[question.id] === index ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      String.fromCharCode(65 + index)
                    )}
                  </span>
                  {option}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between gap-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={isFirstQuestion}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <Button
            variant={isLastQuestion ? "hero" : "default"}
            onClick={handleNext}
            disabled={!hasAnswered}
          >
            {isLastQuestion ? (
              <>
                Submit Quiz
                <CheckCircle className="h-4 w-4 ml-2" />
              </>
            ) : (
              <>
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </div>
    </Layout>
  );
}
