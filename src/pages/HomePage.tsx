import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/FeatureCard";
import {
  Brain,
  GraduationCap,
  MapPin,
  Award,
  ArrowRight,
  Users,
  BookOpen,
  Target,
} from "lucide-react";

const features = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Aptitude Test",
    description: "Discover your strengths with our easy-to-understand quiz designed for students like you.",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "College Finder",
    description: "Find government colleges near you that match your interests and career goals.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Career Roadmap",
    description: "Get a clear path from your stream choice to your dream job with step-by-step guidance.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Scholarships",
    description: "Never miss a scholarship deadline. We'll help you find financial support options.",
  },
];

const stats = [
  { value: "10,000+", label: "Students Guided" },
  { value: "500+", label: "Govt Colleges" },
  { value: "50+", label: "Career Paths" },
  { value: "100%", label: "Free to Use" },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-5" />
        <div className="container relative py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <BookOpen className="h-4 w-4" />
              <span>Free Career Guidance for Students</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              Find Your Path After{" "}
              <span className="gradient-hero bg-clip-text text-transparent">
                Class 10 & 12
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              SkillSphere helps you discover the right stream, degree courses, and career paths based on your interests and abilities. Focused on government colleges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/register">
                  Get Started Free
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/quiz">Take Aptitude Quiz</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-muted/30">
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center animate-fade-in">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Everything You Need to Choose Wisely
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform guides you through every step of your career journey with tools designed for Indian students.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who's It For Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Who Is SkillSphere For?</h2>
            <p className="text-muted-foreground">Designed to help everyone involved in a student's journey.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Students",
                description: "Class 10 & 12 students looking for clarity on their next steps.",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Parents",
                description: "Parents who want to support their child's career decisions.",
              },
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: "Teachers",
                description: "Educators guiding students toward the right paths.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-card border shadow-card"
              >
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="rounded-2xl gradient-hero p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Find Your Career Path?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              Join thousands of students who have discovered their potential with SkillSphere. It's completely free!
            </p>
            <Button variant="accent" size="xl" asChild>
              <Link to="/register">
                Start Your Journey
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
