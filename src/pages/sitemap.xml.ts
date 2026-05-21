import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/o-nas/', priority: '0.8', changefreq: 'monthly' },
    { url: '/uslugi/', priority: '0.9', changefreq: 'monthly' },
    { url: '/uslugi/projektowanie-stron-internetowych/', priority: '0.9', changefreq: 'monthly' },
    { url: '/uslugi/tworzenie-sklepow-internetowych/', priority: '0.8', changefreq: 'monthly' },
    { url: '/uslugi/pozycjonowanie-seo/', priority: '0.8', changefreq: 'monthly' },
    { url: '/uslugi/aplikacje-internetowe/', priority: '0.7', changefreq: 'monthly' },
    { url: '/projekty/', priority: '0.8', changefreq: 'weekly' },
    { url: '/kontakt/', priority: '0.9', changefreq: 'monthly' },
  ];
  const baseUrl = 'https://vexordesigns.pl';
  const today = new Date().toISOString().split('T')[0];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${baseUrl}${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'public, max-age=3600' },
  });
};
