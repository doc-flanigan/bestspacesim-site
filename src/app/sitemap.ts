import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/links';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ['', '/comparison', '/star-citizen', '/free-fly'];
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/star-citizen' ? 0.9 : 0.8,
  }));
}
