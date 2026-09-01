import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/footer-pages";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Kiddocare" },
      {
        name: "description",
        content:
          "Get in touch with the Kiddocare team. We're here to help with any questions about finding childcare.",
      },
    ],
  }),
  component: ContactPage,
});
