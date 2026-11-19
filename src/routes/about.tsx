import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/site/pages';
import { siteHead } from '@/lib/site-head';
export const Route = createFileRoute('/about')({ head: () => siteHead('About Us', 'Business enablement and digital transformation rooted in Africa, built for business progress.', '/about'), component: AboutPage });
