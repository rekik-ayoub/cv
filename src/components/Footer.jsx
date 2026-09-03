import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { cvData } from '../data/cvData';

export const Footer = () => {
  const { personal } = cvData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'rgba(6, 9, 19, 0.8)',
        backdropFilter: 'blur(20px)',
        padding: '50px 0 30px 0',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          {/* Logo / Brand */}
          <div>
            <a
              href="#hero"
              style={{
                textDecoration: 'none',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
                fontWeight: '800',
                fontSize: '1.4rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'var(--gradient-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}
              >
                <Sparkles size={16} />
              </div>
              <span>
                Ayoub<span className="gradient-text">.dev</span>
              </span>
            </a>
            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.88rem',
                marginTop: '6px',
              }}
            >
              {personal.title}
            </p>
          </div>

          {/* Quick Back to top button */}
          <button
            onClick={scrollToTop}
            className="btn-secondary"
            style={{
              padding: '10px 18px',
              fontSize: '0.85rem',
            }}
          >
            <span>Back to Summit</span>
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} {personal.fullName}. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Designed & Engineered with</span>
            <Heart size={14} fill="#f43f5e" color="#f43f5e" />
            <span>in React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
