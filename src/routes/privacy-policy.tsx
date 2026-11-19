import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/site/pages';
import { siteHead } from '@/lib/site-head';
export const Route = createFileRoute('/privacy-policy')({ head: () => siteHead('Privacy Policy', 'Review status and information about privacy policy at G&4D’s Digital Concepts Limited.', '/privacy-policy'), component: Page });
function Page() { return <LegalPage slug="privacy-policy"/>; }
