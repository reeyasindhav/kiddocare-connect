import { createFileRoute } from "@tanstack/react-router";
import { TermsPage } from "@/components/footer-pages";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Kiddocare" },
      {
        name: "description",
        content:
          "Read Kiddocare's terms of service governing the use of our platform and services.",
      },
    ],
  }),
  component: TermsPage,
});
