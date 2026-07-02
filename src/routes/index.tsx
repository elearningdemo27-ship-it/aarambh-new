import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import hero1 from "@/assets/hero/hero-1.png";
import hero2 from "@/assets/hero/hero-2.png";
import hero3 from "@/assets/hero/hero-3.png";
import hero4 from "@/assets/hero/hero-4.png";
import hero5 from "@/assets/hero/hero-5.png";
import hero6 from "@/assets/hero/hero-6.png";
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
  Users2,
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
import partnerlogo14 from "@/assets/partners/ebay.png";
import partnerlogo15 from "@/assets/partners/indiafirst.jpeg";
import partnerlogo16 from "@/assets/partners/india-post-logo.jpg";
import partnerlogo17 from "@/assets/partners/chandigarh-univercity.png";
// Service section photos from src/assets/service/
import serviceStrategy from "@/assets/service/service-strategy.jpeg";
import serviceDesign from "@/assets/service/service-design.jpeg";
import serviceAi from "@/assets/service/service-ai.jpeg";
import serviceFacilitation from "@/assets/service/service-facilitation.jpeg";
import serviceOffsite from "@/assets/service/service-offsite.jpeg";
import serviceKeynote from "@/assets/service/service-keynote.jpeg";
import heroBg from "@/assets/minimal-bg.png";
import heroBg2 from "@/assets/minimal-bg2.png";
import impactBg from "@/assets/bg-compnies-growth.png";
import aboutus1 from "@/assets/aboutus/aboutus1.png";
import aboutus3 from "@/assets/aboutus/aboutus2.png";
import aboutus2 from "@/assets/aboutus/aboutus3.png";


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
    title: "Practitioner-led Experience",
    body: "We understand real workplace challenges and bring practical insight into every learning solution.",
  },
  {
    title: "Instructional Design Depth",
    body: "We structure content for clarity, retention, and meaningful application.",
  },
  {
    title: "Facilitation Strength",
    body: "We create engagement, reflection, and conversations that lead to behavioural shift.",
  },
  {
    title: "BFSI & Sales Understanding",
    body: "We build domain-relevant learning that connects with business and customer realities.",
  },
  {
    title: "AI-ready Mindset",
    body: "We help clients modernise learning while preserving quality, context, and learner relevance.",
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
  { value: "30+", label: "Founder's years in L&D & capability-building" },
  { value: "15+", label: "Years in digital learning & eLearning" },
  { value: "300+", label: "Workshops delivered" },
  { value: "1.3L+", label: "Learner man-hours impacted" },
  { value: "250+", label: "eLearning hours created" },
  { value: "Since 2019", label: "ARMS in practice" },
  { value: "Multi", label: "Industries served across India" },
];

// Partner/client logos shown in the sliding carousel below the impact numbers.

const testimonials = [
  {
    tag: "Behavioural Skills Workshop",
    quote:
      "ARMS delivered a highly impactful 3-day Behavioural Skills Workshop for our managerial cadre. The program was engaging, practical, and deeply relevant to the workplace realities of our managers. The facilitation brought together strong energy, meaningful reflection, and actionable learning. ARMS demonstrated an excellent understanding of behavioural development and created a learning experience that was both powerful and memorable. We value the professionalism and quality they brought in, and would gladly recommend them for behavioural and leadership development programs.",
    name: "Amitabh",
    role: "Managing Director",
    org: "Creative Museum Designer, Kolkata",
    image: "", // add image here later
  },
  {
    tag: "Leadership Development",
    quote:
      "The facilitation brought together strong energy, meaningful reflection, and actionable learning. The workshop experience was powerful and memorable for our team.",
    name: "Client Name",
    role: "Head of HR",
    org: "Manufacturing Organisation",
    image: "",
  },
  {
    tag: "Learning Design",
    quote:
      "Aarambh helped us convert complex content into a clean and learner-friendly experience. Their approach was structured, practical, and aligned to our business needs.",
    name: "Client Name",
    role: "L&D Lead",
    org: "BFSI Organisation",
    image: "",
  },
];

