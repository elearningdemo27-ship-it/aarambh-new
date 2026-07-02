import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Users, Target, BookOpen, Trophy, Star } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { supabase } from "@/integrations/supabase/client";
import { renderHighlightedText } from "@/utils/formatText";

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
      <div className="container-px mx-auto max-w-6xl py-12">

        {/* BACK */}
        <Link
          to="/success-stories"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Stories
        </Link>

        {/* ================= HERO SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-10">

          {/* LEFT TEXT */}
          <div>
            <div className="text-primary text-xs font-semibold uppercase tracking-wider">
              Our Approach in Action
            </div>

            <h1 className="text-4xl font-bold mt-4 leading-tight text">
              {story.title}
            </h1>

            <p className="mt-5 text-gray-600 leading-relaxed">
              {story.summary}
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className=" image-container rounded-2xl overflow-hidden">
            <img
              src={story.featured_image}
              className="w-full h-[420px] object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* ================= SECTION BLOCKS ================= */}
        <div className="mt-16 space-y-10">

          {sections.map((s, index) => {
            const Icon = s.icon;

            return (
              <div
                key={index}
                className="grid md:grid-cols-12 gap-8 items-start bg-white rounded-xl p-6 border border-gray-100"
              >

                {/* LEFT SIDE (ICON + NUMBER + TITLE) */}
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center ">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <div>
                  <div className="text-primary font-bold text-xl">
                    {s.number}
                  </div>

                  <div className="text-sm font-semibold text-primary">
                    {s.title}
                  </div>
                </div>

                {/* RIGHT SIDE CONTENT */}
                <div className="md:col-span-9 text-gray-600 leading-relaxed text-[15px]">
                  <div className="whitespace-pre-line text-[15px] text-gray-600 leading-relaxed">
                    {renderHighlightedText(s.content)}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* ================= KEY TAKEAWAY ================= */}
        <div className="mt-13 bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
          <div className="flex flex-col md:flex-row md:items-start md:justify-center md:gap-10 gap-6">

            {/* LEFT */}
            <div className="flex items-center gap-3 md:flex-shrink-0">
              <Star className="w-5 h-5 text-indigo-600" />
              <h3 className="font-semibold text-gray-900 whitespace-nowrap">
                Key Takeaway:
              </h3>
            </div>

            {/* RIGHT */}
            <div className="text-gray-700 md:max-w-[70%] leading-relaxed">
              {story.summary}
            </div>

          </div>
        </div>


        {/* ================= CTA ================= */}
        <div className="mt-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-5">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            {/* LEFT CONTENT */}
            <div>
              <h3 className="text-2xl font-semibold">
                Explore More Success Stories
              </h3>

              <p className="mt-2 text-white/80">
                Discover how we transform learning experiences
              </p>
            </div>

            {/* RIGHT BUTTON */}
            <Link
              to="/success-stories"
              className="inline-flex items-center justify-center bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              View All Stories →
            </Link>

          </div>

        </div>

      </div>
    </SiteLayout>
  );
}