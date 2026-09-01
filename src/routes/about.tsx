import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/footer-pages";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Kiddocare" },
      {
        name: "description",
        content:
          "Learn about Kiddocare's mission to make childcare transparent, trusted, and accessible for every family.",
      },
    ],
  }),
  component: AboutPage,
});
