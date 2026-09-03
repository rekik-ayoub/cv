import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { cvData } from '../data/cvData';

export const Experience = () => {
  const { experiences } = cvData;

  return (
    <section id="experience" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Career Milestones</span>
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience Journey</span>
          </h2>
          <p className="section-subtitle">
            A track record of engineering leadership, scalable product launches, and collaborative success.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {/* Vertical central glowing line */}
          <div
            style={{
              position: 'absolute',
              left: '24px',
              top: '20px',
              bottom: '20px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--accent-cyan) 0%, var(--accent-indigo) 50%, var(--accent-violet) 100%)',
              opacity: 0.4,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                style={{
                  position: 'relative',
                  paddingLeft: '65px',
                }}
              >
                {/* Timeline node icon */}
                <div
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '24px',
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: '#0a0f1d',
                    border: '2px solid var(--accent-cyan)',
                    boxShadow: '0 0 15px var(--accent-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: 'var(--accent-cyan)',
                    }}
                  />
                </div>

                {/* Content Card */}
                <div
                  className="glass-panel"
                  style={{
                    padding: '32px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Top Header info */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '12px',
                      marginBottom: '14px',
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: '1.4rem',
                          color: 'var(--text-primary)',
                          marginBottom: '4px',
                        }}
                      >
                        {exp.role}
                      </h3>
                      <div
                        style={{
                          fontSize: '1.05rem',
                          color: 'var(--accent-cyan)',
                          fontWeight: '600',
                          fontFamily: 'var(--font-heading)',
                        }}
                      >
                        {exp.company}
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                      <span
                        style={{
                          background: 'rgba(99, 102, 241, 0.15)',
                          border: '1px solid rgba(99, 102, 241, 0.35)',
                          color: 'var(--accent-indigo)',
                          padding: '4px 12px',
                          borderRadius: '9999px',
                          fontSize: '0.8rem',
                          fontWeight: '600',
                        }}
                      >
                        {exp.badge}
                      </span>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          fontSize: '0.85rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Summary paragraph */}
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.98rem',
                      lineHeight: '1.7',
                      marginBottom: '20px',
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Achievements bullet list */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                    {exp.achievements.map((ach, aIdx) => (
                      <div
                        key={aIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          color: 'var(--text-secondary)',
                          fontSize: '0.92rem',
                          lineHeight: '1.5',
                        }}
                      >
                        <CheckCircle2
                          size={16}
                          color="var(--accent-emerald)"
                          style={{ minWidth: '16px', marginTop: '3px' }}
                        />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {exp.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontSize: '0.8rem',
                          padding: '4px 12px',
                          borderRadius: '8px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--text-secondary)',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
