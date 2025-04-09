// src/components/site-footer.tsx (New File)
import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/50 py-8 md:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 text-sm text-muted-foreground sm:px-6 md:flex-row md:justify-between lg:px-8">
        {/* Left Column: Address Info */}
        <div className="text-center md:text-left">
          <p className="font-semibold">SAS {currentYear}</p>
          <p>SAS AB, registration number 556606-8499,</p>
          <p>SE-195 87</p>
          <p>Stockholm, Sweden</p>
        </div>

        {/* Right Column: Links */}
        <div className="flex flex-col items-center gap-2 text-center md:items-end md:text-right">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 md:justify-end">
            <Link href="#" className="hover:text-foreground hover:underline">
              Book a trip with SAS
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-foreground hover:underline">
              Contacts
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-foreground hover:underline">
              SAS Cargo
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 md:justify-end">
            <Link href="#" className="hover:text-foreground hover:underline">
              Usage of cookies
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-foreground hover:underline">
              Terms and conditions
            </Link>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 md:order-first">
          <Link href="#" aria-label="Facebook" className="hover:text-foreground">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="Twitter" className="hover:text-foreground">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="hover:text-foreground">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="Instagram" className="hover:text-foreground">
            <Instagram className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
