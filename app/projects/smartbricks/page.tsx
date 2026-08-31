import type { Metadata } from "next";
import { ProjectDetail } from "@/components/site/project-detail";

export const metadata: Metadata = { title: "SmartBricks" };

export default function SmartBricksPage() {
  return (
    <ProjectDetail
      name="SmartBricks"
      status="Working title"
      icon="S"
      summary="A lower-cost, do-it-yourself robotics and coding kit for learning, experimenting and building useful prototypes."
      points={[
        "Affordable and modular",
        "Designed for hands-on assembly",
        "Supports coding, sensors and movement",
        "Built for learning and practical experiments",
      ]}
      note="The product name is still being decided."
    />
  );
}
