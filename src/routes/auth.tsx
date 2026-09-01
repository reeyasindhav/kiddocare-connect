import { createFileRoute } from "@tanstack/react-router";
import { AuthPage } from "@/components/kiddocare-pages";
export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Log in — Kiddocare" },
      { name: "description", content: "Log in to your Kiddocare parent workspace." },
      { property: "og:title", content: "Log in — Kiddocare" },
      { property: "og:description", content: "Log in to your Kiddocare parent workspace." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <AuthPage mode="login" />,
});
