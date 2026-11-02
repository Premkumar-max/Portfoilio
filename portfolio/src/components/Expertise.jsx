import { useReveal } from '../hooks/useReveal';
import { expertise } from '../data/portfolio';

const expertiseIcons = {
  aws: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576a.389.389 0 01.064.208c0 .088-.048.176-.152.264l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 01-.28.104.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 011.246-.157c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.063-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 01-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 01-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 01.24.2.43.43 0 01.071.263v.375c0 .168-.064.256-.184.256a.83.83 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.743.167-1.157.167z"/>
    </svg>
  ),
  iac: (<svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>),
  k8s: (<svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>),
  cicd: (<svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>),
  monitor: (<svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>),
};

const cardColors = [
  { border: 'hover:border-amber-300', icon: 'text-aws-orange bg-amber-50', tag: 'text-amber-700 bg-amber-50 border-amber-200' },
  { border: 'hover:border-purple-300', icon: 'text-purple-600 bg-purple-50', tag: 'text-purple-700 bg-purple-50 border-purple-200' },
  { border: 'hover:border-blue-300',   icon: 'text-blue-600 bg-blue-50',   tag: 'text-blue-700 bg-blue-50 border-blue-200' },
  { border: 'hover:border-emerald-300', icon: 'text-emerald-600 bg-emerald-50', tag: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
  { border: 'hover:border-sky-300',    icon: 'text-sky-600 bg-sky-50',    tag: 'text-sky-700 bg-sky-50 border-sky-200' },
];

function ExpertiseCard({ item, index }) {
  const [ref, revealed] = useReveal();
  const colors = cardColors[index % cardColors.length];

  return (
    <div
      ref={ref}
      className={`glass-card p-6 flex flex-col gap-4 group transition-all duration-300 hover:shadow-md ${colors.border} animate-reveal ${revealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors.icon} group-hover:scale-110 transition-transform duration-200`}>
        {expertiseIcons[item.icon] || expertiseIcons.monitor}
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed flex-1">{item.description}</p>
      </div>
      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-sky-100">
        {item.tech.map((t) => (
          <span key={t} className={`text-xs px-2 py-0.5 rounded font-mono border ${colors.tag}`}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Expertise() {
  const [ref, revealed] = useReveal();

  return (
    <section id="expertise" className="py-24 relative bg-white/50" aria-label="Engineering expertise section">
      <div className="section-container relative">
        <div ref={ref} className={`mb-12 animate-reveal ${revealed ? 'revealed' : ''}`}>
          <p className="text-aws-orange text-sm font-mono tracking-widest uppercase mb-2">// core capabilities</p>
          <h2 className="section-heading">Engineering Expertise</h2>
          <div className="section-divider" />
          <p className="section-subheading max-w-2xl">Areas of depth built through hands-on cloud and DevOps engineering work.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertise.slice(0, 3).map((item, i) => (
            <ExpertiseCard key={item.id} item={item} index={i} />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-5 mt-5 lg:max-w-2xl">
          {expertise.slice(3).map((item, i) => (
            <ExpertiseCard key={item.id} item={item} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
