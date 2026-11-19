import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/site/pages';
import { siteHead } from '@/lib/site-head';
export const Route = createFileRoute('/ai-technology-disclaimer')({ head: () => siteHead('AI & Technology Disclaimer', 'Review status and information about ai & technology disclaimer at G&4D’s Digital Concepts Limited.', '/ai-technology-disclaimer'), component: Page });
function Page() { return <LegalPage slug="ai-technology-disclaimer"/>; }
