export const services = [
  {
    name: "Creative Technology",
    description: "Turning early ideas into clear concepts, prototypes and working products.",
    primary: true,
  },
  {
    name: "Design & Technology Consultancy",
    description: "Practical advice and hands-on delivery for digital products.",
  },
  {
    name: "UX/UI Design",
    description: "Clear, usable interfaces for web and apps.",
  },
  {
    name: "Service Design",
    description: "Mapping how people, processes and technology work together.",
  },
  {
    name: "Digital Transformation",
    description: "Improving services and workflows with appropriate technology.",
  },
];

export type Project = {
  slug: string;
  name: string;
  short: string;
  status: string;
  icon: string;
  archived?: boolean;
};

export const projects: Project[] = [
  {
    slug: "dictio",
    name: "Dictio",
    short: "A web, novel and Markdown reader built around read-aloud tools and onboard TTS models.",
    status: "Launching soon",
    icon: "dictio",
  },
  {
    slug: "pencilmd",
    name: "PencilMD",
    short: "An iPad notebook that turns Apple Pencil handwriting into clean Markdown for BrainPA.",
    status: "In development",
    icon: "P",
    archived: true,
  },
  {
    slug: "smartbricks",
    name: "SmartBricks",
    short: "A lower-cost DIY robotics and coding kit for learning, building and prototyping.",
    status: "Working title",
    icon: "S",
    archived: true,
  },
];

export const publishedProjects = projects.filter((project) => !project.archived);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
