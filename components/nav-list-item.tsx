// src/components/nav-list-item.tsx (New or Refactored ListItem)
import * as React from "react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import type { SubNavItem } from "@/config/site"; // Import the type

interface NavListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  item: SubNavItem; // Use SubNavItem type
}

export const NavListItem = React.forwardRef<
  React.ElementRef<"a">,
  NavListItemProps // Use the specific props interface
>(({ className, item, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={item.href} // Use href from item
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{item.title}</div>
          {/* Render description if it exists */}
          {item.description && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {item.description}
            </p>
          )}
          {/* Allow passing children for more complex content if needed */}
          {children}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
NavListItem.displayName = "NavListItem";
