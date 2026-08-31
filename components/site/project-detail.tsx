import Image from "next/image";
import Link from "next/link";

type ProjectDetailProps = {
  name: string;
  status: string;
  summary: string;
  points: string[];
  icon: string;
  note?: string;
};

export function ProjectDetail({ name, status, summary, points, icon, note }: ProjectDetailProps) {
  return (
    <main className="page">
      <article className="glass-card" aria-labelledby="project-title">
        <Link className="back-link" href="/projects">← All projects</Link>
        <div className="project-detail__heading">
          <div className="project-card__icon" aria-hidden="true">
            {icon === "dictio" ? (
              <Image src="/images/dictio-icon.png" alt="" width={64} height={64} />
            ) : icon}
          </div>
          <div>
            <p className="eyebrow">{status}</p>
            <h1 id="project-title">{name}</h1>
          </div>
        </div>
        <p className="lead">{summary}</p>
        <section className="content-block project-points">
          <h2>What it does</h2>
          <ul className="bullet-list">
            {points.map((point) => <li key={point}>{point}</li>)}
          </ul>
          {note && <p className="project-note">{note}</p>}
        </section>
      </article>
    </main>
  );
}
