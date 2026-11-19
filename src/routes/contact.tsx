import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import { ContactPage } from '@/components/site/contact';
import { siteHead } from '@/lib/site-head';
export const Route = createFileRoute('/contact')({
 validateSearch: z.object({ category: z.string().optional() }),
 head: () => siteHead('Start a Conversation', 'Talk to G&4D’s Digital Concepts about your business challenge, digital transformation or partnership opportunity in Lagos, Nigeria.', '/contact'),
 component: Page,
});
function Page() { const {category} = Route.useSearch(); return <ContactPage category={category}/>; }
