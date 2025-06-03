"use client";
import { useState } from "react";

export default function FlipCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-64 h-40 [perspective:1000px]">
      <div
        className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-box bg-base-200 [backface-visibility:hidden] cursor-pointer"
          onClick={() => setFlipped(true)}
        >
          {/* User Avatar Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="h-16 w-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25v-.75A4.5 4.5 0 019 15h6a4.5 4.5 0 014.5 4.5v.75"
            />
          </svg>
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
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-box bg-base-200 [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <span>Back</span>
          <button
            className="btn btn-secondary"
            onClick={() => setFlipped(false)}
          >
            Flip to Front
          </button>
        </div>
      </div>
    </div>
  );
}
