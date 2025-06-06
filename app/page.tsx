"use client";
import { useState } from "react";
import FlipCard from "@/components/FlipCard/FlipCard";
import Content from "@/components/Content/Content";
import type { Tab } from "@/types";

export default function Home() {
  const [tab, setTab] = useState<Tab>("about");

  const handleSelect = (nextTab: Tab) => {
    setTab(nextTab);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-6 md:flex-row md:px-3">
      <FlipCard onSelect={handleSelect} activeTab={tab} />
      <div className="hidden md:block">
        <Content activeTab={tab} />
      </div>
    </div>
  );
}
