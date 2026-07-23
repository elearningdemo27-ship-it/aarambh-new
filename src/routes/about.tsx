import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/bg-img1.png";
import heroBg2 from "@/assets/minimal-bg2.png";
import heroBg1 from "@/assets/minimal-bg.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aarambh Resource Management Solutions" },
      {
        name: "description",
        content:
          "Practitioner-led L&D consulting practice. Learn about our story, founders and approach to building capability through purposeful learning.",
      },
      { property: "og:title", content: "About Aarambh" },
      {
        property: "og:description",
        content: "Practitioner-led learning, designed for real workplace impact.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const founders = [
  {
    name: "Capt. Shikha Saxena",
    role: "Founder | L&D Consultant | TEDx Speaker | Business Coach",
    bio: "Capt. Shikha Saxena brings over 30 years of experience across the Indian Army and leading corporate organisations. As an ex-Army officer, TEDx speaker, certified Master Trainer from LIMRA, and experienced L&D professional, she blends discipline, leadership, storytelling, instructional design, and facilitation into powerful learning experiences.",
    experience: "She has worked extensively in leadership development, sales capability building, behavioural skills, learning journey design, training needs analysis, and assessment centre design.",
    trainingHours: "130,000",
    strengths: [
      "Leadership Development",
      "Behavioural Training",
      "Sales Capability",
      "Learning Strategy",
      "Experiential Facilitation",
      "Assessment Centres",
    ],
    initials: "SS",
  },
  {
    name: "Anil Saxena",
    role: "Facilitator | Sales Consultant | Corporate Trainer",
    bio: "Anil Saxena brings over 30 years of corporate experience across consumer durables, financial services, sales leadership, dealer management, business development, and frontline capability building.",
    experience: "He specialises in sales training, leadership development, soft skills, campus-to-corporate programs, and experiential learning workshops.",
    trainingHours: "90,000",
    strengths: [
      "Sales Training",
      "Dealer Management",
      "Frontline Capability",
      "Business Development",
      "Leadership Development",
      "Experiential Learning",
    ],
    initials: "AS",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
     
      <section
        className="section hero-bg relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg2})` }}
      >
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="eyebrow">Founders</span>
            <h2 className="display-h2 mt-3">The people behind Aarambh</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {founders.map((f, index) => (
              <motion.article
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="card-elegant p-6 md:p-8"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground grid place-items-center font-display text-2xl shadow-elegant">
                    {f.initials}
                  </div>
                  <div>
                    <div className="text-xl font-display">{f.name}</div>
                    <div className="text-sm text-muted-foreground mt-1">{f.role}</div>
                  </div>
                </div>
                <div className="mt-6 space-y-4 border-t border-border pt-6 text-sm leading-7 text-muted-foreground md:text-base">
                  <p>{f.bio}</p>
                  <p>
                    Having delivered over{" "}
                    <strong className="font-semibold text-primary">
                      {f.trainingHours} training man-hours
                    </strong>
                    , {f.experience.charAt(0).toLowerCase() + f.experience.slice(1)}
                  </p>
                </div>
                <div className="mt-6 border-t border-border pt-6">
                  <div className="text-xs uppercase tracking-widest text-primary font-semibold">
                    Core strengths
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {f.strengths.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-3 py-1.5 rounded-full bg-primary-soft text-primary border border-primary/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-7xl rounded-2xl border border-primary/15 bg-primary/5 p-6 text-center text-base leading-7 text-foreground/85 md:p-8 md:text-lg">
            Together, the founders bring more than six decades of practitioner experience to
            learning design and delivery—ensuring every intervention is grounded in business
            reality and focused on measurable workplace impact.
          </div>
        </div>
      </section>

     <section
        className="section hero-bg relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg1})` }}
      >
        <div className="container-px mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-primary/65 p-8 text-primary-foreground shadow-elegant md:p-10">
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-1/4 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="display-h2">Let's talk about what you're building.</h3>
              <p className="mt-3 text-primary-foreground/85 max-w-xl">
                Tell us about your capability priorities and we'll suggest where to start.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Get in touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
