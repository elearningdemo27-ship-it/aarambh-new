import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import heroBg from "@/assets/bg-img1.png";
import heroBg2 from "@/assets/minimal-bg.png";
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aarambh Resource Management Solutions" },
      {
        name: "description",
        content:
          "Discuss your learning need with Aarambh. Get in touch to scope a capability journey, workshop or AI-enabled program.",
      },
      { property: "og:title", content: "Contact Aarambh" },
      { property: "og:description", content: "Discuss your learning need with our team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const SERVICES = [
  "Learning Strategy & Consulting",
  "Instructional Design & Content Development",
  "AI-Enabled Learning Solutions",
  "Training Delivery & Facilitation",
  "Offsites & Experiential Learning",
  "Keynotes & Motivational Sessions",
];

const Schema = z.object({
  name: z.string().trim().min(2, "Please share your name").max(200),
  email: z.string().trim().email("Please share a valid email").max(255),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  organisation: z.string().trim().max(200).optional().or(z.literal("")),
  service_interest: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a bit more about your need").max(5000),
});

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    service_interest: "",
    message: "",
  });
  const [done, setDone] = useState(false);

  const mut = useMutation({
    mutationFn: async (values: typeof form) => {
      const parsed = Schema.parse(values);
      const payload = {
        name: parsed.name,
        email: parsed.email,
        phone: parsed.phone || null,
        organisation: parsed.organisation || null,
        service_interest: parsed.service_interest || null,
        message: parsed.message,
      };
      const { error } = await supabase.from("contact_submissions").insert(payload);
      if (error) throw error;
    },
    onSuccess: () => {
      setDone(true);
      toast.success("Thanks — we'll be in touch within 1 business day.");
    },
    onError: (err) => {
      const msg = err instanceof z.ZodError ? err.issues[0].message : (err as Error).message;
      toast.error(msg || "Could not send your message. Please try again.");
    },
  });

  return (
    <SiteLayout>
      <section
        className="hero-bg relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container-px mx-auto max-w-7xl py-20 md:py-24">
          <span className="eyebrow">Contact</span>
          <h1 className="display-h1 mt-5 max-w-3xl">
            Discuss your <em className="text-primary not-italic">learning need</em>.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            Share a few details about what you're working on, and we'll come back with thoughts,
            references and a suggested starting point.
          </p>
        </div>
      </section>

     <section 
        className="section hero-bg relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg2})` }}
      >
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="card-elegant p-8 md:p-10">
              {done ? (
                <div className="py-12 text-center">
                  <CheckCircle2 className="h-12 w-12 text-primary mx-auto" />
                  <h2 className="display-h2 mt-5">Message received</h2>
                  <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                    Thanks for reaching out, {form.name.split(" ")[0]}. Our team will respond
                    within one business day.
                  </p>
                  <Button
                    className="mt-6"
                    variant="outline"
                    onClick={() => {
                      setDone(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        organisation: "",
                        service_interest: "",
                        message: "",
                      });
                    }}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    mut.mutate(form);
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                  <div className="md:col-span-1">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div className="md:col-span-1">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div className="md:col-span-1">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div className="md:col-span-1">
                    <Label htmlFor="org">Organisation</Label>
                    <Input
                      id="org"
                      value={form.organisation}
                      onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="service">Service interest</Label>
                    <Select
                      value={form.service_interest}
                      onValueChange={(v) => setForm({ ...form, service_interest: v })}
                    >
                      <SelectTrigger id="service" className="mt-2">
                        <SelectValue placeholder="Select a solution" />
                      </SelectTrigger>
                      <SelectContent>
                        {SERVICES.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="message">Tell us about your learning need *</Label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={6}
                      className="mt-2"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Button type="submit" size="lg" disabled={mut.isPending}>
                      {mut.isPending ? "Sending..." : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <div className="card-elegant p-7">
              <h3 className="font-display text-xl">Reach us directly</h3>
              <div className="mt-5 space-y-4 text-sm">
                <a href="mailto:hello@aarambh.in" className="flex items-start gap-3 hover:text-primary">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <span>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground">hello@aarambh.in</div>
                  </span>
                </a>
                <a href="tel:+910000000000" className="flex items-start gap-3 hover:text-primary">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <span>
                    <div className="font-semibold text-foreground">Phone</div>
                    <div className="text-muted-foreground">+91 00000 00000</div>
                  </span>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <span>
                    <div className="font-semibold text-foreground">Address</div>
                    <div className="text-muted-foreground">India</div>
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border bg-card aspect-[4/3] grid place-items-center text-muted-foreground text-sm">
              <div className="text-center">
                <MapPin className="h-8 w-8 mx-auto text-primary/40" />
                <p className="mt-2">Map placeholder</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
