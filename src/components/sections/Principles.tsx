import { motion } from 'motion/react';
import { Section, SectionHeader } from '../ui/Section';
import { Maximize2, ShieldAlert, ActivitySquare, Zap } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export function Principles() {
  const { t } = useLanguage();

  const principles = [
    {
      title: t('principles.p1.title'),
      description: t('principles.p1.desc'),
      icon: <Maximize2 className="w-8 h-8" />,
      color: "text-blue-400"
    },
    {
      title: t('principles.p2.title'),
      description: t('principles.p2.desc'),
      icon: <ShieldAlert className="w-8 h-8" />,
      color: "text-rose-400"
    },
    {
      title: t('principles.p3.title'),
      description: t('principles.p3.desc'),
      icon: <Zap className="w-8 h-8" />,
      color: "text-amber-400"
    },
    {
      title: t('principles.p4.title'),
      description: t('principles.p4.desc'),
      icon: <ActivitySquare className="w-8 h-8" />,
      color: "text-emerald-400"
    }
  ];

  return (
    <Section id="principles">
      <SectionHeader 
        title={t('principles.title')} 
        subtitle={t('principles.subtitle')}
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {principles.map((principle, index) => (
          <motion.div
            key={principle.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group"
          >
            <div className={`mb-6 p-4 rounded-full bg-surface border border-border group-hover:scale-110 transition-transform duration-300 ${principle.color}`}>
              {principle.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{principle.title}</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              {principle.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
