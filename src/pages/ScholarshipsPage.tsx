import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Award, Calendar, ExternalLink, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock scholarships data
const mockScholarships = [
  {
    id: 1,
    name: "INSPIRE Scholarship",
    provider: "Department of Science & Technology",
    amount: "₹80,000/year",
    deadline: "2024-03-31",
    eligibility: "Class 12 with 85%+ in Science",
    status: "open",
  },
  {
    id: 2,
    name: "National Merit Scholarship",
    provider: "Ministry of Education",
    amount: "₹12,000/year",
    deadline: "2024-02-28",
    eligibility: "Class 10 pass with 60%+",
    status: "open",
  },
  {
    id: 3,
    name: "Post Matric Scholarship (SC/ST)",
    provider: "Ministry of Social Justice",
    amount: "Up to ₹1,00,000",
    deadline: "2024-01-15",
    eligibility: "SC/ST students",
    status: "closing_soon",
  },
  {
    id: 4,
    name: "Prime Minister's Scholarship Scheme",
    provider: "Ministry of Defence",
    amount: "₹36,000/year",
    deadline: "2024-04-30",
    eligibility: "Wards of Ex-servicemen",
    status: "open",
  },
];

const getStatusBadge = (status: string, deadline: string) => {
  const daysLeft = Math.ceil(
    (new Date(deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  );

  if (status === "closing_soon" || daysLeft <= 7) {
    return {
      text: `${daysLeft} days left`,
      className: "bg-warning/10 text-warning",
    };
  }
  return {
    text: "Open",
    className: "bg-success/10 text-success",
  };
};

export default function ScholarshipsPage() {
  return (
    <Layout>
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Scholarships & Financial Aid</h1>
          <p className="text-muted-foreground">
            Don't miss these opportunities to fund your education.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Active Scholarships", value: "24", icon: <Award className="h-5 w-5" /> },
            { label: "Closing This Month", value: "8", icon: <Calendar className="h-5 w-5" /> },
            { label: "For Class 10", value: "12", icon: <Award className="h-5 w-5" /> },
            { label: "For Class 12", value: "18", icon: <Award className="h-5 w-5" /> },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border bg-card p-4 text-center shadow-card"
            >
              <div className="mx-auto mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scholarship List */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Available Scholarships</h2>
          <div className="space-y-4">
            {mockScholarships.map((scholarship, index) => {
              const badge = getStatusBadge(scholarship.status, scholarship.deadline);
              return (
                <div
                  key={scholarship.id}
                  className="rounded-xl border bg-card p-5 shadow-card hover:shadow-lg transition-shadow animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="font-semibold">{scholarship.name}</h3>
                        <span
                          className={cn(
                            "shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium",
                            badge.className
                          )}
                        >
                          {badge.text}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {scholarship.provider}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Amount: </span>
                          <span className="font-medium text-success">{scholarship.amount}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Deadline: </span>
                          <span className="font-medium">
                            {new Date(scholarship.deadline).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        <span className="font-medium">Eligibility:</span> {scholarship.eligibility}
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="shrink-0">
                      Apply Now
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-10 rounded-xl bg-muted/50 p-6 text-center">
          <h3 className="font-semibold mb-2">Need help with applications?</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Get personalized guidance on scholarship applications.
          </p>
          <Button variant="outline" asChild>
            <Link to="/dashboard">
              Go to Dashboard
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
