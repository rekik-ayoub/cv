import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Sparkles, BookOpen, Clock } from 'lucide-react';
import { cvData } from '../data/cvData';

export const EducationAndCerts = () => {
  const { education } = cvData;

  return (
    <section id="education" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Formation Académique</span>
          </div>
          <h2 className="section-title">
            Parcours Académique & <br />
            <span className="gradient-text">Poursuite du Cycle Ingénieur</span>
          </h2>
          <p className="section-subtitle">
            Élève-Ingénieur en Data & IA à l'IIT (North American Private University) et diplômé en Ingénierie IoT à la Faculté des Sciences de Sfax.
          </p>
        </div>

        <div
          style={{
            maxWidth: '880px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel"
              style={{
                padding: '32px',
                position: 'relative',
                border: idx === 0 ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid var(--border-subtle)',
                background: idx === 0 ? 'linear-gradient(180deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.7) 100%)' : 'var(--bg-card)',
              }}
            >
              {/* Status Header Badge */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '14px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: '600',
                      color: idx === 0 ? 'var(--accent-cyan)' : 'var(--accent-indigo)',
                      background: idx === 0 ? 'rgba(56, 189, 248, 0.15)' : 'rgba(99, 102, 241, 0.12)',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <Calendar size={13} />
                    {edu.period}
                  </span>

                  {idx === 0 && (
                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        color: 'var(--accent-emerald)',
                        background: 'rgba(16, 185, 129, 0.12)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        padding: '3px 10px',
                        borderRadius: '9999px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <Clock size={12} />
                      Cours du Soir
                    </span>
                  )}
                </div>

                <span
                  style={{
                    fontSize: '0.84rem',
                    fontWeight: '600',
                    color: 'var(--accent-amber)',
                  }}
                >
                  ★ {edu.honors}
                </span>
              </div>

              <h3
                style={{
                  fontSize: '1.3rem',
                  color: 'var(--text-primary)',
                  marginBottom: '6px',
                }}
              >
                {edu.degree}
              </h3>

              <div
                style={{
                  fontSize: '1rem',
                  color: 'var(--accent-cyan)',
                  fontWeight: '600',
                  marginBottom: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <BookOpen size={16} />
                <span>{edu.school}</span>
              </div>

              <p
                style={{
                  fontSize: '0.94rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.7',
                }}
              >
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
