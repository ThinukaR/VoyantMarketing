export const Navigation = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: 'rgba(19, 11, 24, 0.6)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderBottom: '1px solid rgba(78, 20, 140, 0.2)'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '32px',
        paddingRight: '32px',
        paddingTop: '16px',
        paddingBottom: '16px',
        maxWidth: '1280px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <span style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: '#e1bee7',
          textTransform: 'uppercase',
          fontFamily: "'Plus Jakarta Sans'"
        }}>
          Voyant
        </span>
        
        <div style={{
          display: 'none',
          gap: '32px',
          alignItems: 'center'
        }}
        className="hidden md:flex"
        >
          <a href="#features" style={{
            fontWeight: 700,
            borderBottom: '2px solid #ce93d8',
            paddingBottom: '4px',
            color: '#ce93d8',
            transition: 'color 0.3s ease',
            textDecoration: 'none',
            fontFamily: "'Plus Jakarta Sans'"
          }}
          onMouseEnter={(e) => { e.target.style.color = '#b39ddb'; }}
          onMouseLeave={(e) => { e.target.style.color = '#ce93d8'; }}
          >
            Features
          </a>
          <a href="#" style={{
            fontWeight: 700,
            color: 'rgba(225, 190, 231, 0.7)',
            transition: 'color 0.3s ease',
            textDecoration: 'none',
            fontFamily: "'Plus Jakarta Sans'"
          }}
          onMouseEnter={(e) => { e.target.style.color = '#b39ddb'; }}
          onMouseLeave={(e) => { e.target.style.color = 'rgba(225, 190, 231, 0.7)'; }}
          >
            How It Works
          </a>
          <a href="#" style={{
            fontWeight: 700,
            color: 'rgba(225, 190, 231, 0.7)',
            transition: 'color 0.3s ease',
            textDecoration: 'none',
            fontFamily: "'Plus Jakarta Sans'"
          }}
          onMouseEnter={(e) => { e.target.style.color = '#b39ddb'; }}
          onMouseLeave={(e) => { e.target.style.color = 'rgba(225, 190, 231, 0.7)'; }}
          >
            Destinations
          </a>
        </div>
        

      </div>
    </nav>
  );
};
