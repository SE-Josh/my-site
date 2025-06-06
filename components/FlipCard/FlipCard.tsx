"use client";
import { useState } from "react";
import Image from "next/image";
import draw from "@/public/draw.jpg";
import fileIcon from "@/public/file.svg";
import globeIcon from "@/public/globe.svg";
import windowIcon from "@/public/window.svg";

interface FlipCardProps {
  onSelect: (tab: "about" | "projects" | "contact") => void;
  activeTab: "about" | "projects" | "contact";
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
          <div className="flex flex-col gap-2">
            <button
              className={`btn btn-sm ${activeTab === "about" ? "btn-primary" : ""}`}
              onClick={() => onSelect("about")}
            >
              <Image src={fileIcon} alt="about" width={24} height={24} />
              ABOUT ME
            </button>
            <button
              className={`btn btn-sm ${activeTab === "projects" ? "btn-primary" : ""}`}
              onClick={() => onSelect("projects")}
            >
              <Image src={windowIcon} alt="projects" width={24} height={24} />
              PROJECTS
            </button>
            <button
              className={`btn btn-sm ${activeTab === "contact" ? "btn-primary" : ""}`}
              onClick={() => onSelect("contact")}
            >
              <Image src={globeIcon} alt="contact" width={24} height={24} />
              CONTACT
            </button>
          </div>
          <button
            className="btn btn-secondary absolute bottom-2 right-2"
            onClick={() => setFlipped(false)}
          >
            Flip
          </button>
        </div>
      </div>
    </div>
  );
}
