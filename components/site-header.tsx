// src/components/site-header.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { AboutSasMenuContent } from "@/components/about-sas-menu-content";
import { SustainabilityMenuContent } from "@/components/sustainability-menu-content";
import { NewsroomMenuContent } from "@/components/newsroom-menu-content";
import { CareerMenuContent } from "@/components/career-menu-content";
import { ContactMenuContent } from "@/components/contact-menu-content";
// Keep InvestorMenuContent if you still need it
// import { InvestorMenuContent } from "@/components/investor-menu-content";
import { HeaderActions } from "@/components/header-actions";
// Import Button for potential mobile menu
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react"; // Example icon for mobile

export function SiteHeader() {
  return (
    // Outer container: sets max-width, padding, and flex alignment
    <div className="mx-auto flex h-14 max-w-6xl items-center px-4 sm:px-6 lg:px-8">
      {/* Logo Area (Left) */}
      <div className="mr-auto flex-none md:mr-6"> {/* Use mr-auto to push others right initially, flex-none prevents shrinking */}
        <Link href="/" className="flex items-center space-x-2">
          {/* Placeholder for SAS Logo SVG */}
          {/* <YourSasLogo className="h-6 w-6" /> */}
          <span className="font-bold">SAS Group</span>
        </Link>
      </div>

      {/* Navigation Area (Center - Hidden on Mobile) */}
      {/* This div takes remaining space (flex-1) and centers its content */}
      <div className="hidden flex-1 justify-center md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            {/* About SAS Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>About SAS</NavigationMenuTrigger>
              <AboutSasMenuContent />
            </NavigationMenuItem>

            {/* Sustainability Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Sustainability</NavigationMenuTrigger>
              <SustainabilityMenuContent />
            </NavigationMenuItem>

            {/* Investor Relations Dropdown (Keep if needed) */}
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger>Investor Relations</NavigationMenuTrigger>
              <InvestorMenuContent />
            </NavigationMenuItem> */}

            {/* Newsroom Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Newsroom</NavigationMenuTrigger>
              <NewsroomMenuContent />
            </NavigationMenuItem>

            {/* Career Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Career</NavigationMenuTrigger>
              <CareerMenuContent />
            </NavigationMenuItem>

            {/* Contact Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
              <ContactMenuContent />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Actions Area (Right - Hidden on Mobile) */}
      <div className="hidden flex-none md:flex"> {/* flex-none prevents shrinking */}
        <HeaderActions />
      </div>

      {/* Mobile Menu Button (Visible only on Mobile) */}
      <div className="flex flex-none md:hidden"> {/* Use flex-none here too */}
        {/* TODO: Implement Mobile Menu (e.g., using Shadcn Sheet) */}
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </div>
    </div>
  );
}
