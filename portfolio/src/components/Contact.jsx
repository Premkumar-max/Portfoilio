import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { personalInfo, socialLinks } from '../data/portfolio';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [ref, revealed] = useReveal();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative" aria-label="Contact section">
      <div className="section-container relative">
        <div ref={ref} className={`animate-reveal ${revealed ? 'revealed' : ''}`}>
          {/* Header */}
          <div className="mb-10 text-center max-w-xl mx-auto">
            <span className="section-tag">// Get In Touch</span>
            <h2 className="section-heading">Let's Connect</h2>
            <div className="section-divider mx-auto" />
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Available for full-time AWS &amp; DevOps Engineering roles, cloud infrastructure automation, and Kubernetes platform engineering.
            </p>
          </div>

          {/* Contact Channels Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-navy-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-aws-orange/10 border border-aws-orange/20 text-aws-orange flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xs font-mono uppercase text-slate-400 mb-1">Email</span>
              <a
                href={`mailto:${socialLinks.email}`}
                className="text-sm font-semibold text-white hover:text-aws-orange transition-colors break-all mb-4"
              >
                {socialLinks.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="btn-secondary !text-xs !py-1.5 !px-3 w-full"
              >
                {copiedEmail ? 'Copied to Clipboard!' : 'Copy Email Address'}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="p-6 rounded-2xl bg-navy-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-cloud-cyan/10 border border-cloud-cyan/20 text-cloud-cyan flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <span className="text-xs font-mono uppercase text-slate-400 mb-1">LinkedIn</span>
              <span className="text-sm font-semibold text-white mb-4">
                Prem Kumar N
              </span>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !text-xs !py-1.5 !px-3 w-full"
              >
                View LinkedIn Profile
              </a>
            </div>

            {/* GitHub Card */}
            <div className="p-6 rounded-2xl bg-navy-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </div>
              <span className="text-xs font-mono uppercase text-slate-400 mb-1">GitHub</span>
              <span className="text-sm font-semibold text-white mb-4">
                @Premkumar-max
              </span>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !text-xs !py-1.5 !px-3 w-full"
              >
                Visit GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
