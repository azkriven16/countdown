import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow all remote domains (wildcard)
      },
    ],
    domains: ["*"], // Optional fallback, not strictly required with remotePatterns
    unoptimized: false, // Keep this if you're using the Next.js Image component with optimization
  },
};

export default nextConfig;
