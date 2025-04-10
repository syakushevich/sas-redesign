// src/components/site-footer.tsx
import * as React from "react";
import Link from "next/link";

export function SiteFooter() {
  // Removed currentYear as it's no longer used
  // const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/50 py-8 md:py-10">
      {/* Main container: Center its content horizontally */}
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-6 px-4 text-sm text-muted-foreground sm:px-6 lg:px-8">
        {/* Removed Left Column */}

        {/* Links Section: Centered */}
        {/* Removed the extra wrapper div */}
        {/* Apply flex styles directly here */}
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
          <Link href="#" className="hover:text-foreground hover:underline">
            Book a trip with SAS
          </Link>
          <span className="opacity-50">|</span> {/* Slightly muted separator */}
          <Link href="#" className="hover:text-foreground hover:underline">
            Contacts
          </Link>
          <span className="opacity-50">|</span> {/* Slightly muted separator */}
          <Link href="#" className="hover:text-foreground hover:underline">
            SAS Cargo
          </Link>
          {/* Separator for wrapping */}
          <span className="hidden sm:inline opacity-50">|</span>
          <Link href="#" className="hover:text-foreground hover:underline">
            Usage of cookies
          </Link>
          <span className="opacity-50">|</span> {/* Slightly muted separator */}
          <Link href="#" className="hover:text-foreground hover:underline">
            Terms and conditions
          </Link>
        </div>

        {/* Optional: Add copyright centered below */}
        {/* <div>&copy; {new Date().getFullYear()} SAS Group</div> */}
      </div>
    </footer>
  );
}
