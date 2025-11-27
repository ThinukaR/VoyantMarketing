import { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [gradientIndex, setGradientIndex] = useState(0);
  const levelColors = [
    "bg-purple-600",
    "bg-green-500",
    "bg-yellow-500",
    "bg-blue-600",
    "bg-pink-500",
  ];

  useEffect(() => {
    const container = document.getElementById("horizontal-scroll");

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const progress = (scrollLeft / maxScroll) * 100;

      let earnedXP = Math.floor(progress);
      let newXP = earnedXP;
      let newLevel = level;

      while (newXP >= 100) {
        newXP -= 100;
        newLevel += 1;
      }

      setLevel(newLevel);
      setXp(newXP);
      setScrollProgress(progress);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [level]);

  const currentLevelColor = levelColors[(level - 1) % levelColors.length];

  const scrollToNextSection = () => {
    const container = document.getElementById("horizontal-scroll");
    if (!container) return;

    // Width of one section (assumes all sections are full screen width)
    const sectionWidth = container.clientWidth;

    // Scroll by one section width
    container.scrollBy({
      left: sectionWidth,
      behavior: "smooth", // smooth scrolling
    });
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <header className="w-full bg-purple-900 flex justify-center items-center py-4 px-4 lg:px-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">
            Voyant
          </h1>
        </header>

        <div className="w-full h-6 bg-gray-200 relative">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-200"
            style={{ width: `${xp}%` }}
          ></div>

          <div
            className={`absolute top-0 right-5 ${currentLevelColor} text-white px-5 py-1 rounded-2xl shadow-xl font-semibold tracking-wider flex flex-col items-center transition-colors duration-500`}
          >
            <span className="text-lg">Level {level}</span>
            <span className="text-xs text-gray-200">XP: {xp} / 100</span>
            <span
              className={`absolute inset-0 ${currentLevelColor} rounded-2xl blur-xl opacity-40 transition-colors duration-500`}
            ></span>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="w-screen h-screen overflow-hidden">
        <main
          id="horizontal-scroll"
          className="
    absolute 
    left-0 
    top-[90px] 
    w-screen 
    h-[calc(100vh-90px)] 
    overflow-x-scroll 
    overflow-y-hidden 
    snap-x 
    snap-mandatory 
    flex 
    no-scrollbar
    z-0
  "
        >
          {/* Welcome Section */}
          <section className="flex-shrink-0 w-screen h-full flex snap-start px-[5%] lg:px-[10%]">
            {/* Left Column */}
            <div className="flex-1 flex flex-col justify-center pr-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
                Welcome to <br /> Voyant
              </h1>
              <p className="text-base sm:text-2xl text-gray-400 max-w-[30rem]">
                A gamified app for tourists
              </p>

              <div className="py-3 relative">
                <button
                  onClick={scrollToNextSection}
                  className="relative z-10 bg-purple-500 rounded-full p-3 text-2xl tracking-wider cursor-pointer transition-all duration-500 hover:bg-purple-600"
                >
                  Click Here!
                  <span className="absolute inset-0 rounded-full bg-purple-500 opacity-50 blur-xl animate-ping"></span>
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex items-center justify-center">
              <img
                src="/mascot.png"
                alt="Tourism Illustration"
                className="max-w-full max-h-[80%] object-contain rounded-lg shadow-lg"
              />
            </div>
          </section>
          {/* Story */}
          <section className="flex-shrink-0 w-screen h-full flex flex-col justify-center px-[5%] snap-start space-y-20">
            {/* Our Story (Left) */}
            <div className="self-start text-left max-w-[30rem]">
              <h1 className="text-6xl font-semibold tracking-wider my-8">
                Our Story
              </h1>
              <p className="text-2xl text-gray-400">
                We noticed the lack of engagement and interactivity with
                tourism, making it a hobby difficult for people especially in
                this current generation with low attention spans to get into.
              </p>
            </div>

            {/* Our Solution (Right) */}
            <div className="self-end text-right max-w-[30rem]">
              <h1 className="text-6xl font-semibold tracking-wider my-8">
                What we came up with
              </h1>
              <p className="text-2xl text-gray-400">
                An app that makes this beautiful hobby engaging
              </p>
            </div>
          </section>

          <section className="flex-shrink-0 w-screen h-full flex flex-col justify-center px-[5%] snap-start bg-gray-50 bg-transparent">
            {/* Section Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-center mb-16">
              Meet the Minds working behind the Scenes
            </h2>

            {/* Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
              {[...Array(6)].map((_, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center bg-purple-500 rounded-2xl shadow-lg p-4 w-40"
                >
                  {/* Image Placeholder */}
                  <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Image</span>
                  </div>

                  {/* Name Placeholder */}
                  <p className="text-center text-gray-700 font-medium">
                    Name {idx + 1}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Hero;
