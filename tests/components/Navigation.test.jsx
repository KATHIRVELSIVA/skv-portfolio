import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Navigation from '../../src/components/Navigation';
import { ThemeProvider } from '../../src/context/ThemeContext';

const renderNav = () =>
  render(
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );

describe('Navigation Component', () => {
  it('renders the brand logo button', () => {
    renderNav();
    // Use exact text match to avoid matching "Skills" which contains 'k'
    expect(screen.getByRole('button', { name: 'K' })).toBeInTheDocument();
  });

  it('renders desktop nav links', () => {
    renderNav();
    expect(screen.getByRole('button', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Skills' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Experience' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Projects' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Contact' })).toBeInTheDocument();
  });

  it('renders the theme toggle button', () => {
    renderNav();
    expect(screen.getByTitle('Toggle dark mode')).toBeInTheDocument();
  });

  it('toggles dark mode on theme button click', () => {
    renderNav();
    const themeBtn = screen.getByTitle('Toggle dark mode');
    const initialIcon = themeBtn.textContent;
    fireEvent.click(themeBtn);
    expect(themeBtn.textContent).not.toBe(initialIcon);
  });
});
