// src/app/page.tsx
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ImageCarousel } from "@/components/image-carousel";
import { SocialTabs } from "@/components/social-tabs";
import { ExploreSection } from "@/components/explore-section";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export default function Home() {
  const carouselImages = [
    "https://www.sasgroup.net/files/Hero-images/Winglet_SASGroup.jpg",
    "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SiteHeader />
      </header>

      <main className="flex-grow mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* --- Hero Section --- */}
        <section className="pt-16 md:pt-24 lg:pt-16 text-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Connecting Scandinavia to the World
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl mb-8">
              SAS Group is the leading airline group in Scandinavia, focused on
              sustainable aviation and exceptional travel experiences.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <a href="/investor-relations">
                Investor Relations <TrendingUp className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/sustainability">Our Sustainability Goals</a>
            </Button>
          </div>
        </section>

        {/* --- Carousel Section --- */}
        <section className="py-9 md:py-9">
          <ImageCarousel images={carouselImages} />
        </section>

        {/* --- Key Information Blocks Section --- */}
        {/* Note: Moved ExploreSection before SocialTabs for better flow */}
        <ExploreSection />

        {/* --- Social Tabs Section --- */}
        <section className="pb-12 md:pb-16 lg:pb-20">
          {/* Added Heading and Paragraph */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Follow Our Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest news, insights, and moments from SAS
              across our social media channels.
            </p>
          </div>
          {/* End of Added Text */}

          <SocialTabs />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
