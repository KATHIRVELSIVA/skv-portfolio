import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Projects from '../../src/components/Projects';
import { portfolioData } from '../../src/data/portfolioData';

describe('Projects Component', () => {
  it('renders the projects section heading', () => {
    render(<Projects />);
    expect(screen.getByText('Featured Production Builds')).toBeInTheDocument();
  });

  it('renders the achievements section heading', () => {
    const { container } = render(<Projects />);
    expect(container.textContent).toContain('Achievements');
  });

  it('renders all projects by default', () => {
    render(<Projects />);
    portfolioData.projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });

  it('renders the project count label', () => {
    render(<Projects />);
    const total = portfolioData.projects.length;
    expect(
      screen.getByText(new RegExp(`${total} of ${total}`))
    ).toBeInTheDocument();
  });

  it('renders the All filter button', () => {
    render(<Projects />);
    expect(screen.getByRole('button', { name: /All/i })).toBeInTheDocument();
  });

  it('filters projects when a tag is clicked', () => {
    render(<Projects />);
    const tagButtons = screen.getAllByRole('button', { name: /React/i });
    fireEvent.click(tagButtons[0]);
    const countEl = screen.getByText(/Showing/);
    expect(countEl).toBeInTheDocument();
  });

  it('renders the carousel previous/next buttons', () => {
    render(<Projects />);
    expect(screen.getByRole('button', { name: /← Previous/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Next →/i })).toBeInTheDocument();
  });

  it('renders carousel dot indicators with aria-labels', () => {
    render(<Projects />);
    const dots = screen.getAllByRole('button', { name: /Go to slide/i });
    expect(dots.length).toBe(portfolioData.achievements.length);
  });

  it('advances carousel slide on Next click', () => {
    render(<Projects />);
    // Verify counter starts at 1 / N
    expect(screen.getByText(`1 / ${portfolioData.achievements.length}`)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Next →/i }));

    // Counter should advance to 2 / N
    expect(screen.getByText(`2 / ${portfolioData.achievements.length}`)).toBeInTheDocument();
  });
});
