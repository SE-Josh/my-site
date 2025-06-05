"use client";
import { useState } from "react";
import FlipCard from "@/components/FlipCard/FlipCard";
import Content from "@/components/Content/Content";

export default function Home() {
  const [tab, setTab] = useState<"about" | "projects" | "contact">("about");
  const [open, setOpen] = useState(false);

  // open modal on any tab selection; CSS handles visibility per breakpoint
  const handleSelect = (nextTab: "about" | "projects" | "contact") => {
    setTab(nextTab);
    setOpen(true);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4 md:flex-row">
      <FlipCard onSelect={handleSelect} />
      <div className="hidden md:block">
        <Content activeTab={tab} />
      </div>
      {open && (
        <dialog className="modal modal-open md:hidden">
          <div className="modal-box">
            <Content activeTab={tab} />
            <div className="modal-action">
              <button className="btn" onClick={() => setOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
