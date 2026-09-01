import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/footer-pages";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Kiddocare" },
      {
        name: "description",
        content:
          "Read Kiddocare's privacy policy to understand how we collect, use, and protect your personal information.",
      },
    ],
  }),
  component: PrivacyPage,
});
