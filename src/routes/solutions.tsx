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
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/bg-img1.png";
import heroBg2 from "@/assets/minimal-bg.png";
import heroBg3 from "@/assets/minimal-bg2.png";

// Service section photos from src/assets/service/ — same set used on the homepage.
import serviceStrategy from "@/assets/service/service-strategy.jpeg";
import serviceDesign from "@/assets/service/service-design.jpeg";
import serviceAi from "@/assets/service/service-ai.jpeg";
import serviceFacilitation from "@/assets/service/service-facilitation.png";
import serviceOffsite from "@/assets/service/service-offsite.jpeg";
import serviceKeynote from "@/assets/service/service-keynote.png";

export const Route = createFileRoute("/solutions")({
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

// Generic 3-badge value strip reused under "Our Approach" for every solution.
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

const solutions = [
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
      { title: "Understand the business context and performance need" },
      { title: "Define learner profiles, audience needs, and success expectations" },
      { title: "Design the learning journey across roles, levels, and stages" },
      { title: "Structure content, engagement methods, and practice opportunities" },
      { title: "Align assessments, application, and impact measurement" },
    ],
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
      { title: "Understand the audience, business context, and learning objective" },
      { title: "Structure the learning journey — session-wise or screen-wise" },
      { title: "Design content using adult learning principles, with clear visual treatment" },
      { title: "Build activities and exercises for engagement and application" },
      { title: "Create facilitator-friendly guides for consistent delivery" },
      { title: "Develop learner resources that support recall, practice, and on-the-job use" },
      { title: "Align assessments and takeaways to desired performance outcomes" },
    ],
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
      { icon: Globe2, title: "AI learnign tools", desc: "Learning tools that support decision making, communication and productivity." },
    ],
    approachSteps: [
      { title: "Understand the learner role, task requirement, and workplace challenge" },
      { title: "Identify where AI can support performance, practice, or productivity" },
      { title: "Design simple, usable job aids, prompts, and learning tools" },
      { title: "Create prompt-based workflows for common tasks and scenarios" },
      { title: "Build AI-supported practice opportunities for skill development" },
      { title: "Review outputs for accuracy, relevance, tone, and context" },
      { title: "Ensure human-led validation for quality, ethics, and learning impact" },
      { title: "Align AI-enabled learning solutions to business and performance outcomes" },
    ],
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
      { title: "Context — understanding the business need and learner reality" },
      { title: "Engagement — creating participation through real interaction and reflection" },
      { title: "Application — connecting learning to real workplace situations" },
      { title: "Impact — driving clear takeaways and behaviour change" },
    ],
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
      { title: "Understand what the organisation wants the team to think, feel, or do differently" },
      { title: "Design experiences, activities, or environments that help the team experience that shift" },
      { title: "Facilitate meaningful conversations that help participants reflect and draw insights" },
      { title: "Connect the learning back to everyday behaviours, team dynamics, and expectations" },
      { title: "Build programs that strengthen trust, collaboration, and alignment — with practical takeaways" },
      { title: "Create practical takeaways that participants can carry back into their roles and teams" },
    ],
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
      { title: "Story — real experiences that create emotional connection" },
      { title: "Insight — lessons drawn from the Army, leadership, and corporate life" },
      { title: "Reflection — questions that help the audience connect the message to themselves and their teams" },
      { title: "Action — clear takeaways that participants can apply at work" },
    ],
    ctaTitle: "Ready to bring a keynote that inspires, connects, and drives action?",
    ctaBody: "Let's design a session that energises your audience and leaves them with insights they can act on.",
    ctaButtonLabel: "Invite Us for a Keynote",
  },
] as const;

function SolutionsPage() {
  return (
    <SiteLayout>
      {/* PAGE HERO */}
      <section
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
            Six integrated solutions, designed to be picked individually or stitched together
            into a complete capability journey.
          </p>
        </div>
      </section>

      {/* QUICK-NAV OVERVIEW GRID */}
      <section
        className="section hero-bg relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg2})` }}
      >
        <div className="container-px mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map(({ id, icon: Icon, image, title, short }) => (
            <a key={id} href={`#${id}`} className="card-elegant overflow-hidden group block">
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
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{short}</p>
                <div className="mt-5 inline-flex items-center text-sm font-medium text-primary">
                  Learn more <ArrowRight className="ml-1.5 h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FULL PER-SOLUTION DETAIL SECTIONS */}
      {solutions.map((s, idx) => (
        <section key={s.id} id={s.id} style={{ backgroundImage: `url(${idx % 2 === 0 ? heroBg2 : heroBg3})` }} className="hero-bg relative overflow-hidden bg-cover bg-center bg-no-repeat">
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
                    <a href="#solutions-top">View Learning Solutions</a>
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
                <div className="absolute -bottom-6 -left-6 max-w-[220px] rounded-2xl bg-background p-5 shadow-elegant-lg border border-border/50 hidden sm:block">
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
            <div className="mt-24">
              <h3 className="display-h2 text-center">What We Help You Build</h3>
              <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {s.buildItems.map(({ icon: ItemIcon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="card-elegant p-6"
                  >
                    <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <ItemIcon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 font-semibold">{title}</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Our Approach ── */}
            <div className="mt-24 rounded-3xl bg-primary/5 border border-primary/10 p-8 md:p-12">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="display-h2">Our Approach</h3>
                <p className="mt-3 text-muted-foreground">
                  A structured process that turns business needs into meaningful learning architecture.
                </p>
              </div>

              <div className="relative mt-12 max-w-3xl mx-auto">
                {/* dashed connector spine */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-primary/25 hidden md:block" />

                <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                  {s.approachSteps.map((step, i) => (
                    <div
                      key={step.title}
                      className={`flex items-start gap-4 ${i % 2 === 1 ? "md:mt-16" : ""}`}
                    >
                      <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-semibold shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-sm md:text-base text-foreground/90 leading-relaxed pt-1.5">
                        {step.title}
                      </p>
                    </div>
                  ))}
                </div>

                
              </div>

              {/* value badges */}
              <div className="mt-14 grid sm:grid-cols-3 gap-6 pt-10 border-t border-primary/10">
                {valueBadges.map(({ icon: BadgeIcon, title, body }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                      <BadgeIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{title}</div>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Closing CTA banner ── */}
            <div className="mt-16 relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 shadow-elegant">
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