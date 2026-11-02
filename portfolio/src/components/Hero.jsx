import { useEffect, useState } from 'react';
import { personalInfo, socialLinks } from '../data/portfolio';

// Official Terraform Logo
function TerraformLogo({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        fill="#844FBA"
        d="M14.67 8.358v6.942l-5.99-3.47V4.887l5.99 3.471zm.685-1.187l5.99-3.471v6.941l-5.99 3.472V7.171zm-7.36 5.864v6.941L2 16.505V9.564l5.995 3.471zm7.36 4.678v6.942l-5.99-3.471v-6.942l5.99 3.471z"
      />
    </svg>
  );
}

// Official Observability / Monitoring Radar Logo
function ObservabilityLogo({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#10b981" strokeWidth="1.8" strokeDasharray="3 2" />
      <path
        d="M6 13l3.5-4.5 3 6 2.5-3.5 3 4"
        stroke="#059669"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2" fill="#059669" />
    </svg>
  );
}

function InfraTopology() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    const id = setInterval(() => setTick((t) => t + 1), 1800);
    return () => clearInterval(id);
  }, []);

  const nodeActiveIndex = tick % 5;

  const nodes = [
    {
      id: 'cloud',
      label: 'AWS Cloud',
      cx: 210,
      cy: 55,
      color: '#e8870a',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            fill="#e8870a"
            d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"
          />
          <path d="M8 14.5c2 1.5 5 1.5 7 0" stroke="#e8870a" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'vpc',
      label: 'VPC',
      cx: 210,
      cy: 145,
      color: '#2563eb',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L3 7v10l9 5 9-5V7l-9-5z"
            stroke="#2563eb"
            strokeWidth="1.8"
            fill="#2563eb"
            fillOpacity="0.12"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="2.8" fill="#2563eb" />
          <path
            d="M12 5v4m0 6v4m-5.5-7.5l3.5 2m4 2l3.5 2"
            stroke="#2563eb"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: 'lb',
      label: 'Load Balancer',
      cx: 210,
      cy: 235,
      color: '#0284c7',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="5" r="2.8" fill="#0284c7" />
          <path d="M12 8v5m0 0l-5.5 4m5.5-4l5.5 4" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
          <circle cx="6.5" cy="19" r="2.2" fill="#0284c7" />
          <circle cx="17.5" cy="19" r="2.2" fill="#0284c7" />
        </svg>
      ),
    },
    {
      id: 'k8s',
      label: 'Kubernetes',
      cx: 210,
      cy: 325,
      color: '#326CE5',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            fill="#326CE5"
            d="M12 2l-1.37.79v1.59l1.37.79 1.37-.79V2.79L12 2zm-5.74 3.31l-1.58.01-.79 1.38.79 1.38 1.58.01.79-1.38-.79-1.4zm11.48 0l-.79 1.39.79 1.38 1.58-.01.79-1.38-.79-1.38-1.58-.01zM12 6.07c-3.27 0-5.93 2.66-5.93 5.93s2.66 5.93 5.93 5.93 5.93-2.66 5.93-5.93S15.27 6.07 12 6.07zm-7.9 4.56l-.79 1.37 1.37.8 1.37-.8-.79-1.37-1.16zm15.8 0l-1.16 0-.79 1.37 1.37.8 1.37-.8-.79-1.37zm-12.13 6.3l-.79 1.38 1.58.01.79-1.39-.79-1.38-1.58.01-.79 1.38zm8.46 0l-.79 1.38 1.58.01.79-1.38-.79-1.39-1.58.01zm-4.23 1.7l-1.37.79 1.37.79 1.37-.79-1.37-.79z"
          />
          <circle cx="12" cy="12" r="2" fill="#ffffff" stroke="#326CE5" strokeWidth="1" />
        </svg>
      ),
    },
    {
      id: 'monitor',
      label: 'CloudWatch',
      cx: 210,
      cy: 415,
      color: '#059669',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#059669" strokeWidth="1.6" strokeDasharray="3 2" />
          <path
            d="M6 13l3.5-4.5 3 6 2.5-3.5 3 4"
            stroke="#059669"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="1.8" fill="#059669" />
        </svg>
      ),
    },
  ];

  const leftNodes = [
    {
      cx: 75,
      cy: 235,
      label: 'EC2',
      color: '#e8870a',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <rect x="5" y="5" width="14" height="14" rx="2.5" fill="#e8870a" fillOpacity="0.2" stroke="#e8870a" strokeWidth="2" />
          <rect x="9" y="9" width="6" height="6" fill="#e8870a" />
          <path d="M9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3M19 9h3m-3 6h3" stroke="#e8870a" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      cx: 75,
      cy: 325,
      label: 'Docker',
      color: '#7c3aed',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <rect x="5" y="6" width="14" height="12" rx="2" fill="#7c3aed" fillOpacity="0.2" stroke="#7c3aed" strokeWidth="2" />
          <path d="M9 6v12M15 6v12M5 12h14" stroke="#7c3aed" strokeWidth="1.5" />
        </svg>
      ),
    },
  ];

  const rightNodes = [
    {
      cx: 345,
      cy: 235,
      label: 'RDS',
      color: '#e8870a',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="6" rx="7" ry="2.5" fill="#e8870a" fillOpacity="0.25" stroke="#e8870a" strokeWidth="1.8" />
          <path d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" stroke="#e8870a" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" stroke="#e8870a" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      cx: 345,
      cy: 325,
      label: 'ECS',
      color: '#7c3aed',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <rect x="5" y="6" width="14" height="12" rx="2" fill="#7c3aed" fillOpacity="0.2" stroke="#7c3aed" strokeWidth="2" />
          <path d="M9 6v12M15 6v12M5 12h14" stroke="#7c3aed" strokeWidth="1.5" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center" aria-hidden="true">
      {/* Top Badge: Terraform (neatly aligned top-right, no text cutoff) */}
      <div className="w-full flex justify-end mb-1 sm:-mb-5 z-20 px-2 sm:px-4">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-purple-200 shadow-lg shadow-purple-500/5 hover:border-purple-300 transition-all">
          <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center flex-shrink-0 shadow-sm">
            <TerraformLogo className="w-5 h-5" />
          </div>
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="font-mono text-xs font-bold text-slate-800">$ terraform apply</span>
              <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.2 rounded">
                ✓ synced
              </span>
            </div>
            <span className="text-[10px] text-slate-500 font-medium">Infrastructure as Code</span>
          </div>
        </div>
      </div>

      {/* Center SVG Topology Canvas */}
      <div className="w-full relative px-2">
        <svg
          viewBox="0 0 420 470"
          className="w-full h-auto drop-shadow-sm"
          role="img"
          aria-label="Cloud infrastructure topology diagram"
        >
          <defs>
            <radialGradient id="glow-orange-l" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e8870a" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#e8870a" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="glow-blue-l" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
            </radialGradient>
            <filter id="node-glow-l">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Ambient background glows */}
          <ellipse cx="210" cy="200" rx="170" ry="190" fill="url(#glow-orange-l)" />
          <ellipse cx="210" cy="340" rx="140" ry="110" fill="url(#glow-blue-l)" />

          {/* Vertical backbone connection lines */}
          {nodes.slice(0, -1).map((n, i) => (
            <line
              key={`vline-${i}`}
              x1={n.cx}
              y1={n.cy + 26}
              x2={nodes[i + 1].cx}
              y2={nodes[i + 1].cy - 26}
              stroke={nodeActiveIndex === i ? n.color : '#bae6fd'}
              strokeWidth={nodeActiveIndex === i ? 2.5 : 1.5}
              strokeDasharray="4 3"
              style={{ transition: 'stroke 0.5s, stroke-width 0.5s' }}
            />
          ))}

          {/* Lateral cross-connection lines */}
          <line x1="184" y1="235" x2="101" y2="235" stroke="#bae6fd" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="236" y1="235" x2="319" y2="235" stroke="#bae6fd" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="184" y1="325" x2="101" y2="325" stroke="#bae6fd" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="236" y1="325" x2="319" y2="325" stroke="#bae6fd" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Side nodes */}
          {[...leftNodes, ...rightNodes].map((n, i) => (
            <g key={`side-${i}`}>
              <circle
                cx={n.cx}
                cy={n.cy}
                r="22"
                fill="white"
                stroke={n.color}
                strokeWidth="1.8"
                strokeOpacity="0.7"
                className="drop-shadow-sm"
              />
              <g transform={`translate(${n.cx - 8}, ${n.cy - 11})`}>{n.icon}</g>
              <text
                x={n.cx}
                y={n.cy + 17}
                textAnchor="middle"
                fontSize="9"
                fill="#334155"
                fontFamily="Inter, sans-serif"
                fontWeight="600"
              >
                {n.label}
              </text>
            </g>
          ))}

          {/* Main spine nodes */}
          {nodes.map((n, i) => {
            const isActive = nodeActiveIndex === i;
            return (
              <g key={n.id}>
                {isActive && (
                  <circle
                    cx={n.cx}
                    cy={n.cy}
                    r="38"
                    fill="none"
                    stroke={n.color}
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                    className="animate-ping"
                  />
                )}

                <circle
                  cx={n.cx}
                  cy={n.cy}
                  r="27"
                  fill="white"
                  stroke={n.color}
                  strokeWidth={isActive ? 2.8 : 1.8}
                  strokeOpacity={isActive ? 1 : 0.6}
                  filter={isActive ? 'url(#node-glow-l)' : undefined}
                  className="drop-shadow-md"
                  style={{ transition: 'stroke-width 0.4s, stroke-opacity 0.4s' }}
                />

                <g transform={`translate(${n.cx - 11}, ${n.cy - 14})`}>{n.icon}</g>

                <text
                  x={n.cx}
                  y={n.cy + 22}
                  textAnchor="middle"
                  fontSize="9.5"
                  fill="#0f172a"
                  fontFamily="Inter, sans-serif"
                  fontWeight="600"
                  opacity={isActive ? 1 : 0.8}
                  style={{ transition: 'opacity 0.4s' }}
                >
                  {n.label}
                </text>
              </g>
            );
          })}

          {/* Animated continuous data packets */}
          {[0, 1, 2].map((i) => (
            <circle key={`packet-${i}`} r="3.5" fill="#e8870a" opacity="0.75">
              <animateMotion
                dur={`${2.6 + i * 0.8}s`}
                repeatCount="indefinite"
                begin={`${i * 0.8}s`}
              >
                <mpath href="#main-backbone-path" />
              </animateMotion>
            </circle>
          ))}
          <path
            id="main-backbone-path"
            d="M 210 55 L 210 145 L 210 235 L 210 325 L 210 415"
            fill="none"
            stroke="none"
          />
        </svg>
      </div>

      {/* Bottom Badge: All Systems Nominal (neatly aligned bottom-left, no text cutoff) */}
      <div className="w-full flex justify-start mt-1 sm:-mt-5 z-20 px-2 sm:px-4">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-emerald-200 shadow-lg shadow-emerald-500/5 hover:border-emerald-300 transition-all">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 relative shadow-sm">
            <ObservabilityLogo className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
          </div>
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="font-sans text-xs font-bold text-slate-800">All Systems Nominal</span>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.2 rounded">
                100%
              </span>
            </div>
            <span className="text-[10px] text-slate-500 font-medium">CloudWatch Monitoring</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const techStack = ['AWS', 'Terraform', 'Kubernetes', 'Docker', 'CI/CD'];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden" aria-label="Hero section">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      {/* Fade to bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50/0 via-sky-50/40 to-sky-50 pointer-events-none" />

      <div className="section-container relative z-10 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left */}
          <div className="flex flex-col gap-6">
            {/* Available pill */}
            <div className="inline-flex items-center gap-2 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-emerald-700 tracking-wide uppercase">
                Available for Opportunities
              </span>
            </div>

            {/* Name */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-semibold gradient-text">
                {personalInfo.title}
              </p>
            </div>

            {/* Headline */}
            <h2 className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed text-balance">
              {personalInfo.headline}
            </h2>

            {/* Summary */}
            <p className="text-slate-500 leading-relaxed max-w-xl">
              {personalInfo.summary}
            </p>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span key={tech} className="badge-orange text-xs font-mono">{tech}</span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#experience"
                onClick={(e) => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-primary"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                View Experience
              </a>
              <a
                href="#skills"
                onClick={(e) => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-secondary"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.347.347A3.995 3.995 0 0012 16a4 4 0 01-2.83-1.17L8.83 14.5" />
                </svg>
                Explore Skills
              </a>
              {socialLinks.resumeUrl && (
                <a href={socialLinks.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Resume
                </a>
              )}
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-slate-400 text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {personalInfo.location}
            </div>
          </div>

          {/* Right: topology with clean, non-overflowing layout */}
          <div className="flex items-center justify-center lg:justify-end w-full">
            <div className="relative animate-float w-full">
              <InfraTopology />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
