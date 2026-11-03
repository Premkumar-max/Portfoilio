import { useReveal } from '../hooks/useReveal';
import { personalInfo, achievements } from '../data/portfolio';

export default function About() {
  const [ref, revealed] = useReveal();

  return (
    <section id="about" className="py-24 relative" aria-label="About section">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-aws-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative">
        <div ref={ref} className={`animate-reveal ${revealed ? 'revealed' : ''}`}>
          {/* Section Header */}
          <div className="mb-12">
            <span className="section-tag">// 01. Professional Overview</span>
            <h2 className="section-heading">Engineering Background</h2>
            <div className="section-divider" />
            <p className="section-subheading">
              Dedicated to designing resilient AWS infrastructure, automating delivery pipelines, and maintaining high-availability production cloud workloads.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left 7 cols: Bio & Core Focus */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                {personalInfo.about.map((paragraph, index) => (
                  <p key={index} className="text-slate-300/90">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Terminal-style Architecture Execution Card */}
              <div className="bg-navy-900 border border-slate-800 rounded-2xl p-5 font-mono text-xs shadow-lg">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="ml-1 text-slate-400">devops-profile.sh</span>
                  </div>
                  <span className="text-[10px] text-slate-600">bash / zsh</span>
                </div>
                <div className="space-y-1.5 text-slate-300">
                  <p className="text-slate-500"># Engineering core values</p>
                  <p>
                    <span className="text-aws-orange">$</span> echo <span className="text-cloud-cyan">"$EXPERTISE_PILLARS"</span>
                  </p>
                  <p className="text-emerald-400 pl-4">
                    ✓ Infrastructure as Code (Terraform &amp; CloudFormation)
                  </p>
                  <p className="text-emerald-400 pl-4">
                    ✓ Container Orchestration (Kubernetes, Amazon EKS, ECS, Docker)
                  </p>
                  <p className="text-emerald-400 pl-4">
                    ✓ Enterprise CI/CD Delivery (Jenkins, GitHub Actions, GoCD)
                  </p>
                  <p className="text-emerald-400 pl-4">
                    ✓ Observability &amp; SRE (CloudWatch, Prometheus, Grafana, Splunk)
                  </p>
                  <p className="text-emerald-400 pl-4">
                    ✓ Cloud Security &amp; Compliance (IAM Least-Privilege, KMS, VPC)
                  </p>
                </div>
              </div>

              {/* Key Achievements Metric Banner */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {achievements.map((ach) => (
                  <div
                    key={ach.metric}
                    className="bg-navy-900/80 border border-slate-800/90 rounded-xl p-3.5 flex flex-col justify-between hover:border-aws-orange/40 transition-colors group"
                  >
                    <span className="text-lg sm:text-xl font-mono font-bold text-aws-orange group-hover:text-amber-300 transition-colors">
                      {ach.metric}
                    </span>
                    <span className="text-xs text-slate-400 font-medium leading-snug mt-1">
                      {ach.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 cols: Highlights & Operational Stats */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-3.5">
                {personalInfo.highlights.map((highlight) => (
                  <div
                    key={highlight.label}
                    className="glass-card-interactive p-4 flex flex-col justify-between border-slate-800 bg-navy-900/60"
                  >
                    <span className="text-xl sm:text-2xl font-black text-white group-hover:text-aws-orange transition-colors">
                      {highlight.label}
                    </span>
                    <span className="text-xs font-medium text-slate-400 mt-2 leading-relaxed">
                      {highlight.sub}
                    </span>
                  </div>
                ))}
              </div>

              {/* Current Role Card */}
              <div className="glass-card p-5 border-slate-800 bg-gradient-to-br from-navy-900/90 via-navy-900/50 to-slate-900/80">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-cloud-cyan tracking-wider uppercase">
                    Current Deployment
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Active
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  {personalInfo.currentRole}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Handling real-time AWS infrastructure requests, GoCD pipeline resolution, ECS monitoring, and automated cloud account decommissioning for global financial services.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['AWS', 'ECS', 'Terraform', 'GoCD', 'CloudWatch', 'CloudTrail'].map((tag) => (
                    <span key={tag} className="badge text-[11px] py-0.5 px-2">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
