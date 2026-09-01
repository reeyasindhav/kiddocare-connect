import { createFileRoute } from "@tanstack/react-router";
import { BookingsPage } from "@/components/kiddocare-pages";
export const Route = createFileRoute("/bookings/")({ component: BookingsPage });