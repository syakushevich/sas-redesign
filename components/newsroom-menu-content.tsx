// src/components/newsroom-menu-content.tsx
import * as React from "react";
import Link from "next/link";
import { NavigationMenuContent } from "@/components/ui/navigation-menu";
import { newsroomNavGroups } from "@/config/site"; // Import the data

export function NewsroomMenuContent() {
  return (
    <NavigationMenuContent>
      {/* Adjust grid columns based on number of groups (4) */}
      <div className="grid grid-cols-4 gap-x-8 p-6 md:w-[600px] lg:w-[800px] xl:w-[1000px]">

        {/* Map over the groups to create columns */}
        {newsroomNavGroups.map((group) => (
          <div key={group.title} className="flex flex-col space-y-2">
            {/* Don't render title if it's just a placeholder like "Follow" */}
            {group.items.length > 1 || group.title !== "Follow" ? (
               <h3 className="mb-2 font-semibold">{group.title}</h3>
            ) : null}
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
