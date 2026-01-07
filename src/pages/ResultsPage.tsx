import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ResultsSkeleton } from "@/components/ui/skeleton";
import {
  GraduationCap,
  Briefcase,
  BookOpen,
  ChevronRight,
  TrendingUp,
  Target,
  Download,
  RefreshCw,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mock results data
const mockResults = {
  primaryStream: {
    name: "Science (PCM)",
    match: 92,
    description: "Based on your aptitude for analytical thinking and problem-solving.",
  },
  secondaryStream: {
    name: "Commerce",
    match: 78,
    description: "Your interest in business and numbers makes this a good alternative.",
  },
  suggestedCourses: [
    { name: "B.Tech in Computer Science", demand: "Very High", duration: "4 years" },
    { name: "B.Tech in Electronics", demand: "High", duration: "4 years" },
    { name: "B.Sc in Physics", demand: "Medium", duration: "3 years" },
    { name: "BCA (Computer Applications)", demand: "High", duration: "3 years" },
  ],
  careerPaths: [
    {
      title: "Software Engineer",
      path: "B.Tech CS → Internship → Junior Developer → Senior Developer",
      avgSalary: "₹6-15 LPA",
    },
    {
      title: "Data Scientist",
      path: "B.Tech/B.Sc → M.Tech/MS → Data Analyst → Data Scientist",
      avgSalary: "₹8-20 LPA",
    },
    {
      title: "Government Officer (IAS/IPS)",
      path: "Any Degree → UPSC Preparation → Prelims → Mains → Interview",
      avgSalary: "₹10-25 LPA",
    },
  ],
};

export default function ResultsPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <div className="container max-w-4xl py-8">
          <ResultsSkeleton />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container max-w-4xl py-8 animate-fade-in">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success mb-4">
            <Target className="h-8 w-8" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Your Career Recommendations
          </h1>
          <p className="text-muted-foreground">
            Based on your aptitude quiz responses, here are your best matches.
          </p>
        </div>

        {/* Stream Recommendations */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Recommended Streams
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Primary */}
            <div className="rounded-xl border-2 border-primary bg-primary/5 p-5 relative overflow-hidden">
              <span className="absolute top-3 right-3 rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                Best Match
              </span>
              <h3 className="font-semibold text-lg mb-1">{mockResults.primaryStream.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {mockResults.primaryStream.description}
              </p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-1000"
                    style={{ width: `${mockResults.primaryStream.match}%` }}
                  />
                </div>
                <span className="font-semibold text-primary">
                  {mockResults.primaryStream.match}%
                </span>
              </div>
            </div>
            {/* Secondary */}
            <div className="rounded-xl border bg-card p-5">
              <span className="inline-block rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium mb-3">
                Alternative
              </span>
              <h3 className="font-semibold text-lg mb-1">{mockResults.secondaryStream.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {mockResults.secondaryStream.description}
              </p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-secondary transition-all duration-1000"
                    style={{ width: `${mockResults.secondaryStream.match}%` }}
                  />
                </div>
                <span className="font-semibold text-secondary">
                  {mockResults.secondaryStream.match}%
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Suggested Courses */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-secondary" />
            Suggested Degree Courses
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {mockResults.suggestedCourses.map((course, index) => (
              <div
                key={course.name}
                className="flex items-center gap-4 rounded-xl border bg-card p-4 hover:shadow-md transition-shadow"
              >
                <div className="h-10 w-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm truncate">{course.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {course.duration} • Demand: {course.demand}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Career Paths */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-accent" />
            Career Roadmaps
          </h2>
          <div className="space-y-4">
            {mockResults.careerPaths.map((career) => (
              <div
                key={career.title}
                className="rounded-xl border bg-card p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                  <h3 className="font-semibold">{career.title}</h3>
                  <span className="inline-flex items-center rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success">
                    Avg: {career.avgSalary}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <GraduationCap className="h-4 w-4 shrink-0" />
                  <span className="truncate">{career.path}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/colleges">
              Explore Colleges
              <ChevronRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/quiz">
              <RefreshCw className="h-4 w-4 mr-2" />
              Retake Quiz
            </Link>
          </Button>
          <Button variant="ghost" size="lg">
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </Button>
        </div>
      </div>
    </Layout>
  );
}
