import logo from "@/assets/aarambh-logo.png";
import footerLogo from "@/assets/aarambh-logo-white.png";
import { Link } from "@tanstack/react-router";

export function Logo({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "footer";
}) {
  const logoSrc = variant === "footer" ? footerLogo : logo;

  return (
    <Link to="/" className={`inline-flex items-center ${className}`}>
      <img
        src={logoSrc}
        alt="Aarambh Resource Management Solutions"
        className="h-12 w-auto md:h-16 object-contain"
      />
    </Link>
  );
}