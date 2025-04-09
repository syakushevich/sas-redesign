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

    </section>
  );
}
