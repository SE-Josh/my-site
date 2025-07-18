import Image from "next/image";
import certGithub from "@/public/Cert-GitHub.jpg";
import certAzure from "@/public/Cert-Azure.jpg";
import certDocker from "@/public/Cert-Docker.jpg";
import certUbuntu from "@/public/Cert-Ubuntu.jpg";

export default function CertificateTab() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="p-5">
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <Image
              src={certAzure}
              alt="Azure Certificate"
              className="object-contain h-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full flex flex-col">
            <Image
              src={certGithub}
              alt="GitHub Certificate"
              className="object-contain h-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <Image
              src={certDocker}
              alt="Docker Certificate"
              className="object-contain h-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <Image
              src={certUbuntu}
              alt="Ubuntu Certificate"
              className="object-contain h-full"
            />
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">
            Azure
          </a>
          <a href="#item2" className="btn btn-xs">
            GitHub
          </a>
          <a href="#item3" className="btn btn-xs">
            Docker
          </a>
          <a href="#item4" className="btn btn-xs">
            Ubuntu
          </a>
        </div>
      </div>
    </div>
  );
}
