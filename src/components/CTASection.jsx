export const CTASection = () => {
  return (
    <section style={{
      paddingTop: '96px',
      paddingBottom: '96px',
      paddingLeft: '32px',
      paddingRight: '32px',
      overflow: 'hidden',
      backgroundColor: 'var(--surface)'
    }}>
      <div className="max-w-6xl mx-auto">
        <div style={{
          background: 'linear-gradient(to bottom right, #663399, #4a1880)',
          borderRadius: '48px',
          padding: '48px',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '64px'
        }}>
          {/* Decorative Element */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '100%',
            opacity: 0.05,
            pointerEvents: 'none',
            fontSize: '20rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}>
            🌍
          </div>

          {/* Content */}
          <div style={{
            flex: 1,
            position: 'relative',
            zIndex: 10
          }}>
            <h2 style={{
              fontSize: '3.5rem',
              fontWeight: 800,
              color: 'white',
              marginBottom: '32px',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              fontFamily: "'Plus Jakarta Sans'"
            }}>
              Your Next Big Adventure is One Tap Away
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '48px',
              maxWidth: '600px',
              lineHeight: 1.6
            }}>
              Download 'Voyant' today and start earning rewards for exploring the world around you.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'flex-start'
            }}>
            </div>
          </div>

          {/* Mobile Device Mockup */}
          <div style={{
            flex: 1,
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              position: 'relative',
              width: '300px',
              height: '600px',
              backgroundColor: '#0c060d',
              borderRadius: '56px',
              padding: '16px',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
              border: '8px solid rgba(156, 39, 176, 0.3)',
              zIndex: 10
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#130b18',
                borderRadius: '44px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}>
                {/* App Header */}
                <div style={{
                  backgroundColor: '#9c27b0',
                  padding: '24px 24px 16px',
                  color: 'white',
                  fontWeight: 700
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '16px'
                  }}>
                    <h4 style={{ margin: 0 }}>Welcome, Explorer</h4>
                    <span style={{ fontSize: '20px' }}>👤</span>
                  </div>
                  <div style={{
                    height: '8px',
                    width: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '4px'
                  }}>
                    <div style={{
                      height: '100%',
                      width: '66%',
                      backgroundColor: '#ce93d8',
                      borderRadius: '4px',
                      boxShadow: '0 0 10px rgba(206, 147, 216, 0.8)'
                    }}></div>
                  </div>
                  <p style={{
                    fontSize: '10px',
                    marginTop: '8px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    margin: '8px 0 0 0'
                  }}>
                    Level 12 - 250 XP to Next Rank
                  </p>
                </div>

                {/* App Content */}
                <div style={{
                  padding: '16px',
                  flex: 1,
                  overflow: 'auto'
                }}>
                  <div style={{ fontSize: '10px', fontWeight: 900, color: '#ce93d8', letterSpacing: '0.05em', marginBottom: '16px' }}>
                    ACTIVE QUESTS
                  </div>

                  {/* Quest Cards */}
                  <div style={{
                    backgroundColor: 'rgba(156, 39, 176, 0.3)',
                    border: '1px solid rgba(156, 39, 176, 0.1)',
                    borderRadius: '16px',
                    padding: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '16px'
                  }}>
                    <span style={{ fontSize: '20px' }}>📍</span>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontWeight: 700, fontSize: '0.875rem', color: '#e1bee7', margin: 0 }}>
                        Summit Peak View
                      </p>
                      <p style={{ fontSize: '10px', color: 'rgba(206, 147, 216, 0.6)', margin: 0 }}>
                        Complete 3 hikes this week
                      </p>
                    </div>
                    <span style={{ color: '#ce93d8', fontWeight: 900, fontSize: '0.875rem' }}>60%</span>
                  </div>

                  {/* Map Preview */}
                  <div style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    height: '160px',
                    marginTop: '16px',
                    border: '1px solid rgba(139, 92, 246, 0.2)',
                    position: 'relative',
                    backgroundColor: 'rgba(156, 39, 176, 0.1)'
                  }}>
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqSj0AoM0KQEHvmw8aSD7xl5vjwOMr9lEYijZXQWg9otCl8yNvEBSvkt4IDprAWh455ZmtMMPeeOd-mlRUNn59lPEZwQEOL76mD3eNQjzgsUMa09PLHrT-fjvKjAYpeRamoFlGcymX89vdw_GqIaJ1HM9vvjG2cpVRWZjc30trdg0NzLqTyNFmhCsWiPdQazkHBUv7DYkAXDRCOfnVt3uWgCqgNIVzPAdTSKWqJpr5Iso95AUh1i4HvgJA44H8CEB5_7ImVkTe6yO5"
                      alt="Map"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'saturate(0.5) hue-rotate(280deg)'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(156, 39, 176, 0.8), transparent)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '16px'
                    }}>
                      <p style={{
                        color: 'white',
                        fontSize: '12px',
                        fontWeight: 700,
                        margin: 0
                      }}>
                        Recommended: Blue Ridge Loop
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Bar */}
                <div style={{
                  backgroundColor: '#130b18',
                  padding: '16px',
                  display: 'flex',
                  justifyContent: 'space-around',
                  borderTop: '1px solid rgba(156, 39, 176, 0.2)'
                }}>
                  <span style={{ fontSize: '20px', color: '#ce93d8' }}>🧭</span>
                  <span style={{ fontSize: '20px', color: 'rgba(255, 255, 255, 0.3)' }}>🗺️</span>
                  <span style={{ fontSize: '20px', color: 'rgba(255, 255, 255, 0.3)' }}>🏆</span>
                  <span style={{ fontSize: '20px', color: 'rgba(255, 255, 255, 0.3)' }}>⚙️</span>
                </div>
              </div>
              {/* Notch */}
              <div style={{
                position: 'absolute',
                top: '8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '128px',
                height: '24px',
                backgroundColor: '#0c060d',
                borderRadius: '0 0 16px 16px'
              }}></div>
            </div>

            {/* Floating Badge */}
            <div style={{
              position: 'absolute',
              top: '-40px',
              right: '-40px',
              width: '96px',
              height: '96px',
              backgroundColor: '#9c27b0',
              color: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
              border: '2px solid rgba(206, 147, 216, 0.5)',
              transform: 'rotate(12deg)',
              fontSize: '40px',
              animation: 'float 3s ease-in-out infinite'
            }}>
              ⭐
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
