// src/config/site.ts

// --- Keep existing types (NavItem, SubNavItem, NavItemGroup) ---
export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type SubNavItem = {
  title: string;
  href: string;
  description?: string;
  disabled?: boolean;
};

export type NavItemGroup = {
  title: string;
  items: SubNavItem[];
};

// --- Keep existing mainNav, aboutSasNavGroups, investorNavItems ---
export const mainNav: NavItem[] = [
  // These will be replaced by dropdown triggers in the header component
  // { title: "Sustainability", href: "/sustainability" },
  // { title: "Newsroom", href: "/newsroom" },
  // { title: "Career", href: "/career" },
  // { title: "Contact", href: "/contact" },
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
      { title: "Embraer E195LR", href: "/about/fleet/e195lr" },
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
      { title: "Annual Reports", href: "/investors/reports" },
      { title: "Other reports", href: "/investors/other-reports" },
    ],
  },
  {
    title: "SAS History",
    items: [
      { title: "History milestones", href: "/about/history/milestones" },
      {
        title: "Presidents of SAS, beginning in 1946",
        href: "/about/history/presidents",
      },
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
];

// --- NEW DATA STRUCTURES BASED ON SCREENSHOTS ---

export const sustainabilityNavGroups: NavItemGroup[] = [
  {
    title: "SAS view on sustainability",
    items: [
      {
        title: "Responsibility for sustainable development",
        href: "/sustainability/responsibility",
      },
      {
        title: "Environmental Responsibility",
        href: "/sustainability/environmental",
      },
      { title: "Social Responsibility", href: "/sustainability/social" },
      { title: "Financial Responsibility", href: "/sustainability/financial" },
      { title: "SAS Stakeholders", href: "/sustainability/stakeholders" },
    ],
  },
  {
    title: "Sustainability policies",
    items: [
      { title: "Sustainability policy", href: "/sustainability/policy" },
      { title: "Environmental policy", href: "/sustainability/environmental-policy" },
      { title: "Work environment policy", href: "/sustainability/work-environment-policy" },
      { title: "Diversity policy", href: "/sustainability/diversity-policy" },
      { title: "Purchasing policy", href: "/sustainability/purchasing-policy" },
      { title: "Quality policy", href: "/sustainability/quality-policy" },
      { title: "Sustainability related KPI's", href: "/sustainability/kpis" }, // Combined KPI links for simplicity, adjust if needed
      // { title: "Key Performance Indicators", href: "/sustainability/kpis" }, // Often same as above
      { title: "Sustainability reports", href: "/sustainability/reports" },
    ],
  },
  {
    title: "Initiatives and activities",
    items: [
      { title: "Humanitarian support", href: "/sustainability/humanitarian-support" },
      {
        title: "Newer aircraft of the right size creates less emission",
        href: "/sustainability/newer-aircraft",
      },
      { title: "Renewable energy in the wings", href: "/sustainability/renewable-energy" }, // Included once
      {
        title: "SAS takes its social responsibility seriously",
        href: "/sustainability/social-responsibility-action",
      },
      {
        title: "Work Environment at the airport",
        href: "/sustainability/airport-environment",
      },
      { title: "State aid", href: "/sustainability/state-aid" }, // Check context if this belongs here
      { title: "Sustainability contacts", href: "/contact/sustainability" }, // Link to contact section
    ],
  },
];

export const newsroomNavGroups: NavItemGroup[] = [
  {
    title: "News", // Inferred title
    items: [
      { title: "Press releases", href: "/newsroom/press-releases" },
      { title: "SAS Comments", href: "/newsroom/comments" },
    ],
  },
  {
    title: "Media Resources", // Inferred title
    items: [
      { title: "Imagebank", href: "/newsroom/imagebank" },
      { title: "Media contacts", href: "/contact/media" }, // Link to contact section
    ],
  },
  {
    title: "Requests", // Inferred title
    items: [
      { title: "Photo permission", href: "/newsroom/photo-permission" },
      { title: "Sponsorship requests", href: "/newsroom/sponsorship" },
    ],
  },
  {
    title: "Follow", // Inferred title
    items: [{ title: "Subscribe and follow", href: "/newsroom/subscribe" }],
  },
];

export const careerNavGroups: NavItemGroup[] = [
  {
    title: "Working at SAS",
    items: [
      { title: "Benefits and compensations", href: "/career/benefits" },
      { title: "Learning and development", href: "/career/development" },
      { title: "SAS Awards", href: "/career/awards" },
      { title: "Sustainability and innovation", href: "/career/innovation" },
    ],
  },
  {
    title: "Teams",
    items: [
      { title: "Airport staff", href: "/career/teams/airport" },
      { title: "Cabin crew", href: "/career/teams/cabin-crew" },
      { title: "Corporate office", href: "/career/teams/corporate" },
      { title: "Engineering & Maintenance", href: "/career/teams/engineering" },
      { title: "IT & Digital", href: "/career/teams/it" },
      { title: "Pilot", href: "/career/teams/pilot" },
    ],
  },
  {
    title: "Vacancies", // Treat as a group with one item for consistency
    items: [{ title: "View Vacancies", href: "/career/vacancies" }], // Changed title slightly for clarity
  },
];

export const contactNavGroups: NavItemGroup[] = [
  {
    title: "General Contacts", // Inferred title
    items: [
      { title: "Customer contact", href: "/contact/customer" },
      { title: "Media contacts", href: "/contact/media" },
      { title: "Sustainability contacts", href: "/contact/sustainability" },
    ],
  },
  {
    title: "Supplier information",
    items: [
      { title: "SAS Supplier Code of Conduct", href: "/contact/supplier-coc" },
      { title: "SAS Group General Terms and Conditions", href: "/contact/supplier-gtc" },
    ],
  },
  {
    title: "Legal", // Inferred title
    items: [
      { title: "Usage of cookies", href: "/legal/cookies" },
      { title: "Terms and conditions for use of SAS website", href: "/legal/terms" },
    ],
  },
];
