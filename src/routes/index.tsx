import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import hero1 from "@/assets/hero/hero-1.png";
import hero2 from "@/assets/hero/hero-2.png";
import hero3 from "@/assets/hero/hero-3.png";
import {
  ArrowRight,
  Building2,
  Banknote,
  ShoppingBag,
  Factory,
  HeartPulse,
  Cpu,
  Compass,
  BookOpen,
  Sparkles,
  Mic2,
  Mountain,
  Brain,
  CheckCircle2,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";

// Individual partner/client logos from src/assets/partners/
import partnerLogo1 from "@/assets/partners/Asset 1@4x-8.png";
import partnerLogo2 from "@/assets/partners/Asset 2@4x-8.png";
import partnerLogo3 from "@/assets/partners/Asset 3@4x-8.png";
import partnerLogo4 from "@/assets/partners/Asset 4@4x-8.png";
import partnerLogo5 from "@/assets/partners/Asset 5@4x-8.png";
import partnerLogo6 from "@/assets/partners/Asset 6@4x-8.png";
import partnerLogo7 from "@/assets/partners/Asset 7@4x-8.png";
import partnerLogo8 from "@/assets/partners/Asset 8@4x-8.png";
import partnerLogo9 from "@/assets/partners/Asset 9@4x-8.png";
import partnerLogo10 from "@/assets/partners/Asset 10@4x-8.png";
import partnerLogo11 from "@/assets/partners/Asset 11@4x-8.png";
import partnerLogo12 from "@/assets/partners/Asset 12@4x-8.png";
import partnerLogo13 from "@/assets/partners/Asset 13@4x-8.png";

// Service section photos from src/assets/service/
import serviceStrategy from "@/assets/service/service-strategy.jpeg";
import serviceDesign from "@/assets/service/service-design.jpeg";
import serviceAi from "@/assets/service/service-ai.jpeg";
import serviceFacilitation from "@/assets/service/service-facilitation.jpeg";
import serviceOffsite from "@/assets/service/service-offsite.jpeg";
import serviceKeynote from "@/assets/service/service-keynote.jpeg";
import heroBg from "@/assets/minimal-bg.png";
import heroBg2 from "@/assets/minimal-bg2.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aarambh — Learning That Builds Capability, Not Just Completion" },
      {
        name: "description",
        content:
          "L&D consulting that goes beyond content. Instructional design, digital learning, facilitation, experiential programs and AI-enabled workflows that improve workplace performance.",
      },
      { property: "og:title", content: "Aarambh — Learning That Builds Capability" },
      {
        property: "og:description",
        content:
          "We help organisations build capability through purposeful learning design and AI-enabled workflows.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const industries = [
  { icon: Banknote, label: "BFSI" },
  { icon: ShoppingBag, label: "Retail & FMCG" },
  { icon: Factory, label: "Manufacturing" },
  { icon: HeartPulse, label: "Healthcare & Pharma" },
  { icon: Cpu, label: "Technology" },
  { icon: Building2, label: "Professional Services" },
];

const differentiators = [
  {
    title: "Practitioner-led",
    body: "We bring decades of real workplace experience to the design table.",
  },
  {
    title: "Instructional design depth",
    body: "Structured learning for clarity, retention and behavioural change.",
  },
  {
    title: "Facilitation strength",
    body: "Workshops that create engagement, reflection and ownership.",
  },
  {
    title: "BFSI & sales fluency",
    body: "Domain-relevant learning built for frontline performance.",
  },
  {
    title: "AI-ready mindset",
    body: "Modernise learning workflows without compromising quality.",
  },
];

const services = [
  {
    icon: Compass,
    image: serviceStrategy,
    title: "Learning Strategy & Consulting",
    desc: "TNA, capability mapping, learning journeys and impact planning.",
  },
  {
    icon: BookOpen,
    image: serviceDesign,
    title: "Instructional Design & Content",
    desc: "ILT, eLearning, blended programs, SCORM, microlearning and more.",
  },
  {
    icon: Sparkles,
    image: serviceAi,
    title: "AI-Enabled Learning",
    desc: "AI job aids, prompt libraries, AI literacy and skill practice.",
  },
  {
    icon: Brain,
    image: serviceFacilitation,
    title: "Training Delivery & Facilitation",
    desc: "BFSI, soft skills, leadership, sales, TTT and managerial programs.",
  },
  {
    icon: Mountain,
    image: serviceOffsite,
    title: "Offsites & Experiential",
    desc: "Leadership retreats, team alignment, outbound and simulations.",
  },
  {
    icon: Mic2,
    image: serviceKeynote,
    title: "Keynotes & Motivational",
    desc: "Leadership, resilience, ownership and performance mindset talks.",
  },
] as const;

