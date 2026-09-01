import { createFileRoute } from "@tanstack/react-router";
import { MessagesPage } from "@/components/kiddocare-pages";
export const Route = createFileRoute("/messages")({
  head: () => ({
    meta: [
      { title: "Messages — Kiddocare" },
      {
        name: "description",
        content: "Keep in touch with the caregivers in your family care network.",
      },
      { property: "og:title", content: "Messages — Kiddocare" },
      {
        property: "og:description",
        content: "Keep in touch with the caregivers in your family care network.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MessagesPage,
});
