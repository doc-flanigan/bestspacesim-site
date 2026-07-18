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
      {
        // vercel.app alias served a full indexable duplicate (network-wide
        // GSC duplicate-canonical fix, 2026-07-18). Exact match keeps
        // preview URLs working.
        source: '/:path*',
        has: [{ type: 'host', value: 'bestspacesim-site.vercel.app' }],
        destination: 'https://bestspacesim.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
