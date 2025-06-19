import Image from "next/image";
import globeIcon from "@/public/globe.svg";
import certGithub from "@/public/Cert-GitHub.jpg";
import certAzure from "@/public/Cert-Azure.jpg";
import certDocker from "@/public/Cert-Docker.jpg";
import SkillsMockup from "@/components/SkillsMockup/SkillsMockup";
import type { Tab } from "@/types";
import github from "@/public/github.png";
import linkedin from "@/public/linkedin.png";
import instagram from "@/public/instagram.png";
import hackmd from "@/public/hackmd.png";

interface ContentProps {
  activeTab: Tab;
}

export default function Content({ activeTab }: ContentProps) {
  const contactUrls = {
    linkedin: "https://www.linkedin.com/in/josh-lin-1518411b8/",
    github: "https://github.com/SE-Josh",
    instagram: "https://www.instagram.com/87osh/",
    hackmd: "https://hackmd.io/@SE-Josh",
  };

  const openWin = (platform: keyof typeof contactUrls) => {
    window.open(contactUrls[platform]);
  };

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
        <ul className="list bg-base-200 rounded-box w-full">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            歡迎透過以下資訊與我聯繫
          </li>

          <li className="list-row">
            <div className="text-4xl font-thin opacity-30 tabular-nums">１</div>
            <div>
              <Image
                className="size-10 rounded-box"
                src={linkedin}
                alt="linkedin logo"
              />
            </div>
            <div className="list-col-grow">
              <div>LinkedIn</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                Josh Lin
              </div>
            </div>
            <button
              className="btn btn-square btn-ghost"
              onClick={() => openWin("linkedin")}
            >
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
            <div className="text-4xl font-thin opacity-30 tabular-nums">２</div>
            <div>
              <Image
                className="size-10 rounded-box"
                src={github}
                alt="github logo"
              />
            </div>
            <div className="list-col-grow">
              <div>GitHub</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                SE-Josh
              </div>
            </div>
            <button
              className="btn btn-square btn-ghost"
              onClick={() => openWin("github")}
            >
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
            <div className="text-4xl font-thin opacity-30 tabular-nums">３</div>
            <div>
              <Image
                className="size-10 rounded-box"
                src={hackmd}
                alt="hackmd logo"
              />
            </div>
            <div className="list-col-grow">
              <div>HackMD</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                SE-Josh
              </div>
            </div>
            <button
              className="btn btn-square btn-ghost"
              onClick={() => openWin("hackmd")}
            >
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
            <div className="text-4xl font-thin opacity-30 tabular-nums">４</div>
            <div>
              <Image
                className="size-10 rounded-box"
                src={instagram}
                alt="instagram logo"
              />
            </div>
            <div className="list-col-grow">
              <div>Instagram</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                87osh
              </div>
            </div>
            <button
              className="btn btn-square btn-ghost"
              onClick={() => openWin("instagram")}
            >
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
