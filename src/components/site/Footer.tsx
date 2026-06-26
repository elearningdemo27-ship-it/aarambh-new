import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import heroBg from "@/assets/bg-dark.png";

export function Footer() {
  return (
    <footer className="mt-2 border-t border-border bg-[oklch(0.16_0.02_270)]">

    <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat bg-[oklch(0.16_0.02_270)]"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo variant="footer" />
          <p className="mt-5 max-w-md text-sm  text-white/75 leading-relaxed">
            Aarambh Resource Management Solutions — a Learning &amp; Development
            consulting practice helping organisations build capability through
            purposeful learning design, digital learning, facilitation and AI-enabled workflows.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/75">
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
          <h4 className="text-sm font-semibold tracking-wide uppercase text-white">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/about", "About"],
              ["/solutions", "Solutions"],
              ["/success-stories", "Success Stories"],
              ["/blog", "Blog"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-white/75 hover:text-primary">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-white">Solutions</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>Learning Strategy &amp; Consulting</li>
            <li>Instructional Design</li>
            <li>AI-Enabled Learning</li>
            <li>Training &amp; Facilitation</li>
            <li>Offsites &amp; Experiential</li>
            <li>Keynotes</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/75">
          <p>© {new Date().getFullYear()} Aarambh Resource Management Solutions. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary inline-flex items-center gap-1.5">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <Link to="/auth" className="hover:text-primary">Admin</Link>
          </div>
        </div>
      </div>
    </section>

    </footer>
  );
}