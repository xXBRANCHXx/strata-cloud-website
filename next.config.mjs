/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'stratacloudaccountants.com',
      },
    ],
  },
};

export default nextConfig;
