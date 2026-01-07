import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CollegeCard } from "@/components/ui/CollegeCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { CardSkeleton } from "@/components/ui/skeleton";
import { Search, SlidersHorizontal, GraduationCap, MapPin } from "lucide-react";

// Mock colleges data
const mockColleges = [
  {
    id: 1,
    name: "Indian Institute of Technology, Delhi",
    location: "New Delhi, Delhi",
    courses: ["B.Tech", "M.Tech", "PhD"],
    distance: "5 km",
    type: "government" as const,
  },
  {
    id: 2,
    name: "Delhi College of Engineering",
    location: "Bawana Road, Delhi",
    courses: ["B.Tech", "M.Tech", "MBA"],
    distance: "12 km",
    type: "government" as const,
  },
  {
    id: 3,
    name: "Jawaharlal Nehru University",
    location: "New Mehrauli Road, Delhi",
    courses: ["BA", "MA", "PhD", "B.Sc"],
    distance: "8 km",
    type: "government" as const,
  },
  {
    id: 4,
    name: "Shri Ram College of Commerce",
    location: "Maurice Nagar, Delhi",
    courses: ["B.Com", "M.Com", "BBA"],
    distance: "3 km",
    type: "government" as const,
  },
  {
    id: 5,
    name: "Lady Shri Ram College",
    location: "Lajpat Nagar, Delhi",
    courses: ["BA", "B.Com", "B.Sc"],
    distance: "6 km",
    type: "government" as const,
  },
  {
    id: 6,
    name: "Netaji Subhas University of Technology",
    location: "Dwarka, Delhi",
    courses: ["B.Tech", "M.Tech", "MBA"],
    distance: "15 km",
    type: "government" as const,
  },
];

const streams = [
  { value: "all", label: "All Streams" },
  { value: "science", label: "Science" },
  { value: "commerce", label: "Commerce" },
  { value: "arts", label: "Arts / Humanities" },
];

const locations = [
  { value: "all", label: "All Locations" },
  { value: "delhi", label: "Delhi NCR" },
  { value: "mumbai", label: "Mumbai" },
  { value: "bangalore", label: "Bangalore" },
  { value: "chennai", label: "Chennai" },
];

export default function CollegesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStream, setSelectedStream] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  // Filter colleges (mock implementation)
  const filteredColleges = mockColleges.filter((college) =>
    college.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <Layout>
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Find Government Colleges</h1>
          <p className="text-muted-foreground">
            Discover colleges near you that match your interests and career goals.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-8 space-y-4 animate-fade-in">
          {/* Search Bar */}
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search colleges by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button onClick={handleSearch}>
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <SlidersHorizontal className="h-4 w-4" />
              <span>Filter by:</span>
            </div>
            <Select value={selectedStream} onValueChange={setSelectedStream}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Stream" />
              </SelectTrigger>
              <SelectContent>
                {streams.map((stream) => (
                  <SelectItem key={stream.value} value={stream.value}>
                    {stream.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-[160px]">
                <MapPin className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location.value} value={location.value}>
                    {location.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 text-sm text-muted-foreground">
          Showing {filteredColleges.length} government colleges
        </div>

        {/* College Grid */}
        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        ) : filteredColleges.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredColleges.map((college, index) => (
              <div
                key={college.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CollegeCard {...college} />
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={<GraduationCap className="h-8 w-8" />}
            title="No colleges found"
            description="Try adjusting your search or filters to find more results."
            action={
              <Button variant="outline" onClick={() => setSearchQuery("")}>
                Clear Search
              </Button>
            }
          />
        )}
      </div>
    </Layout>
  );
}
