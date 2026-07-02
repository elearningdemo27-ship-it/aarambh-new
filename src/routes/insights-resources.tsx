import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FileText,
  Download,
  Image,
  FolderOpen,
  ArrowRight,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/bg-img1.png"; // reuse a background
import heroBg2 from "@/assets/minimal-bg2.png"
import heroBg3 from "@/assets/minimal-bg2.png"; // reuse a background

export const Route = createFileRoute("/insights-resources")({
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
    link: "/insights/articles",
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
    icon: Image,
    title: "Training Gallery",
    description:
      "View glimpses from our workshops, offsites, university sessions, leadership programs and trainer development interventions.",
    cta: "View Gallery",
    link: "/insights/gallery",
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
  return (
    <SiteLayout>
      {/* Header Section */}
      <section
        className="hero-bg relative overflow-hidden bg-cover bg-center bg-no-repeat pt-20 pb-12"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="eyebrow">Insights & Resources</span>
            <h1 className="display-h2 mt-3">
              Explore our articles, learning resources, brochures, work samples
              and glimpses from our training interventions.
            </h1>
          </div>
        </div>
      </section>

      {/* Cards Grid */}
      <section
        className="section hero-bg relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg2})` }}
      >
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-6">
            {resourceCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group relative rounded-2xl border border-border/60 bg-background p-8 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Decorative accent */}
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-primary/40 via-primary to-primary/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{card.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {card.description}
                      </p>
                      <Button
                        asChild
                        variant="link"
                        className="mt-4 px-0 text-primary hover:no-underline group-hover:gap-2 transition-all"
                      >
                        <Link to={card.link}>
                          {card.cta} <ArrowRight className="ml-1 h-4 w-4" />
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

      {/* Bottom CTA */}
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
                  <Link to="/case-studies">
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