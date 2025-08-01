import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" }, 
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href.substring(1));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <nav className="glass-card rounded-full px-8 py-4 animate-slide-up hover-lift">
        <div className="flex items-center justify-center space-x-6">
          {navItems.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => scrollToSection(href)}
              className={cn(
                "text-sm font-medium font-title transition-all duration-300 px-4 py-2 rounded-full relative overflow-hidden whitespace-nowrap",
                activeSection === href.substring(1)
                  ? "tech-blue bg-blue-500/20 scale-110 shadow-lg shadow-blue-500/25"
                  : "text-white hover:tech-blue hover:bg-blue-500/10 hover:scale-105"
              )}
            >
              <span className="relative z-10">{label}</span>
              {activeSection === href.substring(1) && (
                <div className="absolute inset-0 tech-gradient opacity-20 animate-pulse-slow rounded-full" />
              )}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
