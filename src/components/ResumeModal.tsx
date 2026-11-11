import React from 'react';
import { X, Printer, Camera } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  linkedinUrl: string;
  userPhoto: string;
  onOpenPhotoModal: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  linkedinUrl,
  userPhoto,
  onOpenPhotoModal
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-10 text-slate-900 dark:text-slate-100">
        {/* Floating Actions */}
        <div className="absolute top-5 right-5 flex items-center gap-2 print:hidden">
          <button
            onClick={onOpenPhotoModal}
            title="Update Profile Photo"
            className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Camera className="w-4 h-4" />
          </button>
          <button
            onClick={handlePrint}
            title="Print or Save as PDF"
            className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Printer className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            title="Close"
            className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resume Header with Photo */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-6 mb-6 flex flex-col-reverse sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Avinash Pasuluru
            </h2>
            <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
              B.Tech 1st Year · Computer Science & Engineering · Aspiring AI Engineer
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mt-3 font-mono">
              <span>India</span>
              <span aria-hidden="true">·</span>
              <a href="mailto:avinashpasuluru9@gmail.com" className="hover:underline">
                avinashpasuluru9@gmail.com
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="https://github.com/avinashpasuluru9-pixel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-600 dark:text-blue-400"
              >
                github.com/avinashpasuluru9-pixel
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={linkedinUrl || "https://www.linkedin.com/in/avinashpasuluru"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-600 dark:text-blue-400"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* User Photo Thumbnail in Resume */}
          <button
            onClick={onOpenPhotoModal}
            className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 bg-slate-900 shrink-0 group print:border-slate-400"
            title="Click to change photo"
          >
            <img
              src={userPhoto}
              alt="Avinash Pasuluru"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/src/assets/images/avatar_student_coder_1793870266549.jpg";
              }}
            />
            <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white print:hidden">
              <Camera className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Education Section */}
        <div className="mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Education
          </h3>
          <div className="flex items-start justify-between text-xs sm:text-sm">
            <div>
              <div className="font-bold text-slate-900 dark:text-white">
                Bachelor of Technology (B.Tech) — Computer Science & Engineering
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                1st Year Undergraduate (Class of 2028)
              </div>
            </div>
            <span className="text-xs text-slate-500 font-mono">2024 – Present</span>
          </div>
          <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
            Coursework: Python Programming, Computational Thinking, Discrete Mathematics, Computer Engineering Basics.
          </p>
        </div>

        {/* Technical Skills Section */}
        <div className="mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Technical Competencies
          </h3>
          <div className="space-y-2 text-xs">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
              <span className="font-bold text-slate-800 dark:text-slate-200 w-36 shrink-0">
                Programming:
              </span>
              <span className="text-slate-600 dark:text-slate-300">
                Python (Basic / OOP, Scripting, Problem Solving), C Foundations
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
              <span className="font-bold text-slate-800 dark:text-slate-200 w-36 shrink-0">
                Web Development:
              </span>
              <span className="text-slate-600 dark:text-slate-300">
                HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), React basics
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
              <span className="font-bold text-slate-800 dark:text-slate-200 w-36 shrink-0">
                Artificial Intelligence:
              </span>
              <span className="text-slate-600 dark:text-slate-300">
                Generative AI, Prompt Engineering, Google AI Studio, Gemini API integration, LLM reasoning
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
              <span className="font-bold text-slate-800 dark:text-slate-200 w-36 shrink-0">
                Tools & Platforms:
              </span>
              <span className="text-slate-600 dark:text-slate-300">
                Git, GitHub, VS Code, Google Cloud / AI Studio, Linux CLI basics
              </span>
            </div>
          </div>
        </div>

        {/* Selected Projects */}
        <div className="mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Key Academic & Independent Projects
          </h3>

          <div className="space-y-4 text-xs">
            <div>
              <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                <span>AI Studio Prompt Architecture & Prototype Workbench</span>
                <span className="font-mono text-slate-500 font-normal">GenAI / React</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                Constructed an interactive framework for designing, tuning, and exporting zero-shot and few-shot system prompts for Gemini models.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                <span>Python Academic GPA & Task Management System</span>
                <span className="font-mono text-slate-500 font-normal">Python 3.x / OOP</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                Built an object-oriented Python application that calculates weighted credit points, projects SGPA, and manages semester study schedules.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                <span>Personal Engineering Hub & Roadmap</span>
                <span className="font-mono text-slate-500 font-normal">React / Tailwind</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                Designed a high-craft portfolio meeting professional design guidelines, detailing a 4-year transition into an AI Engineer.
              </p>
            </div>
          </div>
        </div>

        {/* Career Objective */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
          <span className="font-bold text-slate-900 dark:text-white">Objective: </span>
          Seeking research opportunities, open-source mentorship, and summer internships in machine learning and software engineering to translate university mathematical rigor into autonomous AI agents.
        </div>
      </div>
    </div>
  );
};
