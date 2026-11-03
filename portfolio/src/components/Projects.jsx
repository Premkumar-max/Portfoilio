import { useReveal } from '../hooks/useReveal';
import { projects } from '../data/portfolio';

export default function Projects() {
  const [ref, revealed] = useReveal();

  return (
    <section id="projects" className="py-20 relative bg-navy-950/80" aria-label="Projects section">
      <div className="section-container relative">
        <div ref={ref} className={`animate-reveal ${revealed ? 'revealed' : ''}`}>
          {/* Header */}
          <div className="mb-12">
            <span className="section-tag">// Architecture &amp; Automation</span>
            <h2 className="section-heading">Featured Projects</h2>
            <div className="section-divider" />
            <p className="section-subheading">
              Key AWS cloud and DevOps implementations showcasing Terraform Infrastructure as Code, Kubernetes container platforms, CI/CD pipelines, and observability.
            </p>
          </div>

          {/* Distinctive Project Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="project-card flex flex-col justify-between border-slate-800 bg-gradient-to-b from-navy-900/90 via-navy-900/70 to-navy-950 rounded-2xl group relative overflow-hidden"
              >
                {/* Visual Top Highlight Accent */}
                <div className="h-1 w-full bg-gradient-to-r from-aws-orange via-amber-400 to-cloud-cyan opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="p-6 md:p-8 flex flex-col gap-5 flex-1">
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-aws-orange bg-aws-orange/10 px-3 py-1 rounded-md border border-aws-orange/20">
                      PROJECT 0{idx + 1}
                    </span>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>

                  {/* Project Name */}
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-white tracking-tight group-hover:text-aws-orange transition-colors">
                    {project.title}
                  </h3>

                  {/* One-line overview */}
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    {project.overview}
                  </p>

                  {/* Problem or Objective */}
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs">
                    <span className="font-mono text-cloud-cyan uppercase font-semibold block mb-1">
                      Objective:
                    </span>
                    <p className="text-slate-400 leading-relaxed">
                      {project.objective}
                    </p>
                  </div>

                  {/* My Contribution */}
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Key Contributions:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {project.contribution.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-aws-orange font-mono text-xs mt-0.5">▸</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cloud/DevOps Architecture Involved */}
                  <div className="p-3.5 rounded-xl bg-navy-950/90 border border-slate-800/80 text-xs font-mono">
                    <span className="text-slate-400 font-semibold block mb-1">
                      Architecture Topology:
                    </span>
                    <p className="text-slate-400 font-sans leading-relaxed text-[11px]">
                      {project.architecture}
                    </p>
                  </div>
                </div>

                {/* Footer: Tech stack and link */}
                <div className="p-6 md:p-8 pt-0 mt-auto border-t border-slate-800/60 pt-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-aws-orange hover:text-aws-orange-light transition-colors"
                    >
                      <span>Repository</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
