// src/components/main-nav-item.tsx (New Component)
import * as React from "react";
import Link from "next/link";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import type { NavItem } from "@/config/site"; // Import the type

interface MainNavItemProps {
  item: NavItem;
}

export function MainNavItem({ item }: MainNavItemProps) {
  return (
    <NavigationMenuItem>
      <Link href={item.href} legacyBehavior passHref>
        <NavigationMenuLink
          className={navigationMenuTriggerStyle()}
        >
          {item.title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}
