import Image from "next/image";
import certGithub from "@/public/Cert-GitHub.jpg";
import certAzure from "@/public/Cert-Azure.jpg";
import certDocker from "@/public/Cert-Docker.jpg";
import certUbuntu from "@/public/Cert-Ubuntu.jpg";

type CertificateTabProps = {
  idPrefix: string;
};

export default function CertificateTab({ idPrefix }: CertificateTabProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="p-5">
        <div className="carousel w-full">
          <div id={`${idPrefix}-item1`} className="carousel-item w-full">
            <Image
              src={certAzure}
              alt="Azure Certificate"
              className="object-contain h-full"
            />
          </div>
          <div id={`${idPrefix}-item2`} className="carousel-item w-full">
            <Image
              src={certGithub}
              alt="GitHub Certificate"
              className="object-contain h-full"
            />
          </div>
          <div id={`${idPrefix}-item3`} className="carousel-item w-full">
            <Image
              src={certDocker}
              alt="Docker Certificate"
              className="object-contain h-full"
            />
          </div>
          <div id={`${idPrefix}-item4`} className="carousel-item w-full">
            <Image
              src={certUbuntu}
              alt="Ubuntu Certificate"
              className="object-contain h-full"
            />
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href={`#${idPrefix}-item1`} className="btn btn-xs">
            Azure
          </a>
          <a href={`#${idPrefix}-item2`} className="btn btn-xs">
            GitHub
          </a>
          <a href={`#${idPrefix}-item3`} className="btn btn-xs">
            Docker
          </a>
          <a href={`#${idPrefix}-item4`} className="btn btn-xs">
            Ubuntu
          </a>
        </div>
      </div>
    </div>
  );
}
