import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '../../src/components/Footer';
import { portfolioData } from '../../src/data/portfolioData';

describe('Footer Component', () => {
  it('renders the footer element', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('footer')).toBeInTheDocument();
  });

  it('renders the current year', () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it('renders the portfolio owner name', () => {
    render(<Footer />);
    expect(screen.getByText(new RegExp(portfolioData.profile.name))).toBeInTheDocument();
  });
});
