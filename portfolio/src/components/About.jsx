import { useReveal } from '../hooks/useReveal';
import { personalInfo } from '../data/portfolio';

export default function About() {
  const [ref, revealed] = useReveal();

  return (
    <section id="about" className="py-24 relative" aria-label="About section">
      <div className="section-container">
        <div ref={ref} className={`animate-reveal ${revealed ? 'revealed' : ''}`}>
          <div className="mb-12">
            <p className="text-aws-orange text-sm font-mono tracking-widest uppercase mb-2">// about me</p>
            <h2 className="section-heading">Professional Background</h2>
            <div className="section-divider" />
          </div>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            {/* Text */}
            <div className="lg:col-span-3 flex flex-col gap-5">
              {personalInfo.about.map((para, i) => (
                <p key={i} className="text-slate-600 leading-relaxed text-base">{para}</p>
              ))}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <svg className="w-4 h-4 text-aws-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {personalInfo.location}
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <svg className="w-4 h-4 text-aws-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {personalInfo.currentRole}
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
              {personalInfo.highlights.map(({ label, sub }) => (
                <div key={label} className="glass-card p-4 flex flex-col gap-1 hover:border-amber-300 hover:shadow-md transition-all duration-300 group">
                  <span className="text-xl font-bold text-aws-orange group-hover:text-aws-orange-light transition-colors">{label}</span>
                  <span className="text-xs text-slate-500 leading-snug">{sub}</span>
                </div>
              ))}
              <div className="glass-card p-4 col-span-2 lg:col-span-2 border-blue-200 bg-gradient-to-br from-white to-sky-50">
                <p className="text-xs font-mono text-blue-500 mb-2">$ role --current</p>
                <p className="text-sm text-slate-600 leading-relaxed">Cloud infrastructure, DevOps automation, and production operations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
