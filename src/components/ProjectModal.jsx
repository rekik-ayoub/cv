import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, CheckCircle2, Layers } from 'lucide-react';
import { Icons } from './SocialIcons';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(4, 7, 17, 0.85)',
            backdropFilter: 'blur(16px)',
          }}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'relative',
            background: 'rgba(15, 23, 42, 0.95)',
            border: '1px solid var(--border-glow)',
            borderRadius: '24px',
            maxWidth: '720px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '32px',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9)',
            zIndex: 201,
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={20} />
          </button>

          {/* Modal Header */}
          <div style={{ marginBottom: '20px' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: '600',
                color: 'var(--accent-cyan)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {project.category}
            </span>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginTop: '4px' }}>
              {project.title}
            </h3>
          </div>

          {/* Image */}
          <div
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              height: '260px',
              marginBottom: '24px',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Detailed Paragraph */}
          <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
            Architecture & Highlights
          </h4>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '0.98rem',
              lineHeight: '1.7',
              marginBottom: '24px',
            }}
          >
            {project.details || project.description}
          </p>

          {/* Tech tags */}
          <div style={{ marginBottom: '28px' }}>
            <h5 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
              TECHNOLOGIES EMPLOYED
            </h5>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.85rem',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    background: 'rgba(99, 102, 241, 0.12)',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action links */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'flex-end',
              paddingTop: '20px',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '10px 20px', fontSize: '0.9rem' }}
            >
              <Icons.Github size={16} />
              <span>Source Repository</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '0.9rem' }}
            >
              <span>Launch Live App</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
