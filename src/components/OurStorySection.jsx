export function OurStorySection() {
  return (
    <section style={{
      backgroundColor: 'var(--background)',
      color: 'var(--on-background)',
      padding: '80px 40px',
      minHeight: '600px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '60px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '-200px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(123, 31, 162, 0.15) 0%, transparent 70%)',
        filter: 'blur(40px)',
        zIndex: 0
      }}></div>

      {/* Left Content */}
      <div style={{
        flex: 1,
        position: 'relative',
        zIndex: 1
      }}>
        <h2 style={{
          fontSize: '56px',
          fontWeight: '700',
          marginBottom: '32px',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--tertiary) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Our Story
        </h2>
        <p style={{
          fontSize: '16px',
          lineHeight: '1.8',
          color: 'var(--on-background-secondary)',
          fontFamily: 'Be Vietnam Pro, sans-serif',
          maxWidth: '450px'
        }}>
          We noticed the lack of engagement and interactivity with tourism, making it a hobby difficult for people especially in this current generation with low attention spans to get into.
        </p>
      </div>

      {/* Right Content */}
      <div style={{
        flex: 1,
        position: 'relative',
        zIndex: 1,
        textAlign: 'right'
      }}>
        <h3 style={{
          fontSize: '48px',
          fontWeight: '700',
          marginBottom: '24px',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          background: 'linear-gradient(135deg, var(--tertiary) 0%, var(--primary) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          What we came up with
        </h3>
        <p style={{
          fontSize: '16px',
          lineHeight: '1.8',
          color: 'var(--on-background-secondary)',
          fontFamily: 'Be Vietnam Pro, sans-serif',
          maxWidth: '450px',
          marginLeft: 'auto'
        }}>
          An app that makes this beautiful hobby engaging
        </p>
      </div>

      {/* Right Background Elements */}
      <div style={{
        position: 'absolute',
        bottom: '-150px',
        right: '-150px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(156, 39, 176, 0.1) 0%, transparent 70%)',
        filter: 'blur(40px)',
        zIndex: 0
      }}></div>
    </section>
  )
}
