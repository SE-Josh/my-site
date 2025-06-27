export default function AboutTab() {
  const greeting = "Hi! this is";
  const shadow = "Software Engineer";
  const name = "Josh";
  const dot = ".";
  const intro =
    "An enthusiastic software engineer passionate about technological knowledge, enjoys sports and games, and continuously enhances development skills while expanding horizons.";

  return (
    <main className="flex flex-col items-center justify-center w-full font-mono">
      <section className="flex flex-col items-start justify-start relative text-left w-full max-w-[375px] group">
        <div className="select-none font-bold text-3xl leading-[60px] mb-2 transition-all duration-1500 group-hover:pl-[50%] group-hover:text-transparent md:group-hover:pl-[30%]">
          {greeting}
        </div>
        <p className="select-none absolute text-[#29282866] font-extrabold text-3xl leading-[35px] mt-[41px] ml-[30px] transition-colors duration-1000 group-hover:text-primary">
          {shadow}
        </p>
        <p className="select-none text-7xl leading-[60px] font-bold self-end mb-8 transition-all duration-1500 group-hover:pr-[40%] group-hover:text-primary">
          {name}
          <span className="text-[#e2b714]">{dot}</span>
        </p>
        <p className="text-[15px] text-[#999999] leading-6 font-light text-left mb-0 transition-all duration-1500 group-hover:scale-110">
          {intro}
        </p>
      </section>
    </main>
  );
}
