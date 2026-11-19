import { company, website } from '@/data/site';
export function siteHead(title: string, description: string, path = '/') {
  const fullTitle = `${title} | G&4D's Digital Concepts`;
  return {
    meta: [
      { title: fullTitle }, { name: 'description', content: description },
      { property: 'og:title', content: fullTitle }, { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: `${website}${path}` }],
    scripts: path === '/' ? [{ type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: company, url: website, address: { '@type': 'PostalAddress', addressLocality: 'Lagos', addressCountry: 'NG' } }) }] : [],
  };
}
