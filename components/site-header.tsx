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
import { mainNav } from "@/config/site"; // Import main nav data
import { MainNavItem } from "@/components/main-nav-item"; // Import sub-component
import { AboutSasMenuContent } from "@/components/about-sas-menu-content"; // Import sub-component
import { HeaderActions } from "@/components/header-actions"; // Import sub-component

export function SiteHeader() {
  return (
    <div className="mx-auto flex h-14 max-w-6xl items-center px-4 sm:px-6 lg:px-8">
      <div className="mr-4 hidden items-center md:flex">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* Placeholder for SAS Logo SVG */}
          {/* <YourSasLogo className="h-6 w-6" /> */}
          <span className="font-bold">SAS Group</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {/* About SAS Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>About SAS</NavigationMenuTrigger>
              <AboutSasMenuContent />
            </NavigationMenuItem>

            {/* Map over other main nav items */}
            {mainNav.map(
              (item) =>
                item.href && <MainNavItem key={item.href} item={item} />
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Nav Placeholder */}
      {/* <MobileNav /> */}

      <HeaderActions />
    </div>
  );
}
