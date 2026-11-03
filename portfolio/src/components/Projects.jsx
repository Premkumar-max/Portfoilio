import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { projects } from '../data/portfolio';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [ref, revealed] = useReveal();

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Containers & IaC', label: 'Kubernetes & IaC' },
    { id: 'CI/CD & Automation', label: 'CI/CD Automation' },
    { id: 'Monitoring & SRE', label: 'Observability & SRE' },
    { id: 'Networking & Security', label: 'Cloud Networking' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative bg-navy-950/70" aria-label="Cloud & DevOps Projects section">
      {/* Background Glow */}
      <div className="absolute left-1/4 bottom-10 w-96 h-96 bg-aws-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative">
        <div ref={ref} className={`animate-reveal ${revealed ? 'revealed' : ''}`}>
          {/* Section Header */}
          <div className="mb-10">
            <span className="section-tag">// 04. Production Implementations</span>
            <h2 className="section-heading">Featured Cloud &amp; DevOps Projects</h2>
            <div className="section-divider" />
            <p className="section-subheading">
              Production architectures engineered with Terraform, Kubernetes, Docker, and AWS services. Built for high availability, zero-downtime releases, and observable operations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-aws-orange/50 ${
                  selectedCategory === cat.id
                    ? 'bg-aws-orange text-navy-950 font-bold shadow-md shadow-aws-orange/20'
                    : 'bg-navy-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card flex flex-col justify-between border-slate-800 bg-navy-900/80 hover:border-slate-700 hover:shadow-2xl hover:shadow-aws-orange/5 transition-all duration-300 rounded-2xl overflow-hidden group"
              >
                {/* Top Section */}
                <div className="p-7">
                  {/* Category and Featured indicator */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-cloud-cyan bg-cloud-cyan/10 px-2.5 py-1 rounded-md border border-cloud-cyan/20">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                        FEATURED ARCHITECTURE
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-aws-orange transition-colors">
                    {project.title}
                  </h3>

                  {/* Short Summary */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Architecture Specification Box */}
                  <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 mb-6 text-xs font-mono">
                    <div className="flex items-center gap-2 text-slate-400 mb-2">
                      <svg className="w-4 h-4 text-aws-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      <span className="font-semibold text-slate-300">Architecture Overview:</span>
                    </div>
                    <p className="text-slate-400 leading-relaxed font-sans">
                      {project.architecture}
                    </p>
                  </div>

                  {/* AWS Services Used */}
                  <div className="mb-4">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      AWS Cloud Services:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.awsServices.map((aws) => (
                        <span
                          key={aws}
                          className="badge-aws text-xs px-2.5 py-0.5 rounded"
                        >
                          {aws}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* DevOps Tools Used */}
                  <div className="mb-6">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      DevOps &amp; IaC Tooling:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.devopsTools.map((tool) => (
                        <span
                          key={tool}
                          className="badge-cyan text-xs px-2.5 py-0.5 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Contributions & Engineering Highlights */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Core Implementation Highlights:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-300" role="list">
                      {project.contributions.map((contribution, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-aws-orange font-mono mt-0.5">▸</span>
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact Metric Banner */}
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-emerald-400 flex items-center gap-2.5">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium text-slate-300">
                      <strong className="text-emerald-400 font-semibold font-mono">Measurable Impact:</strong> {project.impact}
                    </span>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="px-7 py-4 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                    <span>Production Architecture</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 bg-slate-800 hover:text-white hover:bg-slate-700 transition-colors"
                        aria-label={`View code for ${project.title}`}
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        <span>GitHub</span>
                      </a>
                    )}
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
