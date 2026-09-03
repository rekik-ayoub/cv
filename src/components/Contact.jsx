import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Copy, 
  Check, 
  MapPin, 
  Phone, 
  Sparkles,
  Globe,
  MessageCircle
} from 'lucide-react';
import { Icons } from './SocialIcons';
import { cvData } from '../data/cvData';

export const Contact = () => {
  const { personal } = cvData;
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Mail size={14} />
            <span>Contact Direct</span>
          </div>
          <h2 className="section-title">
            Me Contacter Directement <br />
            <span className="gradient-text">Rekik Ayoub</span>
          </h2>
          <p className="section-subtitle">
            Vous avez une opportunité professionnelle ou un projet IoT / IA embarquée ? Retrouvez mes coordonnées directes ci-dessous.
          </p>
        </div>

        {/* Centered Direct Info Cards */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}
        >
          {/* Email Item */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => copyToClipboard(personal.email, 'email')}
            className="glass-panel"
            style={{
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            <div>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(56, 189, 248, 0.15)',
                  color: 'var(--accent-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                <Mail size={22} />
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                Adresse E-mail
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)', wordBreak: 'break-all' }}>
                {personal.email}
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '20px',
                paddingTop: '16px',
                borderTop: '1px solid var(--border-subtle)',
                fontSize: '0.85rem',
                color: copiedField === 'email' ? 'var(--accent-emerald)' : 'var(--accent-cyan)',
                fontWeight: '600',
              }}
            >
              {copiedField === 'email' ? <Check size={16} /> : <Copy size={16} />}
              <span>{copiedField === 'email' ? 'Copié dans le presse-papier !' : 'Cliquer pour copier'}</span>
            </div>
          </motion.div>

          {/* Phone Item */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={() => copyToClipboard(personal.phone, 'phone')}
            className="glass-panel"
            style={{
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            <div>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: 'var(--accent-emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                <Phone size={22} />
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                Téléphone & WhatsApp
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                {personal.phone}
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '20px',
                paddingTop: '16px',
                borderTop: '1px solid var(--border-subtle)',
                fontSize: '0.85rem',
                color: copiedField === 'phone' ? 'var(--accent-emerald)' : 'var(--accent-emerald)',
                fontWeight: '600',
              }}
            >
              {copiedField === 'phone' ? <Check size={16} /> : <Copy size={16} />}
              <span>{copiedField === 'phone' ? 'Copié dans le presse-papier !' : 'Cliquer pour copier'}</span>
            </div>
          </motion.div>

          {/* Location & Languages Item */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel"
            style={{
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            <div>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  color: 'var(--accent-indigo)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                <MapPin size={22} />
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                Localisation
              </div>
              <div style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                {personal.location}
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '20px',
                paddingTop: '16px',
                borderTop: '1px solid var(--border-subtle)',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
              }}
            >
              <Globe size={16} color="var(--accent-cyan)" />
              <span>Arabe • Français • Anglais</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
