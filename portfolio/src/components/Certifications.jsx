import { useReveal } from '../hooks/useReveal';
import { certifications, education } from '../data/portfolio';

const BadgeIcons = {
  aws: (
    <svg className="w-8 h-8 text-aws-orange" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.74 18.06c-1.84 1.34-4.32 2.05-6.74 2.05-3.37 0-6.42-1.35-8.73-3.61-.18-.18-.04-.42.17-.28 2.48 1.44 5.48 2.31 8.56 2.31 2.15 0 4.51-.53 6.64-1.63.32-.17.55.13.1.41v-.01zM19.98 16.71c-.23-.3-.95-.44-1.48-.48-.52-.04-.84.22-.61.52.79 1.03 2.15 1.57 2.29 1.48.14-.1-.02-1.3-.2-1.52zm-12.87-4.4c0-.79.35-1.41 1.05-1.84.7-.44 1.63-.66 2.79-.66h1.22v-.41c0-.52-.14-.92-.41-1.2-.28-.27-.72-.41-1.33-.41-.45 0-.89.07-1.32.22-.43.14-.78.33-1.05.57-.1.08-.2.07-.27-.04l-.53-.74c-.06-.09-.04-.19.06-.27.4-.33.89-.59 1.48-.77.58-.19 1.18-.28 1.8-.28 1.08 0 1.9.27 2.45.81.56.54.84 1.31.84 2.31v4.47c0 .16.07.23.22.23h.52c.11 0 .19.08.19.19v.76c0 .11-.08.19-.19.19h-.78c-.2 0-.34-.09-.43-.27l-.14-.37c-.52.48-1.24.72-2.14.72-1.01 0-1.81-.27-2.39-.81-.58-.54-.87-1.27-.87-2.2v-.01zm3.06.66c0 .48.16.85.49 1.11.33.26.77.39 1.32.39.52 0 .96-.14 1.33-.41.36-.28.55-.65.55-1.12v-.89h-.98c-.76 0-1.31.11-1.65.34-.34.22-.51.56-.51 1.02v-.01z" />
    </svg>
  ),
  k8s: (
    <svg className="w-8 h-8 text-cloud-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 2.5L20 7.2v9.5l-8 4.7-8-4.7V7.2l8-4.7z" />
      <circle cx="12" cy="12" r="3.2" strokeWidth={1.6} />
      <path d="M12 2.5v6.3M20 7.2l-5.4 3.2M20 16.7l-5.4-3.2M12 21.4v-6.2M4 16.7l5.4-3.2M4 7.2l5.4 3.2" strokeWidth={1.4} />
    </svg>
  ),
  iac: (
    <svg className="w-8 h-8 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.67 8.358v6.942l-5.99-3.47V4.887l5.99 3.471zm.685-1.187l5.99-3.471v6.941l-5.99 3.472V7.171zm-7.36 5.864v6.941L2 16.505V9.564l5.995 3.471zm7.36 4.678v6.942l-5.99-3.471v-6.942l5.99 3.471z" />
    </svg>
  ),
  linux: (
    <svg className="w-8 h-8 text-amber-300" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.69 2 6 4.69 6 8v3.5C4.9 12.1 4 13.5 4 15.5 4 18 5.79 20 8 20c.4 0 .78-.07 1.14-.19.86 1.34 2.29 2.19 3.86 2.19s3-.85 3.86-2.19c.36.12.74.19 1.14.19 2.21 0 4-2 4-4.5 0-2-.9-3.4-2-4V8c0-3.31-2.69-6-6-6zm0 2c2.21 0 4 1.79 4 4v2.5c-.63-.31-1.34-.5-2.1-.5h-3.8c-.76 0-1.47.19-2.1.5V8c0-2.21 1.79-4 4-4z" />
    </svg>
  ),
};

export default function Certifications() {
  const [ref, revealed] = useReveal();

  return (
    <section id="certifications" className="py-24 relative" aria-label="Certifications & Education section">
      <div className="section-container relative">
        <div ref={ref} className={`animate-reveal ${revealed ? 'revealed' : ''}`}>
          {/* Section Header */}
          <div className="mb-12">
            <span className="section-tag">// 05. Credentials &amp; Academics</span>
            <h2 className="section-heading">Certifications &amp; Education</h2>
            <div className="section-divider" />
            <p className="section-subheading">
              Technical qualifications, enterprise proficiency tracks, and formal computer engineering education.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {certifications.map((cert) => {
              const icon = BadgeIcons[cert.badge] || BadgeIcons.aws;
              return (
                <div
                  key={cert.id}
                  className="glass-card p-6 sm:p-7 flex flex-col justify-between border-slate-800 bg-navy-900/80 hover:border-slate-700 hover:shadow-xl transition-all duration-300 group"
                >
                  <div>
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                        {icon}
                      </div>
                      <span className="text-[10px] font-mono text-aws-orange bg-aws-orange/10 border border-aws-orange/20 px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">
                        {cert.status}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-aws-orange transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-cloud-cyan mb-3">
                      {cert.issuer}
                    </p>

                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    {/* Topics covered */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                      {cert.topics.map((t) => (
                        <span
                          key={t}
                          className="badge text-[11px] py-0.5 px-2 bg-slate-950 text-slate-400 border-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Enterprise Domain</span>
                    <span className="text-emerald-400">Verified Skills</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Education Subsection */}
          <div className="mt-14 pt-10 border-t border-slate-800/80">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-aws-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
              </svg>
              Academic Background
            </h3>

            <div className="grid md:grid-cols-1 max-w-3xl gap-4">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="glass-card p-6 flex flex-col sm:flex-row items-start gap-5 border-slate-800 bg-navy-900/80 hover:border-slate-700 transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-aws-orange flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-0.5">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-semibold text-aws-orange mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                      {edu.details}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {edu.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
