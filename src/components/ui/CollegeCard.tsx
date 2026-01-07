import { MapPin, BookOpen, Navigation } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface CollegeCardProps {
  name: string;
  location: string;
  courses: string[];
  distance?: string;
  type: "government" | "private";
  className?: string;
}

export function CollegeCard({
  name,
  location,
  courses,
  distance,
  type,
  className,
}: CollegeCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card p-5 shadow-card transition-all duration-300 hover:shadow-lg",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-semibold text-base leading-tight">{name}</h3>
        <span
          className={cn(
            "shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium",
            type === "government"
              ? "bg-success/10 text-success"
              : "bg-muted text-muted-foreground"
          )}
        >
          {type === "government" ? "Govt" : "Private"}
        </span>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
        <MapPin className="h-4 w-4 shrink-0" />
        <span>{location}</span>
        {distance && (
          <>
            <span className="mx-1">•</span>
            <Navigation className="h-3.5 w-3.5 shrink-0" />
            <span>{distance}</span>
          </>
        )}
      </div>

      {/* Courses */}
      <div className="flex items-start gap-2 mb-4">
        <BookOpen className="h-4 w-4 shrink-0 mt-0.5 text-muted-foreground" />
        <div className="flex flex-wrap gap-1.5">
          {courses.slice(0, 3).map((course) => (
            <span
              key={course}
              className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium"
            >
              {course}
            </span>
          ))}
          {courses.length > 3 && (
            <span className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              +{courses.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Action */}
      <Button variant="outline" size="sm" className="w-full">
        View Details
      </Button>
    </div>
  );
}
