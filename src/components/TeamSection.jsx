export const TeamSection = () => {
  const teamMembers = [
    { name: "Thinuka Rambukwella", image: "/team/thinuka.jpeg", role: "Lead" },
    { name: "Senal Perera", image: "/team/senal.jpeg", role: "Developer" },
    { name: "Hiffan Abdul Gaffoor", image: "/team/hiffan.jpeg", role: "Designer" },
    { name: "Yasara Perera", image: "/team/yasara.jpeg", role: "Developer" },
    { name: "Harshavardhan Ravichandran", image: "/team/harsh.jpeg", role: "Developer" },
    { name: "Adam Farook", image: "/team/selene.jpeg", role: "Designer" },
  ];

  return (
    <section style={{
      paddingTop: '96px',
      paddingBottom: '96px',
      paddingLeft: '32px',
      paddingRight: '32px',
      backgroundColor: 'var(--surface-container-low)'
    }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: 'var(--on-background)',
            marginBottom: '16px',
            fontFamily: "'Plus Jakarta Sans'"
          }}>
            Meet the Team
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--on-surface-variant)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            The brilliant minds behind Voyant
          </p>
        </div>

        {/* Team Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px'
        }}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                const card = e.currentTarget.querySelector('.team-card');
                card.style.boxShadow = '0 0 30px rgba(123, 31, 162, 0.8), 0 0 60px rgba(156, 39, 176, 0.4), inset 0 0 40px rgba(206, 147, 216, 0.2)';
                card.style.borderColor = 'rgba(206, 147, 216, 0.6)';
                card.style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget.querySelector('.team-card');
                card.style.boxShadow = 'none';
                card.style.borderColor = 'rgba(78, 20, 140, 0.2)';
                card.style.transform = 'translateY(0)';
              }}
            >
              <div
                className="team-card"
                style={{
                  backgroundColor: 'var(--surface-container)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid rgba(78, 20, 140, 0.2)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '32px',
                  textAlign: 'center'
                }}
              >
                {/* Avatar */}
                <div style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  marginBottom: '20px',
                  border: '3px solid rgba(206, 147, 216, 0.3)',
                  backgroundColor: 'rgba(156, 39, 176, 0.1)'
                }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.display = 'flex';
                      e.target.parentElement.style.alignItems = 'center';
                      e.target.parentElement.style.justifyContent = 'center';
                    }}
                  />
                  <div style={{
                    display: 'none',
                    fontSize: '60px'
                  }}>👤</div>
                </div>

                {/* Info */}
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--on-background)',
                  marginBottom: '8px',
                  fontFamily: "'Plus Jakarta Sans'"
                }}>
                  {member.name}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#ce93d8',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {member.role}
                </p>

                {/* Social Links */}
                <div style={{
                  marginTop: '16px',
                  display: 'flex',
                  gap: '12px',
                  justifyContent: 'center'
                }}>
                  <a href="#" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    backgroundColor: 'rgba(156, 39, 176, 0.2)',
                    borderRadius: '50%',
                    color: '#ce93d8',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(156, 39, 176, 0.4)';
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(156, 39, 176, 0.2)';
                    e.target.style.transform = 'scale(1)';
                  }}
                  >
                    🔗
                  </a>
                  <a href="#" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    backgroundColor: 'rgba(156, 39, 176, 0.2)',
                    borderRadius: '50%',
                    color: '#ce93d8',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(156, 39, 176, 0.4)';
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(156, 39, 176, 0.2)';
                    e.target.style.transform = 'scale(1)';
                  }}
                  >
                    📘
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
