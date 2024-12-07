import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Разрешение на использование картинок из AWS;
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'illiabulgakovawsbucket.s3.eu-north-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
