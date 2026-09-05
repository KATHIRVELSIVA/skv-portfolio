import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contact from '../../src/components/Contact';
import { portfolioData } from '../../src/data/portfolioData';

describe('Contact Component', () => {
  it('renders the section heading', () => {
    render(<Contact />);
    expect(screen.getByText('Connect')).toBeInTheDocument();
  });

  it('renders the connect description text', () => {
    render(<Contact />);
    expect(
      screen.getByText(/Let's connect and explore opportunities/)
    ).toBeInTheDocument();
  });

  it('renders GitHub link with correct href', () => {
    render(<Contact />);
    const githubLink = screen.getByText('GitHub');
    expect(githubLink.closest('a')).toHaveAttribute('href', portfolioData.profile.github);
  });

  it('renders LinkedIn link with correct href', () => {
    render(<Contact />);
    const linkedinLink = screen.getByText('LinkedIn');
    expect(linkedinLink.closest('a')).toHaveAttribute('href', portfolioData.profile.linkedin);
  });

  it('external links open in a new tab', () => {
    render(<Contact />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
