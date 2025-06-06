"use client";
import { useState } from "react";
import FlipCard from "@/components/FlipCard/FlipCard";
import Content from "@/components/Content/Content";

export default function Home() {
  const [tab, setTab] = useState<"about" | "projects" | "contact">("about");

  // open modal on any tab selection; CSS handles visibility per breakpoint
  const handleSelect = (nextTab: "about" | "projects" | "contact") => {
    setTab(nextTab);
    const modal = document.getElementById(
      "my_modal_1"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-6 md:flex-row md:px-3">
      <FlipCard onSelect={handleSelect} activeTab={tab} />
      <div className="hidden md:block">
        <Content activeTab={tab} />
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