// Each hero slide pairs its own background photo with its own headline, copy and CTA label.
// `title` uses **double asterisks** around any word/phrase that should render in the primary
// theme color — add or edit slides here without touching the render logic below.
const heroSlides = [
  {
    image: hero1,
    eyebrow: "Learning & Development Consulting",
    title: "Content That **Teaches.** Training That **Transforms.**",
    desc: "We design impactful digital and ILT learning content and deliver engaging training experiences across BFSI, soft skills, leadership, and outbound learning.",
    primaryCta: "Explore Our Services",
  },
  {
    image: hero2,
    eyebrow: "Learning & Development Consulting",
    title: "From **Learning Design** to **Learning Delivery**",
    desc: "End-to-end solutions for organisations looking for well-structured content and powerful facilitator-led learning interventions.",
    primaryCta: "Explore Our Solutions",
  },
  {
    image: hero3,
    eyebrow: "Learning & Development Consulting",
    title: "Designed for **Learners.** Delivered for **Impact.**",
    desc: "Whether it is BFSI domain training, leadership development, soft skills, or outbound programs, we bring content and delivery together with purpose.",
    primaryCta: "Explore Our Solutions",
  },
  {
    image: hero4,
    eyebrow: "Learning & Development Consulting",
    title: "**Learning Solutions** That Go Beyond Slides",
    desc: "We transform ideas, concepts, and business needs into engaging content and interactive training experiences.",
    primaryCta: "Explore Our Solutions",
  },
  {
    image: hero5,
    eyebrow: "Learning & Development Consulting",
    title: "Building **Capability** Through **Meaningful Learning**",
    desc: "We create customised digital modules, classroom content, and training programs that help teams learn, apply, and perform better.",
    primaryCta: "Explore Our Solutions",
  },
  {
    image: hero6,
    eyebrow: "Learning & Development Consulting",
    title: "Learning That Builds **Capability**-Not Just Completion",
    desc: "We help organisations design learning solutions that go beyond content creation, building capability that improves workplace performance.",
    primaryCta: "Explore Our Solutions",
  },
] as const;

/** Renders a title string, turning any **word** segments into primary-colored spans. */
function renderHeroTitle(title: string) {
  return title.split(/(\*\*[^*]+\*\*)/g).map((chunk, i) => {
    if (chunk.startsWith("**") && chunk.endsWith("**")) {
      return (
        <span key={i} className="text-primary">
          {chunk.slice(2, -2)}
        </span>
      );
    }
    return <span key={i}>{chunk}</span>;
  });
}

// How many partner logos are visible at once in the carousel, per breakpoint.
function ClientCategory({
  title,
  logos,
}: {
  title: string;
  logos: string[];
}) {
  return (
    <div className="mb-10">

      <div className="mb-5 flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
          <Building2 className="h-5 w-5" />
        </div>

        <h3 className="text-xl font-semibold">
          {title}
        </h3>

      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">

        {logos.map((logo, index) => (
          <div
            key={index}
            className="
              group
              rounded-xl
              border
              border-border
              bg-background
              h-28
              flex
              items-center
              justify-center
              p-5
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              hover:border-primary/40
            "
          >
            <img
              src={logo}
              alt=""
              className="
                max-h-16
                w-auto
                object-contain
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />
          </div>
        ))}

      </div>

    </div>
  );
}

