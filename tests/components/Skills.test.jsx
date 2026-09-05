import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Skills from '../../src/components/Skills';
import { portfolioData } from '../../src/data/portfolioData';

describe('Skills Component', () => {
  it('renders the section heading', () => {
    render(<Skills />);
    expect(screen.getByText('Technical Ecosystem')).toBeInTheDocument();
  });

  it('renders all skill categories', () => {
    render(<Skills />);
    portfolioData.skills.forEach((group) => {
      expect(screen.getByText(group.category)).toBeInTheDocument();
    });
  });

  it('renders individual skill items', () => {
    render(<Skills />);
    expect(screen.getByText('.NET Core')).toBeInTheDocument();
    expect(screen.getByText('ReactJS')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
  });
});
