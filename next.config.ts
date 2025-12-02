// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/api/:path*'
      },
      {
        source: '/oauth2/:path*',
        destination: 'http://localhost:8080/oauth2/:path*'
      }
    ]
  }
};

module.exports = nextConfig;
