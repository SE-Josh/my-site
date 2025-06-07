import Image from "next/image";
import globeIcon from "@/public/globe.svg";
import certGithub from "@/public/Cert-GitHub.jpg";
import certAzure from "@/public/Cert-Azure.jpg";
import certDocker from "@/public/Cert-Docker.jpg";
import SkillsMockup from "@/components/SkillsMockup/SkillsMockup";
import type { Tab } from "@/types";

interface ContentProps {
  activeTab: Tab;
}

export default function Content({ activeTab }: ContentProps) {
  return (
    <div className="w-full md:w-150 h-80 md:h-140 rounded-box bg-base-200 p-4 flex items-center justify-center">
      {activeTab === "about" && (
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
      )}
      {activeTab === "projects" && (
        <div className="flex flex-col items-center gap-2">
          <div className="p-5">
            <div className="carousel w-full">
              <div id="item1" className="carousel-item w-full flex flex-col">
                <Image
                  src={certGithub}
                  alt="GitHub Certificate"
                  className="object-contain h-full"
                />
              </div>
              <div id="item2" className="carousel-item w-full">
                <Image
                  src={certDocker}
                  alt="Docker Certificate"
                  className="object-contain h-full"
                />
              </div>
              <div id="item3" className="carousel-item w-full">
                <Image
                  src={certAzure}
                  alt="Azure Certificate"
                  className="object-contain h-full"
                />
              </div>
              <div id="item4" className="carousel-item w-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                  className="object-contain h-full"
                />
              </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
              <a href="#item1" className="btn btn-xs">
                GitHub
              </a>
              <a href="#item2" className="btn btn-xs">
                Docker
              </a>
              <a href="#item3" className="btn btn-xs">
                Azure
              </a>
              <a href="#item4" className="btn btn-xs">
                Ubuntu
              </a>
            </div>
          </div>
        </div>
      )}
      {activeTab === "contact" && (
        <ul className="list bg-base-200 rounded-box">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            歡迎透過以下資訊與我聯繫
          </li>

          <li className="list-row">
            <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
            <div>
              <svg
                aria-label="LinkedIn logo"
                width="40"
                height="40"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path
                  fill="white"
                  d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="list-col-grow">
              <div>LinkedIn</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                Josh Lin
              </div>
            </div>
            <button className="btn btn-square btn-ghost">
              <svg
                className="size-[1.2em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 3L20 12 6 21 6 3z"></path>
                </g>
              </svg>
            </button>
          </li>

          <li className="list-row">
            <div className="text-4xl font-thin opacity-30 tabular-nums">02</div>
            <div>
              <img
                className="size-10 rounded-box"
                src="https://img.daisyui.com/images/profile/demo/4@94.webp"
              />
            </div>
            <div className="list-col-grow">
              <div>Ellie Beilish</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                Bears of a fever
              </div>
            </div>
            <button className="btn btn-square btn-ghost">
              <svg
                className="size-[1.2em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 3L20 12 6 21 6 3z"></path>
                </g>
              </svg>
            </button>
          </li>

          <li className="list-row">
            <div className="text-4xl font-thin opacity-30 tabular-nums">03</div>
            <div>
              <img
                className="size-10 rounded-box"
                src="https://img.daisyui.com/images/profile/demo/3@94.webp"
              />
            </div>
            <div className="list-col-grow">
              <div>Sabrino Gardener</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                Cappuccino
              </div>
            </div>
            <button className="btn btn-square btn-ghost">
              <svg
                className="size-[1.2em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 3L20 12 6 21 6 3z"></path>
                </g>
              </svg>
            </button>
          </li>
          <li className="list-row">
            <div className="text-4xl font-thin opacity-30 tabular-nums">03</div>
            <div>
              <img
                className="size-10 rounded-box"
                src="https://img.daisyui.com/images/profile/demo/3@94.webp"
              />
            </div>
            <div className="list-col-grow">
              <div>Sabrino Gardener</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                Cappuccino
              </div>
            </div>
            <button className="btn btn-square btn-ghost">
              <svg
                className="size-[1.2em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 3L20 12 6 21 6 3z"></path>
                </g>
              </svg>
            </button>
          </li>
        </ul>
      )}
      {activeTab === "skills" && (
        <section className="flex items-center justify-center w-full h-full">
          <SkillsMockup />
        </section>
      )}
    </div>
  );
}
