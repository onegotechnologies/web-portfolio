import React, { useState } from 'react';
import { useInView } from '../../hooks/useInView';

const stackCategories = [
  {
    id: 'core',
    title: 'Core Engineering',
    techs: ['Go', 'Python', 'TypeScript', 'JavaScript', 'C#', 'Java'],
  },
  {
    id: 'web',
    title: 'Web & Product',
    techs: ['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'FastAPI', 'Tailwind CSS'],
  },
  {
    id: 'ai',
    title: 'AI & Intelligent Systems',
    techs: [
      'OpenAI',
      'Anthropic',
      'Google Gemini',
      'Ollama',
      'LangChain',
      'LangGraph',
      'RAG',
      'Vector Search',
      'Embeddings',
      'AI Agents',
      'Function Calling',
      'Tool Use',
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    techs: ['Go', 'Node.js', 'REST APIs', 'GraphQL', 'gRPC', 'WebSockets', 'Microservices', 'Event-Driven Architecture'],
  },
  {
    id: 'data',
    title: 'Databases & Data',
    techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Microsoft SQL Server', 'Redis', 'Elasticsearch', 'OpenSearch', 'Kafka', 'RabbitMQ', 'pgvector'],
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    techs: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Helm', 'Linux', 'Nginx', 'Traefik'],
  },
  {
    id: 'devops',
    title: 'DevOps & Observability',
    techs: ['GitHub Actions', 'GitLab CI/CD', 'Jenkins', 'Prometheus', 'Grafana', 'OpenTelemetry', 'Sentry', 'Elastic Stack', 'Loki'],
  },
  {
    id: 'security',
    title: 'Security',
    techs: ['OAuth 2.0', 'JWT', 'RBAC', 'API Security', 'Encryption', 'Secrets Management', 'OWASP Practices', 'Secure Cloud Architecture'],
  },
];

export const EngineeringStack: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.05 });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section ref={ref} id="stack" className="bg-[#FFFFFF] py-28 lg:py-36 border-b border-[#D9E1EC] scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16">
        <div className={`mb-16 lg:mb-20 grid lg:grid-cols-2 gap-10 items-end reveal ${isInView ? 'visible' : ''}`}>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 bg-[#1264FF]" />
              <span className="font-display text-xs font-semibold text-[#5B667A] tracking-[0.2em] uppercase">
                Engineering Stack
              </span>
            </div>
            <h2 className="font-display font-bold text-[#101828] tracking-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}>
              Engineering Ecosystem.
            </h2>
          </div>
          <p className="font-body text-[#5B667A] text-base lg:text-lg leading-relaxed max-w-lg lg:ml-auto">
            Built with proven technologies, modern infrastructure and intelligent systems chosen around the problem—not the other way around.
          </p>
        </div>

        <div className="border-t border-[#D9E1EC]">
          {stackCategories.map((cat, i) => (
            <div
              key={cat.id}
              className={`group border-b border-[#D9E1EC] py-7 lg:py-9 transition-colors duration-200 ${
                activeCategory === cat.id ? 'bg-[#F7F9FC]' : ''
              } reveal ${isInView ? 'visible' : ''} reveal-delay-${Math.min(i + 1, 4)}`}
              onMouseEnter={() => setActiveCategory(cat.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="grid md:grid-cols-12 gap-6 lg:gap-12 items-start px-2">
                <div className="md:col-span-4 flex items-center gap-3">
                  <span
                    className={`w-1.5 h-1.5 transition-all duration-200 ${
                      activeCategory === cat.id ? 'bg-[#1264FF] scale-125' : 'bg-[#D9E1EC]'
                    }`}
                  />
                  <h3
                    className={`font-display text-base lg:text-lg font-bold tracking-tight transition-colors duration-200 ${
                      activeCategory === cat.id ? 'text-[#1264FF]' : 'text-[#061536]'
                    }`}
                  >
                    {cat.title}
                  </h3>
                </div>

                <div className="md:col-span-8 flex flex-wrap gap-2.5">
                  {cat.techs.map((tech) => (
                    <span
                      key={tech}
                      className={`font-display text-xs md:text-sm px-3 py-1.5 border transition-all duration-200 select-none ${
                        activeCategory === cat.id
                          ? 'border-[#1264FF]/40 bg-white text-[#061536] shadow-2xs hover:border-[#1264FF] hover:text-[#1264FF] hover:-translate-y-0.5'
                          : 'border-[#E2E8F0] bg-[#F7F9FC] text-[#5B667A] hover:border-[#1264FF]/40 hover:text-[#061536]'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

