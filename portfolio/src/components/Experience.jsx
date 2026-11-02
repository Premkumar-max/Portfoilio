import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { experience } from '../data/portfolio';

function ExperienceCard({ exp, index }) {
  const [expanded, setExpanded] = useState(false);
  const [ref, revealed] = useReveal();
  const visibleCount = 5;
  const visibleItems = expanded ? exp.contributions : exp.contributions.slice(0, visibleCount);

  return (
    <div
      ref={ref}
      className={`relative flex gap-6 animate-reveal ${revealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Node */}
        <div className="w-10 h-10 rounded-full border-2 border-aws-orange bg-white flex items-center justify-center z-10 shadow-md shadow-amber-100 text-aws-orange font-bold text-sm flex-shrink-0">
          {String(index + 1).padStart(2, '0')}
        </div>
        {/* Vertical line — hidden on last card */}
        {index < experience.length - 1 && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-amber-300 to-sky-200 mt-1 min-h-[32px]" />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 pb-10">
        <div className="glass-card p-6 hover:shadow-md hover:border-sky-300 transition-all duration-300 group">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-aws-orange transition-colors duration-200">
                {exp.project}
              </h3>
              <p className="text-aws-orange font-semibold text-sm mt-0.5">{exp.subtitle}</p>
            </div>
            {/* Duration badge */}
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 bg-sky-50 border border-sky-200 rounded-full px-3 py-1.5 self-start flex-shrink-0">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {exp.duration}
            </span>
          </div>

          {/* Description */}
          <p className="text-slate-500 text-sm leading-relaxed mb-4 border-l-2 border-sky-200 pl-3">
            {exp.description}
          </p>

          {/* Contributions */}
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-4" role="list">
            {visibleItems.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-600 leading-snug">
                <span className="text-aws-orange mt-0.5 flex-shrink-0 text-xs">▸</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Expand/collapse */}
          {exp.contributions.length > visibleCount && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="text-xs text-blue-600 hover:text-aws-orange transition-colors flex items-center gap-1 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
              aria-expanded={expanded}
            >
              {expanded
                ? '− Show fewer'
                : `+ ${exp.contributions.length - visibleCount} more`}
            </button>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-3 border-t border-sky-100">
            {exp.tags.map((tag) => (
              <span key={tag} className="badge">{tag}</span>
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
      <div className="section-container">
        {/* Heading */}
        <div ref={ref} className={`mb-14 animate-reveal ${revealed ? 'revealed' : ''}`}>
          <p className="text-aws-orange text-sm font-mono tracking-widest uppercase mb-2">// work history</p>
          <h2 className="section-heading">Professional Experience</h2>
          <div className="section-divider" />
          <p className="section-subheading max-w-2xl">
            3.5+ years of hands-on cloud infrastructure and DevOps engineering experience.
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col">
          {experience.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
