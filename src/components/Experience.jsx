import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="profile-section">
      <h2 className="section-title">Professional History</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {portfolioData.experience.map((exp, index) => (
          <div key={index} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--text-light)' }}>
              {exp.period}
            </div>
            <div style={{ gridColumn: 'span 3', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 500 }}>
                {exp.role} <span style={{ color: 'var(--bg-oat-300)' }}>|</span> {exp.company}
              </h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 300, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {exp.description.map((bullet, i) => (
                  <li key={i} style={{ listStyleType: 'square' }}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}