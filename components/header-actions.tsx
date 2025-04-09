// src/components/header-actions.tsx
"use client"; // Add this because we'll use useState

import * as React from "react"; // Import React
import { useState } from "react"; // Import useState hook
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function HeaderActions() {
  // State to track the current language, default to 'EN'
  const [language, setLanguage] = useState<"EN" | "SE">("EN");

  // Function to toggle the language state
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "EN" ? "SE" : "EN"));
    // In a real app, you would trigger actual language change logic here
  };

  return (
    <div className="flex flex-1 items-center justify-end space-x-2">
      {/* REMOVED: Stock Ticker Span */}
      {/* <span className="text-sm text-muted-foreground hidden lg:inline">
        SAS DKK: 123.45 (+0.5%)
      </span> */}

      <Button variant="ghost" size="icon" aria-label="Search">
        <Search className="h-4 w-4" />
      </Button>

      {/* Language Toggle Button */}
      <Button variant="outline" size="sm" onClick={toggleLanguage}>
        {language} {/* Display the current language from state */}
      </Button>
    </div>
  );
}
