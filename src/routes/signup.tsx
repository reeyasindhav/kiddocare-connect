import { createFileRoute } from "@tanstack/react-router";
import { AuthPage } from "@/components/kiddocare-pages";
export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create an account — Kiddocare" },
      {
        name: "description",
        content: "Create a Kiddocare parent account and start building your trusted care network.",
      },
      { property: "og:title", content: "Create an account — Kiddocare" },
      {
        property: "og:description",
        content: "Create a Kiddocare parent account and start building your trusted care network.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <AuthPage mode="signup" />,
});
