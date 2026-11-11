import React, { useState } from 'react';
import { ROADMAP_DATA, RoadmapStep } from '../data/portfolioData';
import { Terminal, Code, Sparkles, CheckCircle2, Circle, ArrowRight } from 'lucide-react';

export const SkillsRoadmapSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'roadmap'>('skills');
  const [selectedYear, setSelectedYear] = useState<string>("Year 1 (Current)");

  const currentStep = ROADMAP_DATA.find(s => s.year === selectedYear) || ROADMAP_DATA[0];

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Segmented View Control */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              02. Technical Arsenal & Trajectory
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white [text-wrap:balance]">
              Core Competencies & 4-Year AI Engineering Roadmap
            </h2>
          </div>

          {/* Functional segmented control */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/80 dark:bg-slate-800 rounded-lg shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'skills'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Current Skills
            </button>
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'roadmap'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              AI Career Roadmap
            </button>
          </div>
        </div>

        {activeTab === 'skills' ? (
          /* Current Skills Grid */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Python Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-slate-500 font-mono">Foundations</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Python Programming
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  The primary language for modern artificial intelligence. Mastering syntax, object-oriented concepts, algorithmic logic, file I/O, and data structures.
                </p>

                <div className="space-y-2.5">
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Topics Mastered & Exploring:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500 font-bold">›</span>
                      <span>Variables, Loops, Functions & Recursion</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500 font-bold">›</span>
                      <span>Lists, Tuples, Dictionaries & Sets</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500 font-bold">›</span>
                      <span>Object-Oriented Programming (Classes & Inheritance)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500 font-bold">›</span>
                      <span>Intro to NumPy arrays and data manipulation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span>Code on GitHub</span>
                <span className="font-mono text-blue-600 dark:text-blue-400">Daily Practice</span>
              </div>
            </div>

            {/* Web Dev Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Code className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-slate-500 font-mono">Interfaces</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Web Development
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Building frontends to make software usable. Learning HTML5, modern utility-first styling with Tailwind CSS, JavaScript fundamentals, and React components.
                </p>

                <div className="space-y-2.5">
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Topics Mastered & Exploring:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">›</span>
                      <span>Semantic HTML5 & Accessibility guidelines</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">›</span>
                      <span>Responsive Tailwind CSS layouts (Mobile + Desktop)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">›</span>
                      <span>JavaScript ES6+ (Promises, Fetch API, DOM manipulation)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">›</span>
                      <span>React UI composition and state management hooks</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span>UI Engineering</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400">Responsive UI</span>
              </div>
            </div>

            {/* Generative AI Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-slate-500 font-mono">Specialization</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Generative AI & LLMs
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Direct hands-on experimentation with Foundation Models. Mastering prompt structures in Google AI Studio, Gemini API integration, and agentic workflows.
                </p>

                <div className="space-y-2.5">
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Topics Mastered & Exploring:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="text-indigo-500 font-bold">›</span>
                      <span>System Prompts, Few-Shot In-Context Learning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-indigo-500 font-bold">›</span>
                      <span>Google AI Studio parameter tuning & testing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-indigo-500 font-bold">›</span>
                      <span>Gemini API integration in Python & Web apps</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-indigo-500 font-bold">›</span>
                      <span>Fundamentals of Vector Embeddings and RAG</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span>Google AI Studio</span>
                <span className="font-mono text-indigo-600 dark:text-indigo-400">Future AI Eng</span>
              </div>
            </div>
          </div>
        ) : (
          /* Roadmap View */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Year Selector Tabs */}
            <div className="lg:col-span-4 space-y-3">
              {ROADMAP_DATA.map((step) => {
                const isSelected = selectedYear === step.year;
                return (
                  <button
                    key={step.year}
                    onClick={() => setSelectedYear(step.year)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-white dark:bg-slate-900 border-blue-500 dark:border-blue-500 shadow-md ring-1 ring-blue-500/30'
                        : 'bg-white/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                        {step.year}
                      </span>
                      {step.status === 'current' ? (
                        <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Active Phase</span>
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-400">Scheduled</span>
                      )}
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {step.phase}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Year Details Panel */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                <span>{currentStep.year}</span>
                <span aria-hidden="true">·</span>
                <span>{currentStep.phase}</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Strategic Focus & Objectives
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {currentStep.focus}
              </p>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-4">
                  Target Milestones & Deliverables
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentStep.milestones.map((milestone, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5"
                    >
                      <span className="text-blue-500 font-bold shrink-0 mt-0.5">0{idx + 1}.</span>
                      <span>{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
