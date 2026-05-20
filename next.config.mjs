/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/free-fly',
        destination: 'https://www.freeflyevent.com',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
