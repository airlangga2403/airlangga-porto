import { motion } from 'motion/react';
import { Section, SectionHeader } from '../ui/Section';
import { Briefcase, GraduationCap, Users } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export function Experience() {
  const { t } = useLanguage();

  const workExperience = [
    {
      title: t('experience.padepokan.title'),
      company: t('experience.padepokan.company'),
      location: t('experience.padepokan.location'),
      period: t('experience.padepokan.period'),
      points: t('experience.padepokan.points') as unknown as string[]
    }
  ];

  const orgExperience = [
    {
      title: t('experience.hima.title'),
      company: t('experience.hima.company'),
      location: t('experience.hima.location'),
      period: t('experience.hima.period'),
      points: t('experience.hima.points') as unknown as string[]
    }
  ];

  const education = [
    {
      degree: t('experience.binus.degree'),
      school: t('experience.binus.school'),
      period: t('experience.binus.period'),
      details: t('experience.binus.details')
    },
    {
      degree: t('experience.telkom.degree'),
      school: t('experience.telkom.school'),
      period: t('experience.telkom.period'),
      details: t('experience.telkom.details')
    },
    {
      degree: t('experience.bangkit.degree'),
      school: t('experience.bangkit.school'),
      period: t('experience.bangkit.period'),
      details: t('experience.bangkit.details')
    }
  ];

  return (
    <Section id="experience">
      <SectionHeader 
        title={t('experience.title')} 
        subtitle={t('experience.subtitle')}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Work & Org Experience */}
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-primary">
              <Briefcase className="w-6 h-6" /> {t('experience.workTitle')}
            </h3>
            <div className="space-y-8">
              {workExperience.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l border-border"
                >
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  <h4 className="text-xl font-bold text-text-main">{exp.title}</h4>
                  <div className="text-primary font-medium mb-1">{exp.company}</div>
                  <div className="text-sm text-text-muted font-mono mb-4">{exp.period} | {exp.location}</div>
                  <ul className="space-y-2 text-text-muted text-sm leading-relaxed list-disc ml-4">
                    {Array.isArray(exp.points) && exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-emerald-400">
              <Users className="w-6 h-6" /> {t('experience.orgTitle')}
            </h3>
            <div className="space-y-8">
              {orgExperience.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l border-border"
                >
                  <div className="absolute w-4 h-4 bg-emerald-400 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                  <h4 className="text-xl font-bold text-text-main">{exp.title}</h4>
                  <div className="text-emerald-400 font-medium mb-1">{exp.company}</div>
                  <div className="text-sm text-text-muted font-mono mb-4">{exp.period} | {exp.location}</div>
                  <ul className="space-y-2 text-text-muted text-sm leading-relaxed list-disc ml-4">
                    {Array.isArray(exp.points) && exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Education */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-accent">
            <GraduationCap className="w-6 h-6" /> {t('experience.eduTitle')}
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l border-border"
              >
                <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                <h4 className="text-xl font-bold text-text-main">{edu.degree}</h4>
                <div className="text-accent font-medium mb-1">{edu.school}</div>
                <div className="text-sm text-text-muted font-mono mb-3">{edu.period}</div>
                <p className="text-text-muted text-sm leading-relaxed">
                  {edu.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
