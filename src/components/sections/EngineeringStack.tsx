import React, { useState } from 'react';
import { useInView } from '../../hooks/useInView';

const stackCategories = [
  {
    id: 'core',
    title: 'Core Engineering',
    techs: ['Go', 'Python', 'TypeScript', 'JavaScript', 'C#', 'Java']
  },
  {
    id: 'web',
    title: 'Web & Product',
    techs: ['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'FastAPI', 'Tailwind CSS']
  },
  {
    id: 'ai',
    title: 'AI & Intelligent Systems',
    techs: ['OpenAI', 'Anthropic', 'Google Gemini', 'Ollama', 'LangChain', 'LangGraph', 'RAG', 'Vector Search', 'Embeddings', 'AI Agents', 'Function Calling', 'Tool Use']
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    techs: ['Go', 'Node.js', 'REST APIs', 'GraphQL', 'gRPC', 'WebSockets', 'Microservices', 'Event-Driven Architecture']
  },
  {
    id: 'data',
    title: 'Databases & Data',
    techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Microsoft SQL Server', 'Redis', 'Elasticsearch', 'OpenSearch', 'Kafka', 'RabbitMQ', 'pgvector']
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    techs: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Helm', 'Linux', 'Nginx', 'Traefik']
  },
  {
    id: 'devops',
    title: 'DevOps & Observability',
    techs: ['GitHub Actions', 'GitLab CI/CD', 'Jenkins', 'Prometheus', 'Grafana', 'OpenTelemetry', 'Sentry', 'Elastic Stack', 'Loki']
  },
  {
    id: 'security',
    title: 'Security',
    techs: ['OAuth 2.0', 'JWT', 'RBAC', 'API Security', 'Encryption', 'Secrets Management', 'OWASP Practices', 'Secure Cloud Architecture']
  }
];

export const EngineeringStack: React.FC = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.05 });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section ref={ref} id="stack" className="bg-[#050505] py-28 lg:py-40 border-t border-white/[0.08]">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16">
        <div className={`mb-16 lg:mb-24 grid lg:grid-cols-2 gap-12 items-end reveal ${isInView ? 'visible' : ''}`}>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF3C]" />
              <span className="font-display text-xs font-medium text-[#8A8A86] tracking-[0.2em] uppercase">
                Engineering Stack
              </span>
            </div>
            <h2 className="font-display font-bold text-white tracking-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Engineering Ecosystem.
            </h2>
          </div>
          <p className="font-body text-[#8A8A86] text-lg leading-relaxed max-w-lg lg:ml-auto">
            Built with proven technologies, modern infrastructure and intelligent systems chosen around the problem—not the other way around.
          </p>
        </div>

        <div className="space-y-0 border-t border-white/[0.08]">
          {stackCategories.map((cat, i) => (
            <div 
              key={cat.id} 
              className={`group border-b border-white/[0.08] py-8 lg:py-12 reveal ${isInView ? 'visible' : ''} reveal-delay-${Math.min(i + 1, 4)}`}
              onMouseEnter={() => setActiveCategory(cat.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="grid md:grid-cols-[300px,1fr] gap-8 items-start">
                <h3 className={`font-display text-lg lg:text-xl font-medium tracking-tight transition-colors duration-300 ${activeCategory === cat.id ? 'text-[#B7FF3C]' : 'text-white'}`}>
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-x-6 gap-y-4">
                  {cat.techs.map((tech) => (
                    <span 
                      key={tech} 
                      className={`font-body text-sm transition-colors duration-300 ${activeCategory === cat.id ? 'text-white' : 'text-[#8A8A86]'}`}
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
