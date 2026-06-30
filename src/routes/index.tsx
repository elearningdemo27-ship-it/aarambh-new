import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Compass,
  BookOpen,
  Sparkles,
  Brain,
  Mountain,
  Mic2,
  ArrowRight,
  Check,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";

// Service section photos from src/assets/service/ — same set used on the homepage.
import serviceStrategy from "@/assets/service/service-strategy.jpeg";
import serviceDesign from "@/assets/service/service-design.jpeg";
import serviceAi from "@/assets/service/service-ai.jpeg";
import serviceFacilitation from "@/assets/service/service-facilitation.jpeg";
import serviceOffsite from "@/assets/service/service-offsite.jpeg";
import serviceKeynote from "@/assets/service/service-keynote.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solutions — L&D Consulting, Digital Learning, AI Workflows | Aarambh" },
      {
        name: "description",
        content:
          "Six integrated solutions: learning strategy, instructional design, AI-enabled learning, facilitation, experiential offsites and keynotes.",
      },
      { property: "og:title", content: "Solutions — Aarambh" },
      { property: "og:description", content: "Strategy, design, delivery and AI for L&D." },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

const solutions = [
  {
    id: "strategy",
    icon: Compass,
    image: serviceStrategy,
    title: "Learning Strategy & Consulting",
    headline: "Where Learning Meets Strategy",
    short: "TNA, capability mapping, learning journeys and impact planning.",
    items: [
      "Training needs analysis",
      "Learning journey design",
      "Capability mapping",
      "Content audits",
      "Learning impact planning",
    ],
  },
  {
    id: "id",
    icon: BookOpen,
    image: serviceDesign,
    title: "Instructional Design & Content Development",
    headline: "Content That Engages. Learning That Sticks.",
    short: "ILT, eLearning, blended programs, SCORM, microlearning and more.",
    items: [
      "ILT, eLearning and blended learning design",
      "Storyboards, facilitator guides, workbooks, assessments",
      "SCORM modules and microlearning",
      "Scenario-based learning",
      "HTML5 conversion, translation and localization",
    ],
  },
  {
    id: "ai",
    icon: Sparkles,
    image: serviceAi,
    title: "AI-Enabled Learning Solutions",
    headline: "Where AI Supports Performance and Skill Building",
    short: "AI job aids, prompt libraries, AI literacy and skill practice.",
    items: [
      "AI-assisted job aids and prompt-based workflows",
      "AI-enabled knowledge refreshers",
      "Scenario-based skill practice",
      "Prompt libraries",
      "AI literacy programs",
      "AI-assisted content review",
    ],
  },
  {
    id: "delivery",
    icon: Brain,
    image: serviceFacilitation,
    title: "Training Delivery & Facilitation",
    headline: "Learning Delivery That Engages, Enables, and Empowers",
    short: "BFSI, soft skills, leadership, sales and TTT programs.",
    items: [
      "BFSI domain training",
      "Soft skills and behavioural programs",
      "Leadership and managerial training",
      "Sales and service training",
      "Train-the-trainer programs",
    ],
  },
  {
    id: "offsites",
    icon: Mountain,
    image: serviceOffsite,
    title: "Offsites & Experiential Learning",
    headline: "Where Team Experiences Turn into Workplace Impact",
    short: "Leadership retreats, team alignment, outbound and simulations.",
    items: [
      "Leadership retreats",
      "Team alignment workshops",
      "Outbound learning",
      "Sales energisers",
      "Culture-building interventions",
      "Simulations and debrief-led learning",
    ],
  },
  {
    id: "keynotes",
    icon: Mic2,
    image: serviceKeynote,
    title: "Keynotes & Motivational Sessions",
    headline: "Stories That Move People. Insights That Stay.",
    short: "Leadership, resilience, ownership and performance mindset talks.",
    items: [
      "Leadership and resilience",
      "Ownership and accountability",
      "Women leadership",
      "Change and transformation",
      "Performance mindset, team energy and motivation",
    ],
  },
] as const;

function SolutionsPage() {
  return (
    <SiteLayout>
      <section className="hero-bg">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <span className="eyebrow">Our solutions</span>
          <h1 className="display-h1 mt-5 max-w-4xl">
            A complete L&amp;D partner — from <em className="text-primary not-italic">strategy</em> to{" "}
            <em className="text-primary not-italic">delivery</em>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
            Six integrated solutions, designed to be picked individually or stitched together
            into a complete capability journey.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-px mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map(({ id, icon: Icon, image, title, short }) => (
            <a
              key={id}
              href={`#${id}`}
              className="card-elegant overflow-hidden group block"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
                <div
                  className="absolute bottom-3 left-3 h-11 w-11 rounded-xl bg-background/95 backdrop-blur text-primary flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5"
                  style={{
                    boxShadow:
                      "0 1px 1px rgba(0,0,0,0.18), 0 6px 12px -2px rgba(0,0,0,0.28), 0 14px 24px -6px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.6)",
                  }}
                >
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-display">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{short}</p>
                <div className="mt-5 inline-flex items-center text-sm font-medium text-primary">
                  Learn more <ArrowRight className="ml-1.5 h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {solutions.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={idx % 2 === 0 ? "sand-bg" : ""}
        >
          <div className="container-px mx-auto max-w-7xl section grid lg:grid-cols-12 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute -bottom-6 left-6 h-14 w-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-elegant">
                  <s.icon className="h-7 w-7" />
                </div>
              </div>
              <span className="eyebrow mt-10 block">{s.title}</span>
              <h2 className="display-h2 mt-3">{s.headline}</h2>
              <Button asChild className="mt-6">
                <Link to="/contact">
                  Discuss this solution <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <div className="lg:col-span-7">
              <div className="card-elegant p-8">
                <div className="text-sm font-semibold text-primary uppercase tracking-widest">
                  What's included
                </div>
                <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                  {s.items.map((i) => (
                    <li key={i} className="flex gap-3 items-start text-sm">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/90">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}
    </SiteLayout>
  );
}