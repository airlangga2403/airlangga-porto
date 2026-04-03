import { motion } from 'motion/react';
import { Section, SectionHeader } from '../ui/Section';
import { Database, Train, Building2, Landmark, Plane } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.p1.title'),
      client: t('projects.p1.client'),
      period: t('projects.p1.period'),
      description: t('projects.p1.desc'),
      tech: ["Java 17", "Spring Boot 3", "Kafka", "Redis", "MSSQL", "JPA", "Docker"],
      icon: <Building2 className="w-6 h-6" />,
      color: "from-blue-500/20 to-cyan-500/20",
      border: "group-hover:border-blue-500/50"
    },
    {
      title: t('projects.p2.title'),
      client: t('projects.p2.client'),
      period: t('projects.p2.period'),
      description: t('projects.p2.desc'),
      tech: ["Java 17", "Spring Boot 3", "PostgreSQL 16", "Spring Security", "Docker"],
      icon: <Train className="w-6 h-6" />,
      color: "from-purple-500/20 to-pink-500/20",
      border: "group-hover:border-purple-500/50"
    },
    {
      title: t('projects.p3.title'),
      client: t('projects.p3.client'),
      period: t('projects.p3.period'),
      description: t('projects.p3.desc'),
      tech: ["NestJS v10", "TypeScript", "TypeORM", "PostgreSQL 16", "Jest"],
      icon: <Database className="w-6 h-6" />,
      color: "from-emerald-500/20 to-teal-500/20",
      border: "group-hover:border-emerald-500/50"
    },
    {
      title: t('projects.p4.title'),
      client: t('projects.p4.client'),
      period: t('projects.p4.period'),
      description: t('projects.p4.desc'),
      tech: ["Spring Boot 2", "Java 11", "PostgreSQL 11", "Artemis v2", "Kubernetes"],
      icon: <Landmark className="w-6 h-6" />,
      color: "from-amber-500/20 to-orange-500/20",
      border: "group-hover:border-amber-500/50"
    },
    {
      title: t('projects.p5.title'),
      client: t('projects.p5.client'),
      period: t('projects.p5.period'),
      description: t('projects.p5.desc'),
      tech: ["Java 17", "Spring Boot 3", "PostgreSQL", "Firebase FCM", "WebSocket"],
      icon: <Plane className="w-6 h-6" />,
      color: "from-indigo-500/20 to-blue-500/20",
      border: "group-hover:border-indigo-500/50"
    }
  ];

  return (
    <Section id="projects">
      <SectionHeader 
        title={t('projects.title')} 
        subtitle={t('projects.subtitle')}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`glass-card rounded-2xl p-8 group relative overflow-hidden border border-border transition-colors duration-300 ${project.border}`}
          >
            {/* Animated Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-xl bg-surface/80 backdrop-blur-sm border border-border text-text-main">
                  {project.icon}
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                    {project.period}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm font-mono text-accent mb-4">{project.client}</p>
              
              <p className="text-text-muted text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-surface border border-border text-text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
