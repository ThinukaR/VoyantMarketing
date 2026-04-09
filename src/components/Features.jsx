import { useState } from "react";

const Features = ({ onScrollNext }) => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  // Features data with images
  const features = [
    {
      id: 1,
      title: "Gamified Exploration",
      image: "/features/gamified.png",
      description:
        "Track your progress as you explore new destinations. Earn XP and level up with every location you discover.",
      details:
        "Our gamified system rewards your curiosity. Unlock new locations, complete challenges, and climb the leaderboards as you become a tourism expert.",
    },
    {
      id: 2,
      title: "Interactive Challenges",
      image: "/features/challenges.png",
      description:
        "Complete location-based challenges and tasks to earn bonus rewards and exclusive badges.",
      details:
        "Face unique challenges at each location - from photo hunts to local knowledge quizzes. Beat them to unlock special achievements and boost your XP gains.",
    },
    {
      id: 3,
      title: "Social Connections",
      image: "/features/social.png",
      description:
        "Connect with other travelers, share discoveries, and compete on leaderboards together.",
      details:
        "Build your community of fellow travelers. Share your discoveries, collaborate on challenges, and see how you rank against explorers worldwide.",
    },
    {
      id: 4,
      title: "Digital Passport",
      image: "/features/passport.png",
      description:
        "Collect digital stamps from places you visit and build your personalized travel timeline.",
      details:
        "Your digital passport records every step of your journey. Collect unique stamps from each location and create a memorable record of your adventures.",
    },
    {
      id: 5,
      title: "Local Insights",
      image: "/features/insights.png",
      description:
        "Discover hidden gems and insider tips from local experts and experienced travelers.",
      details:
        "Get authentic recommendations from local guides and seasoned travelers. Discover the best-kept secrets that traditional tourism doesn't show.",
    },
    {
      id: 6,
      title: "Achievement System",
      image: "/features/achievements.png",
      description:
        "Unlock achievements and special rewards as you progress through your tourism journey.",
      details:
        "Earn unique badges and trophies for completing milestones. Showcase your achievements and compete for special limited-time rewards.",
    },
  ];

  return (
    <section className="flex-shrink-0 w-screen h-full flex flex-col justify-center px-[5%] snap-start relative">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6">
        Discover Amazing Features
      </h2>

      {/* Features Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.id}
            onClick={() => setSelectedFeature(feature)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900 to-purple-800 p-4 transition-all duration-300 transform hover:scale-105"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
                boxShadow: "0 0 30px rgba(168, 85, 247, 0.6), inset 0 0 30px rgba(168, 85, 247, 0.2)",
              }}
            />

            {/* Card Content */}
            <div className="relative z-10">
              {/* Image */}
              <div className="mb-3 h-28 w-full overflow-hidden rounded-lg bg-purple-700 flex items-center justify-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="absolute text-4xl" style={{ display: "block" }}>
                  {feature.id === 1 && "🎮"}
                  {feature.id === 2 && "🎯"}
                  {feature.id === 3 && "👥"}
                  {feature.id === 4 && "📔"}
                  {feature.id === 5 && "💡"}
                  {feature.id === 6 && "🏆"}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Click indicator */}
              <div className="mt-2 flex items-center gap-2 text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-medium">Click to learn more</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Learn More Button - Right Side */}
      <button 
        onClick={onScrollNext}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-purple-500 rounded-full p-4 text-xl sm:text-2xl tracking-wider cursor-pointer transition-all duration-500 hover:bg-purple-600 shadow-lg hover:shadow-xl">
        Continue →
        <span className="absolute inset-0 rounded-full bg-purple-500 opacity-50 blur-xl animate-ping"></span>
      </button>

      {/* Modal for Feature Details */}
      {selectedFeature && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="relative bg-gradient-to-br from-purple-900 to-purple-800 rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setSelectedFeature(null)}
              className="absolute top-6 right-6 text-white hover:text-purple-300 transition-colors text-3xl font-bold"
            >
              ×
            </button>

            {/* Modal Content */}
            <div className="pr-8">
              {/* Image */}
              <div className="mb-6 h-64 w-full overflow-hidden rounded-2xl bg-purple-700 flex items-center justify-center">
                <img
                  src={selectedFeature.image}
                  alt={selectedFeature.title}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="text-8xl" style={{ display: "block" }}>
                  {selectedFeature.id === 1 && "🎮"}
                  {selectedFeature.id === 2 && "🎯"}
                  {selectedFeature.id === 3 && "👥"}
                  {selectedFeature.id === 4 && "📔"}
                  {selectedFeature.id === 5 && "💡"}
                  {selectedFeature.id === 6 && "🏆"}
                </div>
              </div>

              {/* Title */}
              <h2 className="text-4xl font-bold text-white mb-4">
                {selectedFeature.title}
              </h2>

              {/* Detailed Description */}
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {selectedFeature.details}
              </p>

              {/* Close button in modal */}
              <button
                onClick={() => setSelectedFeature(null)}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
              >
                Got It!
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;
