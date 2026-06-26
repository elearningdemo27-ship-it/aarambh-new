import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Compass, Sparkles, Users2, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/bg-img1.png";

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

const diffs = [
  ["Practitioner-led experience", "We understand real workplace challenges"],
  ["Instructional design depth", "We structure learning for clarity and retention"],
  ["Facilitation strength", "We create engagement and reflection"],
  ["BFSI and sales understanding", "We build domain-relevant learning"],
  ["AI-ready mindset", "We help clients modernise learning without losing quality"],
];

const founders = [
  {
    name: "Capt. Shikha Saxena",
    role: "Founder | L&D Consultant | TEDx Speaker | Business Coach",
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
        className="hero-bg relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container-px relative mx-auto max-w-7xl py-20 md:py-28 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <span className="eyebrow">About Aarambh</span>
            <h1 className="display-h1 mt-5">
              Learning experiences shaped around <em className="text-primary not-italic">people, performance, and purpose</em>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Aarambh Resource Management Solutions is a Learning &amp; Development consulting
              practice that helps organisations build capability through purposeful learning
              design, digital learning, facilitated interventions and experiential programs.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Who we are</span>
            <h2 className="display-h2 mt-3">
              Practitioner-led learning. Designed for real workplace impact.
            </h2>
          </div>
          <div className="lg:col-span-7 text-muted-foreground leading-relaxed space-y-4 text-lg">
            <p>
              We're an experienced team of L&amp;D practitioners, facilitators, instructional
              designers and digital learning specialists. Our work sits at the intersection of
              business strategy, learning science and emerging technology.
            </p>
            <p>
              For three decades we've partnered with organisations to translate complex
              capability needs into learning experiences that change behaviour, lift
              performance and outlast the program itself.
            </p>
          </div>
        </div>
      </section>

      <section className="sand-bg">
        <div className="container-px mx-auto max-w-7xl section">
          <div className="max-w-2xl">
            <span className="eyebrow">What makes us different</span>
            <h2 className="display-h2 mt-3">The Aarambh approach</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {diffs.map(([title, body], i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="card-elegant p-6"
              >
                <div className="text-3xl font-display text-primary/40">0{i + 1}</div>
                <div className="mt-3 font-semibold">{title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="eyebrow">Founders</span>
            <h2 className="display-h2 mt-3">The people behind Aarambh</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {founders.map((f) => (
              <div key={f.name} className="card-elegant p-8">
                <div className="flex items-center gap-5">
                  <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground grid place-items-center font-display text-2xl shadow-elegant">
                    {f.initials}
                  </div>
                  <div>
                    <div className="text-xl font-display">{f.name}</div>
                    <div className="text-sm text-muted-foreground mt-1">{f.role}</div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sand-bg">
        <div className="container-px mx-auto max-w-7xl section">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Three decades of capability building", body: "From classrooms to digital to AI-enabled — we've designed for every shift." },
              { icon: Compass, title: "Strategy + craft", body: "Programs grounded in business outcomes and instructional design rigour." },
              { icon: Sparkles, title: "Honest, modern, partner-style", body: "We work as an extension of your L&D team, not a vendor." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="card-elegant p-7">
                <Icon className="h-7 w-7 text-primary" />
                <div className="mt-4 font-display text-xl">{title}</div>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-px mx-auto max-w-6xl">
          <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-elegant">
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
      </section>
    </SiteLayout>
  );
}