import { useReveal } from '../hooks/useReveal';
import { education } from '../data/portfolio';

export default function Education() {
  const [ref, revealed] = useReveal();

  return (
    <section id="education" className="py-24 relative" aria-label="Education section">
      <div className="section-container">
        <div ref={ref} className={`animate-reveal ${revealed ? 'revealed' : ''}`}>
          <div className="mb-12">
            <p className="text-aws-orange text-sm font-mono tracking-widest uppercase mb-2">// academic background</p>
            <h2 className="section-heading">Education</h2>
            <div className="section-divider" />
          </div>

          <div className="flex flex-col gap-6 max-w-2xl">
            {education.map((edu, i) => (
              <div key={i} className="glass-card p-6 flex flex-col sm:flex-row gap-5 items-start hover:shadow-md hover:border-amber-300 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-7 h-7 text-aws-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-aws-orange transition-colors duration-200">{edu.degree}</h3>
                  <p className="text-aws-orange font-semibold text-sm">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-4 mt-1">
                    <span className="flex items-center gap-1.5 text-slate-500 text-sm">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-500 text-sm">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      {edu.duration}
                    </span>
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
