import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

interface FooterProps {
  linkedinUrl: string;
}

export const Footer: React.FC<FooterProps> = ({ linkedinUrl }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-slate-950 text-slate-400 border-t border-slate-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Copyright */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-200">Avinash Pasuluru</span>
          <span>© 2026</span>
          <span aria-hidden="true">·</span>
          <span>B.Tech 1st Year CSE · Future AI Engineer</span>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/avinashpasuluru9-pixel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={linkedinUrl || "https://www.linkedin.com/in/avinashpasuluru"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="hover:text-white transition-colors flex items-center gap-1"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
