import { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // pixels scrolled from top
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div className="fixed left-9 w-[95%] h-5 rounded-full bg-gray-200 z-50">
  <div
    className="h-full bg-purple-500 transition-all duration-150 rounded-full"
    style={{ width: `${Math.min(Math.max(scrollProgress, 0), 100)}%` }}
  ></div>
</div>

      {/* Hero Content */}
      <main className="flex flex-col items-start justify-start min-h-[calc(90vh-6rem)] px-[5%] lg:mt-20 space-y-20">
         
        {/* Welcome Section */}
        <section className="max-w-xl w-full z-10 mt-10 lg:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
            Welcome to
            <br />
            Voyant
          </h1>
          <p className="text-base sm:text-2xl tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
            A gamified app for tourists
          </p>
          <div className="py-3 relative">
            <button className="relative z-10 bg-purple-500 rounded-full p-3 text-2xl tracking-wider cursor-pointer transition-all duration-500 hover:bg-purple-600">
              Click Here!
              <span className="absolute inset-0 rounded-full bg-purple-500 opacity-50 blur-xl animate-ping"></span>
            </button>
          </div>
        </section>

        {/* Story & Solution Section */}
        <section className="flex flex-col w-full space-y-10">

          {/* Our Story */}
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
              Our Story
            </h1>
            <p className="text-base sm:text-2xl tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
              We noticed the lack of engagement and interactivity when it comes to tourism, thereby discouraging people from getting into such a beautiful hobby
            </p>
          </div>

          {/* Our Solution */}
          <div className="max-w-xl self-end text-right">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
              Our Solution
            </h1>
            <p className="text-base sm:text-2xl tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
              An app that makes this beautiful hobby interactive and engaging
            </p>
          </div>

        </section>

      </main>
    </>
  );
};

export default Hero;
