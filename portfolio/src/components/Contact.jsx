import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { personalInfo, socialLinks } from '../data/portfolio';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [ref, revealed] = useReveal();

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-navy-950/80" aria-label="Contact section">
      {/* Background Glow */}
      <div className="absolute right-1/4 top-10 w-96 h-96 bg-aws-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative">
        <div ref={ref} className={`animate-reveal ${revealed ? 'revealed' : ''}`}>
          {/* Section Header */}
          <div className="mb-12">
            <span className="section-tag">// 06. Communication</span>
            <h2 className="section-heading">Let's Connect</h2>
            <div className="section-divider" />
            <p className="section-subheading">
              Interested in discussing cloud architecture, DevOps automation, AWS infrastructure, or engineering opportunities? Feel free to reach out directly.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
            {/* Left 6 cols: Message & Terminal Card */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  I am currently based in <span className="text-white font-semibold">{personalInfo.location}</span> and open to full-time Cloud &amp; DevOps Engineering opportunities, high-scale infrastructure migrations, and site reliability engineering roles.
                </p>
                <p className="text-slate-400 text-sm">
                  Whether you are a recruiter, engineering manager, or fellow cloud engineer looking to connect, I look forward to hearing from you!
                </p>
              </div>

              {/* Terminal Summary Card */}
              <div className="bg-navy-900 border border-slate-800 rounded-2xl p-5 font-mono text-xs shadow-lg">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-500">
                  <span className="text-slate-400">~/contact-info.json</span>
                  <span className="text-emerald-400">● ready</span>
                </div>
                <div className="space-y-1.5 text-slate-300">
                  <p>&#123;</p>
                  <p className="pl-4">
                    <span className="text-cloud-cyan">"name"</span>: <span className="text-amber-300">"{personalInfo.name}"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-cloud-cyan">"role"</span>: <span className="text-amber-300">"{personalInfo.title}"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-cloud-cyan">"experience"</span>: <span className="text-emerald-400">3.5</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-cloud-cyan">"location"</span>: <span className="text-amber-300">"Chennai, India"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-cloud-cyan">"availability"</span>: <span className="text-emerald-400">true</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-cloud-cyan">"preferredStack"</span>: [
                    <span className="text-amber-300">"AWS"</span>, <span className="text-amber-300">"Terraform"</span>, <span className="text-amber-300">"Kubernetes"</span>, <span className="text-amber-300">"Docker"</span>, <span className="text-amber-300">"CI/CD"</span>
                    ]
                  </p>
                  <p>&#125;</p>
                </div>
              </div>
            </div>

            {/* Right 6 cols: Direct Contact Links */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              {/* Email Card */}
              <div className="glass-card p-5 border-slate-800 bg-navy-900/80 hover:border-aws-orange/40 transition-all flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-aws-orange/10 border border-aws-orange/20 text-aws-orange flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${socialLinks.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-aws-orange transition-colors"
                    >
                      {socialLinks.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(socialLinks.email, 'email')}
                    className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors text-xs font-mono"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? '✓ Copied' : 'Copy'}
                  </button>
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="p-2 rounded-lg bg-aws-orange text-navy-950 font-bold hover:bg-aws-orange-light transition-colors text-xs font-mono"
                    aria-label="Send Mail"
                  >
                    Send
                  </a>
                </div>
              </div>

              {/* LinkedIn Card */}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-5 border-slate-800 bg-navy-900/80 hover:border-cloud-cyan/40 hover:bg-navy-850 transition-all flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cloud-cyan/10 border border-cloud-cyan/20 text-cloud-cyan flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                        Professional Network
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-white group-hover:text-cloud-cyan transition-colors">
                        LinkedIn / in/prem-kumar-5abba9321
                      </span>
                    </div>
                  </div>
                  <span className="text-slate-400 group-hover:text-cloud-cyan transition-colors font-mono text-sm">
                    Connect →
                  </span>
                </a>
              )}

              {/* GitHub Card */}
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-5 border-slate-800 bg-navy-900/80 hover:border-purple-400/40 hover:bg-navy-850 transition-all flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                        Source Code Repositories
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-white group-hover:text-purple-400 transition-colors">
                        GitHub / Premkumar-max
                      </span>
                    </div>
                  </div>
                  <span className="text-slate-400 group-hover:text-purple-400 transition-colors font-mono text-sm">
                    View Code →
                  </span>
                </a>
              )}

              {/* Phone / Call Card */}
              {socialLinks.phone && (
                <div className="glass-card p-5 border-slate-800 bg-navy-900/80 hover:border-emerald-500/40 transition-all flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                        Phone / Direct
                      </span>
                      <a
                        href={`tel:${socialLinks.phone}`}
                        className="text-sm sm:text-base font-semibold text-white hover:text-emerald-400 transition-colors"
                      >
                        {socialLinks.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(socialLinks.phone, 'phone')}
                    className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors text-xs font-mono"
                    title="Copy Phone"
                    aria-label="Copy Phone"
                  >
                    {copiedPhone ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
