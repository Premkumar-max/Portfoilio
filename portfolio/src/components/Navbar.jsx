import { useState, useEffect, useCallback } from 'react';
import { personalInfo, socialLinks } from '../data/portfolio';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
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
            ? 'bg-navy-950/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40'
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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-aws-orange to-amber-600 flex items-center justify-center text-navy-950 font-heading font-black text-sm shadow-md shadow-aws-orange/20 group-hover:scale-105 transition-transform duration-200">
              PK
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-white text-base tracking-tight leading-tight group-hover:text-aws-orange transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                AWS &amp; DevOps Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-aws-orange font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-aws-orange rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Resume CTA & Social icons */}
          <div className="hidden md:flex items-center gap-3">
            {socialLinks.resumeUrl && (
              <a
                href={socialLinks.resumeUrl}
                download="Premkumar_Resume_CloudEngineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs !py-2 !px-4"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-aws-orange"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-navy-950/95 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6 pb-8"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col gap-2 flex-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-3 rounded-xl text-base font-heading font-medium transition-colors ${
                    isActive
                      ? 'bg-aws-orange/15 text-aws-orange font-bold border border-aws-orange/30'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Mobile Bottom Links */}
          <div className="pt-6 border-t border-slate-800 flex flex-col gap-3">
            {socialLinks.resumeUrl && (
              <a
                href={socialLinks.resumeUrl}
                download="Premkumar_Resume_CloudEngineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                Download Resume PDF
              </a>
            )}
            <div className="flex items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-aws-orange transition-colors"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-aws-orange transition-colors"
              >
                GitHub
              </a>
              <span>•</span>
              <a
                href={`mailto:${socialLinks.email}`}
                className="hover:text-aws-orange transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
