import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { StoryForm } from "@/components/admin/StoryForm";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/admin/success-stories/$id")({
  component: EditStory,
});

function EditStory() {
  const { id } = Route.useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["admin-story", id],
    queryFn: async () => {
      const { data, error } = await supabase.from("success_stories").select("*").eq("id", id).maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) return <div className="text-muted-foreground">Loading…</div>;
  if (!data) return <div className="text-muted-foreground">Not found.</div>;

  return (
    <StoryForm
      initial={{
        id: data.id,
        title: data.title,
        slug: data.slug,
        summary: data.summary ?? "",
        client_context: data.client_context ?? "",
        challenge: data.challenge ?? "",
        approach: data.approach ?? "",
        outcome: data.outcome ?? "",
        category: data.category ?? "",
        featured_image: data.featured_image ?? "",
        status: data.status,
        seo_title: data.seo_title ?? "",
        seo_description: data.seo_description ?? "",
      }}
    />
  );
}
