import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { BlogForm } from "@/components/admin/BlogForm";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/admin/blogs/$id")({
  component: EditBlog,
});

function EditBlog() {
  const { id } = Route.useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["admin-blog", id],
    queryFn: async () => {
      const { data, error } = await supabase.from("blogs").select("*").eq("id", id).maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) return <div className="text-muted-foreground">Loading…</div>;
  if (!data) return <div className="text-muted-foreground">Not found.</div>;

  return (
    <BlogForm
      initial={{
        id: data.id,
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt ?? "",
        content: data.content ?? "",
        featured_image: data.featured_image ?? "",
        author: data.author ?? "",
        category: data.category ?? "",
        tags: (data.tags ?? []).join(", "),
        status: data.status,
        seo_title: data.seo_title ?? "",
        seo_description: data.seo_description ?? "",
      }}
    />
  );
}
