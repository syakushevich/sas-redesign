// src/components/explore-section.tsx
import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Briefcase,
  Leaf,
  Newspaper,
  TrendingUp,
} from "lucide-react";

export function ExploreSection() {
  return (
    // Reduced top padding (pt-*), kept bottom padding (pb-*)
    <section className="pt-4 md:pt-6 lg:pt-8 pb-12 md:pb-16 lg:pb-20">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-10">
        Explore SAS Group
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Card 1: Investor Relations */}
        <Card>
          <CardHeader>
            <TrendingUp className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Investor Relations</CardTitle>
            <CardDescription>
              Financial reports, presentations, and shareholder info.
            </CardDescription>
          </CardHeader>
        </Card>
        {/* Card 2: Media */}
        <Card>
          <CardHeader>
            <Newspaper className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Media</CardTitle>
            <CardDescription>News & Press</CardDescription>
          </CardHeader>
        </Card>
        {/* Card 3: Sustainability */}
        <Card>
          <CardHeader>
            <Leaf className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Sustainability</CardTitle>
            <CardDescription>Our Goals</CardDescription>
          </CardHeader>
        </Card>
        {/* Card 4: Careers */}
        <Card>
          <CardHeader>
            <Briefcase className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Careers</CardTitle>
            <CardDescription>Join Us</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
