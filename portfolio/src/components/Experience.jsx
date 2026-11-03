import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { experience } from '../data/portfolio';

function ExperienceItem({ exp, index }) {
  const [expanded, setExpanded] = useState(false);
  const [ref, revealed] = useReveal();

  const previewCount = 5;
  const displayedItems = expanded
    ? exp.contributions
    : exp.contributions.slice(0, previewCount);

  return (
    <div
      ref={ref}
      className={`relative flex gap-6 lg:gap-8 animate-reveal ${revealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Left Timeline Spine & Node */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Node Circle */}
        <div className="w-12 h-12 rounded-2xl bg-navy-900 border-2 border-aws-orange flex items-center justify-center text-aws-orange font-mono font-bold text-sm shadow-lg shadow-aws-orange/15 z-10 flex-shrink-0">
          {String(index + 1).padStart(2, '0')}
        </div>
        {/* Vertical line connector */}
        {index < experience.length - 1 && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-aws-orange via-slate-700 to-slate-800 my-2 min-h-[60px]" />
        )}
      </div>

      {/* Experience Details Card */}
      <div className="flex-1 pb-12">
        <div className="glass-card p-6 sm:p-7 border-slate-800 bg-navy-900/80 hover:border-slate-700 hover:shadow-xl transition-all duration-300">
          {/* Top row: Role, Company, Duration */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {exp.role}
                </h3>
                {exp.period === 'Current' && (
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                    PRESENT
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium">
                <span className="text-aws-orange font-semibold">{exp.company}</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300 font-mono text-xs">{exp.client}</span>
              </div>
            </div>

            {/* Duration pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs font-mono text-slate-300 self-start flex-shrink-0">
              <svg className="w-3.5 h-3.5 text-aws-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{exp.duration}</span>
              <span className="text-slate-500 font-sans">({exp.period})</span>
            </div>
          </div>

          {/* Role Summary Quote */}
          <p className="text-slate-400 text-sm leading-relaxed mb-5 border-l-2 border-aws-orange/40 pl-3.5 py-0.5 bg-slate-950/40 rounded-r-lg">
            {exp.description}
          </p>

          {/* Key Deliverables & Responsibilities */}
          <div className="space-y-2.5 mb-5">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              Key Contributions &amp; Production Deliverables:
            </p>
            <ul className="grid sm:grid-cols-1 gap-2.5" role="list">
              {displayedItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300 leading-snug">
                  <span className="text-aws-orange font-mono text-xs mt-0.5 flex-shrink-0">
                    ▸
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Expand / Collapse Action */}
            {exp.contributions.length > previewCount && (
              <button
                onClick={() => setExpanded((prev) => !prev)}
                className="mt-2 text-xs font-mono text-cloud-cyan hover:text-aws-orange transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-cloud-cyan/50 py-1"
                aria-expanded={expanded}
              >
                <span>{expanded ? '▲ Collapse deliverables' : `▼ +${exp.contributions.length - previewCount} more contributions`}</span>
              </button>
            )}
          </div>

          {/* Technology Badges */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono text-slate-500 mr-1">Stack:</span>
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="badge text-xs px-2.5 py-0.5 bg-slate-950 border-slate-800 text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [ref, revealed] = useReveal();

  return (
    <section id="experience" className="py-24 relative" aria-label="Professional experience section">
      <div className="section-container relative">
        <div ref={ref} className={`mb-14 animate-reveal ${revealed ? 'revealed' : ''}`}>
          <span className="section-tag">// 03. Work History</span>
          <h2 className="section-heading">Professional Experience</h2>
          <div className="section-divider" />
          <p className="section-subheading">
            Enterprise track record across Fortune 500 clients in banking, logistics, and healthcare. Specializing in AWS operations, CI/CD automation, and Linux infrastructure.
          </p>
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <ExperienceItem key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
