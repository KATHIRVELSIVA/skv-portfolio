import { describe, it, expect } from 'vitest';
import { portfolioData } from '../../src/data/portfolioData';

describe('portfolioData', () => {
  it('has a valid profile object', () => {
    expect(portfolioData.profile).toBeDefined();
    expect(portfolioData.profile.name).toBe('Kathirvel');
    expect(portfolioData.profile.title).toBe('Software Engineer');
    expect(portfolioData.profile.linkedin).toMatch(/linkedin\.com/);
    expect(portfolioData.profile.github).toMatch(/github\.com/);
  });

  it('has at least one skill category', () => {
    expect(portfolioData.skills.length).toBeGreaterThan(0);
    portfolioData.skills.forEach((group) => {
      expect(group.category).toBeTruthy();
      expect(group.items.length).toBeGreaterThan(0);
    });
  });

  it('has at least one experience entry', () => {
    expect(portfolioData.experience.length).toBeGreaterThan(0);
    portfolioData.experience.forEach((exp) => {
      expect(exp.role).toBeTruthy();
      expect(exp.company).toBeTruthy();
      expect(exp.period).toBeTruthy();
      expect(exp.description.length).toBeGreaterThan(0);
    });
  });

  it('has at least one project', () => {
    expect(portfolioData.projects.length).toBeGreaterThan(0);
    portfolioData.projects.forEach((project) => {
      expect(project.title).toBeTruthy();
      expect(project.tags.length).toBeGreaterThan(0);
    });
  });

  it('has at least one achievement', () => {
    expect(portfolioData.achievements.length).toBeGreaterThan(0);
    portfolioData.achievements.forEach((ach) => {
      expect(ach.title).toBeTruthy();
      expect(ach.category).toBeTruthy();
      expect(ach.description).toBeTruthy();
    });
  });

  it('credential URLs are valid URLs', () => {
    portfolioData.achievements
      .filter((a) => a.credentialUrl)
      .forEach((a) => {
        expect(a.credentialUrl).toMatch(/^https?:\/\//);
      });
  });
});
