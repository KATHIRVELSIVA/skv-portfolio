import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Experience from '../../src/components/Experience';
import { portfolioData } from '../../src/data/portfolioData';

describe('Experience Component', () => {
  it('renders the section heading', () => {
    render(<Experience />);
    expect(screen.getByText('Professional History')).toBeInTheDocument();
  });

  it('renders all experience roles', () => {
    const { container } = render(<Experience />);
    // Role text is inside h3 elements mixed with span children, use textContent
    const h3s = Array.from(container.querySelectorAll('h3'));
    const uniqueRoles = [...new Set(portfolioData.experience.map((e) => e.role))];
    uniqueRoles.forEach((role) => {
      const found = h3s.some((h) => h.textContent.includes(role));
      expect(found).toBe(true);
    });
  });

  it('renders company names', () => {
    render(<Experience />);
    const companies = screen.getAllByText(/Relevantz/);
    expect(companies.length).toBeGreaterThan(0);
  });

  it('renders experience time periods', () => {
    render(<Experience />);
    portfolioData.experience.forEach((exp) => {
      expect(screen.getByText(exp.period)).toBeInTheDocument();
    });
  });
});
