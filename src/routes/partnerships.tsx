import { createFileRoute } from '@tanstack/react-router';
import { PartnershipsPage } from '@/components/site/pages';
import { siteHead } from '@/lib/site-head';
export const Route = createFileRoute('/partnerships')({ head: () => siteHead('Partnerships', 'Explore technology, specialist and implementation partnership opportunities with G&4D’s Digital Concepts.', '/partnerships'), component: PartnershipsPage });
