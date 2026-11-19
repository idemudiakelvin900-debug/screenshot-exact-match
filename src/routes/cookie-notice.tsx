import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/site/pages';
import { siteHead } from '@/lib/site-head';
export const Route = createFileRoute('/cookie-notice')({ head: () => siteHead('Cookie Notice', 'Review status and information about cookie notice at G&4D’s Digital Concepts Limited.', '/cookie-notice'), component: Page });
function Page() { return <LegalPage slug="cookie-notice"/>; }
