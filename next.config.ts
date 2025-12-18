import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "determined-unity-de531adc95.media.strapiapp.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "determined-unity-de531adc95.strapiapp.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "api.eucareerserwis.pl",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
