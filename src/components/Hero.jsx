import "boxicons/css/boxicons.min.css";

const Hero = () => {
  return (
    <main className="flex flex-col lg:flex-row items-start lg:items-center justify-between min-h-[calc(90vh-6rem)] px-[5%] lg:mt-20">
      <div className="max-w-xl z-10 mt-10 lg:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
          Welcome to
          <br />
          Voyant
        </h1>
        <p className="text-base sm:text-2xl tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
            A gamified app for tourists
        </p>
        <div className="py-3">
          <button className="bg-purple-500 rounded-full p-3 text-2xl transition-colors duration-500 tracking-wider hover:bg-purple-600 cursor-pointer animate-pulse">
            Click Here!
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
