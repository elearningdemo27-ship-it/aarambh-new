import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[color-mix(in_oklab,var(--primary)_4%,var(--background))]">
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 max-w-md text-sm text-muted-foreground leading-relaxed">
            Aarambh Resource Management Solutions — a Learning &amp; Development
            consulting practice helping organisations build capability through
            purposeful learning design, digital learning, facilitation and AI-enabled workflows.
          </p>
          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <a href="mailto:hello@aarambh.in" className="flex items-center gap-2 hover:text-primary">
              <Mail className="h-4 w-4" /> hello@aarambh.in
            </a>
            <a href="tel:+910000000000" className="flex items-center gap-2 hover:text-primary">
              <Phone className="h-4 w-4" /> +91 00000 00000
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> India
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/about", "About"],
              ["/solutions", "Solutions"],
              ["/success-stories", "Success Stories"],
              ["/blog", "Blog"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-muted-foreground hover:text-primary">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-foreground">Solutions</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Learning Strategy &amp; Consulting</li>
            <li>Instructional Design</li>
            <li>AI-Enabled Learning</li>
            <li>Training &amp; Facilitation</li>
            <li>Offsites &amp; Experiential</li>
            <li>Keynotes</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Aarambh Resource Management Solutions. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary inline-flex items-center gap-1.5">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <Link to="/auth" className="hover:text-primary">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
