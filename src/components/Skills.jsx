import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section className="profile-section">
      <h2 className="section-title">Technical Ecosystem</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {portfolioData.skills.map((skillGroup, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 500 }}>{skillGroup.category}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {skillGroup.items.map((skill, i) => (
                <span key={i} style={{ backgroundColor: 'var(--bg-oat-100)', color: 'var(--text-muted)', fontSize: '0.75rem', padding: '0.25rem 0.6rem', fontFamily: 'monospace' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}