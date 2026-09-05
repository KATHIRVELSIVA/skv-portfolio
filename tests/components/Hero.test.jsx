import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from '../../src/components/Hero';
import { ThemeProvider } from '../../src/context/ThemeContext';
import { portfolioData } from '../../src/data/portfolioData';

const renderHero = () =>
  render(
    <ThemeProvider>
      <Hero />
    </ThemeProvider>
  );

describe('Hero Component', () => {
  it('renders the name', () => {
    renderHero();
    expect(screen.getByText(portfolioData.profile.name)).toBeInTheDocument();
  });

  it('renders the job title', () => {
    renderHero();
    expect(screen.getByText(new RegExp(portfolioData.profile.title))).toBeInTheDocument();
  });

  it('renders the company link with correct href', () => {
    renderHero();
    const companyLink = screen.getByText(portfolioData.profile.company);
    expect(companyLink).toBeInTheDocument();
    expect(companyLink.closest('a')).toHaveAttribute('href', portfolioData.profile.companyUrl);
  });

  it('renders the bio text', () => {
    renderHero();
    expect(screen.getByText(portfolioData.profile.bio)).toBeInTheDocument();
  });

  it('renders LinkedIn social link', () => {
    renderHero();
    const linkedinLink = screen.getByText('LinkedIn');
    expect(linkedinLink.closest('a')).toHaveAttribute('href', portfolioData.profile.linkedin);
  });

  it('renders GitHub social link', () => {
    renderHero();
    const githubLink = screen.getByText('GitHub Profile');
    expect(githubLink.closest('a')).toHaveAttribute('href', portfolioData.profile.github);
  });
});
