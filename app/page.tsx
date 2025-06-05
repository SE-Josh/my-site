"use client";
import { useState } from "react";
import FlipCard from "@/components/FlipCard/FlipCard";
import Content from "@/components/Content/Content";

export default function Home() {
  const [tab, setTab] = useState<"about" | "projects" | "contact">("about");

  return (
    <div className="w-full h-screen flex flex-row items-center justify-center gap-4">
      <FlipCard onSelect={setTab} />
      <Content activeTab={tab} />
    </div>
  );
}
