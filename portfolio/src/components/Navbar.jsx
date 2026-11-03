import { useState, useEffect, useCallback } from 'react';
import { personalInfo, socialLinks } from '../data/portfolio';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const handleNavClick = useCallback((href) => {
    setMenuOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      {/* Skip to content for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-aws-orange text-navy-950 font-bold rounded-lg shadow-lg"
      >
        Skip to main content
      </a>

      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav
          className="section-container flex items-center justify-between h-20"
          aria-label="Main navigation"
        >
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label={`${personalInfo.name} – Home`}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-aws-orange to-amber-600 flex items-center justify-center text-navy-950 font-black text-sm shadow-md shadow-aws-orange/20 group-hover:scale-105 transition-transform duration-200">
                PK
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border-2 border-navy-950" />
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-sm sm:text-base tracking-tight leading-none group-hover:text-aws-orange transition-colors">
                Prem Kumar <span className="text-aws-orange">N</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400 leading-tight mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-aws-orange inline-block" />
                AWS & DevOps
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-1 bg-navy-900/60 p-1.5 rounded-xl border border-slate-800/80 backdrop-blur-sm" role="list">
            {navLinks.map(({ label, href }) => {
              const isActive = activeSection === href.slice(1);
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(href);
                    }}
                    className={`relative px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-aws-orange/60 ${
                      isActive
                        ? 'text-white bg-slate-800/90 shadow-sm border border-slate-700/60'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-aws-orange rounded-full" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 border border-transparent hover:border-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-aws-orange/40"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-slate-400 hover:text-cloud-cyan hover:bg-slate-800/60 border border-transparent hover:border-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-aws-orange/40"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}
            {socialLinks.resumeUrl && (
              <a
                href={socialLinks.resumeUrl}
                download="Premkumar_Resume_CloudEngineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs px-4 py-2 rounded-lg"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </a>
            )}
          </div>

          {/* Mobile menu hamburger button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden p-2.5 rounded-xl text-slate-400 hover:text-white bg-navy-900/80 border border-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-aws-orange/40"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-navy-950/95 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6 pb-8 transition-all"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col gap-2 flex-1">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest px-3 mb-1">
              // Navigation
            </p>
            {navLinks.map(({ label, href }) => {
              const isActive = activeSection === href.slice(1);
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(href);
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? 'text-aws-orange bg-aws-orange/10 border border-aws-orange/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <span>{label}</span>
                  {isActive && <span className="text-xs font-mono text-aws-orange">Active</span>}
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col gap-3">
            {socialLinks.resumeUrl && (
              <a
                href={socialLinks.resumeUrl}
                download="Premkumar_Resume_CloudEngineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume (PDF)
              </a>
            )}

            <div className="flex items-center justify-center gap-4 pt-2">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl text-slate-400 hover:text-cloud-cyan bg-slate-900 border border-slate-800"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              )}
              <a
                href={`mailto:${socialLinks.email}`}
                className="p-3 rounded-xl text-slate-400 hover:text-aws-orange bg-slate-900 border border-slate-800"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
