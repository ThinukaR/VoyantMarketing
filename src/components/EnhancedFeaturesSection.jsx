import { useState } from 'react';

export const EnhancedFeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  const features = [
    {
      id: 1,
      title: "Level Up Your Travel",
      icon: "📈",
      description: "Earn XP and level up as you explore new locations and complete travel milestones.",
      details:
        "Progress through levels as you explore the world. Each location visited, landmark discovered, and challenge completed grants XP. Unlock new abilities and status badges as you advance, becoming a true travel expert.",
      image: "/level-up.jpg"
    },
    {
      id: 2,
      title: "Quest System",
      icon: "✎",
      description: "Complete engaging quests and missions tailored to each location and region.",
      details:
        "Every destination features unique quests designed to immerse you in local culture. From cultural trivia to photo challenges, each quest teaches you something new while rewarding you with XP and in-game currency.",
      image: "/quest.jpg"
    },
    {
      id: 3,
      title: "Avatar",
      icon: "👤",
      description: "Customize your character appearance and unlock cosmetics as you progress.",
      details:
        "Create and personalize your adventurer with unique outfits, accessories, and effects. Unlock exclusive cosmetics by reaching milestones, completing achievements, and climbing the ranks.",
      image: "/avatar.jpg"
    },
    {
      id: 4,
      title: "Business Integration",
      icon: "🏪",
      description: "Discover partner businesses and redeem rewards for exclusive discounts and experiences.",
      details:
        "Connect with local restaurants, shops, and attractions. Use your earned in-game currency to unlock real-world discounts, free items, and VIP experiences at partner locations worldwide.",
      image: "/business-integration.jpg"
    },
    {
      id: 5,
      title: "Challenges",
      icon: "🎯",
      description: "Face location-based challenges including photo hunts, trivia, and local knowledge tests.",
      details:
        "Each location offers unique challenges designed to deepen your connection to the place. Compete against yourself or others, earn bonus XP for high scores, and collect achievement badges.",
      image: "/challenge.jpg"
    },
    {
      id: 6,
      title: "Group Tasks",
      icon: "👥",
      description: "Team up with friends to complete collaborative missions and cooperative adventures.",
      details:
        "Join forces with other travelers to tackle group quests and cooperative challenges. Work together to achieve shared goals, earn group rewards, and create unforgettable travel memories with friends.",
      image: "/group-tasks.jpg"
    }
  ];

  const handleCardClick = (featureId) => {
    setExpandedId(expandedId === featureId ? null : featureId);
  };

  return (
    <section style={{
      paddingTop: '96px',
      paddingBottom: '96px',
      paddingLeft: '32px',
      paddingRight: '32px',
      backgroundColor: 'var(--surface)'
    }} id="features">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: 'var(--on-background)',
            marginBottom: '16px',
            fontFamily: "'Plus Jakarta Sans'"
          }}>
            Master the Map
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--on-surface-variant)',
            maxWidth: '600px'
          }}>
            The world is your game board. Discover mechanics designed to make every step an adventure.
          </p>
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px'
        }}>
          {features.map((feature) => (
            <div
              key={feature.id}
              onClick={() => handleCardClick(feature.id)}
              style={{
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: expandedId === feature.id ? 'scale(1.02)' : 'scale(1)'
              }}
              onMouseEnter={(e) => {
                const card = e.currentTarget.querySelector('.feature-card');
                card.style.boxShadow = '0 0 30px rgba(123, 31, 162, 0.8), 0 0 60px rgba(156, 39, 176, 0.4), inset 0 0 40px rgba(206, 147, 216, 0.2)';
                card.style.borderColor = 'rgba(206, 147, 216, 0.6)';
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget.querySelector('.feature-card');
                card.style.boxShadow = 'none';
                card.style.borderColor = 'rgba(78, 20, 140, 0.2)';
              }}
            >
              <div
                className="feature-card"
                style={{
                  backgroundColor: 'var(--surface-container-low)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid rgba(78, 20, 140, 0.2)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  minHeight: '380px'
                }}
              >
                {/* Image Container */}
                <div style={{
                  width: '100%',
                  height: '200px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(19, 11, 24, 0.8))'
                  }}></div>
                </div>

                {/* Content */}
                <div style={{
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1
                }}>
                  <div style={{
                    fontSize: '32px',
                    marginBottom: '12px'
                  }}>
                    {feature.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.375rem',
                    fontWeight: 700,
                    color: 'var(--on-background)',
                    marginBottom: '12px',
                    fontFamily: "'Plus Jakarta Sans'"
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontSize: '0.95rem',
                    color: 'var(--on-surface-variant)',
                    lineHeight: 1.6,
                    marginBottom: expandedId === feature.id ? '16px' : 0
                  }}>
                    {expandedId === feature.id ? feature.details : feature.description}
                  </p>

                  {/* Expanded Details */}
                  {expandedId === feature.id && (
                    <div style={{
                      marginTop: 'auto',
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(206, 147, 216, 0.1)'
                    }}>
                      <button style={{
                        width: '100%',
                        padding: '12px',
                        backgroundColor: 'var(--primary)',
                        color: 'white',
                        borderRadius: '9999px',
                        border: 'none',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'var(--primary-dim)';
                        e.target.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'var(--primary)';
                        e.target.style.transform = 'scale(1)';
                      }}
                      >
                        Learn More
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
