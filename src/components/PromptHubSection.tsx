import React, { useState } from 'react';
import { generateStudioPrompt } from '../data/portfolioData';
import { Sparkles, Copy, Check, Download, Sliders, ExternalLink, RefreshCw } from 'lucide-react';

interface PromptHubSectionProps {
  linkedinUrl: string;
  onUpdateLinkedin: (url: string) => void;
}

export const PromptHubSection: React.FC<PromptHubSectionProps> = ({
  linkedinUrl,
  onUpdateLinkedin
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'prompt' | 'settings' | 'guide'>('prompt');

  // Interactive Prompt Customizer State
  const [studentName, setStudentName] = useState("Avinash Pasuluru");
  const [academicYear, setAcademicYear] = useState("B.Tech 1st Year (Semester 1 & 2)");
  const [department, setDepartment] = useState("Computer Science & Engineering");
  const [targetRole, setTargetRole] = useState("AI Engineer (Large Language Models & Agentic Systems)");
  const [skills, setSkills] = useState("Basic Python (OOP, scripting, logic), Basic Web Development (HTML, CSS/Tailwind, React), Basic Generative AI (Prompting, Google AI Studio, Gemini API)");
  const [githubUrl, setGithubUrl] = useState("https://github.com/avinashpasuluru9-pixel");
  const [extraDetails, setExtraDetails] = useState("Emphasize strong passion for transition from university mathematics to modern generative AI engineering, clean code discipline, and active open-source GitHub commits.");

  const currentPrompt = generateStudioPrompt({
    name: studentName,
    academicYear,
    department,
    targetRole,
    skills,
    githubUrl,
    linkedinUrl: linkedinUrl || "https://www.linkedin.com/in/avinashpasuluru",
    extraDetails
  });

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(currentPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([currentPrompt], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Avinash_AI_Studio_Prompt_${Date.now()}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="prompt-hub" className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800 bg-slate-900/5 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04. Google AI Studio Prompt Generator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white [text-wrap:balance]">
            Engineered Prompt for Google AI Studio
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Here is the clean, structured prompt precisely formatted for pasting into Google AI Studio. You can customize your details below, preview the live output, and copy or download with one click.
          </p>
        </div>

        {/* Studio Workspace Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Live Customizer Controls */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                <Sliders className="w-4 h-4 text-blue-500" />
                <span>Prompt Parameters</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">Live Updating</span>
            </div>

            {/* Field: Full Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Field: Academic Level & Dept */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Academic Level
                </label>
                <input
                  type="text"
                  value={academicYear}
                  onChange={(e) => setAcademicYear(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Department
                </label>
                <input
                  type="text"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Field: Target Career Role */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Target Role
              </label>
              <input
                type="text"
                value={targetRole}
                onChange={(e) => setTargetRole(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Field: GitHub Link */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                GitHub Profile URL
              </label>
              <input
                type="url"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Field: LinkedIn Link */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                LinkedIn Profile URL
              </label>
              <input
                type="url"
                value={linkedinUrl}
                placeholder="https://www.linkedin.com/in/your-profile"
                onChange={(e) => onUpdateLinkedin(e.target.value)}
                className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-[11px] text-slate-400 mt-1 block">
                Enter your LinkedIn handle; changes sync immediately across the portfolio.
              </span>
            </div>

            {/* Field: Technologies Known */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Technologies Known
              </label>
              <textarea
                rows={3}
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 leading-relaxed"
              />
            </div>

            {/* Reset / Preset Button */}
            <button
              onClick={() => {
                setStudentName("Avinash Pasuluru");
                setAcademicYear("B.Tech 1st Year CSE");
                setDepartment("Computer Science & Engineering");
                setTargetRole("AI Engineer");
                setSkills("Basic Python, Basic Web Development, Basic Generative AI");
                setGithubUrl("https://github.com/avinashpasuluru9-pixel");
              }}
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset to Original Prompt Inputs</span>
            </button>
          </div>

          {/* Right Column: Prompt Output Box with Tab Bar */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl bg-slate-950 border border-slate-800 shadow-xl overflow-hidden">
            {/* Box Header Toolbar */}
            <div className="px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 p-1 bg-slate-800 rounded-lg">
                  <button
                    onClick={() => setActiveTab('prompt')}
                    className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                      activeTab === 'prompt' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Structured Prompt
                  </button>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                      activeTab === 'settings' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Studio Settings
                  </button>
                  <button
                    onClick={() => setActiveTab('guide')}
                    className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                      activeTab === 'guide' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    How To Paste
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownload}
                  title="Download prompt as markdown"
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                </button>
                <button
                  onClick={handleCopyPrompt}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    copied
                      ? 'bg-emerald-600 text-white'
                      : 'bg-blue-600 hover:bg-blue-500 text-white shadow-sm'
                  }`}
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied Prompt!' : 'Copy Prompt'}</span>
                </button>
              </div>
            </div>

            {/* Tab 1: Prompt View */}
            {activeTab === 'prompt' && (
              <div className="p-5 font-mono text-xs leading-relaxed text-slate-300 max-h-[500px] overflow-y-auto selection:bg-blue-600 selection:text-white">
                <pre className="whitespace-pre-wrap">{currentPrompt}</pre>
              </div>
            )}

            {/* Tab 2: Studio Recommended Settings */}
            {activeTab === 'settings' && (
              <div className="p-6 text-xs text-slate-300 space-y-4 max-h-[500px] overflow-y-auto">
                <div className="text-sm font-bold text-white mb-2">
                  Recommended Model Configuration in Google AI Studio
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                    <span className="font-semibold text-white">Target Model</span>
                    <span className="text-blue-400 font-mono">Gemini 2.5 Flash / Gemini 2.0 Pro</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                    <span className="font-semibold text-white">Temperature</span>
                    <span className="text-emerald-400 font-mono">0.3 - 0.5 (Predictable, clean code)</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                    <span className="font-semibold text-white">System Instructions</span>
                    <span className="text-slate-400 font-mono">Paste prompt into System field</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white">Top-P & Top-K</span>
                    <span className="text-slate-400 font-mono">0.95 / 40 (Defaults)</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-900/60 text-slate-300 leading-relaxed">
                  <span className="font-semibold text-blue-300">Why this structure works in AI Studio:</span> Gemini models excel when provided clear role demarcation, negative constraints (e.g. anti-slop rules), and exact links up front. This prevents hallucinated URLs or generic boilerplate.
                </div>
              </div>
            )}

            {/* Tab 3: Quick Guide */}
            {activeTab === 'guide' && (
              <div className="p-6 text-xs text-slate-300 space-y-4 max-h-[500px] overflow-y-auto">
                <div className="text-sm font-bold text-white mb-2">
                  3 Simple Steps to Use in Google AI Studio
                </div>

                <ol className="space-y-3.5 list-decimal list-inside text-slate-300">
                  <li className="leading-relaxed">
                    <strong className="text-white">Copy the prompt:</strong> Click the &ldquo;Copy Prompt&rdquo; button above.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-white">Open Google AI Studio:</strong> Navigate to <span className="text-blue-400">aistudio.google.com</span> and create a new Chat or Freeform prompt with Gemini 2.5 Flash or Gemini 2.0 Pro.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-white">Paste & Run:</strong> Paste into the prompt field or System Instructions box, set temperature to 0.4, and submit. The model will produce modular, pristine code with your exact links!
                  </li>
                </ol>
              </div>
            )}

            {/* Prompt Footer status */}
            <div className="px-5 py-3 bg-slate-900/50 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
              <span className="font-mono">Characters: {currentPrompt.length}</span>
              <span>Ready for Google AI Studio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
