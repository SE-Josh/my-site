import type { Tab } from "@/types";
import AboutTab from "./AboutTab";
import CertificateTab from "./CertificateTab";
import ContactTab from "./ContactTab";
import SkillsTab from "./SkillsTab";

interface ContentProps {
  activeTab: Tab;
}

export default function Content({ activeTab }: ContentProps) {
  const tabContent = {
    about: <AboutTab />,
    certificates: <CertificateTab idPrefix="PC"/>,
    contact: <ContactTab />,
    skills: <SkillsTab />,
  };

  return (
    <div className="w-full md:w-150 h-80 md:h-140 rounded-box bg-base-200 p-4 flex items-center justify-center relative overflow-hidden">
      {(Object.keys(tabContent) as Tab[]).map((tab) => (
        <div
          key={tab}
          className={`transition-all duration-500 ease-in-out absolute p-4 w-full h-full flex items-center justify-center ${
            activeTab === tab
              ? "opacity-100 transform-none"
              : "opacity-0 transform-translate-y-10 pointer-events-none"
          }`}
        >
          {tabContent[tab]}
        </div>
      ))}
    </div>
  );
}
