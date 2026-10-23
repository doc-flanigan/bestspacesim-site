import ChunkLoadNoThrowPlugin from './chunk-load-no-throw.mjs'
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Retry, then wait (never throw) on a failed JS chunk, so a resource that
  // Google's renderer skips can't blank the page. See chunk-load-no-throw.mjs.
  webpack(config, { isServer, webpack }) {
    if (!isServer) config.plugins.push(new ChunkLoadNoThrowPlugin(webpack))
    return config
  },
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
