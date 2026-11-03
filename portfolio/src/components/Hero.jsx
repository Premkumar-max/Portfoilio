import { personalInfo, socialLinks } from '../data/portfolio';

// Clean SVG Cloud Architecture Visual
function CloudArchitectureVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      {/* Subtle background glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-aws-orange/10 via-cloud-cyan/5 to-transparent rounded-3xl blur-2xl pointer-events-none" />

      {/* Container Frame */}
      <div className="relative bg-navy-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl backdrop-blur-md">
        {/* Architecture Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
            <span className="text-xs font-mono text-slate-400 ml-1.5">aws-cloud-architecture // prod</span>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Active 99.9%
          </span>
        </div>

        {/* SVG Diagram */}
        <div className="relative aspect-[16/11] w-full flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 520 340" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* VPC Outer Box */}
            <rect
              x="20"
              y="15"
              width="480"
              height="310"
              rx="14"
              fill="#070b14"
              fillOpacity="0.7"
              stroke="#1e293b"
              strokeWidth="1.2"
              strokeDasharray="6 4"
            />
            <text x="35" y="38" fill="#64748b" fontSize="11" fontFamily="monospace" fontWeight="600">
              AWS VPC: Multi-AZ High Availability
            </text>

            {/* Ingress Route 53 & ALB */}
            <path d="M260 75 L260 115" stroke="#FF9900" strokeWidth="1.8" strokeDasharray="4 3" />
            {/* ALB to EKS & ECS */}
            <path d="M260 155 L160 205" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="4 3" />
            <path d="M260 155 L360 205" stroke="#FF9900" strokeWidth="1.8" strokeDasharray="4 3" />
            {/* Telemetry to CloudWatch */}
            <path d="M160 265 L260 295" stroke="#334155" strokeWidth="1.2" strokeDasharray="3 3" />
            <path d="M360 265 L260 295" stroke="#334155" strokeWidth="1.2" strokeDasharray="3 3" />

            {/* Node 1: Route 53 */}
            <g transform="translate(205, 42)">
              <rect width="110" height="34" rx="8" fill="#0f172a" stroke="#FF9900" strokeWidth="1.2" />
              <circle cx="18" cy="17" r="4" fill="#FF9900" />
              <text x="32" y="17" fill="#f8fafc" fontSize="10.5" fontFamily="monospace" fontWeight="700">
                Route 53
              </text>
              <text x="32" y="27" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">
                DNS Routing
              </text>
            </g>

            {/* Node 2: Application Load Balancer */}
            <g transform="translate(195, 115)">
              <rect width="130" height="40" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
              <circle cx="18" cy="20" r="4" fill="#38bdf8" />
              <text x="32" y="19" fill="#f8fafc" fontSize="11" fontFamily="monospace" fontWeight="700">
                AWS ALB
              </text>
              <text x="32" y="30" fill="#38bdf8" fontSize="8" fontFamily="monospace">
                SSL / TLS Offload
              </text>
            </g>

            {/* Node 3: Amazon EKS */}
            <g transform="translate(70, 200)">
              <rect width="170" height="66" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
              <text x="14" y="22" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="700">
                Amazon EKS
              </text>
              <text x="14" y="35" fill="#94a3b8" fontSize="8.5" fontFamily="sans-serif">
                Kubernetes Microservices
              </text>
              <g transform="translate(14, 43)">
                <rect width="44" height="15" rx="3" fill="#1e293b" />
                <text x="6" y="11" fill="#38bdf8" fontSize="8" fontFamily="monospace">Pod 1</text>
                <rect x="50" width="44" height="15" rx="3" fill="#1e293b" />
                <text x="56" y="11" fill="#38bdf8" fontSize="8" fontFamily="monospace">Pod 2</text>
                <rect x="98" width="44" height="15" rx="3" fill="#1e293b" />
                <text x="104" y="11" fill="#10b981" fontSize="8" fontFamily="monospace">Auto</text>
              </g>
            </g>

            {/* Node 4: Amazon ECS */}
            <g transform="translate(280, 200)">
              <rect width="170" height="66" rx="10" fill="#0f172a" stroke="#FF9900" strokeWidth="1.2" />
              <text x="14" y="22" fill="#FF9900" fontSize="11" fontFamily="monospace" fontWeight="700">
                Amazon ECS
              </text>
              <text x="14" y="35" fill="#94a3b8" fontSize="8.5" fontFamily="sans-serif">
                Docker Containers
              </text>
              <g transform="translate(14, 43)">
                <rect width="44" height="15" rx="3" fill="#1e293b" />
                <text x="6" y="11" fill="#FF9900" fontSize="8" fontFamily="monospace">Task 1</text>
                <rect x="50" width="44" height="15" rx="3" fill="#1e293b" />
                <text x="56" y="11" fill="#FF9900" fontSize="8" fontFamily="monospace">Task 2</text>
                <rect x="98" width="44" height="15" rx="3" fill="#1e293b" />
                <text x="104" y="11" fill="#10b981" fontSize="8" fontFamily="monospace">Active</text>
              </g>
            </g>

            {/* Node 5: CloudWatch Telemetry */}
            <g transform="translate(170, 285)">
              <rect width="180" height="32" rx="6" fill="#070b14" stroke="#10b981" strokeWidth="1" />
              <circle cx="16" cy="16" r="3.5" fill="#10b981" />
              <text x="28" y="16" fill="#f8fafc" fontSize="9" fontFamily="monospace" fontWeight="600">
                Amazon CloudWatch
              </text>
              <text x="28" y="25" fill="#10b981" fontSize="7.5" fontFamily="monospace">
                Metrics • Logs • Alarms
              </text>
            </g>
          </svg>
        </div>

        {/* Pillar tags footer */}
        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800 text-center">
          <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800/80">
            <span className="text-[10px] text-slate-400 block font-mono">IaC Engine</span>
            <span className="text-xs font-semibold text-white">Terraform</span>
          </div>
          <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800/80">
            <span className="text-[10px] text-slate-400 block font-mono">Deployments</span>
            <span className="text-xs font-semibold text-aws-orange">Zero Downtime</span>
          </div>
          <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800/80">
            <span className="text-[10px] text-slate-400 block font-mono">Platform</span>
            <span className="text-xs font-semibold text-cloud-cyan">Kubernetes</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background grid accent */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60" />

      <div className="section-container relative z-10 w-full py-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Details & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs font-mono text-emerald-400 tracking-wide uppercase">
                Available for Engineering Opportunities
              </span>
            </div>

            {/* Name & Designation */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight leading-none mb-3">
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-aws-orange tracking-tight">
                {personalInfo.title}
              </h2>
            </div>

            {/* Professional Tagline */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              {personalInfo.tagline}
            </p>

            {/* Key Pillars Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['AWS Cloud', 'Terraform', 'Kubernetes', 'Docker', 'CI/CD Pipelines'].map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-900 text-slate-300 border border-slate-800"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTAs: View Projects, Download Resume, GitHub, LinkedIn */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                View Projects
              </a>

              {socialLinks.resumeUrl && (
                <a
                  href={socialLinks.resumeUrl}
                  download="Premkumar_Resume_CloudEngineer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <svg className="w-4 h-4 text-aws-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              )}

              {/* GitHub */}
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-navy-900 border border-slate-800 hover:border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-aws-orange/40"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              )}

              {/* LinkedIn */}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-slate-300 hover:text-cloud-cyan bg-navy-900 border border-slate-800 hover:border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-aws-orange/40"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-1">
              <svg className="w-3.5 h-3.5 text-aws-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="lg:col-span-5 flex items-center justify-center w-full">
            <CloudArchitectureVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
