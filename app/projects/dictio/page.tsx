import type { Metadata } from "next";
import { ProjectDetail } from "@/components/site/project-detail";

export const dynamic = "force-static";
export const metadata: Metadata = { title: "Dictio" };

export default function DictioPage() {
  return (
    <ProjectDetail
      name="Dictio"
      status="Launching soon"
      icon="dictio"
      summary="A reader for websites, novels and Markdown, focused on clear read-aloud and dictation tools using onboard text-to-speech models."
      points={[
        "Reads web pages, long-form text and Markdown files",
        "Turns content into sentence- and paragraph-aware reading",
        "Uses native and onboard TTS models",
        "Keeps reading controls simple and direct",
      ]}
    />
  );
}
