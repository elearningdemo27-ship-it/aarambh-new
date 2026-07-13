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
  Target,
  Route as RouteIcon,
  FileText,
  UserCheck,
  ClipboardCheck,
  TrendingUp,
  Layers,
  MessageSquare,
  Globe2,
  Lightbulb,
  Users2,
  Building2,
  Award,
  Search,
  type LucideIcon,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/bg-img1.png";
import heroBg2 from "@/assets/minimal-bg.png";
import heroBg3 from "@/assets/minimal-bg2.png";

// Service section photos from src/assets/service/
import serviceStrategy from "@/assets/service/service-strategy.jpeg";
import serviceDesign from "@/assets/service/service-design.jpeg";
import serviceAi from "@/assets/service/service-ai.jpeg";
import serviceFacilitation from "@/assets/service/service-facilitation.png";
import serviceOffsite from "@/assets/service/service-offsite.jpeg";
import serviceKeynote from "@/assets/service/service-keynote.png";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — L&D Consulting, Digital Learning, AI Workflows | Aarambh" },
      {
        name: "description",
        content:
          "Six integrated services: learning strategy, instructional design, AI-enabled learning, facilitation, experiential offsites and keynotes.",
      },
      { property: "og:title", content: "Services — Aarambh" },
      { property: "og:description", content: "Strategy, design, delivery and AI for L&D." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

// Generic 3-badge value strip reused under "Our Approach" for every service.
const valueBadges = [
  {
    icon: Building2,
    title: "Business-Aligned",
    body: "Keeps learning anchored to organisational goals and performance outcomes.",
  },
  {
    icon: Users2,
    title: "Learner-Centred",
    body: "Builds journeys around audience context, motivation, and practical relevance.",
  },
  {
    icon: Target,
    title: "Outcome-Focused",
    body: "Ensures learning is structured for application, recall, and measurable impact.",
  },
] as const;

type ApproachStep = {
  n: string;
  icon: LucideIcon;
  title: string;
  text: string;
};

const services = [
  {
    id: "strategy",
    icon: Compass,
    image: serviceStrategy,
    title: "Learning Strategy & Consulting",
    eyebrow: "Learning Strategy & Consulting",
    headline: "Where Learning Meets Strategy",
    short: "TNA, capability mapping, learning journeys and impact planning.",
    paragraphs: [
      "Our instructional design practice focuses on converting business needs, SME inputs, and raw content into structured learning experiences that are clear, engaging, and application-oriented.",
      "We do not begin with slides or screens. We begin with the learner, the business context, and the performance expectation the organisation wants to achieve.",
      "This is where we help organisations move from content creation to capability building.",
    ],
    focusAreas: ["Learner", "Context", "Performance", "Outcome"],
    items: [
      "Training needs analysis (TNA)",
      "Learning journey design",
      "Capability mapping",
      "Content audits",
      "Learning impact planning",
    ],
    buildItems: [
      { icon: Target, title: "Training Needs Analysis (TNA)", desc: "Identify learning gaps, business priorities, and capability needs." },
      { icon: RouteIcon, title: "Learning Journey Design", desc: "Structure learning across roles, levels, and touchpoints." },
      { icon: Layers, title: "Storyboarding & Content Structuring", desc: "Convert raw inputs into clear, logical learning flows." },
      { icon: UserCheck, title: "Adult Learning & Engagement Strategy", desc: "Apply principles that make learning relevant and interactive." },
      { icon: ClipboardCheck, title: "Assessment Design", desc: "Build checks, practice, and evaluation aligned to outcomes." },
      { icon: TrendingUp, title: "Impact Measurement", desc: "Connect learning takeaways with application and performance." },
    ],
    approachSteps: [
      { n: "1", icon: Search, title: "Discover", text: "Understand the business context and performance need" },
      { n: "2", icon: Users2, title: "Define", text: "Define learner profiles, audience needs, and success expectations" },
      { n: "3", icon: RouteIcon, title: "Design", text: "Design the learning journey across roles, levels, and stages" },
      { n: "4", icon: Layers, title: "Develop", text: "Structure content, engagement methods, and practice opportunities" },
      { n: "5", icon: TrendingUp, title: "Deliver Impact", text: "Align assessments, application, and impact measurement" },
    ] as ApproachStep[],
    ctaTitle: "Need a learning strategy that turns content into capability?",
    ctaBody: "Let's design learning journeys that are structured, engaging, and aligned to business outcomes.",
    ctaButtonLabel: "Talk to Us",
  },
  {
    id: "id",
    icon: BookOpen,
    image: serviceDesign,
    title: "Instructional Design & Content Development",
    eyebrow: "Learning Content Creation",
    headline: "Content That Engages. Learning That Sticks.",
    short: "ILT, eLearning, blended programs, SCORM, microlearning and more.",
    paragraphs: [
      "We design and develop high-impact learning content across formats — Instructor-Led Training (ILT), eLearning, and blended journeys. Every module is built to ensure clarity, engagement, and real-world application.",
      "Whether it's structured classroom content, interactive digital modules, or a blend of both, we create learning material that helps trainers deliver with clarity and learners engage with purpose.",
      "This is where we help organisations move from training material into learning experiences that drive real understanding, recall, and application.",
    ],
    focusAreas: ["ILT", "Digital", "Blended", "SCORM"],
    items: [
      "ILT decks, facilitator guides, participant workbooks",
      "eLearning modules (SCORM compliant, Storyline-based)",
      "Blended learning journeys (digital + classroom integration)",
      "Scenario-based and microlearning content",
      "HTML5 conversion, translation and localization",
    ],
    buildItems: [
      { icon: FileText, title: "ILT Decks & Facilitator Guides", desc: "Structured classroom content with clear session flow, trainer notes, and debrief points." },
      { icon: BookOpen, title: "Participant Workbooks", desc: "Activities, reflection exercises, tools, and practice sheets for learners." },
      { icon: Layers, title: "eLearning Modules (SCORM)", desc: "Interactive, Storyline-based digital learning built for engagement and recall." },
      { icon: RouteIcon, title: "Blended Learning Journeys", desc: "Integrated experiences that connect digital and classroom formats." },
      { icon: MessageSquare, title: "Scenario-Based & Microlearning", desc: "Story-driven, bite-sized content designed for retention and application." },
      { icon: Globe2, title: "HTML5 Conversion & Localization", desc: "Modernise legacy content and adapt it across languages and devices." },
    ],
    approachSteps: [
      { n: "1", icon: Search, title: "Discover", text: "Understand the audience, business context, and learning objective" },
      { n: "2", icon: RouteIcon, title: "Structure", text: "Structure the learning journey — session-wise or screen-wise" },
      { n: "3", icon: Layers, title: "Design", text: "Design content using adult learning principles, with clear visual treatment" },
      { n: "4", icon: ClipboardCheck, title: "Build", text: "Build activities and exercises for engagement and application" },
      { n: "5", icon: FileText, title: "Guide", text: "Create facilitator-friendly guides for consistent delivery" },
      { n: "6", icon: BookOpen, title: "Develop", text: "Develop learner resources that support recall, practice, and on-the-job use" },
      { n: "7", icon: Target, title: "Align", text: "Align assessments and takeaways to desired performance outcomes" },
    ] as ApproachStep[],
    ctaTitle: "Need content that's built to be used, not just completed?",
    ctaBody: "Let's create ILT, digital, and blended experiences that help trainers deliver better and learners apply more.",
    ctaButtonLabel: "Discuss Your Requirement",
  },
  {
    id: "ai",
    icon: Sparkles,
    image: serviceAi,
    title: "AI-Enabled Learning Solutions",
    eyebrow: "AI-Enabled Learning Solutions",
    headline: "Where AI Supports Performance and Skill Building",
    short: "AI job aids, prompt libraries, AI literacy and skill practice.",
    paragraphs: [
      "Our AI-enabled learning solutions are designed to help organisations use artificial intelligence for practical performance support, job aids, skill development, and continuous learning.",
      "We create AI-assisted learning resources that go beyond content generation. Every solution is designed to help employees access information faster, practise skills better, make better decisions, and apply learning more confidently in real work situations.",
      "Our focus is on using AI meaningfully and responsibly — to simplify tasks, support learning at the moment of need, and strengthen workplace performance. This is where we help organisations move from training people once to supporting people continuously.",
    ],
    focusAreas: ["Practical", "Responsible", "Performance", "Continuous"],
    items: [
      "AI-assisted job aids and quick-reference tools",
      "Prompt-based workflows for day-to-day tasks",
      "AI-enabled knowledge refreshers and microlearning",
      "Scenario-based skill practice using AI prompts",
      "Role-based prompt libraries for teams",
      "AI literacy programs and content review support",
    ],
    buildItems: [
      { icon: Sparkles, title: "AI-Assisted Job Aids", desc: "Quick-reference tools that support employees at the point of need." },
      { icon: Brain, title: "Prompt-Based Workflows", desc: "Practical workflows for common, day-to-day workplace tasks." },
      { icon: MessageSquare, title: "AI-Enabled Refreshers", desc: "Knowledge refreshers and microlearning powered by AI." },
      { icon: Target, title: "Scenario-Based Practice", desc: "Skill practice using AI prompts for realistic decision-making." },
      { icon: FileText, title: "Role-Based Prompt Libraries", desc: "Curated prompt libraries for employees, managers, and trainers." },
      { icon: Lightbulb, title: "AI Literacy & Content Review", desc: "Programs and support to build AI fluency and content quality." },
      { icon: Globe2, title: "AI Learning Tools", desc: "Learning tools that support decision making, communication and productivity." },
    ],
    approachSteps: [
      { n: "1", icon: Search, title: "Understand", text: "Understand the learner role, task requirement, and workplace challenge" },
      { n: "2", icon: Lightbulb, title: "Identify", text: "Identify where AI can support performance, practice, or productivity" },
      { n: "3", icon: Layers, title: "Design", text: "Design simple, usable job aids, prompts, and learning tools" },
      { n: "4", icon: MessageSquare, title: "Build", text: "Create prompt-based workflows for common tasks and scenarios" },
      { n: "5", icon: Target, title: "Practise", text: "Build AI-supported practice opportunities for skill development" },
      { n: "6", icon: ClipboardCheck, title: "Review", text: "Review outputs for accuracy, relevance, tone, and context" },
      { n: "7", icon: UserCheck, title: "Validate", text: "Ensure human-led validation for quality, ethics, and learning impact" },
      { n: "8", icon: TrendingUp, title: "Align", text: "Align AI-enabled learning solutions to business and performance outcomes" },
    ] as ApproachStep[],
    ctaTitle: "Need AI-enabled learning solutions that are practical, responsible, and performance-focused?",
    ctaBody: "Let's design AI-enabled learning tools and experiences that truly support performance.",
    ctaButtonLabel: "Talk to Us",
  },
  {
    id: "delivery",
    icon: Brain,
    image: serviceFacilitation,
    title: "Training Delivery & Facilitation",
    eyebrow: "Training Delivery",
    headline: "Learning Delivery That Engages, Enables, and Empowers",
    short: "BFSI, soft skills, leadership, sales and TTT programs.",
    paragraphs: [
      "We deliver customised training interventions that help individuals, teams, managers, and leaders strengthen their skills, improve workplace behaviours, and apply learning with confidence.",
      "Our training programs are designed around the organisation's business context, learner profile, role expectations, and performance goals. Whether it is a focused workshop, a structured learning journey, or a customised capability-building intervention, we ensure that every session is practical, engaging, and outcome-driven.",
    ],
    focusAreas: ["Context", "Engagement", "Application", "Impact"],
    items: [
      "BFSI domain training",
      "Soft skills and behavioural training",
      "Leadership and managerial training",
      "Sales and service training",
      "Train-the-trainer programs",
      "Training need analysis, assessment centres and audits",
    ],
    buildItems: [
      { icon: Building2, title: "BFSI Domain Training", desc: "Programs across banking, insurance, mutual funds, wealth management, and financial products." },
      { icon: Users2, title: "Soft Skills & Behavioural Training", desc: "Communication, collaboration, emotional intelligence, and ownership." },
      { icon: Award, title: "Leadership & Managerial Training", desc: "For first-time managers, mid-level managers, and senior leaders — people management, coaching, and feedback." },
      { icon: TrendingUp, title: "Sales & Service Training", desc: "Consultative selling, objection handling, relationship management, and service recovery." },
      { icon: UserCheck, title: "Train-the-Trainer Programs", desc: "Helping internal trainers deliver learning with clarity, confidence, and consistency." },
      { icon: ClipboardCheck, title: "Supporting Interventions", desc: "Training need analysis, assessment centres, training audits, and reinforcement sessions." },
    ],
    approachSteps: [
      { n: "1", icon: Building2, title: "Context", text: "Understanding the business need and learner reality" },
      { n: "2", icon: Users2, title: "Engagement", text: "Creating participation through real interaction and reflection" },
      { n: "3", icon: Target, title: "Application", text: "Connecting learning to real workplace situations" },
      { n: "4", icon: TrendingUp, title: "Impact", text: "Driving clear takeaways and behaviour change" },
    ] as ApproachStep[],
    ctaTitle: "Ready to build learning experiences that your teams can apply with confidence?",
    ctaBody: "Let's design training interventions that are practical, engaging, and outcome-driven.",
    ctaButtonLabel: "Discuss Your Training Requirement",
  },
  {
    id: "offsites",
    icon: Mountain,
    image: serviceOffsite,
    title: "Offsites & Experiential Learning",
    eyebrow: "Offsites / Outbound Training",
    headline: "Where Team Experiences Turn into Workplace Impact",
    short: "Leadership retreats, team alignment, outbound and simulations.",
    paragraphs: [
      "Our offsite and outbound learning experiences are crafted for teams that need more than a break from routine. They are designed to create moments of reflection, trust, and behavioural shift in an environment where people engage more openly and learn by doing.",
      "Every intervention is built around a clear organisational purpose, whether it is strengthening collaboration, preparing leaders, improving communication, building ownership, or aligning teams around a shared direction.",
      "We do not treat offsites as a set of activities. We design them as facilitated learning journeys where every experience, conversation, and debrief is connected back to real workplace outcomes.",
    ],
    focusAreas: ["Reflection", "Trust", "Alignment", "Impact"],
    items: [
      "Leadership retreats",
      "Team alignment programs",
      "Sales energisers",
      "Culture-building offsites",
      "Communication-led interventions",
      "Customised outbound journeys",
    ],
    buildItems: [
      { icon: Award, title: "Leadership Retreats", desc: "For leadership clarity and strategic reflection." },
      { icon: Users2, title: "Team Alignment Programs", desc: "Built to create connection, clarity, and shared direction." },
      { icon: TrendingUp, title: "Sales Energisers", desc: "Immersive experiences that energise teams and strengthen focus." },
      { icon: Sparkles, title: "Culture-Building Offsites", desc: "Experiences that deepen trust, collaboration, and ownership." },
      { icon: MessageSquare, title: "Communication-Led Interventions", desc: "Programs that improve dialogue, openness, and team effectiveness." },
      { icon: Mountain, title: "Customised Outbound Journeys", desc: "Tailored around a specific business theme or team outcome." },
    ],
    approachSteps: [
      { n: "1", icon: Search, title: "Understand", text: "Understand what the organisation wants the team to think, feel, or do differently" },
      { n: "2", icon: Layers, title: "Design", text: "Design experiences, activities, or environments that help the team experience that shift" },
      { n: "3", icon: MessageSquare, title: "Facilitate", text: "Facilitate meaningful conversations that help participants reflect and draw insights" },
      { n: "4", icon: RouteIcon, title: "Connect", text: "Connect the learning back to everyday behaviours, team dynamics, and expectations" },
      { n: "5", icon: Users2, title: "Build", text: "Build programs that strengthen trust, collaboration, and alignment — with practical takeaways" },
      { n: "6", icon: Award, title: "Takeaway", text: "Create practical takeaways that participants can carry back into their roles and teams" },
    ] as ApproachStep[],
    ctaTitle: "Ready to design an offsite that drives reflection, trust, and workplace impact?",
    ctaBody: "Let's create meaningful team experiences people remember and apply back at work.",
    ctaButtonLabel: "Design an Offsite With Us",
  },
  {
    id: "keynotes",
    icon: Mic2,
    image: serviceKeynote,
    title: "Keynotes & Motivational Sessions",
    eyebrow: "Motivational & Keynote Sessions",
    headline: "Stories That Move People. Insights That Stay.",
    short: "Leadership, resilience, ownership and performance mindset talks.",
    paragraphs: [
      "Our motivational and keynote sessions are crafted for organisations that want to energise people, shift perspectives, and create a strong emotional connect around performance, leadership, resilience, ownership, and change.",
      "Led by our founder — an ex-Army officer, TEDx speaker, and experienced corporate leader — these sessions bring together real-life leadership experiences, powerful storytelling, practical workplace insights, and high-impact audience engagement.",
      "The sessions are not designed as generic talks. They are curated around the organisation's theme, audience profile, business context, and the message that needs to land with clarity and conviction.",
    ],
    focusAreas: ["Story", "Insight", "Reflection", "Action"],
    items: [
      "Leadership and ownership",
      "Performance mindset",
      "Women in leadership",
      "Resilience and adaptability",
      "Change and transformation",
      "Team energy and motivation",
    ],
    buildItems: [
      { icon: Award, title: "Leadership & Ownership", desc: "Inspiring individuals and teams to take responsibility and act with purpose." },
      { icon: Target, title: "Performance Mindset", desc: "Building focus, discipline, self-belief, and the drive to move from intent to action." },
      { icon: Users2, title: "Women in Leadership", desc: "Sessions on courage, confidence, breaking barriers, and leading with authenticity." },
      { icon: TrendingUp, title: "Resilience & Adaptability", desc: "Helping teams navigate uncertainty, pressure, and change." },
      { icon: RouteIcon, title: "Change & Transformation", desc: "Encouraging teams to embrace change with openness and agility." },
      { icon: Sparkles, title: "Team Energy & Motivation", desc: "High-impact sessions for conferences, kick-offs, and leadership meets." },
    ],
    approachSteps: [
      { n: "1", icon: Mic2, title: "Story", text: "Real experiences that create emotional connection" },
      { n: "2", icon: Lightbulb, title: "Insight", text: "Lessons drawn from the Army, leadership, and corporate life" },
      { n: "3", icon: MessageSquare, title: "Reflection", text: "Questions that help the audience connect the message to themselves and their teams" },
      { n: "4", icon: Target, title: "Action", text: "Clear takeaways that participants can apply at work" },
    ] as ApproachStep[],
    ctaTitle: "Ready to bring a keynote that inspires, connects, and drives action?",
    ctaBody: "Let's design a session that energises your audience and leaves them with insights they can act on.",
    ctaButtonLabel: "Invite Us for a Keynote",
  },
] as const;

function ServicesPage() {
  return (
    <SiteLayout>
      {/* PAGE HERO */}
      {/* <section
        className="hero-bg relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <span className="eyebrow">Our services</span>
          <h1 className="display-h1 mt-5 max-w-4xl">
            A complete L&amp;D partner — from <em className="text-primary not-italic">strategy</em> to{" "}
            <em className="text-primary not-italic">delivery</em>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
            Six integrated services, designed to be picked individually or stitched together
            into a complete capability journey.
          </p>
        </div>
      </section> */}

      {/* QUICK-NAV OVERVIEW GRID */}
      <section
        className="section hero-bg relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg2})` }}
      >
        <div className="container-px mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ id, icon: Icon, image, title, short }) => (
            <a key={id} href={`#${id}`} className="card-elegant overflow-hidden group block">
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

      {/* FULL PER-SERVICE DETAIL SECTIONS */}
      {services.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          style={{ backgroundImage: `url(${idx % 2 === 0 ? heroBg2 : heroBg3})` }}
          className="hero-bg relative overflow-hidden bg-cover bg-center bg-no-repeat"
        >
          <div className="container-px mx-auto max-w-7xl section">

            {/* ── Hero split: text + image with overlay card ── */}
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6"
              >
                <span className="eyebrow">{s.eyebrow}</span>
                <h2 className="display-h2 mt-4">{s.headline}</h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  {s.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link to="/contact">
                      Discuss Your Requirement <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="#services-top">View All Services</a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-80 object-cover"
                  />
                </div>
                {/* Floating focus-areas card */}
                <div className="absolute -bottom-6 -left-6 max-w-[220px] rounded-2xl bg-background p-5 shadow-elegant border border-border/50 hidden sm:block">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                    <s.icon className="h-4 w-4" />
                    Focus Areas
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {s.focusAreas.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground/85">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* ── What We Help You Build ── */}
            <div className="mt-24 grid items-stretch gap-10 lg:grid-cols-2">
              {/* Left side */}
              <div className="flex h-full flex-col">
                <h3 className="display-h2">
                  What We Help You Build
                </h3>

                <div className="mt-8 flex flex-1 flex-col justify-between gap-5">
                  {s.buildItems.map(({ icon: ItemIcon, title, desc }, i) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.05,
                      }}
                      className="card-elegant p-5"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <ItemIcon className="h-5 w-5" />
                        </div>

                        <div>
                          <h4 className="font-semibold">
                            {title}
                          </h4>

                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right side */}
              <ApproachJourney steps={s.approachSteps} />
            </div>
          </div>

          {/* ── Closing CTA banner ── */}
          <div className="container-px mx-auto max-w-7xl pb-18">
            <div className="mt-2 relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-4 md:p-8 shadow-elegant">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
              <div className="relative flex flex-col md:flex-row md:items-center gap-8">
                <div className="h-16 w-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <s.icon className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h4 className="display-h2 text-2xl md:text-3xl">{s.ctaTitle}</h4>
                  <p className="mt-2 text-primary-foreground/80 max-w-xl">{s.ctaBody}</p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-gold text-gold-foreground hover:bg-gold/90 shrink-0"
                >
                  <Link to="/contact">
                    {s.ctaButtonLabel} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </SiteLayout>
  );
}

/* -------------------- Our Approach — journey map (ported from /solutions) -------------------- */
/*
  Same visual language as the Solutions page: dotted background texture, soft
  blurred glow circles, a horizontal zigzag of pill-shaped step cards linked by
  a dashed spine on desktop, and a vertical dashed timeline with numbered
  avatar circles on mobile/tablet. Reused across every service section, driven
  by that service's own approachSteps (icon + title + text).
*/

function ApproachJourney({ steps }: { steps: readonly ApproachStep[] }) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-primary-soft/60 via-background to-primary-soft/40 p-5 md:p-6">      {/* Decorative dots */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-primary, #5b2c81) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-16 -left-12 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

      {/* Heading */}
      <div className="relative text-center">
        <h3 className="text-2xl font-display font-bold text-primary md:text-3xl">
          Our Approach
        </h3>

        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
          A structured process that turns business needs into meaningful
          learning architecture.
        </p>
      </div>

      {/* Compact vertical journey */}
      <div className="relative mt-8">
        {/* Vertical connector */}
        <div className="absolute bottom-4 left-5 top-4 w-px border-l-2 border-dashed border-primary/30" />

        <div className="flex flex-1 flex-col justify-between gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: i * 0.06,
                }}
                className="relative flex items-start gap-3"
              >
                {/* Icon */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary/20 bg-background text-primary shadow-sm">
                  <Icon className="h-4 w-4" />

                  <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {step.n}
                  </span>
                </div>

                {/* Step card */}
                <div className="flex-1 rounded-xl border border-primary/10 bg-background/90 px-4 py-3 shadow-sm backdrop-blur">
                  <h4 className="text-sm font-semibold text-primary">
                    {step.title}
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-foreground/75 md:text-sm">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Value badges */}
      <div className="relative mt-8 grid gap-3 border-t border-primary/10 pt-6">
        {valueBadges.map(({ icon: BadgeIcon, title, body }) => (
          <div
            key={title}
            className="flex items-start gap-3 rounded-xl bg-background/70 p-3"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <BadgeIcon className="h-4 w-4" />
            </div>

            <div>
              <div className="text-sm font-semibold">{title}</div>

              <p className="mt-0.5 text-xs leading-5 text-muted-foreground">
                {body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}