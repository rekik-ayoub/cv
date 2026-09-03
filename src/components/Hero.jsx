import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Mail, 
  MapPin, 
  Terminal,
  Cpu,
  Globe
} from 'lucide-react';
import { Icons } from './SocialIcons';
import { cvData } from '../data/cvData';

export const Hero = () => {
  const { personal, highlights } = cvData;
  const [typingIndex, setTypingIndex] = useState(0);
  const titles = [
    'Ingénierie des Systèmes Informatiques (IoT / Embarqué)',
    'Développeur IA Embarquée (Edge Impulse / YOLO)',
    'Développeur Applications Wear OS & Mobile',
    'Concepteur Systèmes Intelligents & PCB'
  ];
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullTitle = titles[typingIndex % titles.length];
    const typingSpeed = isDeleting ? 35 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullTitle.substring(0, currentText.length + 1));
        if (currentText === fullTitle) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setCurrentText(fullTitle.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setTypingIndex((prev) => prev + 1);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, typingIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '130px',
        paddingBottom: '80px',
        position: 'relative',
      }}
    >
      <div className="glow-blob glow-blob-1" />
      <div className="glow-blob glow-blob-2" />

      <div className="container" style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '50px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Intro & Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status Pill Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                borderRadius: '9999px',
                color: 'var(--accent-emerald)',
                fontSize: '0.85rem',
                fontWeight: '600',
                marginBottom: '24px',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--accent-emerald)',
                  boxShadow: '0 0 10px var(--accent-emerald)',
                  display: 'inline-block',
                }}
              />
              {personal.status}
            </div>

            {/* Main Greeting & Title */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                lineHeight: 1.1,
                marginBottom: '16px',
                fontWeight: 800,
              }}
            >
              Bonjour, je suis <br />
              <span className="gradient-text">{personal.fullName}</span>
            </h1>

            {/* Dynamic Typing Title */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: 'clamp(1.1rem, 2.3vw, 1.6rem)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                color: 'var(--accent-cyan)',
                minHeight: '2.5rem',
                marginBottom: '20px',
              }}
            >
              <Cpu size={24} color="var(--accent-cyan)" />
              <span>{currentText}</span>
              <span
                style={{
                  display: 'inline-block',
                  width: '3px',
                  height: '1.4em',
                  background: 'var(--accent-cyan)',
                  animation: 'pulseGlow 1s infinite',
                }}
              />
            </div>

            {/* Tagline / Bio */}
            <p
              style={{
                fontSize: '1.08rem',
                color: 'var(--text-secondary)',
                maxWidth: '560px',
                lineHeight: 1.7,
                marginBottom: '36px',
              }}
            >
              {personal.tagline}
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'center',
                marginBottom: '40px',
              }}
            >
              <a href="#projects" className="btn-primary">
                <span>Voir mes Projets Réalisés</span>
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail size={18} />
                <span>Me Contacter</span>
              </a>
            </div>

            {/* Languages & Location */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="var(--accent-indigo)" />
                <span>{personal.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <Globe size={16} color="var(--accent-cyan)" />
                <span>Langues :</span>
                {personal.languages?.map((lang, lIdx) => (
                  <span
                    key={lIdx}
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      padding: '2px 10px',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Holographic Avatar Frame with User Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '440px',
              }}
            >
              {/* Outer decorative orbit ring */}
              <div
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  right: '-20px',
                  bottom: '-20px',
                  border: '1px dashed rgba(99, 102, 241, 0.35)',
                  borderRadius: '32px',
                  pointerEvents: 'none',
                  animation: 'pulseGlow 4s ease-in-out infinite',
                }}
              />

              {/* Main Card Container */}
              <div
                className="glass-panel"
                style={{
                  padding: '30px',
                  borderRadius: '28px',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.85) 100%)',
                }}
              >
                {/* Visual Avatar Graphic */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    marginBottom: '24px',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '92px',
                      height: '92px',
                      borderRadius: '24px',
                      padding: '3px',
                      background: 'var(--gradient-primary)',
                      boxShadow: '0 0 25px rgba(99, 102, 241, 0.4)',
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '21px',
                        background: '#0a0f1d',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                      }}
                    >
                      <img
                        src={personal.avatar}
                        alt={personal.fullName}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center 15%',
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <h2
                      style={{
                        fontSize: '1.4rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '4px',
                      }}
                    >
                      {personal.fullName}
                    </h2>
                    <span
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--accent-cyan)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      Licence IoT & Embedded Systems
                    </span>
                  </div>
                </div>

                {/* Interactive Code Mockup */}
                <div
                  style={{
                    background: '#040711',
                    borderRadius: '16px',
                    padding: '16px 20px',
                    border: '1px solid rgba(255,255,255,0.06)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.84rem',
                    lineHeight: '1.6',
                    color: '#e2e8f0',
                    boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.6)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      gap: '6px',
                      marginBottom: '12px',
                    }}
                  >
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                  </div>
                  <div style={{ color: 'var(--accent-indigo)' }}>// Profil Ingénierie IoT & IA</div>
                  <div>
                    <span style={{ color: '#f43f5e' }}>const </span>
                    <span style={{ color: '#38bdf8' }}>speciality </span>= [
                  </div>
                  <div style={{ paddingLeft: '16px', color: '#a855f7' }}>
                    "IoT & Capteurs BLE", "IA Embarquée (Edge Impulse/YOLO)",
                  </div>
                  <div style={{ paddingLeft: '16px', color: '#a855f7' }}>
                    "Conception Cartes PCB", "Wear OS & Android", "Laravel"
                  </div>
                  <div>];</div>
                  <div style={{ marginTop: '8px' }}>
                    <span style={{ color: '#10b981' }}>return </span>
                    <span style={{ color: '#fbbf24' }}>innovateSmartSolutions</span>(speciality);
                  </div>
                </div>

                {/* Floating Micro Badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute',
                    bottom: '15px',
                    right: '15px',
                    background: 'rgba(15, 23, 42, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(56, 189, 248, 0.4)',
                    padding: '8px 14px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
                  }}
                >
                  <Sparkles size={16} color="var(--accent-amber)" />
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#fff' }}>
                    Spécialiste IoT & Edge AI
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlight Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            marginTop: '80px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
          }}
        >
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '24px 20px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  fontSize: '2.1rem',
                  fontWeight: '800',
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--text-primary)',
                  marginBottom: '4px',
                }}
                className="gradient-text-cyan"
              >
                {item.value}
              </div>
              <div
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  fontWeight: '500',
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
