// src/components/about-sas-menu-content.tsx (New Component)
import * as React from "react";
import Link from "next/link";
import { NavigationMenuContent } from "@/components/ui/navigation-menu";
import { aboutSasNavGroups } from "@/config/site"; // Import the data
import { ChevronRight } from "lucide-react"; // Import icon

export function AboutSasMenuContent() {
  return (
    <NavigationMenuContent>
      {/* Add padding and define grid columns */}
      <div className="grid grid-cols-4 gap-x-8 p-6 md:w-[600px] lg:w-[800px] xl:w-[1000px]">

        {/* Map over the groups to create columns */}
        {aboutSasNavGroups.map((group) => (
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
