import type { Metadata } from "next";
import { ProjectCard } from "@/components/site/project-card";
import { projects } from "@/data/site";

export const dynamic = "force-static";
export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main className="page">
      <section className="glass-card glass-card--wide" aria-labelledby="projects-title">
        <header className="section-heading">
          <p className="eyebrow">Projects</p>
          <h1 id="projects-title">Products taking shape.</h1>
          <p className="lead">Three independent projects approaching launch.</p>
        </header>
        <div className="project-grid">
          {projects.map((project) => <ProjectCard project={project} key={project.slug} />)}
        </div>
      </section>
    </main>
  );
}
