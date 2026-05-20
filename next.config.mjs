/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.bestspacesim.com' }],
        destination: 'https://bestspacesim.com/:path*',
        permanent: true,
      },
      {
        source: '/free-fly',
        destination: 'https://www.freeflyevent.com',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
