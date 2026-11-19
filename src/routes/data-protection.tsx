import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/site/pages';
import { siteHead } from '@/lib/site-head';
export const Route = createFileRoute('/data-protection')({ head: () => siteHead('Data Protection', 'Review status and information about data protection at G&4D’s Digital Concepts Limited.', '/data-protection'), component: Page });
function Page() { return <LegalPage slug="data-protection"/>; }
