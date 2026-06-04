import { painPoints } from './data/site';

const baseUrl = 'https://stratacloudaccountants.com';

export default function sitemap() {
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/services/bookkeeping',
    '/services/controller',
    '/services/cfo',
    '/industries-served',
    '/careers',
    '/podcast',
    '/resources',
    '/blog',
    '/faq',
    '/video',
    '/contact',
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.8,
    })),
    ...painPoints.map((item) => ({
      url: `${baseUrl}/solutions/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    })),
  ];
}
