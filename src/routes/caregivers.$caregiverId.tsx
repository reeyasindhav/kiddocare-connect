import { createFileRoute } from "@tanstack/react-router";
import { CaregiverProfilePage } from "@/components/kiddocare-pages";
export const Route = createFileRoute("/caregivers/$caregiverId")({
  head: () => ({
    meta: [
      { title: "Caregiver profile — Kiddocare" },
      {
        name: "description",
        content:
          "Review a trusted caregiver's experience, safety badges, availability, and parent feedback.",
      },
      { property: "og:title", content: "Caregiver profile — Kiddocare" },
      {
        property: "og:description",
        content:
          "Review a trusted caregiver's experience, safety badges, availability, and parent feedback.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProfileRoute,
});
function ProfileRoute() {
  const { caregiverId } = Route.useParams();
  return <CaregiverProfilePage caregiverId={caregiverId} />;
}