const impact = [
  { value: "30+", label: "Years of L&D experience" },
  { value: "8+", label: "Years in digital learning" },
  { value: "300+", label: "Workshops delivered" },
  { value: "13L+", label: "Learner man-hours impacted" },
  { value: "250+", label: "eLearning hours created" },
  { value: "Multi", label: "Industries served in India" },
];

// Partner/client logos shown in the sliding carousel below the impact numbers.
const partnerLogos = [
  { src: partnerLogo1, name: "Partner 1" },
  { src: partnerLogo2, name: "Partner 2" },
  { src: partnerLogo3, name: "Partner 3" },
  { src: partnerLogo4, name: "Partner 4" },
  { src: partnerLogo5, name: "Partner 5" },
  { src: partnerLogo6, name: "Partner 6" },
  { src: partnerLogo7, name: "Partner 7" },
  { src: partnerLogo8, name: "Partner 8" },
  { src: partnerLogo9, name: "Partner 9" },
  { src: partnerLogo10, name: "Partner 10" },
  { src: partnerLogo11, name: "Partner 11" },
  { src: partnerLogo12, name: "Partner 12" },
  { src: partnerLogo13, name: "Partner 13" },
];

const testimonials = [
  {
    quote:
      "Aarambh translated dense compliance content into a learning experience our teams actually engaged with. The shift in completion was matched by a shift in conversation.",
    name: "L&D Head",
    org: "Leading Private Bank",
  },
  {
    quote:
      "Their facilitators bring rare maturity. The offsite moved from being an event to becoming a real reset for the leadership team.",
    name: "Head of HR",
    org: "Global Manufacturing Major",
  },
  {
    quote:
      "Practitioners who understand the front line. Our sales managers walked out with tools they were using the very next week.",
    name: "Sales Capability Lead",
    org: "BFSI",
  },
];

const heroSlides = [hero1, hero2, hero3];

// How many partner logos are visible at once in the carousel, per breakpoint.
const PARTNERS_PER_PAGE = { base: 2, sm: 3, md: 4, lg: 5 };

