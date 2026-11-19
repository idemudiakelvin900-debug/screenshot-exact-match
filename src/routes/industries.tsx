import { createFileRoute } from '@tanstack/react-router';
import { IndustriesPage } from '@/components/site/pages';
import { siteHead } from '@/lib/site-head';
export const Route = createFileRoute('/industries')({ head: () => siteHead('Industries We Serve', 'Business-led digital capabilities for financial services, SMEs, manufacturing and other industries in Nigeria.', '/industries'), component: IndustriesPage });
