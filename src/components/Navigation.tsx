import { Link, useLocation } from "react-router-dom";
import { Layout } from "lucide-react";
import { motion } from "motion/react";

const links = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="glass-nav">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-navy flex items-center justify-center rounded-sm group-hover:rotate-45 transition-transform duration-500">
            <Layout className="w-4 h-4 text-white" />
          </div>
          <span className="text-navy font-black tracking-tighter uppercase text-lg">
            Vaibhav Dapkara
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[0.75rem] font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:text-gold ${
                location.pathname === link.path ? "text-gold" : "text-navy/60"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-navy text-white px-6 py-2.5 rounded-sm font-bold uppercase tracking-[0.1em] text-[0.7rem] hover:bg-gold transition-colors duration-300"
          >
            Start a project
          </Link>
        </div>

        <button className="md:hidden text-navy">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
