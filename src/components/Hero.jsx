import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { profile } = portfolioData;
  
  const heroStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  return (
    <section style={heroStyle}>
      <div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.75rem', fontWeight: 400, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
          Hi, I'm <span style={{ fontStyle: 'italic', fontWeight: 600 }}>{profile.name}</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', fontWeight: 300 }}>
          {profile.title} at <a href={profile.companyUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', textDecorationColor: 'var(--color-sage)', textUnderlineOffset: '5px' }}>{profile.company}</a>.
        </p>
      </div>
      
      <p style={{ color: 'var(--text-muted)', fontWeight: 300, maxWidth: '600px' }}>
        {profile.bio}
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', paddingTop: '0.5rem' }}>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" style={{ padding: '0.5rem 1rem', border: '1px solid var(--bg-oat-300)', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '0.875rem' }}>
          LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-link-primary" style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--text-primary)', color: 'var(--bg-oat-50)', textDecoration: 'none', fontSize: '0.875rem' }}>
          GitHub Profile
        </a>
      </div>
    </section>
  );
}