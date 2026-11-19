import { createFileRoute } from '@tanstack/react-router';
import { SolutionsPage } from '@/components/site/pages';
import { siteHead } from '@/lib/site-head';
export const Route = createFileRoute('/solutions')({ head: () => siteHead('Our Solutions', 'Explore 12 integrated business enablement, technology, AI, cloud and digital transformation solutions in Nigeria.', '/solutions'), component: SolutionsPage });
