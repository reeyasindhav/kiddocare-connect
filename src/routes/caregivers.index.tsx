import { createFileRoute } from "@tanstack/react-router";
import { CaregiversPage } from "@/components/kiddocare-pages";
export const Route = createFileRoute("/caregivers/")({ component: CaregiversPage });