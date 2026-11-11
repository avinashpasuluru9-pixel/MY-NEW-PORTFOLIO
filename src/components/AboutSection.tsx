import React from 'react';
import { BookOpen, Terminal, Cpu, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            01. Background & Academic Inception
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white [text-wrap:balance]">
            Starting the Journey in Computer Science with a Clear Vision.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Every software career starts with the fundamental syntax of loops and variables. As a first-year B.Tech Computer Science student, I chose to orient my learning directly toward Artificial Intelligence from day one.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: The Inception */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                B.Tech CSE Groundwork
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Starting in the Computer Science Department, I am immersing myself in computer organization, discrete mathematics, and computational logic. I view academic theory as the bedrock that makes advanced deep learning intuitive later.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
              Semester 1 & 2 Core Studies
            </div>
          </div>

          {/* Card 2: Code & Technologies */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-5">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Hands-On Code Fluency
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Rather than remaining strictly theoretical, I write code daily. I explore Python for algorithmic problem solving and data handling, while learning modern web development (HTML, CSS, JavaScript, React) to build functional interfaces.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
              Active Github Commits · Open Source
            </div>
          </div>

          {/* Card 3: The AI Engineering Objective */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-5">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Aiming for AI Engineer
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Generative AI is redefining software. I experiment with Google AI Studio, prompt engineering frameworks, and LLM reasoning. My goal is to build intelligent agentic systems and production-grade machine learning pipelines.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
              4-Year Trajectory to Industry
            </div>
          </div>
        </div>

        {/* Highlight Banner / Image rest */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
              Guiding Principle
            </div>
            <blockquote className="text-lg sm:text-xl font-medium text-slate-100 leading-snug">
              &ldquo;Great AI engineers don&apos;t just call APIs—they understand data flow, mathematical gradients, and user experiences from the ground up.&rdquo;
            </blockquote>
            <div className="text-xs text-slate-400 mt-2">
              — Avinash Pasuluru, B.Tech CSE Class of 2028
            </div>
          </div>

          <a
            href="https://github.com/avinashpasuluru9-pixel"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg whitespace-nowrap shrink-0 transition-colors"
          >
            Check Out My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
