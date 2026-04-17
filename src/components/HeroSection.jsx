export const HeroSection = () => {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '80px',
      overflow: 'hidden',
      backgroundColor: 'var(--background)'
    }}>
      {/* Background Image with Gradient Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 0
      }}>
        <img
          alt="Mountain landscape"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHXw5cpzfHl56n3fxMpUHtUobyKQf2FuZhCVip0ib1daIhUWDEWn7ZR1yboYZn4gw9kk3l0rTL6AADIvLZ4D4eYCv5ZHUmCh8RAHxZIBMCGLkH2kBn3n78RKB8FeB7d_J5MElQK2dX_BK-V2CHdJYHWm91-Ak71Omj18r7C9-lnKaVY6W4ONYU8ZVFPaBMaWpyrBTFRUz7yPbeT5mnZ9gK5VBO-eotD5D8jo_HNeWxZ1PhvjrIcyDxCjU8doF1n6cOQU2ta_U20K_g"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.6
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: 'linear-gradient(to bottom, transparent, rgba(12, 6, 13, 0.6), var(--background))'
        }}></div>
      </div>

      {/* Left Character */}
      <div style={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        zIndex: 0,
        height: '80%',
        width: 'auto',
        opacity: 0.8,
        pointerEvents: 'none',
        userSelect: 'none',
        display: 'flex',
        alignItems: 'flex-end'
      }}
      >
        <img
          alt="Adventurer Character Left"
          src="/harsh1.png"
          style={{
            height: '100%',
            width: 'auto',
            objectFit: 'contain',
            objectPosition: 'bottom',
            filter: 'drop-shadow(0 0 30px rgba(123, 31, 162, 0.3))'
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: 'linear-gradient(to right, var(--background), transparent)'
        }}></div>
      </div>

      {/* Main Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1280px',
        paddingLeft: '32px',
        paddingRight: '32px',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          paddingLeft: '16px',
          paddingRight: '16px',
          paddingTop: '8px',
          paddingBottom: '8px',
          marginBottom: '32px',
          border: '1px solid rgba(139, 92, 246, 0.2)',
          borderRadius: '9999px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          backgroundColor: 'rgba(49, 27, 146, 0.4)',
          backdropFilter: 'blur(12px)'
        }}>
          <span style={{
            color: '#e1bee7',
            fontWeight: 700,
            fontSize: '0.875rem',
            letterSpacing: '0.05em'
          }}></span>
        </div>

        <h1 style={{
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          fontWeight: 800,
          color: 'var(--on-background)',
          lineHeight: 1.1,
          marginBottom: '24px',
          fontFamily: "'Plus Jakarta Sans'",
          background: 'linear-gradient(to right, #d1c4e9, #b39ddb)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Turn Every Trip into an <br />
          <span style={{
            background: 'linear-gradient(to right, #ce93d8, #ba68c8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Epic Quest</span>
        </h1>

        <p style={{
          fontSize: '1.125rem',
          fontWeight: 500,
          color: 'var(--on-surface-variant)',
          maxWidth: '650px',
          margin: '0 auto 40px',
          lineHeight: 1.6
        }}>
          Explore the world, complete challenges, and earn real-world rewards. Your journey starts now.
        </p>


      </div>

      {/* Right Character */}
      <div style={{
        position: 'absolute',
        right: 0,
        bottom: 0,
        zIndex: 0,
        height: '80%',
        width: 'auto',
        opacity: 0.8,
        pointerEvents: 'none',
        userSelect: 'none',
        display: 'flex',
        alignItems: 'flex-end'
      }}
      >
        <img
          alt="Adventurer Character Right"
          src="/harsh2.png"
          style={{
            height: '100%',
            width: 'auto',
            objectFit: 'contain',
            objectPosition: 'bottom',
            filter: 'drop-shadow(0 0 30px rgba(123, 31, 162, 0.3))'
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: 'linear-gradient(to left, var(--background), transparent)'
        }}></div>
      </div>
    </section>
  );
};
