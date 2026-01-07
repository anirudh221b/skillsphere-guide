import { Layout } from "@/components/layout/Layout";
import { Target, Users, Heart, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">About SkillSphere</h1>
            <p className="text-lg text-muted-foreground text-balance">
              We're on a mission to help every student in India make informed career decisions, with a special focus on accessible government education.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-xl bg-card border p-8 shadow-card animate-fade-in">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide free, accessible career guidance to students from all backgrounds, helping them discover their potential and find the right educational path in government institutions.
              </p>
            </div>
            <div className="rounded-xl bg-card border p-8 shadow-card animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-semibold mb-3">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A world where every student, regardless of their socio-economic background, has access to quality career guidance and can make confident decisions about their future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Focus on Govt Colleges */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Why Government Colleges?
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Affordable Education",
                  description: "Government colleges offer quality education at a fraction of the cost of private institutions, making higher education accessible to all.",
                },
                {
                  title: "Quality Faculty",
                  description: "Many government institutions have experienced faculty members with strong academic backgrounds and industry connections.",
                },
                {
                  title: "Better Job Opportunities",
                  description: "Government college degrees are widely recognized by employers and often preferred for public sector jobs.",
                },
                {
                  title: "Scholarship Support",
                  description: "Government colleges offer numerous scholarship schemes for economically weaker sections and merit students.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-xl border bg-card shadow-sm animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="shrink-0 h-8 w-8 rounded-full bg-success/10 text-success flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: <Heart className="h-6 w-6" />,
                title: "Student First",
                description: "Everything we build is designed with students in mind.",
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Inclusivity",
                description: "Free and accessible to students from all backgrounds.",
              },
              {
                icon: <Target className="h-6 w-6" />,
                title: "Simplicity",
                description: "Clear, jargon-free guidance that's easy to understand.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-card border shadow-card"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
