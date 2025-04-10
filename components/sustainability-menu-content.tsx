// src/components/sustainability-menu-content.tsx
import * as React from "react";
import Link from "next/link";
import { NavigationMenuContent } from "@/components/ui/navigation-menu";
import { sustainabilityNavGroups } from "@/config/site"; // Import the data

export function SustainabilityMenuContent() {
  return (
    <NavigationMenuContent>
      {/* Adjust grid columns based on number of groups (3) */}
      <div className="grid grid-cols-3 gap-x-8 p-6 md:w-[500px] lg:w-[700px] xl:w-[900px]">

        {/* Map over the groups to create columns */}
        {sustainabilityNavGroups.map((group) => (
          <div key={group.title} className="flex flex-col space-y-2">
            <h3 className="mb-2 font-semibold">{group.title}</h3>
            {group.items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground hover:underline"
              >
                {item.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </NavigationMenuContent>
  );
}
