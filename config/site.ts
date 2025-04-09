// src/config/site.ts (Create this new file and folder if needed)

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type SubNavItem = {
  title: string;
  href: string;
  description?: string; // Optional description for list items
  disabled?: boolean;
};

export type NavItemGroup = {
  title: string;
  items: SubNavItem[];
};

export const mainNav: NavItem[] = [
  // About SAS will be handled separately due to its complex dropdown
  { title: "Sustainability", href: "/sustainability" },
  { title: "Newsroom", href: "/newsroom" }, // Assuming 'Media' becomes 'Newsroom'
  { title: "Career", href: "/career" },
  { title: "Contact", href: "/contact" },
];

export const aboutSasNavGroups: NavItemGroup[] = [
  {
    title: "This is SAS",
    items: [
      { title: "SAS Community support", href: "/about/community-support" },
      { title: "SAS Code of Conduct", href: "/about/code-of-conduct" },
      { title: "SAS Whistleblowing Policy", href: "/about/whistleblowing" },
      { title: "Commercial hybrid bonds", href: "/about/hybrid-bonds" },
      { title: "Business model", href: "/about/business-model" },
    ],
  },
  {
    title: "Fleet",
    items: [
      { title: "Airbus A320neo/A321LR", href: "/about/fleet/a320neo" },
      { title: "Airbus A319/A320", href: "/about/fleet/a319" },
      { title: "Airbus A330-300/A350-900", href: "/about/fleet/a330" },
      { title: "Embraer E195LR", href: "/about/fleet/e195lr" }, // Assuming E195LR
      { title: "CRJ900", href: "/about/fleet/crj900" },
      { title: "SAS Medevac Boeing 737-700", href: "/about/fleet/medevac" },
      { title: "Alliances and partners – SkyTeam", href: "/about/partners" },
    ],
  },
  {
    title: "Board and management",
    items: [
      { title: "SAS Board of Directors", href: "/about/board" },
      { title: "SAS Executive Leadership Team", href: "/about/management" },
      { title: "Annual Reports", href: "/investors/reports" }, // Link to IR section
      { title: "Other reports", href: "/investors/other-reports" }, // Link to IR section
    ],
  },
  {
    title: "SAS History",
    items: [
      { title: "History milestones", href: "/about/history/milestones" },
      { title: "Presidents of SAS, beginning in 1946", href: "/about/history/presidents" },
      { title: "The SAS Museum", href: "/about/history/museum" },
    ],
  },
];

export const investorNavItems: SubNavItem[] = [
  {
    title: "Reports & Presentations",
    href: "/investors/reports",
    description: "View annual reports, quarterly results, and presentations.",
  },
  {
    title: "Shareholder Information",
    href: "/investors/shareholders",
    description: "Details about SAS shares, dividends, and ownership.",
  },
  {
    title: "Financial Calendar",
    href: "/investors/calendar",
    description: "Key dates for financial reporting and events.",
  },
  // Add more investor links if needed
];
