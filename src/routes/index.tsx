import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import target from "@/assets/icons/target.svg";

import practitionerIcon from "@/assets/icons/Practitioner.svg";
import instructionalDesignIcon from "@/assets/icons/instruction-design.svg";
import facilitationIcon from "@/assets/icons/facilitation.svg";
import bfsiIcon from "@/assets/icons/bfsi.svg";
import aiBrainIcon from "@/assets/icons/ai-brain.svg";
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
import partnerlogo16 from "@/assets/partners/indiapostlogo.jpg";
import partnerlogo17 from "@/assets/partners/chandigarh-univercity.png";
// Service section photos from src/assets/service/
import serviceStrategy from "@/assets/service/service-strategy.jpeg";
import serviceDesign from "@/assets/service/service-design.jpeg";
import serviceAi from "@/assets/service/service-ai.jpeg";
import serviceFacilitation from "@/assets/service/service-facilitation.png";
import serviceOffsite from "@/assets/service/service-offsite.jpeg";
import serviceKeynote from "@/assets/service/service-keynote.png";
import heroBg from "@/assets/minimal-bg.png";
import heroBg2 from "@/assets/minimal-bg2.png";
import heroBg3 from "@/assets/minimal-bg3.png";
import impactBg from "@/assets/bg-compnies-growth.png";
import aboutus1 from "@/assets/aboutus/aboutus1.png";
import aboutus2 from "@/assets/aboutus/aboutus2.png";
import aboutus3 from "@/assets/aboutus/aboutus3.png";


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
    icon: practitionerIcon,
  },
  {
    title: "Instructional Design Depth",
    body: "We structure content for clarity, retention, and meaningful application.",
    icon: instructionalDesignIcon,
  },
  {
    title: "Facilitation Strength",
    body: "We create engagement, reflection, and conversations that lead to behavioural shift.",
    icon: facilitationIcon,
  },
  {
    title: "BFSI & Sales Understanding",
    body: "We build domain-relevant learning that connects with business and customer realities.",
    icon: bfsiIcon,
  },
  {
    title: "AI-Ready Mindset",
    body: "We help clients modernise learning while preserving quality, context, and learner relevance.",
    icon: aiBrainIcon,
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
  { value: "30+", label: "Years of L&D & \nCapability-Building Experience​" },
  { value: "15+", label: "Years in Digital\nLearning Expertise​" },
  { value: "300+", label: "Workshops Facilitated \nAcross Industries" },
  { value: "1.3L+", label: "Learner Hours\nImpacted" },
  { value: "250+", label: "Hours of Digital Learning\nContent Created​" },
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
    title: "Content That **Teaches.** Training That **Transforms**",
    desc: "We design impactful digital and ILT content and deliver engaging learning experiences across BFSI, soft skills, leadership, and outbound learning.",
    primaryCta: "Explore Our Services",
  },
  {
    image: hero2,
    eyebrow: "Learning & Development Consulting",
    title: "From Learning **Design** to Learning **Delivery**",
    desc: "End-to-end solutions for organisations looking for well-structured content and powerful facilitator-led learning interventions.",
    primaryCta: "Explore Our Solutions",
  },
  {
    image: hero3,
    eyebrow: "Learning & Development Consulting",
    title: "Designed for **Learners.** Delivered for **Impact**",
    desc: "Whether it is BFSI domain training, leadership development, soft skills, or outbound programs, we bring content and delivery together with purpose.",
    primaryCta: "Explore Our Solutions",
  },
  {
    image: hero4,
    eyebrow: "Learning & Development Consulting",
    title: "Learning **Solutions** That Go Beyond **Slides**",
    desc: "We transform ideas, concepts, and business needs into engaging content and interactive training experiences.",
    primaryCta: "Explore Our Solutions",
  },
  {
    image: hero5,
    eyebrow: "Learning & Development Consulting",
    title: "Building **Capability** Through Meaningful **Learning**",
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

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">

        {logos.map((logo, index) => (
          <div
            key={index}
            className="
              group
              rounded-xl
              border
              border-border
              bg-background
              h-20
              flex
              items-center
              justify-center
              p-3
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
                max-h-14
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
  const HERO_DURATION = 8000;

  const heroTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const heroStartedAtRef = useRef(Date.now());
  const heroRemainingRef = useRef(HERO_DURATION);
  const isHeroHoveredRef = useRef(false);

  const startHeroTimer = () => {
    if (heroTimerRef.current) {
      clearTimeout(heroTimerRef.current);
    }

    heroStartedAtRef.current = Date.now();

    heroTimerRef.current = setTimeout(() => {
      setActiveHero((prev) => (prev + 1) % heroSlides.length);
      heroRemainingRef.current = HERO_DURATION;

      if (!isHeroHoveredRef.current) {
        startHeroTimer();
      }
    }, heroRemainingRef.current);
  };

  useEffect(() => {
    startHeroTimer();

    return () => {
      if (heroTimerRef.current) {
        clearTimeout(heroTimerRef.current);
      }
    };
  }, []);

  const handleHeroMouseEnter = () => {
    isHeroHoveredRef.current = true;

    if (heroTimerRef.current) {
      clearTimeout(heroTimerRef.current);
    }

    const elapsedTime = Date.now() - heroStartedAtRef.current;

    heroRemainingRef.current = Math.max(
      heroRemainingRef.current - elapsedTime,
      0
    );
  };

  const handleHeroMouseLeave = () => {
    isHeroHoveredRef.current = false;
    startHeroTimer();
  };

  const handleHeroDotClick = (index: number) => {
    setActiveHero(index);
    heroRemainingRef.current = HERO_DURATION;

    if (!isHeroHoveredRef.current) {
      startHeroTimer();
    }
  };
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
      <section
        className="hero-bg relative overflow-hidden h-[620px] md:h-[720px]"
        onMouseEnter={handleHeroMouseEnter}
        onMouseLeave={handleHeroMouseLeave}
      >
        {/* Background images */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 ease-in-out ${index === activeHero ? "opacity-100" : "opacity-0"
              }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: "center top",
            }}
          />
        ))}

        <div className="relative z-10 container-px mx-auto max-w-7xl h-full flex flex-col justify-center">
          {/* Content slides */}
          <div className="grid">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`col-start-1 row-start-1 transition-opacity duration-700 ${index === activeHero
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
                  }`}
              >
                <div className="max-w-3xl">
                  <span className="eyebrow text-[14px]">{slide.eyebrow}</span>

                  <h1 className="display-h1 mt-5 text-foreground">
                    {renderHeroTitle(slide.title)}
                  </h1>

                  <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                    {slide.desc}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild size="lg">
                      <Link to="/services">
                        {slide.primaryCta} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>

                    <Button asChild size="lg" variant="outline">
                      <Link to="/contact">Discuss Your Learning Need</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot navigation */}
          <div className="mt-8 flex items-center gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => handleHeroDotClick(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === activeHero
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-primary/30 hover:bg-primary/50"
                  }`}
              />
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

        <div className="relative  mx-auto max-w-7xl min-h-[330px] flex flex-col justify-between py-10">
          <div className="pt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center place-items-center">
            {impact.map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-start min-w-[150px]">
                <div className="font-display text-3xl md:text-4xl lg:text-5xl text-center">
                  {s.value}
                </div>

                <div className="mt-4 text-xs uppercase tracking-widest text-primary-foreground/70 text-center leading-snug max-w-[190px]">
                  {s.label.split("\n").map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className=" flex items-center justify-center gap-3 text-xs text-primary-foreground/60">
            <span className="h-1 w-1 rounded-full bg-primary-foreground/40" />
            <p>Experience figures reflect founder-led and delivered work. ARMS was established in 2019.</p>
            <span className="h-1 w-1 rounded-full bg-primary-foreground/40" />
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

        <div className="container-px relative mx-auto max-w-[1536px]">

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
                  src={aboutus3}
                  alt="Corporate training"
                  className="h-64 w-full rounded-3xl object-cover shadow-lg"
                />

              </div>

              <img
                src={aboutus2}
                alt="Facilitator"
                className="h-full min-h-[545px] w-full rounded-3xl object-cover shadow-xl"
              />

            </div>

            {/* Content */}
            <div className="w-full max-w-none">

              <span className="eyebrow">
                About Us
              </span>

              <h2 className="display-h2 mt-3 max-w-full">
                <span>Learning Experiences </span>
                <span className="text-primary">Shaped </span>
                <span>Around </span>
                <span className="text-primary">People,</span>
                <br />
                <span className="text-primary">Performance</span>
                <span> and </span>
                <span className="text-primary">Purpose.</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-6">
                Aarambh Resource Management Solutions is a Learning &
                Development consulting firm that helps organisations
                build capability through purposeful learning design,
                digital learning, facilitated interventions and
                experiential programs.
              </p>

              <p className="mt-4 text-muted-foreground leading-6">
                We work closely with organisations to understand business
                context, identify capability needs and design practical,
                engaging learning solutions that people can immediately
                apply at work.
              </p>

              <p className="mt-4 text-muted-foreground leading-6">
                Our expertise spans instructional design, eLearning,
                ILT content, leadership development, behavioural skills,
                sales capability, BFSI domain learning, offsites and
                keynote sessions—creating learning that delivers
                measurable workplace impact.
              </p>

              <Button asChild className="mt-6">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

            </div>

          </div>

        </div>
      </section>


      {/* DIFFERENTIATORS */}
      <section
        className="py-16 hero-bg relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container-px mx-auto max-w-7xl">

          <div className="">
            <span className="eyebrow justify-center text-primary">WHO WE ARE</span>

            <h1 className="display-h2 mt-3">
              <span>What Makes Us </span>
              <span className="text-primary">Different</span>
            </h1>

            <p className="mt-3 text-lg text-muted-foreground font-bold">
              Practitioner-led learning. Designed for real workplace impact.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl bg-white px-5 py-7 text-center shadow-[0_10px_35px_rgba(88,28,135,0.12)] border border-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(88,28,135,0.18)]"
              >
                <div className="absolute right-0 top-0 h-0 w-0 border-t-[36px] border-l-[36px] border-t-primary border-l-transparent" />

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <img
                    src={d.icon}
                    alt={d.title}
                    className="h-11 w-11 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-5 flex min-h-[45px] items-center justify-center text-lg font-bold leading-tight text-foreground">
                  {d.title}
                </h3>

                <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-primary" />

                <p className="mt-5 text-sm text-muted-foreground leading-6">
                  {d.body}
                </p>

                <div className="absolute bottom-0 left-0 h-1.5 w-full bg-primary" />
              </motion.div>
            ))}
          </div>

          <div className="mt-10  bg-primary/5 mx-auto max-w-3xl  bg-background rounded-2xl  border border-primary/20 shadow-[0_4px_24px_rgba(88,28,135,0.10)] px-6 py-3 flex items-center gap-5">
            <span>
              <img src={target} alt="Target" className="h-13 w-13 inline-block mr-2" />
            </span>
            <div className="w-px self-stretch bg-primary/20 shrink-0" />
            <span className="font-bold text-sm md:text-base">
              Our focus is simple:{" "}
              <span className="text-primary">
                Better Learning. Stronger Performance. Real Impact.
              </span>
            </span>
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
              <span className="eyebrow">Our services</span>
              <h2 className="display-h2 mt-3 max-w-2xl">
                A full L&amp;D partner across <span className="text-primary">strategy, </span>design and delivery
              </h2>
            </div>
            <Button asChild >
              <Link to="/services">
                See all services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, image, title, desc }) => (
              <Link
                key={title}
                to="/services"
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
                  <h3 className="text-xl text-primary font-display">{title}</h3>
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



      {/* CLIENTS */}
      <section
        className="section hero-bg relative overflow-hidden bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg2})` }}
      >
        <div className="container-px mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="eyebrow justify-center">
              Organisations We've Partnered With
            </span>

            <h2 className="display-h2 mt-3">
              Trusted Across Industries
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We've partnered with organisations across banking, education,
              consulting, manufacturing and healthcare to build capability through
              meaningful learning experiences.
            </p>
          </div>

          {/* Partner logos */}
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {[
              partnerLogo12,
              partnerlogo15,
              partnerLogo8,
              partnerLogo4,
              partnerLogo10,
              partnerlogo17,
              partnerLogo13,
              partnerLogo2,
              partnerlogo16,
              partnerLogo1,
              partnerLogo5,
              partnerLogo9,
              partnerLogo3,
              partnerLogo6,
              partnerLogo11,
              partnerLogo7,
              partnerlogo14,
            ].map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                className="group mx-auto flex h-24 w-full max-w-[170px] items-center justify-center rounded-xl border border-primary/10 bg-white px-4 py-3 shadow-[0_8px_25px_rgba(88,28,135,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_14px_35px_rgba(88,28,135,0.15)]"              >
                <img
                  src={logo}
                  alt={`Partner organisation ${index + 1}`}
                  className="max-h-14 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <div className="mx-auto flex max-w-3xl items-start justify-center gap-4">
              <Quote className="mt-1 h-6 w-6 shrink-0 scale-x-[-1] text-primary" />

              <p className="text-center text-muted-foreground font-bold">
                We value every partnership and the trust our clients place in us.
                Together, we create learning that drives real workplace performance.
              </p>

              <Quote className="mt-1 h-6 w-6 shrink-0 text-primary" />
            </div>
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

          <div className="relative mt-10 px-0 md:px-14">
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
                  className="card-elegant relative shrink-0 snap-center w-full p-5 sm:p-6 md:p-9"
                >
                  <div className="grid gap-6 md:gap-8 md:grid-cols-[1.35fr_0.65fr] md:items-center">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <Quote className="h-8 w-8 md:h-10 md:w-10 fill-primary text-primary shrink-0" />

                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] sm:text-xs font-semibold text-primary">
                          <Users2 className="h-3.5 w-3.5 shrink-0" />
                          <span>{t.tag}</span>
                        </div>
                      </div>

                      <p className="mt-5 max-w-2xl text-sm md:text-base leading-7 md:leading-relaxed text-foreground/90">
                        {t.quote}
                      </p>

                      <div className="mt-6">
                        <div className="text-lg md:text-xl font-semibold text-primary">
                          {t.name}
                        </div>
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
                          className="h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52 rounded-3xl object-cover shadow-elegant"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52 items-center justify-center rounded-3xl bg-primary/10 text-primary shadow-elegant">
                          <Users2 className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20" />
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

          <div className="mt-2 flex items-center justify-center sm:justify-between px-1 sm:px-6 text-xs text-muted-foreground">
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
          <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-5 md:p-8 shadow-elegant">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.08]"
            />
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/30 blur-3xl" />

            <div className="relative grid md:grid-cols-3 gap-10 items-center">
              <div className="md:col-span-2">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gold">
                  Let's build together
                </span>
                <div className="mt-2 h-0.5 w-10 bg-gold" />
                <h3 className="display-h2 mt-5">
                  Have a Learning Need?<br />  Let's Build the Right Solution together.
                </h3>
                <p className="mt-4 text-primary-foreground/80 max-w-xl leading-relaxed">
                  From digital learning and facilitated workshops to capability journeys
                  and offsites, we design practical learning experiences aligned to your
                  business goals.
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 md:items-end">
                <Button
                  asChild
                  size="lg"
                  className="min-w-[245px] bg-gold text-gold-foreground hover:bg-gold/90 shadow-[0_8px_30px_rgba(234,179,8,0.35)]"
                >
                  <Link to="/contact">
                    Discuss Your Learning Need
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="min-w-[245px] bg-gold text-gold-foreground hover:bg-gold/90 shadow-[0_8px_30px_rgba(234,179,8,0.35)]"
                >
                  <Link to="/services">
                    Explore Our Services
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative mt-10 pt-6 border-t border-primary-foreground/15 flex items-center justify-center gap-3">
              <div className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Users2 className="h-4 w-4" />
              </div>
              <p className="text-sm text-primary-foreground/80">
                Purposeful Learning. Practical Impact.
              </p>
            </div>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}