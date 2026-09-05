import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ScrollToTop from '../../src/components/ScrollToTop';
import { ThemeProvider } from '../../src/context/ThemeContext';

const renderScrollToTop = () =>
  render(
    <ThemeProvider>
      <ScrollToTop />
    </ThemeProvider>
  );

describe('ScrollToTop Component', () => {
  it('button is hidden initially (scrollY is 0)', () => {
    renderScrollToTop();
    expect(screen.queryByTitle('Scroll to top')).not.toBeInTheDocument();
  });

  it('button appears after scrolling down more than 300px', () => {
    renderScrollToTop();
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 400, writable: true });
      fireEvent.scroll(window);
    });
    expect(screen.getByTitle('Scroll to top')).toBeInTheDocument();
  });

  it('calls window.scrollTo when button is clicked', () => {
    renderScrollToTop();
    const scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 400, writable: true });
      fireEvent.scroll(window);
    });

    fireEvent.click(screen.getByTitle('Scroll to top'));
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    scrollToSpy.mockRestore();
  });
});
