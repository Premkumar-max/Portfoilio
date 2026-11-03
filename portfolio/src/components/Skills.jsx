import { useReveal } from '../hooks/useReveal';
import { skillCategories } from '../data/portfolio';

// Concise SVG Icons for Technologies
function TechIcon({ name }) {
  if (name === 'AWS' || name.startsWith('EC2') || name.startsWith('S3') || name === 'IAM' || name === 'RDS' || name.includes('CloudWatch') || name.includes('Lambda')) {
    return (
      <svg className="w-4 h-4 text-aws-orange" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.74 18.06c-1.84 1.34-4.32 2.05-6.74 2.05-3.37 0-6.42-1.35-8.73-3.61-.18-.18-.04-.42.17-.28 2.48 1.44 5.48 2.31 8.56 2.31 2.15 0 4.51-.53 6.64-1.63.32-.17.55.13.1.41v-.01zM19.98 16.71c-.23-.3-.95-.44-1.48-.48-.52-.04-.84.22-.61.52.79 1.03 2.15 1.57 2.29 1.48.14-.1-.02-1.3-.2-1.52zm-12.87-4.4c0-.79.35-1.41 1.05-1.84.7-.44 1.63-.66 2.79-.66h1.22v-.41c0-.52-.14-.92-.41-1.2-.28-.27-.72-.41-1.33-.41-.45 0-.89.07-1.32.22-.43.14-.78.33-1.05.57-.1.08-.2.07-.27-.04l-.53-.74c-.06-.09-.04-.19.06-.27.4-.33.89-.59 1.48-.77.58-.19 1.18-.28 1.8-.28 1.08 0 1.9.27 2.45.81.56.54.84 1.31.84 2.31v4.47c0 .16.07.23.22.23h.52c.11 0 .19.08.19.19v.76c0 .11-.08.19-.19.19h-.78c-.2 0-.34-.09-.43-.27l-.14-.37c-.52.48-1.24.72-2.14.72-1.01 0-1.81-.27-2.39-.81-.58-.54-.87-1.27-.87-2.2v-.01zm3.06.66c0 .48.16.85.49 1.11.33.26.77.39 1.32.39.52 0 .96-.14 1.33-.41.36-.28.55-.65.55-1.12v-.89h-.98c-.76 0-1.31.11-1.65.34-.34.22-.51.56-.51 1.02v-.01z" />
      </svg>
    );
  }
  if (name === 'Kubernetes' || name === 'EKS') {
    return (
      <svg className="w-4 h-4 text-cloud-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 2.5L20 7.2v9.5l-8 4.7-8-4.7V7.2l8-4.7z" />
        <circle cx="12" cy="12" r="3.2" strokeWidth={1.6} />
      </svg>
    );
  }
  if (name === 'Docker' || name === 'ECS' || name === 'ECR') {
    return (
      <svg className="w-4 h-4 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186" />
      </svg>
    );
  }
  if (name === 'Terraform') {
    return (
      <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.67 8.358v6.942l-5.99-3.47V4.887l5.99 3.471zm.685-1.187l5.99-3.471v6.941l-5.99 3.472V7.171zm-7.36 5.864v6.941L2 16.505V9.564l5.995 3.471zm7.36 4.678v6.942l-5.99-3.471v-6.942l5.99 3.471z" />
      </svg>
    );
  }
  if (name === 'Jenkins') {
    return (
      <svg className="w-4 h-4 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
        <circle cx="12" cy="9" r="2.5" fill="currentColor" />
        <path d="M8 17c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5" strokeWidth="1.8" />
      </svg>
    );
  }
  if (name === 'GitHub' || name === 'GitHub Actions') {
    return (
      <svg className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    );
  }
  if (name === 'Git') {
    return (
      <svg className="w-4 h-4 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.6 10.59L10.6 2.6a2 2 0 012.83 0l7.98 7.99a2 2 0 010 2.83l-7.98 7.98a2 2 0 01-2.83 0L2.6 13.41a2 2 0 010-2.82zm11.3 5.48a1.5 1.5 0 10-1.4-2.03l-2.09-2.08a1.5 1.5 0 10-1.42 1.42l2.09 2.08a1.5 1.5 0 002.82.61z" />
      </svg>
    );
  }
  if (name === 'Linux') {
    return (
      <svg className="w-4 h-4 text-amber-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.69 2 6 4.69 6 8v3.5C4.9 12.1 4 13.5 4 15.5 4 18 5.79 20 8 20c.4 0 .78-.07 1.14-.19.86 1.34 2.29 2.19 3.86 2.19s3-.85 3.86-2.19c.36.12.74.19 1.14.19 2.21 0 4-2 4-4.5 0-2-.9-3.4-2-4V8c0-3.31-2.69-6-6-6z" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Skills() {
  const [ref, revealed] = useReveal();

  return (
    <section id="skills" className="py-20 relative bg-navy-950/60" aria-label="Skills section">
      <div className="section-container relative">
        <div ref={ref} className={`animate-reveal ${revealed ? 'revealed' : ''}`}>
          {/* Header */}
          <div className="mb-10">
            <span className="section-tag">// Technical Expertise</span>
            <h2 className="section-heading">Skills &amp; Technologies</h2>
            <div className="section-divider" />
            <p className="section-subheading">
              Organized into clear engineering domains across AWS cloud infrastructure, container orchestration, automation, and core tools.
            </p>
          </div>

          {/* Clean 6 Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.id}
                className="p-6 rounded-2xl bg-navy-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
                    <h3 className="font-heading font-bold text-white text-base">
                      {category.title}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {category.skills.length} {category.skills.length === 1 ? 'skill' : 'skills'}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-900 text-slate-200 border border-slate-800 hover:border-slate-700 transition-colors cursor-default"
                      >
                        <TechIcon name={skill} />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Production verified</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Hands-on
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
