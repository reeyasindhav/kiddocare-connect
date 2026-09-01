import { createFileRoute } from "@tanstack/react-router";
import { HelpPage } from "@/components/footer-pages";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help Center — Kiddocare" },
      {
        name: "description",
        content:
          "Find answers to common questions about using Kiddocare, booking caregivers, and managing your account.",
      },
    ],
  }),
  component: HelpPage,
});
