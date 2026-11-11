import React from 'react';
import { ArrowUpRight, Github, Linkedin, Sparkles, ChevronRight, Camera, Upload } from 'lucide-react';

interface HeroSectionProps {
  onOpenPromptHub: () => void;
  linkedinUrl: string;
  onEditLinkedin: () => void;
  userPhoto: string;
  onOpenPhotoModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenPromptHub,
  linkedinUrl,
  onEditLinkedin,
  userPhoto,
  onOpenPhotoModal
}) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
      {/* Background subtle radial gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Quiet kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-4">
              <span>B.Tech 1st Year · Computer Science & Engineering</span>
              <span aria-hidden="true">·</span>
              <span>Aspiring AI Engineer</span>
            </div>

            {/* Headline with text-wrap: balance */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6 [text-wrap:balance]">
              Architecting Intelligence From the First Line of Code.
            </h1>

            {/* Lead copy */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
              Hi, I&apos;m <span className="font-semibold text-slate-900 dark:text-white">Avinash Pasuluru</span>. I began my journey in Computer Science with a sharp trajectory: mastering foundational Python, modern web development, and the principles of Generative AI to engineer reliable machine intelligence.
            </p>

            {/* Stack Metadata (Zero-pill discipline) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-8">
              <span className="font-medium text-slate-700 dark:text-slate-200">Current Focus:</span>
              <span>Python 3.x</span>
              <span aria-hidden="true">/</span>
              <span>Modern Web & React</span>
              <span aria-hidden="true">/</span>
              <span>Generative AI & LLM Prompting</span>
              <span aria-hidden="true">/</span>
              <span>Algorithms in C & Python</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
              >
                <span>Explore Projects</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenPromptHub}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <Sparkles className="w-4 h-4 text-blue-500" />
                <span>Google AI Studio Prompt</span>
              </button>

              <button
                onClick={onOpenPhotoModal}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0 border border-slate-200 dark:border-slate-700"
              >
                <Camera className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Add / Change Photo</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80">
              <a
                href="https://github.com/avinashpasuluru9-pixel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>github.com/avinashpasuluru9-pixel</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>

              <span className="text-slate-300 dark:text-slate-700">|</span>

              <div className="inline-flex items-center gap-1.5">
                <a
                  href={linkedinUrl || "https://www.linkedin.com/in/avinashpasuluru"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <button
                  onClick={onEditLinkedin}
                  className="text-[11px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 ml-1 underline"
                  title="Configure LinkedIn URL"
                >
                  (edit)
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Container */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-xl group">
              <img
                src={userPhoto}
                alt="Avinash Pasuluru · B.Tech 1st Year Computer Science Student"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 lg:h-[460px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  // Fallback to default studio photo if custom URL fails
                  (e.target as HTMLImageElement).src = "/src/assets/images/avatar_student_coder_1793870266549.jpg";
                }}
              />

              {/* Floating "Change Photo" action overlay on top right */}
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={onOpenPhotoModal}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-slate-950/80 hover:bg-slate-900 backdrop-blur-md rounded-lg border border-slate-700 shadow-lg transition-all hover:scale-105"
                  title="Click to upload or change your photo"
                >
                  <Camera className="w-3.5 h-3.5 text-blue-400" />
                  <span>Change Photo</span>
                </button>
              </div>

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

              {/* Quiet overlay caption */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white z-10 flex items-end justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-1">
                    Department of Computer Science
                  </div>
                  <div className="text-lg sm:text-xl font-bold tracking-tight">
                    Avinash Pasuluru
                  </div>
                  <div className="text-xs text-slate-300 mt-1 flex items-center gap-2">
                    <span>Year 1 Foundation</span>
                    <span aria-hidden="true">·</span>
                    <span>Future AI Engineer</span>
                    <span aria-hidden="true">·</span>
                    <span>Student Developer</span>
                  </div>
                </div>

                <button
                  onClick={onOpenPhotoModal}
                  className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900/60 hover:bg-slate-800 transition-colors"
                  title="Upload / Change Photo"
                >
                  <Upload className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI / Academic Strip in a full-width row below the hero split */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Academic Standing</div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1 tabular-nums">B.Tech 1st Year</div>
            <div className="text-xs text-slate-500 mt-1">Computer Science Dept.</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Target Specialization</div>
            <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">AI Engineer</div>
            <div className="text-xs text-slate-500 mt-1">LLMs, Systems & Agents</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Core Active Stack</div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">Python & GenAI</div>
            <div className="text-xs text-slate-500 mt-1">+ Modern Web Dev</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Code Repositories</div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">Open Source</div>
            <div className="text-xs text-slate-500 mt-1">Daily GitHub Commits</div>
          </div>
        </div>
      </div>
    </section>
  );
};
