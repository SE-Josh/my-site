import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 靜態匯出 enable
  output: "export",
  // 把 <Image> 倒回 <img>，GitHub Pages 不支援 SSR
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
