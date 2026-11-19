import { createFileRoute } from '@tanstack/react-router';
import { InsightsPage } from '@/components/site/pages';
import { siteHead } from '@/lib/site-head';
export const Route = createFileRoute('/insights')({ head: () => siteHead('The Digital Business Journal', 'Practical perspectives on digital transformation, artificial intelligence, cybersecurity and business growth.', '/insights'), component: InsightsPage });
