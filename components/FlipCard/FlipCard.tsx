"use client";
import { useState } from "react";
import Image from "next/image";
import draw from "@/public/draw.jpg";
import type { Tab } from "@/types";

const menuItems: { key: Tab; label: string; icon: JSX.Element }[] = [
  {
    key: "about",
    label: "關於我",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5.121 17.804A9 9 0 1112 21v-4a3 3 0 00-6 0v.804z"
        />
      </svg>
    ),
  },
  {
    key: "projects",
    label: "證照",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8l3-3 3 3M6 8l3-3 3 3m0 8l-3 3-3-3m9 0l-3 3-3-3"
        />
      </svg>
    ),
  },
  {
    key: "contact",
    label: "聯絡資訊",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 8V7a2 2 0 00-2-2H5a2 2 0 00-2 2v1m18 0l-9 6-9-6m18 0v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0l-9 6-9-6"
        />
      </svg>
    ),
  },
  {
    key: "skills",
    label: "技能表",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

interface FlipCardProps {
  onSelect: (tab: Tab) => void;
  activeTab: Tab;
}
export default function FlipCard({ onSelect, activeTab }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="p-10 w-full h-full md:p-0 md:w-64 md:h-140 [perspective:2000px]">
      <div
        className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-box bg-base-200 [backface-visibility:hidden] cursor-pointer"
          onClick={() => setFlipped(true)}
        >
          {/* User Avatar Icon */}
          <div className="avatar">
            <div className="w-24 rounded-full">
              <Image src={draw} alt="me-draw" width={480} height={480} />
            </div>
          </div>
          {/* Contact info */}
          <div className="flex flex-col items-center">
            <span className="font-bold">SE-Josh</span>
            <span className="text-sm">josh@example.com</span>
          </div>
          {/* Tap hint */}
          <div className="absolute bottom-2 right-2 flex items-center gap-1 text-sm">
            <span>Tap</span>
            <span className="text-lg" role="img" aria-label="tap gesture">
              👆
            </span>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-box bg-base-200 [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          {/* PC 呈現 Menu */}
          <ul className="menu rounded-box bg-base-200 gap-5 invisible md:visible">
            {menuItems.map((item) => (
              <li key={item.key}>
                <a
                  className={activeTab === item.key ? "menu-active" : undefined}
                  onClick={() => onSelect(item.key)}
                >
                  {item.icon}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile 呈現 Dock */}
          <div className="dock bg-neutral text-neutral-content rounded-b-box visible md:invisible">
            <button>
              <span className="dock-label">Home</span>
            </button>

            <button className="dock-active">
              <span className="dock-label">Inbox</span>
            </button>

            <button onClick={() => setFlipped(false)}>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-clockwise"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
                />
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
              </svg> */}
              <span className="dock-label">Flip</span>
            </button>
          </div>

          <div
            className="absolute bottom-2 right-2 flex items-center gap-1 text-sm cursor-pointer"
            onClick={() => setFlipped(false)}
          >
            <span>Flip</span>
            <span className="text-lg" role="img" aria-label="tap gesture">
              😎
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
