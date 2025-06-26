"use client";
import { JSX, useState } from "react";
import Image from "next/image";
import draw from "@/public/draw.jpg";
import type { Tab } from "@/types";

const menuItems: { key: Tab; label: string; icon: JSX.Element }[] = [
  {
    key: "about",
    label: "關於我",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
        <path d="M8.25 10.3125C8.25 9.79473 8.66973 9.375 9.1875 9.375H12.1875C12.7053 9.375 13.125 9.79473 13.125 10.3125V18.375C13.125 18.8928 12.7053 19.3125 12.1875 19.3125C11.6697 19.3125 11.25 18.8928 11.25 18.375V11.25H9.1875C8.66973 11.25 8.25 10.8303 8.25 10.3125Z" />
        <path d="M7.82812 18.5625C7.82812 18.0447 8.24786 17.625 8.76562 17.625H15.2344C15.7521 17.625 16.1719 18.0447 16.1719 18.5625C16.1719 19.0803 15.7521 19.5 15.2344 19.5H8.76562C8.24786 19.5 7.82812 19.0803 7.82812 18.5625Z" />
        <path d="M12 7.5C11.7033 7.5 11.4133 7.41203 11.1666 7.24721C10.92 7.08238 10.7277 6.84811 10.6142 6.57403C10.5006 6.29994 10.4709 5.99834 10.5288 5.70737C10.5867 5.41639 10.7296 5.14912 10.9393 4.93934C11.1491 4.72956 11.4164 4.5867 11.7074 4.52882C11.9983 4.47094 12.2999 4.50065 12.574 4.61418C12.8481 4.72771 13.0824 4.91997 13.2472 5.16665C13.412 5.41332 13.5 5.70333 13.5 6C13.5 6.39783 13.342 6.77936 13.0607 7.06066C12.7794 7.34197 12.3978 7.5 12 7.5Z" />
      </svg>
    ),
  },
  {
    key: "projects",
    label: "證照",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <g clipPath="url(#clip0_53_13510)">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 18C16.6569 18 18 16.6569 18 15C18 13.3431 16.6569 12 15 12C13.3431 12 12 13.3431 12 15C12 16.6569 13.3431 18 15 18Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17.5V22L15 20.5L17 22V17.5" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7C3 5.9 3.9 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V17C20.9996 17.3507 20.9071 17.6952 20.7315 17.9988C20.556 18.3025 20.3037 18.5546 20 18.73"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9H18" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12H9" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 15H8" />
        </g>
      </svg>
    ),
  },
  {
    key: "contact",
    label: "聯絡資訊",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 8V7a2 2 0 00-2-2H5a2 2 0 00-2 2v1m18 0l-9 6-9-6m18 0v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0l-9 6-9-6" />
      </svg>
    ),
  },
  {
    key: "skills",
    label: "技能表",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
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
      <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]" style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
        {/* Front Side */}
        <div className="card absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-box bg-base-200 [backface-visibility:hidden] cursor-pointer" onClick={() => setFlipped(true)}>
          {/* User Avatar Icon */}
          <div className="avatar">
            <div className="w-28 rounded-full">
              <Image src={draw} alt="me-draw" width={480} height={480} />
            </div>
          </div>
          {/* Profile info */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-xl font-bold">Josh</span>
            <span className="text-sm text-neutral-500">Software Engineer</span>
          </div>
          {/* Tap hint */}
          <div className="absolute bottom-2 right-2 flex items-center gap-1 text-sm">
            <span>Tap</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
              <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="1.91"
                d="M17.07,20.61H9.79a2,2,0,0,1-2-2,2,2,0,0,1,2-2h1.87L5,9.86a2,2,0,0,1-.19-2.65,1.88,1.88,0,0,1,1.47-.68,1.84,1.84,0,0,1,1.35.55l4.06,4.06,4.08-3.06a1.91,1.91,0,0,1,2.5.18h0A17.18,17.18,0,0,1,22.42,15l.06.19"
              />
              <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.91" d="M10.63,10.12A4.73,4.73,0,0,0,11,8.17,4.78,4.78,0,1,0,6.26,13a4.67,4.67,0,0,0,1.55-.26" />
            </svg>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-box bg-base-200 [backface-visibility:hidden]" style={{ transform: "rotateY(180deg)" }}>
          {/* PC 呈現 Menu */}
          <ul className="menu rounded-box bg-base-200 gap-5 invisible md:visible">
            {menuItems.map((item) => (
              <li key={item.key}>
                <a className={`transition-all duration-300 ease-in-out ${activeTab === item.key ? "menu-active" : ""}`} onClick={() => onSelect(item.key)}>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
              </svg>
              <span className="dock-label">Back</span>
            </button>
          </div>

          <div className="absolute bottom-2 right-2 flex items-center gap-1 text-sm cursor-pointer" onClick={() => setFlipped(false)}>
            <span>Back</span>
            <span className="text-lg" role="img" aria-label="tap gesture">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
