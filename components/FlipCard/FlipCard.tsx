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
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-box bg-base-200 [backface-visibility:hidden]">
          <span>Front</span>
          <button className="btn btn-primary" onClick={() => setFlipped(true)}>
            Flip to Back
          </button>
        </div>
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
