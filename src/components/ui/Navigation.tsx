import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.tech'), href: '#tech-stack' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="text-xl font-display font-bold tracking-tighter z-50">
          AP<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-mono text-text-muted hover:text-text-main transition-colors"
            >
              <span className="text-primary/50 mr-1">/</span>
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-3 ml-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-text-main border border-border rounded-md hover:bg-surface-hover transition-colors"
            >
              <Globe size={14} />
              {language === 'en' ? 'EN' : 'ID'}
            </button>
            <a 
              href="/cv-en.pdf"
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-mono font-medium text-primary border border-primary/50 rounded-md hover:bg-primary/10 transition-colors"
            >
              {t('nav.cvEn')}
            </a>
            <a 
              href="/cv-id.pdf"
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-mono font-medium text-accent border border-accent/50 rounded-md hover:bg-accent/10 transition-colors"
            >
              {t('nav.cvId')}
            </a>
          </div>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden z-50">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2 py-1 text-xs font-mono font-medium text-text-main border border-border rounded-md hover:bg-surface-hover transition-colors"
          >
            <Globe size={14} />
            {language === 'en' ? 'EN' : 'ID'}
          </button>
          <button 
            className="text-text-main"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-medium text-text-main hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <a 
                  href="/cv-en.pdf"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2 text-sm font-mono font-medium text-primary border border-primary/50 rounded-md hover:bg-primary/10 transition-colors text-center"
                >
                  {t('nav.cvEn')}
                </a>
                <a 
                  href="/cv-id.pdf"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2 text-sm font-mono font-medium text-accent border border-accent/50 rounded-md hover:bg-accent/10 transition-colors text-center"
                >
                  {t('nav.cvId')}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