function HomePage() {
  const testimonialRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const [activeHero, setActiveHero] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHero((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const scrollTestimonials = (direction: "left" | "right") => {
    const el = testimonialRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("[data-carousel-card]")?.clientWidth ?? 380;
    const gap = 24;
    el.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  // Slides the partner-logo row by roughly one "page" of logos at a time,
  // but still allows free dragging/scrolling by the user in between clicks.
  const scrollPartners = (direction: "left" | "right") => {
    const el = partnersRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="hero-bg bg-cover bg-center bg-no-repeat relative overflow-hidden">
        {heroSlides.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 ease-in-out ${index === activeHero ? "opacity-100" : "opacity-0"
              }`}
            style={{ backgroundImage: `url(${image})`, backgroundPosition: "center top" }}
          />
        ))}

        <div className="relative z-10 container-px mx-auto max-w-7xl pt-20 pb-20 md:pt-28 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="eyebrow">Learning & Development Consulting</span>
            <h1 className="display-h1 mt-5 text-foreground">
              Learning That Builds <em className="text-primary not-italic">Capability</em>—Not
              Just Completion
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We help organisations design learning solutions that go beyond content creation.
              Through instructional design, digital learning, facilitated workshops, experiential
              programs and AI-enabled learning workflows, we build capability that improves
              workplace performance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/solutions">
                  Explore Our Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Discuss Your Learning Need</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-border bg-background">
        <div className="container-px mx-auto max-w-7xl py-6">
          <div className="grid gap-5 md:grid-cols-5 items-center">
            <div className="flex items-center gap-2 font-semibold text-primary">
              <Sparkles className="h-4 w-4" />
              <span>Why teams choose Aarambh</span>
            </div>

            {[
              "Practitioner-led learning design",
              "Deep BFSI, sales & leadership expertise",
              "Digital, AI-enabled & experiential delivery",
              "Measurable workplace impact",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section
        className="section hero-bg relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="eyebrow">Industries we serve</span>
              <h2 className="display-h2 mt-3 max-w-2xl">
                Learning designed for the realities of your industry
              </h2>
            </div>
            <p className="md:max-w-sm text-muted-foreground">
              From BFSI to manufacturing, our programs are rooted in domain context — not generic templates.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map(({ icon: Icon, label }) => (
              <div key={label} className="card-elegant p-6 flex flex-col items-center text-center">
                <Icon className="h-7 w-7 text-primary" />
                <div className="mt-3 text-sm font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="sand-bg">
        <div className="container-px mx-auto max-w-7xl section">
          <div className="max-w-3xl">
            <span className="eyebrow">What makes us different</span>
            <h2 className="display-h2 mt-3">
              Practitioner-led learning. Designed for real workplace impact.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="card-elegant p-6"
              >
                <div className="text-3xl font-display text-primary/40">0{i + 1}</div>
                <div className="mt-3 font-semibold">{d.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        className="section hero-bg relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg2})` }}
      >
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="eyebrow">Our solutions</span>
              <h2 className="display-h2 mt-3 max-w-2xl">
                A full L&amp;D partner across strategy, design and delivery
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/solutions">
                See all solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, image, title, desc }) => (
              <Link
                key={title}
                to="/solutions"
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
                  <div className="absolute bottom-3 left-3 h-11 w-11 rounded-xl bg-background/95 backdrop-blur text-primary flex items-center justify-center shadow-elegant">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-display">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  <div className="mt-5 inline-flex items-center text-sm font-medium text-primary opacity-70 group-hover:opacity-100 transition">
                    Learn more <ArrowRight className="ml-1.5 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT NUMBERS */}
      <section className="bg-[color-mix(in_oklab,var(--primary)_96%,white)] text-primary-foreground">
        <div className="container-px mx-auto max-w-7xl py-20">
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {impact.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl md:text-5xl">{s.value}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-primary-foreground/70">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS — sliding carousel, one row, manual + arrow navigation */}
      <section
        className="section hero-bg relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container-px mx-auto max-w-7xl">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Trusted by L&amp;D and business leaders across industries
          </p>

          <div className="mt-10 relative flex items-center gap-3">
            <button
              onClick={() => scrollPartners("left")}
              className="hidden sm:flex h-10 w-10 shrink-0 rounded-full border border-border bg-background items-center justify-center hover:bg-muted transition"
              aria-label="Show previous partners"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div
              ref={partnersRef}
              className="flex-1 flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-6"
            >
              {partnerLogos.map((logo) => (
                <div
                  key={logo.name}
                  data-carousel-card
                  className="group shrink-0 snap-start flex items-center justify-center h-20 w-36 sm:w-40 px-4"
                  style={{ perspective: "600px" }}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    loading="lazy"
                    className="max-h-12 max-w-full object-contain transition-transform duration-300 ease-out will-change-transform group-hover:scale-[1.15] group-hover:-translate-y-1 group-hover:drop-shadow-[0_12px_16px_rgba(0,0,0,0.18)]"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollPartners("right")}
              className="hidden sm:flex h-10 w-10 shrink-0 rounded-full border border-border bg-background items-center justify-center hover:bg-muted transition"
              aria-label="Show next partners"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sand-bg">
        <div className="container-px mx-auto max-w-7xl section">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow">In their words</span>
              <h2 className="display-h2 mt-3">What partners say about working with us</h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scrollTestimonials("left")}
                className="h-10 w-10 rounded-full border border-border bg-background flex items-center justify-center hover:bg-muted transition"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollTestimonials("right")}
                className="h-10 w-10 rounded-full border border-border bg-background flex items-center justify-center hover:bg-muted transition"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div
            ref={testimonialRef}
            className="carousel-track mt-10 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth"
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                data-carousel-card
                className="card-elegant p-7 flex-shrink-0 snap-start w-[85vw] md:w-[45vw] lg:w-[32vw]"
              >
                <Quote className="h-7 w-7 text-primary/40" />
                <p className="mt-4 text-foreground/90 leading-relaxed">{t.quote}</p>
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section hero-bg relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg2})` }}
      >
        <div className="container-px mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 shadow-elegant">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/30 blur-3xl" />
            <div className="relative grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="display-h2">Have a learning need? Let's build it together.</h3>
                <p className="mt-4 text-primary-foreground/85 max-w-2xl">
                  Whether you're designing a new capability journey, modernising existing
                  content, or planning a high-impact offsite — we'd love to hear what you're
                  working on.
                </p>
              </div>
              <div className="md:text-right">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contact">
                    Discuss Your Learning Need <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}