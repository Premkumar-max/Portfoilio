import { useEffect, useState } from 'react';
import { personalInfo, socialLinks } from '../data/portfolio';

// SVG Tech Logos for Hero Visual
function AwsLogo({ className = "w-5 h-5 text-aws-orange" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.74 18.06c-1.84 1.34-4.32 2.05-6.74 2.05-3.37 0-6.42-1.35-8.73-3.61-.18-.18-.04-.42.17-.28 2.48 1.44 5.48 2.31 8.56 2.31 2.15 0 4.51-.53 6.64-1.63.32-.17.55.13.1.41v-.01zM19.98 16.71c-.23-.3-.95-.44-1.48-.48-.52-.04-.84.22-.61.52.79 1.03 2.15 1.57 2.29 1.48.14-.1-.02-1.3-.2-1.52zm-12.87-4.4c0-.79.35-1.41 1.05-1.84.7-.44 1.63-.66 2.79-.66h1.22v-.41c0-.52-.14-.92-.41-1.2-.28-.27-.72-.41-1.33-.41-.45 0-.89.07-1.32.22-.43.14-.78.33-1.05.57-.1.08-.2.07-.27-.04l-.53-.74c-.06-.09-.04-.19.06-.27.4-.33.89-.59 1.48-.77.58-.19 1.18-.28 1.8-.28 1.08 0 1.9.27 2.45.81.56.54.84 1.31.84 2.31v4.47c0 .16.07.23.22.23h.52c.11 0 .19.08.19.19v.76c0 .11-.08.19-.19.19h-.78c-.2 0-.34-.09-.43-.27l-.14-.37c-.52.48-1.24.72-2.14.72-1.01 0-1.81-.27-2.39-.81-.58-.54-.87-1.27-.87-2.2v-.01zm3.06.66c0 .48.16.85.49 1.11.33.26.77.39 1.32.39.52 0 .96-.14 1.33-.41.36-.28.55-.65.55-1.12v-.89h-.98c-.76 0-1.31.11-1.65.34-.34.22-.51.56-.51 1.02v-.01z" />
    </svg>
  );
}

