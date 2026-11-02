import { useReveal } from '../hooks/useReveal';
import { socialLinks } from '../data/portfolio';

function ContactLink({ href, icon, label, value }) {
  if (!value) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card p-5 flex items-center gap-4 group hover:shadow-md hover:border-amber-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-aws-orange/40 rounded-2xl"
      aria-label={label}
    >
      <div className="w-10 h-10 rounded-xl bg-amber-50 text-aws-orange border border-amber-200 flex items-center justify-center group-hover:scale-110 transition-all duration-200">
        {icon}
      </div>
      <div>
        <p className="text-xs text-slate-400 uppercase tracking-wide">{label}</p>
        <p className="text-sm text-slate-700 group-hover:text-aws-orange transition-colors font-medium">{value}</p>
      </div>
      <svg className="w-4 h-4 text-slate-300 group-hover:text-aws-orange ml-auto transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  );
}

export default function Contact() {
  const [ref, revealed] = useReveal();

  return (
    <section id="contact" className="py-24 relative bg-white/50" aria-label="Contact section">
      <div className="section-container relative">
        <div ref={ref} className={`animate-reveal ${revealed ? 'revealed' : ''}`}>
          <div className="mb-12">
            <p className="text-aws-orange text-sm font-mono tracking-widest uppercase mb-2">// get in touch</p>
            <h2 className="section-heading">Let's Connect</h2>
            <div className="section-divider" />
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start max-w-4xl">
            {/* Left */}
            <div className="flex flex-col gap-6">
              <p className="text-slate-600 text-base leading-relaxed">
                Interested in discussing cloud infrastructure, DevOps, AWS, or engineering opportunities? Let's connect.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                I'm open to conversations about AWS cloud roles, DevOps positions, cloud infrastructure projects, and engineering collaboration.
              </p>
              <div className="glass-card p-5 border-blue-200 bg-gradient-to-br from-white to-sky-50">
                <p className="text-xs font-mono text-blue-500 mb-3">$ expertise --summary</p>
                <ul className="flex flex-col gap-2">
                  {[
                    'AWS Cloud Infrastructure & Operations',
                    'Terraform & Infrastructure as Code',
                    'Kubernetes / Docker / EKS',
                    'CI/CD Pipeline Automation',
                    'Monitoring & Observability',
                    'Production Support & Incident Management',
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-600">
                      <span className="text-blue-500 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: contact links */}
            <div className="flex flex-col gap-3">
              <ContactLink
                href={`mailto:${socialLinks.email}`}
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                label="Email"
                value={socialLinks.email}
              />
              <ContactLink
                href={socialLinks.linkedin}
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                }
                label="LinkedIn"
                value={socialLinks.linkedin ? 'linkedin.com/in/prem-kumar-5abba9321' : ''}
              />
              <ContactLink
                href={socialLinks.github}
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                }
                label="GitHub"
                value={socialLinks.github ? 'GitHub Profile' : ''}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
