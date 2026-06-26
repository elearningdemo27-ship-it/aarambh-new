import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Tag } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/success-stories/$slug")({
  head: () => ({
    meta: [
      { title: "Success Story — Aarambh" },
      { name: "description", content: "How Aarambh partnered with an organisation to build capability." },
    ],
  }),
  component: StoryDetail,
});

function Section({ title, body }: { title: string; body: string | null }) {
  if (!body) return null;
  return (
    <div>
      <h2 className="text-xs font-semibold tracking-widest uppercase text-primary">{title}</h2>
      <div className="prose-aarambh mt-3">
        <ReactMarkdown>{body}</ReactMarkdown>
      </div>
    </div>
  );
}

function StoryDetail() {
  const { slug } = Route.useParams();

  const { data: story, isLoading } = useQuery({
    queryKey: ["story", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("success_stories")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  const { data: related } = useQuery({
    queryKey: ["stories", "related", story?.id],
    queryFn: async () => {
      if (!story) return [];
      const { data } = await supabase
        .from("success_stories")
        .select("id,title,slug,summary,featured_image")
        .eq("status", "published")
        .neq("id", story.id)
        .limit(3);
      return data ?? [];
    },
    enabled: !!story,
  });

  if (isLoading) {
    return (
      <SiteLayout>
        <div className="container-px mx-auto max-w-3xl py-24 animate-pulse">
          <div className="h-12 w-3/4 bg-muted rounded" />
        </div>
      </SiteLayout>
    );
  }

  if (!story) throw notFound();

  return (
    <SiteLayout>
      <article className="pt-12">
        <div className="container-px mx-auto max-w-3xl">
          <Link to="/success-stories" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4 mr-1.5" /> Back to stories
          </Link>
          {story.category && (
            <span className="mt-6 inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Tag className="h-3 w-3" /> {story.category}
            </span>
          )}
          <h1 className="display-h1 mt-3">{story.title}</h1>
          {story.summary && <p className="mt-5 text-xl text-muted-foreground leading-relaxed">{story.summary}</p>}
        </div>

        {story.featured_image && (
          <div className="container-px mx-auto max-w-5xl mt-12">
            <img src={story.featured_image} alt={story.title} className="rounded-3xl w-full aspect-[16/8] object-cover shadow-elegant" />
          </div>
        )}

        <div className="container-px mx-auto max-w-3xl py-14 space-y-12">
          <Section title="Client context" body={story.client_context} />
          <Section title="The challenge" body={story.challenge} />
          <Section title="Our approach" body={story.approach} />
          <Section title="The outcome" body={story.outcome} />
        </div>
      </article>

      {related && related.length > 0 && (
        <section className="sand-bg">
          <div className="container-px mx-auto max-w-7xl section">
            <h2 className="display-h2">More success stories</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to="/success-stories/$slug"
                  params={{ slug: r.slug }}
                  className="card-elegant p-6 group"
                >
                  <h3 className="font-display text-lg group-hover:text-primary">{r.title}</h3>
                  {r.summary && <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{r.summary}</p>}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
