import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import { Search, ArrowRight, CalendarDays, Tag } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import heroBg from "@/assets/bg-img1.png";
import heroBg2 from "@/assets/minimal-bg2.png";
export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Insights on Learning & Capability | Aarambh" },
      {
        name: "description",
        content:
          "Articles, perspectives and field notes on learning strategy, instructional design, AI-enabled L&D and facilitation.",
      },
      { property: "og:title", content: "Aarambh Blog" },
      { property: "og:description", content: "Perspectives on L&D, AI and capability building." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogListPage,
});

function BlogListPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["blogs", "published"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("id,title,slug,excerpt,featured_image,author,category,tags,created_at")
        .eq("status", "published")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });

  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");

  const categories = useMemo(() => {
    const s = new Set<string>();
    (data ?? []).forEach((b) => b.category && s.add(b.category));
    return ["All", ...Array.from(s)];
  }, [data]);

  const filtered = useMemo(() => {
    return (data ?? []).filter((b) => {
      if (cat !== "All" && b.category !== cat) return false;
      if (!q) return true;
      const hay = `${b.title} ${b.excerpt ?? ""} ${(b.tags ?? []).join(" ")}`.toLowerCase();
      return hay.includes(q.toLowerCase());
    });
  }, [data, q, cat]);

  return (
    <SiteLayout>
      <section
        className="hero-bg relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container-px mx-auto max-w-7xl py-20 md:py-24">
          <span className="eyebrow">Blog</span>
          <h1 className="display-h1 mt-5 max-w-3xl">
            Notes on learning, capability and the craft of L&amp;D.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            Perspectives from the field — what we're seeing, learning and experimenting with.
          </p>
        </div>
      </section>

      <section 
        className="section hero-bg relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg2})` }}
      >
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition ${
                    cat === c
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:border-primary/40"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10">
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="card-elegant p-6 h-64 animate-pulse bg-muted/40" />
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <div className="py-16 text-center text-muted-foreground">
                No articles yet — check back soon.
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((b) => (
                  <Link
                    key={b.id}
                    to="/blog/$slug"
                    params={{ slug: b.slug }}
                    className="card-elegant overflow-hidden group flex flex-col"
                  >
                    <div className="aspect-[16/10] bg-gradient-to-br from-primary/20 to-gold/10 overflow-hidden">
                      {b.featured_image ? (
                        <img src={b.featured_image} alt={b.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
                      ) : null}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        {b.category && (
                          <span className="inline-flex items-center gap-1">
                            <Tag className="h-3 w-3" /> {b.category}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1">
                          <CalendarDays className="h-3 w-3" />{" "}
                          {new Date(b.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-xl group-hover:text-primary transition">
                        {b.title}
                      </h3>
                      {b.excerpt && (
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{b.excerpt}</p>
                      )}
                      <div className="mt-auto pt-4 inline-flex items-center text-sm font-medium text-primary">
                        Read more <ArrowRight className="ml-1.5 h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
