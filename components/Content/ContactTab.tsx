import Image from "next/image";
import github from "@/public/github.png";
import linkedin from "@/public/linkedin.png";
import instagram from "@/public/instagram.png";
import hackmd from "@/public/hackmd.png";

export default function ContactTab() {
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
  );
}