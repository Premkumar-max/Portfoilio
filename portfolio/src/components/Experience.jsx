import { useReveal } from '../hooks/useReveal';
import { experience } from '../data/portfolio';

export default function Experience() {
  const [ref, revealed] = useReveal();

  return (
    <section id="experience" className="py-20 relative" aria-label="Professional Experience section">
      <div className="section-container relative">
        <div ref={ref} className={`animate-reveal ${revealed ? 'revealed' : ''}`}>
          {/* Header */}
          <div className="mb-12">
            <span className="section-tag">// Professional Track</span>
            <h2 className="section-heading">Work Experience</h2>
            <div className="section-divider" />
            <p className="section-subheading">
              Demonstrated track record of delivering resilient AWS cloud infrastructure, driving CI/CD automation, and maintaining enterprise production stability.
            </p>
          </div>

          {/* Timeline / Card Layout */}
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 md:before:left-6 before:w-0.5 before:bg-slate-800 before:z-0">
            {experience.map((item) => (
              <div key={item.id} className="relative flex items-start gap-5 md:gap-8 z-10">
                {/* Node marker */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-navy-900 border-2 border-aws-orange flex items-center justify-center text-aws-orange font-mono font-bold text-xs md:text-sm shadow-md shadow-aws-orange/15 flex-shrink-0 mt-1">
                  0{item.id}
                </div>

                {/* Experience Card */}
                <div className="flex-1 p-6 md:p-7 rounded-2xl bg-navy-900/90 border border-slate-800 hover:border-slate-700 transition-all">
                  {/* Top Bar: Role, Company, Client, Duration */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl md:text-2xl font-heading font-bold text-white tracking-tight">
                          {item.role}
                        </h3>
                        {item.period === 'Current' && (
                          <span className="px-2 py-0.5 text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                            PRESENT
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        <span className="font-semibold text-aws-orange">{item.company}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-300 font-mono text-xs">{item.client}</span>
                      </div>
                    </div>

                    {/* Duration badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs font-mono text-slate-300 self-start">
                      <svg className="w-3.5 h-3.5 text-aws-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-2 mb-5">
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Key Responsibilities &amp; Impact:
                    </p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {item.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 leading-snug">
                          <span className="text-aws-orange font-mono text-xs mt-0.5 flex-shrink-0">
                            ▸
                          </span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Major Technologies */}
                  <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 mr-1">Major Technologies:</span>
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
