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
    role: "Software Engineer II",
    company: "LPL Financial",
    period: "2025 - Present",
    summary:
      "Joined the rotational program to gain experience across multiple teams. Currently working on the Secured Credit Account team to build a new consumer credit product from the ground up.",
    stack: [".NET", "Angular", "Python", "PostgreSQL"],
  },
  {
    role: "Software Engineer",
    company: "LPL Financial",
    period: "2022 - 2025",
    summary:
      "Deployed lambda functions to automate data pipelines, wrote BPUG documentation for new services, and worked on advisor onboarding automation.",
    stack: [".Net", "Scala", "AWS", "Terraform", "Python"],
  },
  {
    role: "Undergraduate Researcher",
    company: "Texas A&M University",
    period: "2021 - 2022",
    summary:
      "Led a team of undergraduate researchers to develop 3D models of Santarem, Portugal along with an interactive website. Published a thesis on our findings and presented at the annual symposium.",
    stack: ["Blender", "React", "Three.js"],
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
