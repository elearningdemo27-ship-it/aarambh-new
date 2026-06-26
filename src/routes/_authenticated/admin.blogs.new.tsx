import { createFileRoute } from "@tanstack/react-router";
import { BlogForm } from "@/components/admin/BlogForm";

export const Route = createFileRoute("/_authenticated/admin/blogs/new")({
  component: () => <BlogForm />,
});