function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
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

    setActiveTestimonial((prev) => {
      const next =
        direction === "left"
          ? Math.max(prev - 1, 0)
          : Math.min(prev + 1, testimonials.length - 1);

      const cards = el.querySelectorAll("[data-carousel-card]");
      const targetCard = cards[next] as HTMLElement | undefined;

      targetCard?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });

      return next;
    });
  };

  const handleTestimonialScroll = () => {
    const el = testimonialRef.current;
    if (!el) return;

    const cards = Array.from(
      el.querySelectorAll("[data-carousel-card]")
    ) as HTMLElement[];

    const containerCenter = el.scrollLeft + el.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveTestimonial(closestIndex);
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
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 ease-in-out ${index === activeHero ? "opacity-100" : "opacity-0"
              }`}
            style={{ backgroundImage: `url(${slide.image})`, backgroundPosition: "center top" }}
          />
        ))}

        <div className="relative z-10 container-px mx-auto max-w-7xl pt-20 pb-20 md:pt-28 md:pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeHero}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="eyebrow">{heroSlides[activeHero].eyebrow}</span>
              <h1 className="display-h1 mt-5 text-foreground">
                {renderHeroTitle(heroSlides[activeHero].title)}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                {heroSlides[activeHero].desc}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/solutions">
                    {heroSlides[activeHero].primaryCta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Discuss Your Learning Need</Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dot navigation */}
          <div className="relative z-10 mt-10 flex items-center gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveHero(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${i === activeHero ? "w-8 bg-primary" : "w-2.5 bg-primary/30 hover:bg-primary/50"
                  }`}
              />
            ))}
          </div>
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
      {/* ABOUT US */}
      <section
        className="section relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Decorative Background */}
        <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

        <div className="container-px relative mx-auto max-w-7xl">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Images */}
            <div className="grid grid-cols-[0.9fr_1.1fr] gap-5">

              <div className="flex flex-col gap-5">

                <img
                  src={aboutus1}
                  alt="Learning workshop"
                  className="h-64 w-full rounded-3xl object-cover shadow-lg"
                />

                <img
                  src={aboutus2}
                  alt="Corporate training"
                  className="h-64 w-full rounded-3xl object-cover shadow-lg"
                />

              </div>

              <img
                src={aboutus3}
                alt="Facilitator"
                className="h-full min-h-[545px] w-full rounded-3xl object-cover shadow-xl"
              />

            </div>

            {/* Content */}
            <div>

              <span className="eyebrow">
                About Us
              </span>

              <h2 className="display-h2 mt-5 max-w-xl">
                Learning experiences shaped around people,
                performance, and purpose.
              </h2>

              <p className="mt-8 text-muted-foreground leading-8">
                Aarambh Resource Management Solutions is a Learning &
                Development consulting practice that helps organisations
                build capability through purposeful learning design,
                digital learning, facilitated interventions and
                experiential programs.
              </p>

              <p className="mt-6 text-muted-foreground leading-8">
                We work closely with organisations to understand business
                context, identify capability needs and design practical,
                engaging learning solutions that people can immediately
                apply at work.
              </p>

              <p className="mt-6 text-muted-foreground leading-8">
                Our expertise spans instructional design, eLearning,
                ILT content, leadership development, behavioural skills,
                sales capability, BFSI domain learning, offsites and
                keynote sessions—creating learning that delivers
                measurable workplace impact.
              </p>

              <Button asChild className="mt-10">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

            </div>

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
      <section
        className="py-10  hero-bg relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container-px mx-auto max-w-7xl ">

          <div className=" max-w-3x">
            <span className="eyebrow  text-primary">WHO WE ARE</span>
            <h1 className="display-h2 mt-2">
              <span >What Makes Us </span><span className="text-primary">Different</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Practitioner-led learning. Designed for real workplace impact.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-2xl bg-background p-7 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-primary/40 via-primary to-primary/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Number */}
                <div className="text-4xl font-display font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                  {(i + 1).toString().padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="mt-3 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {i === 0 && <Users2 className="h-5 w-5" />}
                  {i === 1 && <BookOpen className="h-5 w-5" />}
                  {i === 2 && <Mic2 className="h-5 w-5" />}
                  {i === 3 && <Banknote className="h-5 w-5" />}
                  {i === 4 && <Cpu className="h-5 w-5" />}
                </div>

                <div className="mt-4 text-lg font-semibold leading-tight">{d.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.body}</p>

                {/* Decorative dot pattern */}
                <div className="absolute bottom-4 right-4 flex gap-1 opacity-20">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                </div>
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
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat text-primary-foreground"
        style={{ backgroundImage: `url(${impactBg})` }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "color-mix(in oklab, var(--primary) 85%, black 60%)", opacity: 0.82 }}
        />
        <div className="relative container-px mx-auto max-w-7xl pt-20 pb-15">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 text-center">
            {impact.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-4xl lg:text-5xl">{s.value}</div>
                <div className="mt-4 text-xs uppercase tracking-widest text-primary-foreground/70">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex items-center justify-center gap-3 text-xs text-primary-foreground/60">
            <span className="h-1 w-1 rounded-full bg-primary-foreground/40" />
            <p>Experience figures reflect founder-led and delivered work. ARMS was established in 2019.</p>
            <span className="h-1 w-1 rounded-full bg-primary-foreground/40" />
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section
        className="section hero-bg relative overflow-hidden bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg2})` }}
      >
        <div className="container-px mx-auto max-w-7xl">

          <div className="text-center mb-12">
            <span className="eyebrow justify-center">
              Organisations We've Partnered With
            </span>

            <h2 className="display-h2 mt-3">
              Trusted Across Industries
            </h2>

            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We've partnered with organisations across banking, education,
              consulting, manufacturing and healthcare to build capability through
              meaningful learning experiences.
            </p>
          </div>

          {/* BFSI */}
          <ClientCategory
            title="BFSI & Insurance"
            logos={[
              partnerLogo12,
              partnerlogo15,
              partnerLogo8,
              partnerLogo4,
              partnerLogo10,


            ]}
          />

          {/* Education */}
          <ClientCategory
            title="Education & Institutions"
            logos={[
              partnerlogo17,
              partnerLogo13,
              partnerLogo2,
              partnerlogo16,



            ]}
          />

          {/* Corporate */}
          <ClientCategory
            title="Corporate & Consulting"
            logos={[
              partnerLogo1,
              partnerLogo5,
              partnerLogo9,
              partnerLogo3,
              partnerLogo6,
              partnerLogo11,
              partnerLogo7,
              partnerlogo14
            ]}
          />

          <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
            <Quote className="mx-auto h-8 w-8 text-primary mb-3" />

            <p className="text-muted-foreground max-w-3xl mx-auto">
              We value every partnership and the trust our clients place in us.
              Together, we create learning that drives real workplace performance.
            </p>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="section hero-bg relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container-px mx-auto max-w-7xl ">
          <div className="text-center">
            <span className="eyebrow justify-center">Testimonials</span>
            <h2 className="display-h2 mt-3">What Our Clients Say</h2>
            <div className="mx-auto mt-4 h-0.5 w-16 bg-primary" />
            <p className="mt-4 text-sm text-muted-foreground">
              Real feedback from organisations we've worked with.
            </p>
          </div>

          <div className="relative mt-10 px-14">
            <button
              onClick={() => scrollTestimonials("left")}
              className="absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 rounded-full border border-border bg-background shadow-elegant md:flex items-center justify-center hover:bg-muted transition"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div
              ref={testimonialRef}
              onScroll={handleTestimonialScroll}
              className="carousel-track flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6"
            >
              {testimonials.map((t, index) => (
                <div
                  key={`${t.name}-${index}`}
                  data-carousel-card
                  className="card-elegant relative shrink-0 snap-center w-full p-6 md:p-9"
                >
                  <div className="grid gap-8 md:grid-cols-[1.35fr_0.65fr] md:items-center">
                    <div>
                      <div className="flex items-center gap-3">
                        <Quote className="h-10 w-10 fill-primary text-primary" />

                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          <Users2 className="h-3.5 w-3.5" />
                          {t.tag}
                        </div>
                      </div>

                      <p className="mt-6 max-w-2xl text-sm md:text-base leading-relaxed text-foreground/90">
                        {t.quote}
                      </p>

                      <div className="mt-7">
                        <div className="text-xl font-semibold text-primary">{t.name}</div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          {t.role}, {t.org}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center md:justify-end">
                      {t.image ? (
                        <img
                          src={t.image}
                          alt={t.name}
                          className="h-52 w-52 rounded-3xl object-cover shadow-elegant"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-52 w-52 items-center justify-center rounded-3xl bg-primary/10 text-primary shadow-elegant">
                          <Users2 className="h-20 w-20" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollTestimonials("right")}
              className="absolute right-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 rounded-full border border-border bg-background shadow-elegant md:flex items-center justify-center hover:bg-muted transition"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-2 flex items-center justify-between px-6 text-xs text-muted-foreground">
            <div>
              <span className="font-semibold text-primary">
                {String(activeTestimonial + 1).padStart(2, "0")}
              </span>
              <span className="mx-1">/</span>
              <span>{String(testimonials.length).padStart(2, "0")}</span>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Swipe to explore more testimonials</span>
            </div>
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
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.08]"
              style={{ backgroundImage: `url(${heroBg})` }}
            />
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/30 blur-3xl" />

            <div className="relative grid md:grid-cols-3 gap-10 items-center">
              <div className="md:col-span-2">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gold">
                  Let's build together
                </span>
                <div className="mt-2 h-0.5 w-10 bg-gold" />
                <h3 className="display-h2 mt-5">
                  Have a learning need? Let's build the right solution together.
                </h3>
                <p className="mt-4 text-primary-foreground/80 max-w-xl leading-relaxed">
                  From digital learning and facilitated workshops to capability journeys
                  and offsites, we design practical learning experiences aligned to your
                  business goals.
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-[0_8px_30px_rgba(234,179,8,0.35)]"
                >
                  <Link to="/contact">
                    Discuss Your Learning Need <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-primary-foreground transition"
                >
                  Or explore our solutions <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative mt-10 pt-6 border-t border-primary-foreground/15 flex items-center justify-center gap-3">
              <div className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Users2 className="h-4 w-4" />
              </div>
              <p className="text-sm text-primary-foreground/80">
                Purposeful learning. Practical impact.
              </p>
            </div>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}