function K8sLogo({ className = "w-5 h-5 text-cloud-cyan" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.5L20 7.2v9.5l-8 4.7-8-4.7V7.2l8-4.7z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 2.5v6.3M20 7.2l-5.4 3.2M20 16.7l-5.4-3.2M12 21.4v-6.2M4 16.7l5.4-3.2M4 7.2l5.4 3.2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function TerraformLogo({ className = "w-5 h-5 text-purple-400" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.67 8.358v6.942l-5.99-3.47V4.887l5.99 3.471zm.685-1.187l5.99-3.471v6.941l-5.99 3.472V7.171zm-7.36 5.864v6.941L2 16.505V9.564l5.995 3.471zm7.36 4.678v6.942l-5.99-3.471v-6.942l5.99 3.471z" />
    </svg>
  );
}

function DockerLogo({ className = "w-5 h-5 text-sky-400" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.714h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.186.186 0 00-.186.186v1.888c0 .102.082.185.186.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.186v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.186v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.186v1.888c0 .102.084.185.186.185m21.677-.001c-.31-.205-1.426-.754-2.828-.404-.377.093-.728.263-1.042.493-.39-.24-.833-.404-1.309-.472-.888-.126-2.008.06-2.678.536v-2.02a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.888c0 .102.083.185.185.185h.063c.007.452.128.916.368 1.341-1.026.496-2.02.775-3.082.775H2.338a2.338 2.338 0 00-2.338 2.338c0 4.103 3.328 6.55 7.424 6.55 6.064 0 10.457-3.486 11.89-8.497.804-.047 2.366-.233 2.946-1.934.03-.09-.028-.184-.118-.184h-.26z" />
    </svg>
  );
}

function CicdLogo({ className = "w-5 h-5 text-emerald-400" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  );
}

// Live Interactive Cloud Architecture Topology Component
function InfraTopology() {
  const [pulseIndex, setPulseIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto select-none">
      {/* Ambient background glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-aws-orange/15 via-cloud-cyan/10 to-purple-500/10 rounded-3xl blur-2xl opacity-50" />

      {/* Topology Window Container */}
      <div className="relative bg-navy-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl backdrop-blur-xl overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-xs font-mono text-slate-400 ml-2">aws-prod-mesh.tf // us-east-1</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              STATUS: HEALTHY 99.99%
            </span>
          </div>
        </div>

        {/* SVG Architecture Mesh */}
        <div className="relative aspect-[16/11] w-full flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 540 360" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Gradients */}
              <linearGradient id="streamOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF9900" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="streamCyan" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0.8" />
              </linearGradient>
              <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* VPC Outer Boundary */}
            <rect
              x="30"
              y="20"
              width="480"
              height="320"
              rx="16"
              fill="#070b14"
              fillOpacity="0.6"
              stroke="#1e293b"
              strokeWidth="1.5"
              strokeDasharray="6 4"
            />
            <text x="45" y="42" fill="#64748b" fontSize="11" fontFamily="monospace" fontWeight="600">
              AWS VPC: 10.0.0.0/16 [Multi-AZ High Availability]
            </text>

            {/* Connecting Pathways */}
            {/* Route 53 to ALB */}
            <path
              d="M270 75 L270 120"
              stroke={pulseIndex === 0 ? "#FF9900" : "#334155"}
              strokeWidth={pulseIndex === 0 ? "2.5" : "1.5"}
              strokeDasharray={pulseIndex === 0 ? "4 3" : "none"}
              className={pulseIndex === 0 ? "animate-flow" : ""}
            />

            {/* ALB to EKS Cluster */}
            <path
              d="M270 160 L160 215"
              stroke={pulseIndex === 1 ? "#38bdf8" : "#334155"}
              strokeWidth={pulseIndex === 1 ? "2.5" : "1.5"}
              strokeDasharray={pulseIndex === 1 ? "4 3" : "none"}
              className={pulseIndex === 1 ? "animate-flow" : ""}
            />

            {/* ALB to ECS Tasks */}
            <path
              d="M270 160 L380 215"
              stroke={pulseIndex === 2 ? "#38bdf8" : "#334155"}
              strokeWidth={pulseIndex === 2 ? "2.5" : "1.5"}
              strokeDasharray={pulseIndex === 2 ? "4 3" : "none"}
              className={pulseIndex === 2 ? "animate-flow" : ""}
            />

            {/* Telemetry stream to CloudWatch */}
            <path
              d="M160 270 L270 305 M380 270 L270 305"
              stroke={pulseIndex === 3 ? "#10b981" : "#1e293b"}
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />

            {/* NODE 1: Route 53 / CloudFront Ingress (Top Center) */}
            <g transform="translate(210, 40)">
              <rect width="120" height="38" rx="8" fill="#0f172a" stroke="#FF9900" strokeWidth="1.5" />
              <circle cx="20" cy="19" r="6" fill="#FF9900" fillOpacity="0.2" />
              <circle cx="20" cy="19" r="3" fill="#FF9900" />
              <text x="35" y="19" fill="#f8fafc" fontSize="10.5" fontFamily="monospace" fontWeight="700">
                Route 53
              </text>
              <text x="35" y="30" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">
                Global Edge DNS
              </text>
            </g>

            {/* NODE 2: Application Load Balancer (Center) */}
            <g transform="translate(200, 120)">
              <rect width="140" height="42" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" filter="url(#glowFilter)" />
              <rect width="140" height="42" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <circle cx="22" cy="21" r="7" fill="#38bdf8" fillOpacity="0.2" />
              <circle cx="22" cy="21" r="3.5" fill="#38bdf8" />
              <text x="38" y="20" fill="#f8fafc" fontSize="11" fontFamily="monospace" fontWeight="700">
                AWS ALB Ingress
              </text>
              <text x="38" y="32" fill="#38bdf8" fontSize="8" fontFamily="monospace">
                SSL / TLS Offload
              </text>
            </g>

            {/* NODE 3: Amazon EKS (Left Cluster) */}
            <g transform="translate(70, 205)">
              <rect width="175" height="68" rx="10" fill="#0f172a" stroke="#818cf8" strokeWidth="1.5" />
              <text x="14" y="22" fill="#818cf8" fontSize="11" fontFamily="monospace" fontWeight="700">
                Amazon EKS Cluster
              </text>
              <text x="14" y="36" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
                Kubernetes Pods &amp; HPA
              </text>
              {/* Pod pills */}
              <g transform="translate(14, 44)">
                <rect width="44" height="16" rx="4" fill="#1e293b" />
                <text x="6" y="11" fill="#38bdf8" fontSize="8" fontFamily="monospace">pod-01</text>
                <rect x="50" width="44" height="16" rx="4" fill="#1e293b" />
                <text x="56" y="11" fill="#38bdf8" fontSize="8" fontFamily="monospace">pod-02</text>
                <rect x="100" width="44" height="16" rx="4" fill="#1e293b" />
                <text x="106" y="11" fill="#10b981" fontSize="8" fontFamily="monospace">HPA ✓</text>
              </g>
            </g>

            {/* NODE 4: Amazon ECS & Fargate (Right Cluster) */}
            <g transform="translate(295, 205)">
              <rect width="175" height="68" rx="10" fill="#0f172a" stroke="#FF9900" strokeWidth="1.5" />
              <text x="14" y="22" fill="#FF9900" fontSize="11" fontFamily="monospace" fontWeight="700">
                Amazon ECS Tasks
              </text>
              <text x="14" y="36" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
                Docker Containers &amp; ECR
              </text>
              {/* Container pills */}
              <g transform="translate(14, 44)">
                <rect width="44" height="16" rx="4" fill="#1e293b" />
                <text x="6" y="11" fill="#FF9900" fontSize="8" fontFamily="monospace">task-a</text>
                <rect x="50" width="44" height="16" rx="4" fill="#1e293b" />
                <text x="56" y="11" fill="#FF9900" fontSize="8" fontFamily="monospace">task-b</text>
                <rect x="100" width="46" height="16" rx="4" fill="#1e293b" />
                <text x="106" y="11" fill="#10b981" fontSize="8" fontFamily="monospace">Active</text>
              </g>
            </g>

            {/* NODE 5: CloudWatch & Prometheus Telemetry (Bottom Center) */}
            <g transform="translate(180, 292)">
              <rect width="180" height="34" rx="8" fill="#070b14" stroke="#10b981" strokeWidth="1.2" />
              <circle cx="16" cy="17" r="4" fill="#10b981" className="animate-pulse" />
              <text x="28" y="17" fill="#f8fafc" fontSize="9.5" fontFamily="monospace" fontWeight="600">
                CloudWatch &amp; Grafana
              </text>
              <text x="28" y="27" fill="#10b981" fontSize="7.5" fontFamily="monospace">
                Metrics • Logs • Proactive Alarms
              </text>
            </g>
          </svg>
        </div>

        {/* Live Metrics Footer Pill */}
        <div className="grid grid-cols-3 gap-2 pt-3 mt-1 border-t border-slate-800 text-center">
          <div className="bg-slate-950/70 p-2 rounded-xl border border-slate-800/80">
            <span className="text-[10px] text-slate-400 block font-mono">Infra as Code</span>
            <span className="text-xs font-bold text-purple-400">Terraform 100%</span>
          </div>
          <div className="bg-slate-950/70 p-2 rounded-xl border border-slate-800/80">
            <span className="text-[10px] text-slate-400 block font-mono">Deploy Strategy</span>
            <span className="text-xs font-bold text-cloud-cyan">Zero-Downtime</span>
          </div>
          <div className="bg-slate-950/70 p-2 rounded-xl border border-slate-800/80">
            <span className="text-[10px] text-slate-400 block font-mono">Avg MTTR</span>
            <span className="text-xs font-bold text-emerald-400">&lt; 15 mins</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const primaryCoreTech = [
    { name: 'AWS Cloud', icon: AwsLogo, color: 'text-aws-orange border-aws-orange/30 bg-aws-orange/10' },
    { name: 'Kubernetes (EKS)', icon: K8sLogo, color: 'text-cloud-cyan border-cloud-cyan/30 bg-cloud-cyan/10' },
    { name: 'Terraform (IaC)', icon: TerraformLogo, color: 'text-purple-400 border-purple-500/30 bg-purple-500/10' },
    { name: 'Docker', icon: DockerLogo, color: 'text-sky-400 border-sky-500/30 bg-sky-500/10' },
    { name: 'CI/CD Pipelines', icon: CicdLogo, color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background patterns and soft glows */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-80" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-aws-orange/10 via-cloud-cyan/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10 w-full py-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio, headline, CTAs, skills */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 w-fit backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono font-medium text-emerald-400 tracking-wide uppercase">
                Available for Cloud &amp; DevOps Engineering Roles
              </span>
            </div>

            {/* Name & Headline */}
            <div>
              <p className="text-sm font-mono text-aws-orange tracking-widest uppercase mb-1">
                // Hello, World! I am
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
                {personalInfo.name}
              </h1>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-aws-orange via-amber-400 to-cloud-cyan">
                {personalInfo.title}
              </h2>
            </div>

            {/* Short Professional Introduction */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl text-balance">
              {personalInfo.summary}
            </p>

            {/* Immediate noticeable core skills badges */}
            <div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                Core Engineering Stack:
              </p>
              <div className="flex flex-wrap gap-2">
                {primaryCoreTech.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <span
                      key={tech.name}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono font-semibold transition-all hover:scale-105 duration-200 cursor-default ${tech.color}`}
                    >
                      <Icon className="w-4 h-4" />
                      {tech.name}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
                  <svg className="w-4 h-4 text-aws-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              )}

              {/* GitHub & LinkedIn Direct Buttons */}
              <div className="flex items-center gap-2 pl-1">
                {socialLinks.github && (
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl text-slate-300 hover:text-white bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 transition-all focus:outline-none focus:ring-2 focus:ring-aws-orange/40"
                    aria-label="GitHub Profile"
                    title="GitHub Profile"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl text-slate-300 hover:text-cloud-cyan bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 transition-all focus:outline-none focus:ring-2 focus:ring-aws-orange/40"
                    aria-label="LinkedIn Profile"
                    title="LinkedIn Profile"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Quick Location & Current Role metadata */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-mono pt-1">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-aws-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-cloud-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {personalInfo.currentRole}
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Cloud Architecture Topology */}
          <div className="lg:col-span-5 flex items-center justify-center w-full">
            <InfraTopology />
          </div>
        </div>

        {/* Subtle scroll down indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-aws-orange transition-colors duration-200 group focus:outline-none"
            aria-label="Scroll to About section"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase text-slate-500 group-hover:text-aws-orange transition-colors">
              Explore Infrastructure
            </span>
            <svg className="w-4 h-4 animate-bounce text-aws-orange/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
