import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/site/project-detail";
import { getProject } from "@/data/site";

export const metadata: Metadata = { title: "PencilMD" };

export default function PencilMDPage() {
  const project = getProject("pencilmd");
  if (!project || project.archived) notFound();

  return (
    <ProjectDetail
      name="PencilMD"
      status="In development"
      icon="P"
      summary="A simple iPad notebook for writing with Apple Pencil, automatically transcribing handwriting and saving it as Markdown."
      points={[
        "Designed around Apple Pencil",
        "Transcribes handwriting automatically",
        "Saves notes as clean Markdown files",
        "Designed to continue the work in BrainPA",
      ]}
    />
  );
}
