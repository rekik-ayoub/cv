import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Lightbulb, 
  Cpu, 
  ShieldCheck, 
  Flame, 
  Code2, 
  Radio,
  Layers,
  GraduationCap,
  Sparkles,
  Moon
} from 'lucide-react';
import { cvData } from '../data/cvData';

export const About = () => {
  const { personal } = cvData;

  const coreValues = [
    {
      title: "IA Embarquée & Data Science",
      desc: "Déploiement de modèles intelligents (Edge Impulse, YOLO) et approfondissement en Data Science & Deep Learning à l'IIT.",
      icon: Cpu,
      color: "var(--accent-cyan)",
    },
    {
      title: "Internet des Objets (IoT) & BLE",
      desc: "Balises BLE, protocoles MQTT/HTTP, capteurs ultrasoniques et firmware optimisé basse consommation.",
      icon: Radio,
      color: "var(--accent-indigo)",
    },
    {
      title: "Conception PCB & Matériel",
      desc: "Schémas électroniques, choix rigoureux des composants et réalisation de prototypes connectés complets.",
      icon: Layers,
      color: "var(--accent-amber)",
    },
    {
      title: "Disponibilité Professionnelle",
      desc: "Études d'ingénieur suivies en cours du soir (IIT), garantissant une disponibilité complète pour des missions ou emplois en journée.",
      icon: Moon,
      color: "var(--accent-emerald)",
    },
  ];

  return (
    <section id="about" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <User size={14} />
            <span>À Propos de Moi</span>
          </div>
          <h2 className="section-title">
            Ingénierie IoT, Data & <br />
            <span className="gradient-text">Intelligence Artificielle</span>
          </h2>
          <p className="section-subtitle">
            Titulaire d'une Licence en Ingénierie des Systèmes Informatiques (IoT) & étudiant en cycle ingénieur Data & IA à l'IIT.
          </p>
        </div>

        {/* Story & Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            alignItems: 'stretch',
          }}
        >
          {/* Main Story Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel"
            style={{
              padding: '36px',
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
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--accent-cyan)',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  marginBottom: '16px',
                }}
              >
                <Code2 size={20} />
                <span>Mon Parcours & Poursuite d'Études</span>
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '16px',
                  color: 'var(--text-primary)',
                  lineHeight: 1.3,
                }}
              >
                De l'IoT embarqué vers la Data Science et l'IA avancée.
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  lineHeight: '1.8',
                  marginBottom: '20px',
                }}
              >
                {personal.bio}
              </p>

              {/* Special IIT Night Course Notice Callout */}
              <div
                style={{
                  background: 'rgba(99, 102, 241, 0.1)',
                  border: '1px solid rgba(99, 102, 241, 0.35)',
                  borderRadius: '16px',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  marginTop: '10px',
                  marginBottom: '10px',
                }}
              >
                <GraduationCap size={24} color="var(--accent-cyan)" style={{ minWidth: '24px', marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    Cycle Ingénieur en Cours du Soir — IIT (North American University)
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Spécialité <strong>Data & Intelligence Artificielle</strong>. Ce format en cours du soir me permet d'être <strong>pleinement opérationnel et disponible à 100%</strong> pour une activité professionnelle en journée.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginTop: '30px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <span className="glass-pill">📍 {personal.location}</span>
              <span className="glass-pill">🎓 Ingénieur Data & IA (IIT)</span>
              <span className="glass-pill">🌙 Cours du Soir (Dispo Journée)</span>
              <span className="glass-pill">🤖 Edge AI & YOLO</span>
            </div>
          </motion.div>

          {/* Core Values 2x2 Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
            }}
          >
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-panel"
                  style={{
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    transition: 'all var(--transition-smooth)',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '18px',
                      color: value.color,
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <h4
                    style={{
                      fontSize: '1.15rem',
                      marginBottom: '10px',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {value.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                    }}
                  >
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
