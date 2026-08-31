import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  project: {
    slug: string;
    name: string;
    short: string;
    status: string;
    icon: string;
  };
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__top">
        <div className="project-card__icon" aria-hidden="true">
          {project.icon === "dictio" ? (
            <Image src="/images/dictio-icon.png" alt="" width={64} height={64} />
          ) : project.icon}
        </div>
        <span className="status">{project.status}</span>
      </div>
      <h2>{project.name}</h2>
      <p>{project.short}</p>
      <Link href={`/projects/${project.slug}`}>View project →</Link>
    </article>
  );
}
