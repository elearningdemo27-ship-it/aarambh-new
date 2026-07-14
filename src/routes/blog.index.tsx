import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import {
  FileText,
  Download,
  Image,
  FolderOpen,
  ArrowRight,
  Search,
  CalendarDays,
  Tag,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import heroBg from "@/assets/bg-img1.png";
import heroBg2 from "@/assets/minimal-bg2.png";
import heroBg3 from "@/assets/minimal-bg2.png";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Insights & Resources — Aarambh" },
      {
        name: "description",
        content:
          "Explore articles, brochures, training gallery, and work samples from Aarambh's learning and development practice.",
      },
    ],
    links: [{ rel: "canonical", href: "/insights-resources" }],
  }),
  component: InsightsResourcesPage,
});

const resourceCards = [
  {
    icon: FileText,
    title: "Articles & Insights",
    description:
      "Read practical perspectives on learning design, instructional strategy, digital learning, training effectiveness and capability building.",
    cta: "Read More",
    link: "#articles",
  },
  {
    icon: Image,
    title: "Training Gallery",
    description:
      "View glimpses from our workshops, offsites, university sessions, leadership programs and trainer development interventions.",
    cta: "View Gallery",
    link: "/insights/gallery",
  },
  {
    icon: Download,
    title: "Brochures",
    description:
      "Download our company profile, service brochures and solution notes to understand our capabilities across content development, ILT, eLearning, offsites, TTT, job aids and performance support tools.",
    cta: "Download",
    link: "/insights/brochures",
  },
  {
    icon: FolderOpen,
    title: "Work Samples",
    description:
      "Explore selected samples of our work, including eLearning snippets, ILT design formats, job aids, storyboards, learning journeys and performance support tools.",
    cta: "Explore Samples",
    link: "/insights/samples",
  },
];

function InsightsResourcesPage() {
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
      {/* Hero Section */}
      {/* Hero + Resource Cards — Combined Background */}
      <section
        className="hero-bg relative overflow-hidden bg-cover bg-top bg-no-repeat pt-20 pb-16"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container-px mx-auto max-w-7xl">
          {/* Hero Content */}
          <div className="max-w-3xl">
            <span className="eyebrow">Insights & Resources</span>

            <h1 className="display-h2 mt-3">
              Explore our articles, learning resources, brochures, work samples
              and glimpses from our training interventions.
            </h1>
          </div>

          {/* Resource Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {resourceCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="group relative rounded-2xl border border-white/60 bg-background/95 p-8 shadow-elegant backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant-lg"
                >
                  <div className="absolute left-6 right-6 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-primary/40 via-primary to-primary/40 transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-semibold">
                        {card.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {card.description}
                      </p>

                      <Button
                        asChild
                        variant="link"
                        className="mt-4 px-0 text-primary transition-all hover:no-underline group-hover:gap-2"
                      >
                        <Link to={card.link}>
                          {card.cta}
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Articles Section */}
      <section id="articles"
        className="section hero-bg relative overflow-hidden scroll-mt-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg3})` }}
      >
        <div className="container-px mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Latest Articles
              </span>
              <h2 className="text-2xl font-display font-semibold mt-1">
                Perspectives from the field
              </h2>
            </div>
          </div>

          {/* Search and Filter */}
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
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition ${cat === c
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:border-primary/40"
                    }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
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
                    className="card-elegant overflow-hidden group flex flex-col hover:shadow-elegant-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="aspect-[16/10] bg-gradient-to-br from-primary/20 to-gold/10 overflow-hidden">
                      {b.featured_image ? (
                        <img src={b.featured_image} alt={b.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-muted/30">
                          <FileText className="h-12 w-12 text-muted-foreground/30" />
                        </div>
                      )}
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
                      <h3 className="mt-3 font-display text-xl group-hover:text-primary transition line-clamp-2">
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

      {/* Bottom CTA - Optional, you can keep or remove */}
      <section
        className="section hero-bg relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg3})` }}
      >
        <div className="container-px mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-5 md:p-8 shadow-elegant">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.08]"
            />
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/30 blur-3xl" />

            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gold">
                  See our work in action
                </span>
                <div className="mt-2 h-0.5 w-10 bg-gold" />
                <h3 className="display-h2 mt-5">
                  Want to see how our approach works in action?
                </h3>
              </div>

              <div className="flex flex-col items-start md:items-end gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-[0_8px_30px_rgba(234,179,8,0.35)]"
                >
                  <Link to="/success-stories">
                    View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <span className="text-xs text-primary-foreground/70">
                  Real impact, real results
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}