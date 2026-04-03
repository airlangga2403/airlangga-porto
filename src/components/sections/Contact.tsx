import { motion } from 'motion/react';
import { Section } from '../ui/Section';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <Section id="contact" className="border-t border-border/50 bg-surface/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {t('contact.title')} <span className="text-gradient">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="text-text-muted text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            {t('contact.desc')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="mailto:airlanggapermana96@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-text-main text-background font-bold flex items-center gap-2 hover:bg-gray-200 transition-colors w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              {t('contact.sayHi')}
            </motion.a>
            
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/airlangga2403"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-4 rounded-full glass-card hover:bg-surface-hover transition-colors text-text-muted hover:text-text-main"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/airlangga-permana-putra"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-4 rounded-full glass-card hover:bg-surface-hover transition-colors text-text-muted hover:text-text-main"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted font-mono">
        <p>© {new Date().getFullYear()} Airlangga Permana Putra. {t('contact.rights')}</p>
        <p className="flex items-center gap-1">
          {t('contact.built')} <span className="text-primary">{t('contact.precision')}</span>
        </p>
      </div>
    </Section>
  );
}
