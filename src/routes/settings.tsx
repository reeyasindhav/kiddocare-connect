import { createFileRoute } from "@tanstack/react-router";
import { SettingsPage } from "@/components/kiddocare-pages";
export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Kiddocare" },
      { name: "description", content: "Manage your Kiddocare parent profile and notifications." },
      { property: "og:title", content: "Settings — Kiddocare" },
      {
        property: "og:description",
        content: "Manage your Kiddocare parent profile and notifications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SettingsPage,
});
