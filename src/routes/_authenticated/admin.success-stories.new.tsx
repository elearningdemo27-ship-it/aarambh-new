import { createFileRoute } from "@tanstack/react-router";
import { StoryForm } from "@/components/admin/StoryForm";

export const Route = createFileRoute("/_authenticated/admin/success-stories/new")({
  component: () => <StoryForm />,
});
