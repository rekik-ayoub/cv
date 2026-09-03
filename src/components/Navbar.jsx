import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  Sparkles, 
  User, 
  Briefcase, 
  Code, 
  FolderGit2, 
  GraduationCap, 
  Mail 
} from 'lucide-react';

export const Navbar = ({ activeSection, theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'À Propos', href: '#about', icon: User },
    { name: 'Expérience', href: '#experience', icon: Briefcase },
    { name: 'Compétences', href: '#skills', icon: Code },
    { name: 'Projets', href: '#projects', icon: FolderGit2 },
    { name: 'Formation', href: '#education', icon: GraduationCap },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: '20px',
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 20px',
        pointerEvents: 'none',
      }}
    >
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1100px',
          padding: isScrolled ? '10px 24px' : '14px 28px',
          background: isScrolled
            ? 'rgba(11, 17, 32, 0.85)'
            : 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '9999px',
          border: '1px solid var(--border-subtle)',
          boxShadow: isScrolled
            ? '0 20px 40px -10px rgba(0,0,0,0.5), 0 0 20px rgba(99,102,241,0.15)'
            : '0 10px 30px rgba(0,0,0,0.3)',
          transition: 'all 0.4s ease',
        }}
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-heading)',
            fontWeight: '800',
            fontSize: '1.25rem',
            letterSpacing: '-0.03em',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'var(--gradient-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 0 15px rgba(99,102,241,0.5)',
            }}
          >
            <Sparkles size={18} />
          </div>
          <span>
            Ayoub<span className="gradient-text">.Rekik</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? '600' : '500',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  background: isActive ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                  border: isActive ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid transparent',
                }}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Quick Action Theme Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            {theme === 'dark' ? <Sun size={17} color="#f59e0b" /> : <Moon size={17} color="#6366f1" />}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle mobile menu"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '10px',
              width: '38px',
              height: '38px',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              cursor: 'pointer',
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            style={{
              pointerEvents: 'auto',
              position: 'fixed',
              top: '85px',
              left: '20px',
              right: '20px',
              background: 'rgba(15, 23, 42, 0.95)',
              backdropFilter: 'blur(25px)',
              border: '1px solid var(--border-glow)',
              borderRadius: '24px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)',
              zIndex: 99,
            }}
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    textDecoration: 'none',
                    color: isActive ? 'var(--accent-cyan)' : 'var(--text-primary)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: '600',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: isActive ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255,255,255,0.03)',
                  }}
                >
                  <Icon size={18} color={isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)'} />
                  {link.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 868px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
};
