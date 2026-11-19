import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/site/pages';
import { siteHead } from '@/lib/site-head';
export const Route = createFileRoute('/accessibility')({ head: () => siteHead('Accessibility Statement', 'Review status and information about accessibility statement at G&4D’s Digital Concepts Limited.', '/accessibility'), component: Page });
function Page() { return <LegalPage slug="accessibility"/>; }
