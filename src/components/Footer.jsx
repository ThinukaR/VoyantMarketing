export const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#130b18',
      borderTop: '1px solid rgba(78, 20, 140, 0.2)',
      width: '100%',
      paddingTop: '48px',
      paddingBottom: '48px',
      paddingLeft: '32px',
      paddingRight: '32px'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '32px',
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        {/* Brand */}
        <div style={{
          textAlign: 'left'
        }}>
          <span style={{
            fontSize: '1.125rem',
            fontWeight: 900,
            color: '#e1bee7',
            fontFamily: "'Plus Jakarta Sans'"
          }}>
            Voyant
          </span>
          <p style={{
            color: 'rgba(206, 147, 216, 0.5)',
            marginTop: '8px',
            fontFamily: "'Be Vietnam Pro'",
            fontSize: '0.875rem',
            lineHeight: 1.6
          }}>
            © 2025 Voyant. Project made by Voyant. All Rights Reserved.
          </p>
        </div>

        {/* Links */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '24px'
        }}>
          <a href="https://github.com/ThinukaR/Voyant" target="_blank" rel="noopener noreferrer" style={{
            color: 'rgba(206, 147, 216, 0.5)',
            fontFamily: "'Be Vietnam Pro'",
            fontSize: '0.875rem',
            lineHeight: 1.6,
            transition: 'color 0.2s',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => { e.target.style.color = '#e1bee7'; }}
          onMouseLeave={(e) => { e.target.style.color = 'rgba(206, 147, 216, 0.5)'; }}
          >
            GitHub
          </a>
          <a href="https://github.com/ThinukaR/Voyant" target="_blank" rel="noopener noreferrer" style={{
            color: 'rgba(206, 147, 216, 0.5)',
            fontFamily: "'Be Vietnam Pro'",
            fontSize: '0.875rem',
            lineHeight: 1.6,
            transition: 'color 0.2s',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => { e.target.style.color = '#e1bee7'; }}
          onMouseLeave={(e) => { e.target.style.color = 'rgba(206, 147, 216, 0.5)'; }}
          >
            Repository
          </a>
          <a href="https://github.com/ThinukaR/Voyant" target="_blank" rel="noopener noreferrer" style={{
            color: 'rgba(206, 147, 216, 0.5)',
            fontFamily: "'Be Vietnam Pro'",
            fontSize: '0.875rem',
            lineHeight: 1.6,
            transition: 'color 0.2s',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => { e.target.style.color = '#e1bee7'; }}
          onMouseLeave={(e) => { e.target.style.color = 'rgba(206, 147, 216, 0.5)'; }}
          >
            Contribute
          </a>
          <a href="https://github.com/ThinukaR/Voyant" target="_blank" rel="noopener noreferrer" style={{
            color: 'rgba(206, 147, 216, 0.5)',
            fontFamily: "'Be Vietnam Pro'",
            fontSize: '0.875rem',
            lineHeight: 1.6,
            transition: 'color 0.2s',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => { e.target.style.color = '#e1bee7'; }}
          onMouseLeave={(e) => { e.target.style.color = 'rgba(206, 147, 216, 0.5)'; }}
          >
            Source
          </a>
        </div>

        {/* Social Icons */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '16px'
        }}>
          <a href="https://github.com/ThinukaR/Voyant" target="_blank" rel="noopener noreferrer" style={{
            color: '#9c27b0',
            transition: 'color 0.2s',
            fontSize: '24px',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => { e.target.style.color = '#e1bee7'; }}
          onMouseLeave={(e) => { e.target.style.color = '#9c27b0'; }}
          >
            🌐
          </a>
          <a href="https://github.com/ThinukaR/Voyant" target="_blank" rel="noopener noreferrer" style={{
            color: '#9c27b0',
            transition: 'color 0.2s',
            fontSize: '24px',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => { e.target.style.color = '#e1bee7'; }}
          onMouseLeave={(e) => { e.target.style.color = '#9c27b0'; }}
          >
            📤
          </a>
          <a href="https://github.com/ThinukaR/Voyant" target="_blank" rel="noopener noreferrer" style={{
            color: '#9c27b0',
            transition: 'color 0.2s',
            fontSize: '24px',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => { e.target.style.color = '#e1bee7'; }}
          onMouseLeave={(e) => { e.target.style.color = '#9c27b0'; }}
          >
            💬
          </a>
        </div>
      </div>
    </footer>
  );
};
