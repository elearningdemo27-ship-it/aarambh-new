import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, CalendarDays, Tag, User } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/blog/$slug")({
  head: () => ({
    meta: [
      { title: "Article — Aarambh Blog" },
      { name: "description", content: "Insights on learning, capability and L&D craft." },
    ],
  }),
  component: BlogDetail,
});

function BlogDetail() {
  const { slug } = Route.useParams();

  const { data: post, isLoading } = useQuery({
    queryKey: ["blog", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  const { data: related } = useQuery({
    queryKey: ["blogs", "related", post?.category, post?.id],
    queryFn: async () => {
      if (!post) return [];
      const { data } = await supabase
        .from("blogs")
        .select("id,title,slug,excerpt,featured_image,created_at")
        .eq("status", "published")
        .neq("id", post.id)
        .limit(3);
      return data ?? [];
    },
    enabled: !!post,
  });

  if (isLoading) {
    return (
      <SiteLayout>
        <div className="container-px mx-auto max-w-3xl py-24 animate-pulse">
          <div className="h-6 w-32 bg-muted rounded" />
          <div className="mt-6 h-12 w-3/4 bg-muted rounded" />
          <div className="mt-10 space-y-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-4 bg-muted rounded w-full" />
            ))}
          </div>
        </div>
      </SiteLayout>
    );
  }

  if (!post) {
    throw notFound();
  }

  return (
    <SiteLayout>
      <article className="pt-12">
        <div className="container-px mx-auto max-w-3xl">
          <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4 mr-1.5" /> Back to blog
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            {post.category && (
              <span className="inline-flex items-center gap-1"><Tag className="h-3 w-3" /> {post.category}</span>
            )}
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-3 w-3" />{" "}
              {new Date(post.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            {post.author && (
              <span className="inline-flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
            )}
          </div>
          <h1 className="display-h1 mt-4">{post.title}</h1>
          {post.excerpt && (
            <p className="mt-5 text-xl text-muted-foreground leading-relaxed">{post.excerpt}</p>
          )}
        </div>

        {post.featured_image && (
          <div className="container-px mx-auto max-w-5xl mt-12">
            <img src={post.featured_image} alt={post.title} className="rounded-3xl w-full aspect-[16/8] object-cover shadow-elegant" />
          </div>
        )}

        <div className="container-px mx-auto max-w-3xl py-14">
          <div className="prose-aarambh">
            <ReactMarkdown>{post.content ?? ""}</ReactMarkdown>
          </div>
          {(post.tags ?? []).length > 0 && (
            <div className="mt-10 pt-6 border-t border-border flex flex-wrap gap-2">
              {(post.tags ?? []).map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary-soft text-primary">#{t}</span>
              ))}
            </div>
          )}
        </div>
      </article>

      {related && related.length > 0 && (
        <section className="sand-bg">
          <div className="container-px mx-auto max-w-7xl section">
            <h2 className="display-h2">Related reading</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to="/blog/$slug"
                  params={{ slug: r.slug }}
                  className="card-elegant p-6 group"
                >
                  <h3 className="font-display text-lg group-hover:text-primary">{r.title}</h3>
                  {r.excerpt && (
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{r.excerpt}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
