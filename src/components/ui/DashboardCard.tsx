import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  variant?: "default" | "primary" | "secondary" | "accent";
  badge?: string;
}

export function DashboardCard({
  icon,
  title,
  description,
  href,
  variant = "default",
  badge,
}: DashboardCardProps) {
  const variantStyles = {
    default: "bg-card border",
    primary: "bg-primary/5 border-primary/20",
    secondary: "bg-secondary/5 border-secondary/20",
    accent: "bg-accent/5 border-accent/20",
  };

  const iconStyles = {
    default: "bg-muted text-foreground",
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent",
  };

  return (
    <Link
      to={href}
      className={cn(
        "group relative flex flex-col rounded-xl border p-5 shadow-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        variantStyles[variant]
      )}
    >
      {badge && (
        <span className="absolute -top-2 -right-2 rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
          {badge}
        </span>
      )}
      <div
        className={cn(
          "mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg transition-transform group-hover:scale-110",
          iconStyles[variant]
        )}
      >
        {icon}
      </div>
      <h3 className="font-semibold text-base mb-1">{title}</h3>
      <p className="text-muted-foreground text-sm flex-1">{description}</p>
      <div className="mt-4 flex items-center text-sm font-medium text-primary">
        <span>Explore</span>
        <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
