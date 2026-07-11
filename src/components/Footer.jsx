import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const footerStyle = {
    borderTop: '1px solid var(--bg-oat-200)',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.75rem',
    fontFamily: 'monospace',
    color: 'var(--text-light)',
    textAlign: 'center'
  };

  return (
    <footer style={footerStyle}>
      &copy; {new Date().getFullYear()} {portfolioData.profile.name}. All rights reserved.
    </footer>
  );
}