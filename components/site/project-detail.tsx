import Image from "next/image";

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
        <a className="back-link" href="/projects">← All projects</a>
        <p className="eyebrow project-detail__status">{status}</p>
        <div className="project-detail__heading">
          <div className="project-card__icon project-detail__icon" aria-hidden="true">
            {icon === "dictio" ? (
              <Image src="/images/dictio-icon.png" alt="" width={64} height={64} />
            ) : icon}
          </div>
          <h1 id="project-title">{name}</h1>
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
