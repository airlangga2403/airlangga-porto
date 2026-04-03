import { motion } from 'motion/react';
import { Section, SectionHeader } from '../ui/Section';
import { Server, Database, Workflow, Layers } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export function About() {
  const { t } = useLanguage();

  const focusAreas = [
    {
      title: t('about.focus.backend'),
      description: t('about.focus.backendDesc'),
      icon: <Layers className="w-6 h-6 text-accent" />
    },
    {
      title: t('about.focus.event'),
      description: t('about.focus.eventDesc'),
      icon: <Workflow className="w-6 h-6 text-primary" />
    },
    {
      title: t('about.focus.db'),
      description: t('about.focus.dbDesc'),
      icon: <Database className="w-6 h-6 text-emerald-400" />
    },
    {
      title: t('about.focus.infra'),
      description: t('about.focus.infraDesc'),
      icon: <Server className="w-6 h-6 text-amber-400" />
    }
  ];

  return (
    <Section id="about">
      <SectionHeader 
        title={t('about.title')} 
        subtitle={t('about.subtitle')}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose prose-invert max-w-none"
          >
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              {t('about.desc1')}
            </p>
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              {t('about.desc2')}
            </p>
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              {t('about.desc3')}
            </p>
          </motion.div>
        </div>
        
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 rounded-xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="mb-4 p-3 rounded-lg bg-surface inline-block">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{area.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
