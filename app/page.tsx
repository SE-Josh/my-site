"use client";
import { useRef, useState } from "react";
import FlipCard from "@/components/FlipCard/FlipCard";
import Content from "@/components/Content/Content";

export default function Home() {
  const [tab, setTab] = useState<"about" | "projects" | "contact">("about");
  const modalRef = useRef<HTMLDialogElement>(null);

  // open modal on any tab selection; CSS handles visibility per breakpoint
  const handleSelect = (nextTab: "about" | "projects" | "contact") => {
    setTab(nextTab);
    modalRef.current?.showModal();
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4 md:flex-row">
      <FlipCard onSelect={handleSelect} />
      <div className="hidden md:block">
        <Content activeTab={tab} />
      </div>
      <dialog ref={modalRef} id="tab_modal" className="modal md:hidden">
        <div className="modal-box w-full h-full max-w-none">
          <Content activeTab={tab} />
        </div>
        <form method="dialog" className="modal-backdrop p-5">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
