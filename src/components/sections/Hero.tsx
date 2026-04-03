import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Terminal, Server, Database, ArrowRight, Workflow, Box, FileText } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-sm font-mono text-primary mb-6"
            >
              <Terminal size={14} />
              <span>System.out.println("Hello, World!");</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 leading-tight"
            >
              Airlangga <br />
              <span className="text-gradient">Permana Putra</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl font-medium text-text-main mb-4"
            >
              {t('hero.title')}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-text-muted text-base md:text-lg mb-8 max-w-xl leading-relaxed"
            >
              {t('hero.desc')}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-6"
            >
              <a href="#projects" className="px-6 py-3 rounded-lg bg-text-main text-background font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                {t('hero.explore')} <ArrowRight size={18} />
              </a>
              <a href="#contact" className="px-6 py-3 rounded-lg border border-border font-medium hover:bg-surface-hover transition-colors text-center">
                {t('hero.contact')}
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-row flex-wrap gap-3"
            >
              <a href="/cv-en.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg glass-card text-xs sm:text-sm font-medium hover:bg-surface-hover transition-colors flex items-center justify-center gap-2 text-primary border border-primary/20">
                <FileText size={16} /> {t('hero.downloadEn')}
              </a>
              <a href="/cv-id.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg glass-card text-xs sm:text-sm font-medium hover:bg-surface-hover transition-colors flex items-center justify-center gap-2 text-accent border border-accent/20">
                <FileText size={16} /> {t('hero.downloadId')}
              </a>
            </motion.div>
          </div>

          {/* Right Content - Abstract Tech Visualization */}
          <div className="relative h-[500px] hidden lg:block">
            <FloatingIcon icon={<div className="flex flex-col items-center gap-1"><Server size={24} /><span className="text-[10px] font-mono">Spring Boot</span></div>} delay={0} x="20%" y="20%" />
            <FloatingIcon icon={<div className="flex flex-col items-center gap-1"><Workflow size={24} /><span className="text-[10px] font-mono">Kafka</span></div>} delay={1} x="70%" y="30%" />
            <FloatingIcon icon={<div className="flex flex-col items-center gap-1"><Box size={24} /><span className="text-[10px] font-mono">Docker</span></div>} delay={2} x="40%" y="60%" />
            <FloatingIcon icon={<div className="flex flex-col items-center gap-1"><Database size={24} /><span className="text-[10px] font-mono">PostgreSQL</span></div>} delay={1.5} x="80%" y="70%" />
            
            {/* Connecting lines SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))' }}>
              <motion.path 
                d="M 150 150 Q 250 250 300 350 T 450 400" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
              />
              <motion.path 
                d="M 400 200 Q 300 300 300 350 T 100 450" 
                fill="none" 
                stroke="#8b5cf6" 
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingIcon({ icon, delay, x, y }: { icon: ReactNode, delay: number, x: string, y: string }) {
  return (
    <motion.div
      className="absolute p-4 rounded-xl glass-card text-primary shadow-[0_0_30px_rgba(59,130,246,0.2)]"
      style={{ left: x, top: y }}
      animate={{ 
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ 
        duration: 5, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: delay 
      }}
    >
      {icon}
    </motion.div>
  );
}
