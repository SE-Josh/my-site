export default function AboutTab() {
  return (
    <section className="relative flex flex-col items-start text-left group gap-2 md:gap-3 w-full px-18">
      <p className="absolute select-none font-extrabold text-2xl text-base-content/40 mt-10 ml-8 transition-colors duration-500 group-hover:text-base-content">
        Software Engineer
      </p>
      <div className="font-bold text-2xl transition-all duration-500 group-hover:pl-1 group-hover:text-transparent">
        Hi! this is
      </div>
      <p className="self-end text-6xl font-bold mb-4 transition-all duration-500 group-hover:pr-10 group-hover:text-warning">
        Josh<span className="text-warning">.</span>
      </p>
      <p className="text-sm text-gray-500 transition-transform duration-500 group-hover:scale-110 px-8">
        An enthusiastic software engineer passionate about technological
        knowledge, enjoys sports and games, and continuously enhances
        development skills while expanding horizons.
      </p>
    </section>
  );
}