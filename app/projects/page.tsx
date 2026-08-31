import type { Metadata } from "next";
import { ProjectCard } from "@/components/site/project-card";
import { publishedProjects } from "@/data/site";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main className="page">
      <section
        className={`glass-card${publishedProjects.length < 3 ? " glass-card--compact" : " glass-card--wide"}`}
        aria-labelledby="projects-title"
      >
        <header className="section-heading">
          <p className="eyebrow">Projects</p>
          <h1 id="projects-title">Products taking shape.</h1>
          <p className="lead">Independent products from Altafio.</p>
        </header>
        <div
          className={`project-grid${publishedProjects.length < 3 ? " project-grid--compact" : ""}`}
        >
          {publishedProjects.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
      </section>
    </main>
  );
}
