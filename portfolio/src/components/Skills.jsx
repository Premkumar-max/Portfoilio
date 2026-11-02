import { useReveal } from '../hooks/useReveal';
import { skills } from '../data/portfolio';

const categoryIcons = {
  cloud: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>),
  code: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>),
  container: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>),
  pipeline: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>),
  monitor: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>),
  terminal: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>),
  shield: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>),
};

const featuredTech = ['AWS', 'Terraform', 'Kubernetes', 'Docker', 'EKS'];

function SkillCard({ skill, delay }) {
  const [ref, revealed] = useReveal();
  return (
    <div
      ref={ref}
      className={`glass-card p-5 flex flex-col gap-4 group hover:shadow-md hover:border-sky-300 transition-all duration-300 animate-reveal ${revealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg transition-colors duration-200 ${
          skill.featured
            ? 'bg-amber-50 text-aws-orange'
            : 'bg-sky-50 text-blue-500 group-hover:bg-amber-50 group-hover:text-aws-orange'
        }`}>
          {categoryIcons[skill.icon] || categoryIcons.code}
        </div>
        <h3 className={`font-semibold text-sm ${skill.featured ? 'text-aws-orange' : 'text-slate-700'}`}>
          {skill.category}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => {
          const isFeatured = featuredTech.includes(item);
          return (
            <span key={item} className={`text-xs px-2.5 py-1 rounded-full font-medium border transition-all duration-200 cursor-default ${
              isFeatured
                ? 'bg-amber-50 border-amber-300 text-amber-700 hover:bg-amber-100'
                : 'bg-sky-50 border-sky-200 text-slate-600 hover:border-blue-300 hover:text-blue-600'
            }`}>
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-white/50" aria-label="Technical skills section">
      <div className="section-container relative">
        <div className="mb-12">
          <p className="text-aws-orange text-sm font-mono tracking-widest uppercase mb-2">// technical stack</p>
          <h2 className="section-heading">Skills & Technologies</h2>
          <div className="section-divider" />
          <p className="section-subheading max-w-2xl">
            Technologies and tools I work with across cloud infrastructure, DevOps, containerization, automation, and monitoring.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {skills.filter((s) => s.featured).map((skill, i) => (
            <SkillCard key={skill.category} skill={skill} delay={i * 80} />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.filter((s) => !s.featured).map((skill, i) => (
            <SkillCard key={skill.category} skill={skill} delay={(i + 3) * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
