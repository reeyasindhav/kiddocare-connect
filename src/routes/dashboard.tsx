import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/components/kiddocare-pages";
export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Parent workspace — Kiddocare" },
      {
        name: "description",
        content:
          "See upcoming care, saved caregivers, and new messages in your Kiddocare workspace.",
      },
      { property: "og:title", content: "Parent workspace — Kiddocare" },
      {
        property: "og:description",
        content:
          "See upcoming care, saved caregivers, and new messages in your Kiddocare workspace.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DashboardPage,
});
