/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsRoadmapSection } from './components/SkillsRoadmapSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PromptHubSection } from './components/PromptHubSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PhotoModal } from './components/PhotoModal';
import { Linkedin, X, Check } from 'lucide-react';

const DEFAULT_PHOTO = '/src/assets/images/avatar_student_coder_1793870266549.jpg';
const GITHUB_AVATAR = 'https://github.com/avinashpasuluru9-pixel.png';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('avinash_dark_mode');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const [linkedinUrl, setLinkedinUrl] = useState<string>(() => {
    return localStorage.getItem('avinash_linkedin_url') || 'https://www.linkedin.com/in/avinashpasuluru';
  });

  // User Profile Photo with persistent storage & GitHub avatar auto-sync
  const [userPhoto, setUserPhoto] = useState<string>(() => {
    return localStorage.getItem('avinash_user_photo') || GITHUB_AVATAR;
  });

  const [resumeOpen, setResumeOpen] = useState(false);
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [editLinkedinOpen, setEditLinkedinOpen] = useState(false);
  const [tempLinkedin, setTempLinkedin] = useState(linkedinUrl);

  // Sync dark class on document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('avinash_dark_mode', JSON.stringify(darkMode));
  }, [darkMode]);

  const handleUpdateLinkedin = (url: string) => {
    setLinkedinUrl(url);
    localStorage.setItem('avinash_linkedin_url', url);
  };

  const handleSavePhoto = (newPhoto: string) => {
    setUserPhoto(newPhoto);
    localStorage.setItem('avinash_user_photo', newPhoto);
  };

  const handleSaveLinkedinModal = (e: React.FormEvent) => {
    e.preventDefault();
    handleUpdateLinkedin(tempLinkedin);
    setEditLinkedinOpen(false);
  };

  const scrollToPromptHub = () => {
    const el = document.getElementById('prompt-hub');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        onOpenResume={() => setResumeOpen(true)}
        onJumpToPrompt={scrollToPromptHub}
        linkedinUrl={linkedinUrl}
        userPhoto={userPhoto}
        onOpenPhotoModal={() => setPhotoModalOpen(true)}
      />

      {/* Main Content Layout */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onOpenPromptHub={scrollToPromptHub}
          linkedinUrl={linkedinUrl}
          onEditLinkedin={() => {
            setTempLinkedin(linkedinUrl);
            setEditLinkedinOpen(true);
          }}
          userPhoto={userPhoto}
          onOpenPhotoModal={() => setPhotoModalOpen(true)}
        />

        {/* 2. About & Academic Journey */}
        <AboutSection />

        {/* 3. Skills Matrix & 4-Year AI Roadmap */}
        <SkillsRoadmapSection />

        {/* 4. Practical Projects & Labs */}
        <ProjectsSection />

        {/* 5. Google AI Studio Prompt Hub & Customizer */}
        <PromptHubSection
          linkedinUrl={linkedinUrl}
          onUpdateLinkedin={handleUpdateLinkedin}
        />

        {/* 6. Contact & Mentorship Connect */}
        <ContactSection linkedinUrl={linkedinUrl} />
      </main>

      {/* Footer */}
      <Footer linkedinUrl={linkedinUrl} />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        linkedinUrl={linkedinUrl}
        userPhoto={userPhoto}
        onOpenPhotoModal={() => {
          setResumeOpen(false);
          setPhotoModalOpen(true);
        }}
      />

      {/* Photo Manager & Upload Modal */}
      <PhotoModal
        isOpen={photoModalOpen}
        onClose={() => setPhotoModalOpen(false)}
        currentPhoto={userPhoto}
        onSavePhoto={handleSavePhoto}
      />

      {/* Quick Edit LinkedIn Modal */}
      {editLinkedinOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6">
            <button
              onClick={() => setEditLinkedinOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-3 text-blue-600 dark:text-blue-400">
              <Linkedin className="w-5 h-5" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Set Your LinkedIn Profile
              </h3>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              Paste your personal or student LinkedIn profile URL here. It will immediately update all links on this page and in the generated AI Studio prompt.
            </p>

            <form onSubmit={handleSaveLinkedinModal} className="space-y-3">
              <input
                type="url"
                required
                value={tempLinkedin}
                onChange={(e) => setTempLinkedin(e.target.value)}
                placeholder="https://www.linkedin.com/in/username"
                className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setEditLinkedinOpen(false)}
                  className="px-3 py-1.5 text-xs text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center gap-1.5 shadow-sm"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Save URL</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
