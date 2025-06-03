"use client";
import { useState } from "react";
import Image from "next/image";
import draw from "@/public/draw.jpg";

export default function FlipCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    // 在 rwd md size 以上將高度設定為 1000px，其他尺寸則為 400px
    <div className="p-10 w-full h-full md:w-64 md:h-200 [perspective:2000px]">
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

          <div className="avatar">
            <div className="w-24 rounded-full">
              <Image src={draw} alt={"me-draw"} width={480} height={480} />
            </div>
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
