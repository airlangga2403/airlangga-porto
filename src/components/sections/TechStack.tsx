import { motion } from 'motion/react';
import { Section, SectionHeader } from '../ui/Section';
import { useLanguage } from '../../i18n/LanguageContext';

export function TechStack() {
  const { t } = useLanguage();

  const categories = [
    {
      name: t('tech.categories.lang'),
      skills: ["Java (v11, v17)", "Go (Golang)", "TypeScript", "JavaScript", "Python"]
    },
    {
      name: t('tech.categories.framework'),
      skills: ["Spring Boot (v2/v3)", "NestJS", "Node.js/Express", "Fiber (Go)", "Django", "Flask"]
    },
    {
      name: t('tech.categories.db'),
      skills: ["PostgreSQL", "MySQL", "MongoDB", "MSSQL", "Redis", "JPA/Hibernate", "TypeORM", "GORM"]
    },
    {
      name: t('tech.categories.api'),
      skills: ["RESTful API", "GraphQL", "Kafka", "ActiveMQ Artemis", "Spring Security", "JWT", "OAuth2"]
    },
    {
      name: t('tech.categories.devops'),
      skills: ["Docker", "Kubernetes", "Jenkins", "Minio", "SonarQube"]
    },
    {
      name: t('tech.categories.arch'),
      skills: ["Microservices", "Event-Driven", "Hexagonal Architecture", "JUnit", "Mockito", "Jest"]
    }
  ];

  return (
    <Section id="tech-stack" className="bg-surface/30">
      <SectionHeader 
        title={t('tech.title')} 
        subtitle={t('tech.subtitle')}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="glass-card p-6 rounded-2xl relative overflow-hidden group"
          >
            {/* Subtle background glow on hover */}
            <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
            
            <div className="relative z-10">
              <h3 className="text-lg font-mono font-bold text-text-main mb-4 flex items-center gap-2">
                <span className="text-primary">0{categoryIndex + 1}.</span>
                {category.name}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 rounded-md bg-surface border border-border text-xs font-medium text-text-muted hover:text-text-main hover:border-primary/50 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
