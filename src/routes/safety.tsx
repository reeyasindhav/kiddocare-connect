import { createFileRoute } from "@tanstack/react-router";
import { SafetyPage } from "@/components/kiddocare-pages";
export const Route = createFileRoute("/safety")({
  head: () => ({
    meta: [
      { title: "Safety & vetting — Kiddocare" },
      {
        name: "description",
        content: "Learn how Kiddocare makes caregiver trust visible to parents.",
      },
      { property: "og:title", content: "Safety & vetting — Kiddocare" },
      {
        property: "og:description",
        content: "Learn how Kiddocare makes caregiver trust visible to parents.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SafetyPage,
});
