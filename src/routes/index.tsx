import { createFileRoute } from "@tanstack/react-router";
import { DiscoveryPage } from "@/components/kiddocare-pages";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Kiddocare — Find trusted childcare" }, { name: "description", content: "Compare trusted local caregivers by experience, availability, and parent reviews." }, { property: "og:title", content: "Kiddocare — Find trusted childcare" }, { property: "og:description", content: "Compare trusted local caregivers by experience, availability, and parent reviews." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: DiscoveryPage,
});
