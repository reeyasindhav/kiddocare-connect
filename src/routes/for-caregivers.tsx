import { createFileRoute } from "@tanstack/react-router";
import { ForCaregiversPage } from "@/components/footer-pages";

export const Route = createFileRoute("/for-caregivers")({
  head: () => ({
    meta: [
      { title: "For Caregivers — Kiddocare" },
      {
        name: "description",
        content:
          "Join Kiddocare as a caregiver. Set your own rates, choose your hours, and connect with families who value your care.",
      },
    ],
  }),
  component: ForCaregiversPage,
});
