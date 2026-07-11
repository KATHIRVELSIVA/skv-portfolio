import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  return (
    <section className="profile-section" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h2 className="section-title">Connect</h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          Let's connect and explore opportunities to work together.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href={portfolioData.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.75rem 1.5rem',
              border: '1px solid var(--bg-oat-200)',
              textDecoration: 'none',
              color: 'var(--text-primary)',
              fontSize: '0.875rem',
              fontWeight: 500,
              transition: 'all 0.2s ease',
              cursor: 'pointer',
              borderRadius: '2px'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--text-primary)';
              e.target.style.color = 'var(--bg-oat-50)';
              e.target.style.borderColor = 'var(--text-primary)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'var(--text-primary)';
              e.target.style.borderColor = 'var(--bg-oat-200)';
            }}
          >
            GitHub
          </a>
          <a
            href={portfolioData.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.75rem 1.5rem',
              border: '1px solid var(--bg-oat-200)',
              textDecoration: 'none',
              color: 'var(--text-primary)',
              fontSize: '0.875rem',
              fontWeight: 500,
              transition: 'all 0.2s ease',
              cursor: 'pointer',
              borderRadius: '2px'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#0A66C2';
              e.target.style.color = '#fff';
              e.target.style.borderColor = '#0A66C2';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'var(--text-primary)';
              e.target.style.borderColor = 'var(--bg-oat-200)';
            }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
