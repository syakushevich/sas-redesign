// src/components/explore-section.tsx
import * as React from "react";
import Link from "next/link"; // Import Link
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent, // Import CardContent
  CardFooter, // Import CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Import Button
import {
  Briefcase,
  Leaf,
  Newspaper,
  TrendingUp,
  ArrowRight, // Import ArrowRight
} from "lucide-react";

export function ExploreSection() {
  return (
    <section className="pt-4 md:pt-6 lg:pt-8 pb-12 md:pb-16 lg:pb-20">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-10">
        Explore SAS Group
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Card 1: Investor Relations */}
        <Card className="flex flex-col"> {/* Added flex flex-col */}
          <CardHeader>
            <TrendingUp className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Investor Relations</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow"> {/* Added flex-grow */}
            <CardDescription>
              Access detailed financial reports, presentations, stock
              information, and governance details for shareholders and analysts.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="px-0" asChild>
              <Link href="/investor-relations">
                Go to Investors <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Card 2: Media */}
        <Card className="flex flex-col">
          <CardHeader>
            <Newspaper className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Media</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription>
              Find the latest press releases, news articles, media contacts, and
              resources for journalists and publications.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="px-0" asChild>
              <Link href="/newsroom">
                Visit Newsroom <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Card 3: Sustainability */}
        <Card className="flex flex-col">
          <CardHeader>
            <Leaf className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Sustainability</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription>
              Learn about our commitment to sustainable aviation, environmental
              goals, social responsibility, and related initiatives.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="px-0" asChild>
              <Link href="/sustainability">
                Discover Our Goals <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Card 4: Careers */}
        <Card className="flex flex-col">
          <CardHeader>
            <Briefcase className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Careers</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription>
              Explore opportunities to join our team, learn about working at
              SAS, and view current vacancies across various departments.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="px-0" asChild>
              <Link href="/career">
                View Openings <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
