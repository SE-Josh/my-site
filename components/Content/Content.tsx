import Image from "next/image";
import fileIcon from "@/public/file.svg";
import globeIcon from "@/public/globe.svg";
import windowIcon from "@/public/window.svg";

interface ContentProps {
  activeTab: "about" | "projects" | "contact";
}

export default function Content({ activeTab }: ContentProps) {
  return (
    <div className="w-full md:w-96 h-80 md:h-200 rounded-box bg-base-200 p-4 flex items-center justify-center">
      {activeTab === "about" && (
        <div className="flex flex-col items-center gap-2">
          <Image src={fileIcon} alt="about" width={32} height={32} />
          <p className="text-center">Hello! I am Josh, a software engineer.</p>
        </div>
      )}
      {activeTab === "projects" && (
        <div className="flex flex-col items-center gap-2">
          <Image src={windowIcon} alt="projects" width={32} height={32} />
          <p className="text-center">Projects coming soon.</p>
        </div>
      )}
      {activeTab === "contact" && (
        <div className="flex flex-col items-center gap-2">
          <Image src={globeIcon} alt="contact" width={32} height={32} />
          <p className="text-center">Reach me at josh@example.com</p>
        </div>
      )}
    </div>
  );
}
