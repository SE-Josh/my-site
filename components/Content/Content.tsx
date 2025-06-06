import Image from "next/image";
import fileIcon from "@/public/file.svg";
import globeIcon from "@/public/globe.svg";
import windowIcon from "@/public/window.svg";

interface ContentProps {
  activeTab: "about" | "projects" | "contact";
}

export default function Content({ activeTab }: ContentProps) {
  return (
    <div className="w-full md:w-150 h-80 md:h-140 rounded-box bg-base-200 p-4 flex items-center justify-center">
      {activeTab === "about" && (
        <div className="flex flex-col items-center gap-2">
          <Image src={fileIcon} alt="about" width={32} height={32} />
          <p className="text-center">Hello! I am Josh, a software engineer.</p>
        </div>
      )}
      {activeTab === "projects" && (
        <div className="flex flex-col items-center gap-2">
          <div className="p-5">
            <div className="carousel w-full">
              <div id="item1" className="carousel-item w-full flex flex-col">
                <p>這是第一個專案</p>
                <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" className="w-full" />
              </div>
              <div id="item2" className="carousel-item w-full">
                <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp" className="w-full" />
              </div>
              <div id="item3" className="carousel-item w-full">
                <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp" className="w-full" />
              </div>
              <div id="item4" className="carousel-item w-full">
                <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp" className="w-full" />
              </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
              <a href="#item1" className="btn btn-xs">
                1
              </a>
              <a href="#item2" className="btn btn-xs">
                2
              </a>
              <a href="#item3" className="btn btn-xs">
                3
              </a>
              <a href="#item4" className="btn btn-xs">
                4
              </a>
            </div>
          </div>
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
