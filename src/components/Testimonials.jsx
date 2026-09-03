import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareQuote, Star, Quote } from 'lucide-react';
import { cvData } from '../data/cvData';

export const Testimonials = () => {
  const { testimonials } = cvData;

  return (
    <section id="testimonials" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MessageSquareQuote size={14} />
            <span>Client & Colleague Praise</span>
          </div>
          <h2 className="section-title">
            Words From <span className="gradient-text">Collaborators & Leaders</span>
          </h2>
          <p className="section-subtitle">
            What leaders and engineering partners say about our work together.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
          }}
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel"
              style={{
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {[...Array(item.rating)].map((_, sIdx) => (
                      <Star key={sIdx} size={16} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <Quote size={28} color="rgba(99, 102, 241, 0.4)" />
                </div>

                {/* Testimonial body */}
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    fontStyle: 'italic',
                    marginBottom: '28px',
                  }}
                >
                  "{item.text}"
                </p>
              </div>

              {/* Author info */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  paddingTop: '20px',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <img
                  src={item.avatar}
                  alt={item.name}
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--accent-cyan)',
                  }}
                />
                <div>
                  <h4
                    style={{
                      fontSize: '1.05rem',
                      color: 'var(--text-primary)',
                      marginBottom: '2px',
                    }}
                  >
                    {item.name}
                  </h4>
                  <div
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--accent-cyan)',
                    }}
                  >
                    {item.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
