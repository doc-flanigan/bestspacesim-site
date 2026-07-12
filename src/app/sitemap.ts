import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/links';
import { GAMES } from '@/data/games';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const versusRoutes = GAMES.filter((g) => g.id !== 'star-citizen').map(
    (g) => `/star-citizen-vs/${g.id}`,
  );
  const routes = [
    '',
    '/comparison',
    '/star-citizen',
    '/is-star-citizen-worth-it',
    '/is-star-citizen-a-scam',
    '/star-citizen-player-count',
    '/best-space-games',
    ...versusRoutes,
  ];
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/star-citizen' ? 0.9 : 0.8,
  }));
}
