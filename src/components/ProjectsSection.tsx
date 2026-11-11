import React, { useState } from 'react';
import { PROJECTS_DATA, Project } from '../data/portfolioData';
import { ArrowUpRight, Github, Code2, Eye, X, Copy, Check } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = (snippet: string) => {
    navigator.clipboard.writeText(snippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            03. Exploratory Works & Code
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white [text-wrap:balance]">
            Student Projects & Practical Implementations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Practical proofs of concept built while mastering Python, web architecture, and prompt engineering in my first year of computer science.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS_DATA.map((project, idx) => {
            const isFeatured = idx === 0;
            return (
              <div
                key={project.id}
                className={`rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between overflow-hidden transition-all hover:border-slate-300 dark:hover:border-slate-700 ${
                  isFeatured ? 'md:col-span-2' : ''
                }`}
              >
                {/* Optional visual banner for featured card */}
                {isFeatured && (
                  <div className="relative h-48 sm:h-64 overflow-hidden bg-slate-950">
                    <img
                      src="/src/assets/images/project_genai_visual_1793870266427.jpg"
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center opacity-85 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="absolute top-4 left-4 text-xs font-mono text-blue-400 bg-slate-950/80 px-2.5 py-1 rounded border border-slate-800">
                      Featured Milestone
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {/* Category & Tag */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2 font-mono">
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>1st Year CSE</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech stack (Zero-pill discipline: unboxed text with separators) */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mb-4">
                    {project.technologies.map((tech, i) => (
                      <React.Fragment key={tech}>
                        <span className="font-medium text-slate-700 dark:text-slate-300">{tech}</span>
                        {i < project.technologies.length - 1 && <span aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 py-4 bg-slate-50/60 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Code & Details</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Lightbox / Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
              {selectedProject.category}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              {selectedProject.title}
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {selectedProject.longDescription}
            </p>

            {/* Key highlights */}
            <div className="mb-6">
              <div className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                Engineering Highlights:
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {selectedProject.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Code Snippet if present */}
            {selectedProject.codeSnippet && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-500">Implementation Snapshot</span>
                  <button
                    onClick={() => handleCopyCode(selectedProject.codeSnippet!)}
                    className="inline-flex items-center gap-1 text-[11px] text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {copiedCode ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                </div>
                <pre className="p-4 rounded-xl bg-slate-950 text-slate-200 text-xs font-mono overflow-x-auto border border-slate-800 leading-relaxed">
                  <code>{selectedProject.codeSnippet}</code>
                </pre>
              </div>
            )}

            {/* Modal Bottom Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>By Avinash Pasuluru</span>
                <span aria-hidden="true">·</span>
                <span>B.Tech 1st Year CSE</span>
              </div>

              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Open Repository</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
