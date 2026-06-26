import logo from "@/assets/aarambh-logo.png";
import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`} aria-label="Aarambh — Home">
      <img
        src={logo}
        alt="Aarambh Resource Management Solutions"
        className="h-12 w-auto md:h-14 object-contain"
      />
    </Link>
  );
}
