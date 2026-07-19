import React, { useState, useMemo, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [currentAchievementIndex, setCurrentAchievementIndex] = useState(0);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    portfolioData.projects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter projects based on selected tag
  const filteredProjects = useMemo(() => {
    if (!selectedTag) {
      return portfolioData.projects;
    }
    return portfolioData.projects.filter(project =>
      project.tags.includes(selectedTag)
    );
  }, [selectedTag]);

  // Carousel functions
  const handlePrevAchievement = () => {
    setCurrentAchievementIndex((prev) =>
      prev === 0 ? portfolioData.achievements.length - 1 : prev - 1
    );
  };

  const handleNextAchievement = () => {
    setCurrentAchievementIndex((prev) =>
      prev === portfolioData.achievements.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAchievementIndex((prev) =>
        prev === portfolioData.achievements.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentAchievement = portfolioData.achievements[currentAchievementIndex];

  return (
    <section className="profile-section" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      <div>
        <h2 className="section-title">Featured Production Builds</h2>

        {/* Tag Filter */}
        <div style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          <button
            onClick={() => setSelectedTag(null)}
            style={{
              fontSize: '0.75rem',
              fontFamily: 'monospace',
              padding: '0.35rem 0.75rem',
              border: selectedTag === null ? '1px solid var(--color-sage)' : '1px solid var(--bg-oat-200)',
              backgroundColor: selectedTag === null ? 'var(--color-sage)' : 'transparent',
              color: selectedTag === null ? 'white' : 'var(--text-light)',
              cursor: 'pointer',
              borderRadius: '2px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
            className={`tag-btn ${selectedTag === null ? 'active' : ''}`}
          >
            All
          </button>

          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`tag-btn ${selectedTag === tag ? 'active' : ''}`}
              style={{
                fontSize: '0.75rem',
                fontFamily: 'monospace',
                padding: '0.35rem 0.75rem',
                border: selectedTag === tag ? '1px solid var(--color-sage)' : '1px solid var(--bg-oat-200)',
                backgroundColor: selectedTag === tag ? 'var(--color-sage)' : 'transparent',
                color: selectedTag === tag ? 'white' : 'var(--text-light)',
                cursor: 'pointer',
                borderRadius: '2px'
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Count */}
        <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
          Showing {filteredProjects.length} of {portfolioData.projects.length} project{portfolioData.projects.length !== 1 ? 's' : ''}
        </p>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              style={{
                border: '1px solid var(--bg-oat-200)',
                padding: '1.5rem',
                backgroundColor: 'var(--bg-oat-100)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.5rem',
                animation: 'fadeIn 0.3s ease'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.15rem' }}>{project.title}</h3>
                  <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: 'var(--text-light)' }}>{project.duration}</span>
                </div>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-sage)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{project.role}</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 300, lineHeight: '1.5' }}>{project.description}</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      onClick={() => setSelectedTag(tag)}
                      style={{
                        fontSize: '0.65rem',
                        fontFamily: 'monospace',
                        color: selectedTag === tag ? 'white' : 'var(--text-light)',
                        backgroundColor: selectedTag === tag ? 'var(--color-sage)' : 'var(--bg-oat-50)',
                        border: `1px solid ${selectedTag === tag ? 'var(--color-sage)' : 'var(--bg-oat-200)'}`,
                        padding: '0.1rem 0.4rem',
                        cursor: 'pointer',
                        borderRadius: '2px'
                      }}
                      className={`project-tag ${selectedTag === tag ? 'active' : ''}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.links && Object.keys(project.links).length > 0 && (
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {Object.entries(project.links).map(([key, url], i) => (
                      <a
                        key={i}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'monospace',
                          color: 'var(--color-sage)',
                          textDecoration: 'none',
                          border: '1px solid var(--color-sage)',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '2px'
                        }}
                        className="project-link"
                      >
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
            <p>No projects found with the selected tag.</p>
          </div>
        )}
      </div>

      <div style={{ borderTop: '1px solid var(--bg-oat-200)', paddingTop: '3rem' }}>
        <h2 className="section-title">Achievements & Recognition</h2>
        
        {/* Carousel Container */}
        <div style={{ position: 'relative' }}>
          {/* Carousel Slide */}
          <div
            style={{
              backgroundColor: 'var(--bg-oat-100)',
              padding: '2rem',
              borderLeft: '3px solid var(--color-sage)',
              minHeight: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              animation: 'slideIn 0.5s ease',
              position: 'relative'
            }}
          >
            <div>
              <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', color: 'var(--color-sage)', fontWeight: 600, textTransform: 'uppercase' }}>
                {currentAchievement.category}
              </span>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginTop: '0.75rem', lineHeight: '1.4' }}>
                {currentAchievement.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 300, marginTop: '1rem', lineHeight: '1.6' }}>
                {currentAchievement.description}
              </p>
            </div>

            {currentAchievement.credentialUrl && (
              <a
                href={currentAchievement.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  right: '0.75rem',
                  fontSize: '0.65rem',
                  fontFamily: 'monospace',
                  color: 'var(--color-sage)',
                  textDecoration: 'none',
                  border: '1px solid var(--color-sage)',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '2px',
                  cursor: 'pointer'
                }}
                className="credential-link"
              >
                View Credential
              </a>
            )}
          </div>

          {/* Navigation Buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', gap: '1rem' }}>
            <button
              onClick={handlePrevAchievement}
              style={{
                background: 'none',
                border: '1px solid var(--bg-oat-200)',
                color: 'var(--text-light)',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontFamily: 'monospace',
                fontWeight: 500,
                borderRadius: '2px'
              }}
              className="carousel-nav-btn"
            >
              ← Previous
            </button>

            {/* Dot Indicators */}
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
              {portfolioData.achievements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAchievementIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  style={{
                    width: '0.5rem',
                    height: '0.5rem',
                    borderRadius: '50%',
                    border: 'none',
                    backgroundColor: currentAchievementIndex === index ? 'var(--color-sage)' : 'var(--bg-oat-200)',
                    cursor: 'pointer'
                  }}
                  className={`carousel-dot ${currentAchievementIndex === index ? 'active' : ''}`}
                />
              ))}
            </div>

            <button
              onClick={handleNextAchievement}
              style={{
                background: 'none',
                border: '1px solid var(--bg-oat-200)',
                color: 'var(--text-light)',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontFamily: 'monospace',
                fontWeight: 500,
                borderRadius: '2px'
              }}
              className="carousel-nav-btn"
            >
              Next →
            </button>
          </div>

          {/* Counter */}
          <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '1rem', textAlign: 'center', fontFamily: 'monospace' }}>
            {currentAchievementIndex + 1} / {portfolioData.achievements.length}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}