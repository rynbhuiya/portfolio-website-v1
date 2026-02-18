export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
  stack: string[];
};

export type ProjectItem = {
  name: string;
  description: string;
  impact: string;
  tech: string[];
  link: string;
};

export type PhotoItem = {
  id: string;
  title: string;
  album: string;
  src: string;
  location: string;
};

export type AlbumItem = {
  slug: string;
  name: string;
  description: string;
  cover: string;
};

export const experiences: ExperienceItem[] = [
  {
    role: "Senior Software Engineer",
    company: "Atlas Systems",
    period: "2023 - Present",
    summary:
      "Lead frontend architecture and observability for customer-facing analytics products used by enterprise clients.",
    stack: ["TypeScript", "Next.js", "GraphQL", "PostgreSQL"],
  },
  {
    role: "Software Engineer",
    company: "Northbound Labs",
    period: "2020 - 2023",
    summary:
      "Built internal tooling that reduced onboarding time and deployed CI/CD standards across multiple product teams.",
    stack: ["React", "Node.js", "AWS", "Terraform"],
  },
  {
    role: "Junior Developer",
    company: "Creative Metrics",
    period: "2018 - 2020",
    summary:
      "Delivered responsive marketing sites and improved Core Web Vitals for campaigns in media and retail.",
    stack: ["JavaScript", "SCSS", "Express", "MongoDB"],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Realtime Ops Dashboard",
    description:
      "A performance monitoring dashboard for distributed services with live event streams and anomaly highlighting.",
    impact: "Cut incident response time by 38% for the operations team.",
    tech: ["Next.js", "WebSockets", "D3", "OpenTelemetry"],
    link: "#",
  },
  {
    name: "Design System Platform",
    description:
      "A component platform with versioned docs, token pipelines, and automated accessibility checks.",
    impact: "Reduced UI inconsistency defects by 52% in two quarters.",
    tech: ["React", "Storybook", "TypeScript", "Playwright"],
    link: "#",
  },
  {
    name: "Field Capture Mobile Web",
    description:
      "Offline-first field data collection interface for image uploads, metadata tagging, and sync reconciliation.",
    impact: "Saved field staff around 5 hours per week on manual reporting.",
    tech: ["PWA", "IndexedDB", "Node.js", "S3"],
    link: "#",
  },
];

export const albums: AlbumItem[] = [
  {
    slug: "street",
    name: "Street",
    description: "Motion, geometry, and quiet human moments in city spaces.",
    cover: "/photos/street-1.svg",
  },
  {
    slug: "travel",
    name: "Travel",
    description: "Places, textures, and color stories from the road.",
    cover: "/photos/travel-1.svg",
  },
  {
    slug: "portraits",
    name: "Portraits",
    description: "Natural-light portraits focused on expression and mood.",
    cover: "/photos/portrait-1.svg",
  },
];

export const photos: PhotoItem[] = [
  { id: "s1", title: "Morning Crosswalk", album: "street", src: "/photos/street-1.svg", location: "Chicago" },
  { id: "s2", title: "Late Platform", album: "street", src: "/photos/street-2.svg", location: "New York" },
  { id: "s3", title: "Neon Alley", album: "street", src: "/photos/street-3.svg", location: "Seoul" },
  { id: "t1", title: "Coastline Wind", album: "travel", src: "/photos/travel-1.svg", location: "Big Sur" },
  { id: "t2", title: "Mountain Rail", album: "travel", src: "/photos/travel-2.svg", location: "Swiss Alps" },
  { id: "t3", title: "Red Market", album: "travel", src: "/photos/travel-3.svg", location: "Marrakesh" },
  { id: "p1", title: "Window Light", album: "portraits", src: "/photos/portrait-1.svg", location: "Studio A" },
  { id: "p2", title: "Quiet Smile", album: "portraits", src: "/photos/portrait-2.svg", location: "Los Angeles" },
  { id: "p3", title: "After Rain", album: "portraits", src: "/photos/portrait-3.svg", location: "Portland" },
];
