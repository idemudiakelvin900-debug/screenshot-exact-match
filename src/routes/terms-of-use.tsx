import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/site/pages';
import { siteHead } from '@/lib/site-head';
export const Route = createFileRoute('/terms-of-use')({ head: () => siteHead('Terms of Use', 'Review status and information about terms of use at G&4D’s Digital Concepts Limited.', '/terms-of-use'), component: Page });
function Page() { return <LegalPage slug="terms-of-use"/>; }
