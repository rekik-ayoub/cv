import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Server, 
  Cpu, 
  Sparkles, 
  Palette, 
  Globe, 
  Terminal, 
  Database,
  CheckCircle2,
  Radio,
  Smartphone,
  CircuitBoard,
  Activity,
  Network,
  LayoutDashboard,
  Kanban,
  GitBranch
} from 'lucide-react';
import { cvData } from '../data/cvData';

export const Skills = () => {
  const { skills } = cvData;
  const [activeTab, setActiveTab] = useState('iotEmbedded');

  const tabs = [
    { id: 'iotEmbedded', label: 'IoT & IA Embarquée', icon: Cpu, count: skills.iotEmbedded?.length || 0 },
    { id: 'webMobile', label: 'Web, Mobile & Cloud', icon: Globe, count: skills.webMobile?.length || 0 },
    { id: 'methodologies', label: 'Méthodes & Outils', icon: Kanban, count: skills.methodologies?.length || 0 },
  ];

  return (
    <section id="skills" style={{ position: 'relative' }}>
      <div className="glow-blob glow-blob-3" />
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Code2 size={14} />
            <span>Compétences Clés</span>
          </div>
          <h2 className="section-title">
            Compétences & <span className="gradient-text">Expertise Technique</span>
          </h2>
          <p className="section-subtitle">
            Maîtrise complète de la chaîne IoT : de la conception matérielle (PCB, capteurs, BLE) à l'IA embarquée et aux plateformes Web/Mobile.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '40px',
          }}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: isSelected ? 'var(--gradient-primary)' : 'rgba(255, 255, 255, 0.04)',
                  border: isSelected ? 'none' : '1px solid var(--border-subtle)',
                  color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.92rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: isSelected ? '0 10px 25px -5px rgba(99, 102, 241, 0.5)' : 'none',
                  transition: 'all var(--transition-smooth)',
                }}
              >
                <Icon size={18} />
                <span>{tab.label}</span>
                <span
                  style={{
                    background: isSelected ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.08)',
                    borderRadius: '50%',
                    width: '22px',
                    height: '22px',
                    fontSize: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          <AnimatePresence mode="wait">
            {skills[activeTab] && skills[activeTab].map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-panel"
                style={{
                  padding: '26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          background: 'rgba(99, 102, 241, 0.12)',
                          border: '1px solid rgba(99, 102, 241, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-cyan)',
                        }}
                      >
                        <Sparkles size={18} />
                      </div>
                      <span
                        style={{
                          fontSize: '1.02rem',
                          fontWeight: '700',
                          fontFamily: 'var(--font-heading)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {skill.name}
                      </span>
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.9rem',
                        fontWeight: '700',
                        color: 'var(--accent-cyan)',
                      }}
                    >
                      {skill.level}%
                    </span>
                  </div>

                  {/* Animated Progress Bar */}
                  <div
                    style={{
                      width: '100%',
                      height: '8px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      borderRadius: '9999px',
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                      style={{
                        height: '100%',
                        borderRadius: '9999px',
                        background: 'var(--gradient-primary)',
                        boxShadow: '0 0 12px rgba(56, 189, 248, 0.6)',
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: '18px',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  <CheckCircle2 size={14} color="var(--accent-emerald)" />
                  <span>Maîtrise & Validation Pratique</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
