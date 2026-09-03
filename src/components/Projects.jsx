import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  ArrowUpRight,
  Eye
} from 'lucide-react';
import { Icons } from './SocialIcons';
import { cvData } from '../data/cvData';

export const Projects = ({ onSelectProject }) => {
  const { projects } = cvData;
  const [filter, setFilter] = useState('Tous');

  const categories = ['Tous', 'IoT & IA Embarquée', 'Web & Full Stack', 'Mobile'];

  const filteredProjects = filter === 'Tous' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Creations & Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of enterprise SaaS apps, high-speed interactive web portals, and creative 3D platforms.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '45px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                background: filter === cat ? 'rgba(56, 189, 248, 0.18)' : 'rgba(255, 255, 255, 0.04)',
                border: filter === cat ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                color: filter === cat ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                padding: '8px 20px',
                borderRadius: '9999px',
                fontSize: '0.88rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '30px',
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-panel"
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  cursor: 'pointer',
                }}
                onClick={() => onSelectProject(project)}
              >
                {/* Project Image & Overlay */}
                <div
                  style={{
                    position: 'relative',
                    height: '210px',
                    width: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 40%, rgba(11, 17, 32, 0.95) 100%)',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Category Pill */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      background: 'rgba(11, 17, 32, 0.85)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '9999px',
                      padding: '4px 12px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: 'var(--accent-cyan)',
                    }}
                  >
                    {project.category}
                  </span>

                  {/* Metric Tag */}
                  {project.metrics && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '14px',
                        right: '14px',
                        background: 'rgba(99, 102, 241, 0.25)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(99, 102, 241, 0.4)',
                        borderRadius: '9999px',
                        padding: '4px 12px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: '#ffffff',
                      }}
                    >
                      ✨ {project.metrics}
                    </span>
                  )}
                </div>

                {/* Project Details */}
                <div
                  style={{
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-primary)',
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight size={18} color="var(--accent-cyan)" />
                    </h3>

                    <p
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem',
                        lineHeight: '1.6',
                        marginBottom: '20px',
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Pills */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        marginBottom: '20px',
                      }}
                    >
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            fontSize: '0.75rem',
                            padding: '3px 10px',
                            borderRadius: '6px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            color: 'var(--text-secondary)',
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Quick Link Buttons */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '16px',
                        borderTop: '1px solid var(--border-subtle)',
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => onSelectProject(project)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--accent-cyan)',
                          fontSize: '0.85rem',
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          cursor: 'pointer',
                        }}
                      >
                        <Eye size={16} />
                        <span>Quick Deep-Dive</span>
                      </button>

                      <div style={{ display: 'flex', gap: '10px' }}>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            color: 'var(--text-secondary)',
                            transition: 'color 0.2s',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                        >
                          <Icons.Github size={18} />
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            color: 'var(--text-secondary)',
                            transition: 'color 0.2s',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                        >
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
