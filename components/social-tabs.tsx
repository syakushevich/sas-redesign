// src/components/social-tabs.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// Correct import path for Shadcn Tabs
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function SocialTabs() {
  return (
    // Use w-full to take the full width of the container
    <Tabs defaultValue="instagram" className="w-full">
      {/* Use grid-cols-3 for three tabs */}
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="instagram">Instagram</TabsTrigger>
        <TabsTrigger value="youtube">YouTube</TabsTrigger>
        <TabsTrigger value="x">X (Twitter)</TabsTrigger>
      </TabsList>

      {/* Content for each tab */}
      <TabsContent value="instagram" className="mt-4 rounded-md border p-6">
        {/* Replace with actual Instagram feed/content */}
        <h3 className="text-lg font-semibold mb-2">Instagram Feed</h3>
        <p className="text-sm text-muted-foreground">
          Placeholder for Instagram content. This could be an embedded feed or
          curated posts.
        </p>
        {/* Example placeholder structure */}
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="aspect-square bg-muted rounded animate-pulse"></div>
          <div className="aspect-square bg-muted rounded animate-pulse"></div>
          <div className="aspect-square bg-muted rounded animate-pulse"></div>
        </div>
      </TabsContent>

      <TabsContent value="youtube" className="mt-4 rounded-md border p-6">
        {/* Replace with actual YouTube feed/content */}
        <h3 className="text-lg font-semibold mb-2">YouTube Videos</h3>
        <p className="text-sm text-muted-foreground">
          Placeholder for YouTube content. This could feature latest videos or
          playlists.
        </p>
        {/* Example placeholder structure */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="aspect-video bg-muted rounded animate-pulse"></div>
          <div className="aspect-video bg-muted rounded animate-pulse"></div>
        </div>
      </TabsContent>

      <TabsContent value="x" className="mt-4 rounded-md border p-6">
        {/* Replace with actual X (Twitter) feed/content */}
        <h3 className="text-lg font-semibold mb-2">Latest from X</h3>
        <p className="text-sm text-muted-foreground">
          Placeholder for X (Twitter) feed. This could be an embedded timeline.
        </p>
        {/* Example placeholder structure */}
        <div className="mt-4 space-y-4">
          <div className="h-16 bg-muted rounded animate-pulse"></div>
          <div className="h-16 bg-muted rounded animate-pulse"></div>
          <div className="h-16 bg-muted rounded animate-pulse"></div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
