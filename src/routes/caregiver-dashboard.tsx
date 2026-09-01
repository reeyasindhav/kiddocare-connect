import { createFileRoute } from "@tanstack/react-router";
import { CaregiverDashboardPage } from "@/components/kiddocare-pages";

export const Route = createFileRoute("/caregiver-dashboard")({
  head: () => ({
    meta: [
      { title: "Caregiver Dashboard — Kiddocare" },
      {
        name: "description",
        content:
          "Manage your bookings, availability, and profile as a Kiddocare caregiver.",
      },
    ],
  }),
  component: CaregiverDashboardPage,
});
