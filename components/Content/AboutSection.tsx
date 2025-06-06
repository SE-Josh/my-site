import React from "react";

export default function AboutSection() {
  return (
    <section className="group relative flex w-full flex-col items-start gap-2 text-left md:gap-3">
      <p className="pointer-events-none absolute mt-10 ml-8 select-none text-2xl font-extrabold text-base-content/40 transition-colors duration-500 group-hover:text-base-content">
        Software Engineer
      </p>
      <h2 className="text-2xl font-bold transition-all duration-500 group-hover:pl-1 group-hover:text-transparent">
        Hi! this is
      </h2>
      <h1 className="mb-4 self-end text-6xl font-bold transition-all duration-500 group-hover:pr-10 group-hover:text-warning">
        Josh<span className="text-warning">.</span>
      </h1>
      <p className="text-sm text-gray-500 transition-transform duration-500 group-hover:scale-105">
        An enthusiastic software engineer passionate about technological knowledge, enjoys sports and games, and continuously enhances development skills while expanding horizons.
      </p>
    </section>
  );
}
