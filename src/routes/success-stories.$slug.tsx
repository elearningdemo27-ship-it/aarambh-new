import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Users, Target, BookOpen, Trophy, Star } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { supabase } from "@/integrations/supabase/client";
import { renderHighlightedText } from "@/utils/formatText";
import { motion } from "framer-motion";

export const Route = createFileRoute("/success-stories/$slug")({
  component: StoryDetail,
});

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

  if (isLoading) {
    return (
      <SiteLayout>
        <div className="container-px mx-auto max-w-5xl py-20 animate-pulse">
          <div className="h-10 w-2/3 bg-gray-200 rounded" />
        </div>
      </SiteLayout>
    );
  }

  if (!story) throw notFound();

  const sections = [
    {
      icon: Users,
      number: "01",
      title: "Client Context",
      content: story.client_context,
    },
    {
      icon: Target,
      number: "02",
      title: "The Challenge",
      content: story.challenge,
    },
    {
      icon: BookOpen,
      number: "03",
      title: "Our Approach",
      content: story.approach,
    },
    {
      icon: Trophy,
      number: "04",
      title: "The Outcome",
      content: story.outcome,
    },
  ];


  return (
    <SiteLayout>
      <div className="container-px mx-auto max-w-6xl py-10">
        {/* Back link */}
        <Link
          to="/success-stories"
          className="mb-5 inline-flex items-center text-sm text-muted-foreground transition hover:text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Stories
        </Link>

        {/* Main story card */}
        <article className="overflow-hidden rounded-[28px]  bg-white shadow-[0_14px_45px_rgba(88,28,135,0.10)]">
          {/* ================= HERO ================= */}
          <div className="grid min-h-[430px] md:grid-cols-[1fr_1.05fr]">
            {/* Left content */}
            <div className="relative z-10 flex flex-col justify-center px-7 py-10 md:px-12 lg:px-14">
              <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <span className="h-0.5 w-10 bg-primary" />
                Our Approach in Action
              </div>

              <h1 className="mt-8 max-w-xl text-3xl font-bold leading-[1.25] text-[#11143b] md:text-4xl lg:text-[42px]">
                {story.title}
              </h1>

              <div className="mt-5 flex items-center">
                <div className="h-px flex-1 bg-primary/20" />
                <div className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div className="h-px flex-1 bg-primary/20" />
              </div>

              <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground md:text-[15px]">
                {story.summary}
              </p>
            </div>

            {/* Right image */}
            <div className="story-hero-image relative min-h-[340px] overflow-hidden md:min-h-full">
              <img
                src={story.featured_image}
                alt={story.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10" />
            </div>
          </div>

          {/* ================= SECTION ROWS ================= */}
          <div className="space-y-3 px-5 pb-5 pt-3 md:px-7">
            {sections.map((s, index) => {
              const Icon = s.icon;

              return (
                <motion.div
                  key={s.number}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  className="grid items-stretch overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-[0_5px_18px_rgba(88,28,135,0.05)] md:grid-cols-[88px_190px_1fr]"
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center border-b border-primary/10 bg-primary/[0.025] px-4 py-5 md:border-b-0 md:border-r">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>

                  {/* Number and title */}
                  <div className="flex flex-col justify-center border-b border-primary/10 px-5 py-4 md:border-b-0 md:border-r">
                    <div className="text-2xl font-bold leading-none text-primary">
                      {s.number}
                    </div>

                    <h2 className="mt-2 text-base font-bold leading-tight text-primary">
                      {s.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <div className="flex items-center px-5 py-5 md:px-7">
                    <div className="text-sm leading-6 text-muted-foreground">
                      {renderHighlightedText(s.content)}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* ================= KEY TAKEAWAY ================= */}
            <div className="flex flex-col gap-3 rounded-xl border border-primary/15 bg-primary/10 px-5 py-3 md:flex-row md:items-center">
              <div className="flex shrink-0 items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
                  <Star className="h-5 w-5 fill-current" />
                </div>

                <span className="font-semibold text-[#17173d]">
                  Key Takeaway:
                </span>
              </div>

              <p className="text-sm leading-6 text-muted-foreground">
                {story.summary}
              </p>
            </div>

            {/* ================= CTA ================= */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/85 via-primary/90 to-primary/95 px-6 py-5 text-primary-foreground">
              <div className="absolute -bottom-16 -left-12 h-36 w-36 rounded-full border border-white/15" />
              <div className="absolute -bottom-20 -left-4 h-36 w-36 rounded-full border border-white/10" />
              <div className="absolute right-5 top-3 h-20 w-20 rounded-full bg-white/5 blur-xl" />

              <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/15">
                    <BookOpen className="h-7 w-7" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      Explore More Success Stories
                    </h3>

                    <p className="mt-1 text-sm text-white/75">
                      Discover how thoughtful learning design solved real client
                      challenges.
                    </p>
                  </div>
                </div>

                <Link
                  to="/success-stories"
                  className="inline-flex min-w-[170px] items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary shadow-lg transition hover:-translate-y-0.5"
                >
                  View All Stories
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </SiteLayout>
  );
}