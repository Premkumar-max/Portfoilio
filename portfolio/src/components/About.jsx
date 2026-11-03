import { useReveal } from '../hooks/useReveal';
import { personalInfo } from '../data/portfolio';

export default function About() {
  const [ref, revealed] = useReveal();

  const coreFocusAreas = [
    { title: 'AWS Cloud Infrastructure', desc: 'Designing secure, resilient multi-AZ environments, compute, VPC networking, and IAM policies.' },
    { title: 'DevOps & CI/CD', desc: 'Automating build, test, and zero-downtime deployment pipelines with Jenkins and GitHub Actions.' },
    { title: 'Infrastructure as Code', desc: 'Standardizing repeatable infrastructure provisioning and state management with Terraform.' },
    { title: 'Kubernetes & Containers', desc: 'Deploying, managing, and scaling containerized microservices across Amazon EKS and ECS.' },
    { title: 'Production Support & SRE', desc: 'Troubleshooting critical production issues, CloudWatch alerting, and maintaining 99.9% availability.' },
  ];

  return (
    <section id="about" className="py-20 relative" aria-label="About section">
      <div className="section-container relative">
        <div ref={ref} className={`animate-reveal ${revealed ? 'revealed' : ''}`}>
          {/* Header */}
          <div className="mb-10">
            <span className="section-tag">// Professional Profile</span>
            <h2 className="section-heading">About Me</h2>
            <div className="section-divider" />
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left 7 cols: Bio & Core Focus */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                {personalInfo.about.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Core Pillars */}
              <div className="pt-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Core Engineering Competencies:
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {coreFocusAreas.map((item) => (
                    <div
                      key={item.title}
                      className="p-3.5 rounded-xl bg-navy-900/70 border border-slate-800 flex flex-col gap-1"
                    >
                      <span className="font-heading font-semibold text-sm text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-aws-orange" />
                        {item.title}
                      </span>
                      <span className="text-xs text-slate-400 leading-snug">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 cols: Metrics & Operational Highlights */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                {personalInfo.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-5 rounded-2xl bg-navy-900/90 border border-slate-800 flex flex-col justify-between"
                  >
                    <span className="text-2xl sm:text-3xl font-heading font-bold text-aws-orange">
                      {stat.label}
                    </span>
                    <span className="text-xs text-slate-400 mt-2 font-medium leading-relaxed">
                      {stat.detail}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 mt-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Operating Standard
                </span>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Committed to building resilient, scalable, and observable cloud environments with least-privilege security and automated recovery workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
