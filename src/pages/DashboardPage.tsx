import { Layout } from "@/components/layout/Layout";
import { DashboardCard } from "@/components/ui/DashboardCard";
import { Button } from "@/components/ui/button";
import {
  Brain,
  GraduationCap,
  MapPin,
  Award,
  LogOut,
  ChevronRight,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

// Mock user data
const mockUser = {
  name: "Rahul",
  class: "12",
  stream: "Science (PCM)",
  quizCompleted: true,
  lastQuizScore: 85,
};

const quickLinks = [
  {
    icon: <Brain className="h-5 w-5" />,
    title: "Take Aptitude Quiz",
    description: "Discover your strengths and interests",
    href: "/quiz",
    variant: "primary" as const,
    badge: mockUser.quizCompleted ? undefined : "New",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "View Recommendations",
    description: "Streams, courses & career paths for you",
    href: "/results",
    variant: "secondary" as const,
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Find Govt Colleges",
    description: "Colleges near you matching your interests",
    href: "/colleges",
    variant: "default" as const,
  },
  {
    icon: <Award className="h-5 w-5" />,
    title: "Scholarships",
    description: "Financial aid & deadlines",
    href: "/scholarships",
    variant: "accent" as const,
    badge: "3 New",
  },
];

export default function DashboardPage() {
  return (
    <Layout>
      <div className="container py-8">
        {/* Welcome Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 animate-fade-in">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-1">
              Welcome back, {mockUser.name}! 👋
            </h1>
            <p className="text-muted-foreground">
              Class {mockUser.class} • {mockUser.stream}
            </p>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Link>
          </Button>
        </div>

        {/* Progress Summary */}
        {mockUser.quizCompleted && (
          <div className="mb-8 rounded-xl border bg-card p-5 shadow-card animate-fade-in">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-success/10 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-success" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Aptitude Quiz Completed</h3>
                <p className="text-sm text-muted-foreground">
                  You scored {mockUser.lastQuizScore}% – Great job! Your recommendations are ready.
                </p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link to="/results">
                  View Results
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <section>
          <h2 className="text-lg font-semibold mb-4">What would you like to do?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <div
                key={link.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <DashboardCard {...link} />
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold mb-4">Your Journey</h2>
          <div className="rounded-xl border bg-card shadow-card overflow-hidden">
            <div className="divide-y">
              {[
                {
                  icon: <Brain className="h-4 w-4" />,
                  title: "Completed Aptitude Quiz",
                  time: "2 days ago",
                  color: "text-primary",
                  bg: "bg-primary/10",
                },
                {
                  icon: <GraduationCap className="h-4 w-4" />,
                  title: "Viewed Engineering Colleges",
                  time: "3 days ago",
                  color: "text-secondary",
                  bg: "bg-secondary/10",
                },
                {
                  icon: <Award className="h-4 w-4" />,
                  title: "Saved INSPIRE Scholarship",
                  time: "1 week ago",
                  color: "text-accent",
                  bg: "bg-accent/10",
                },
              ].map((activity) => (
                <div
                  key={activity.title}
                  className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors"
                >
                  <div
                    className={`h-9 w-9 rounded-full ${activity.bg} ${activity.color} flex items-center justify-center`}
                  >
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
