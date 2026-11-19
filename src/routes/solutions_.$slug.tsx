import { createFileRoute, notFound } from '@tanstack/react-router';
import { SolutionDetail } from '@/components/site/pages';
import { solutions } from '@/data/site';
import { siteHead } from '@/lib/site-head';
export const Route = createFileRoute('/solutions_/$slug')({
 loader: ({ params }) => { const item = solutions.find(x => x.slug === params.slug); if (!item) throw notFound(); return { title: item.title, slug: item.slug }; },
 head: ({ loaderData }) => siteHead(loaderData?.title ?? 'Unavailable', 'Business-led technology and digital capability tailored to your organisation.', '/solutions/' + (loaderData?.slug ?? '')),
 component: Page,
});
function Page() { const {slug} = Route.useParams(); return <SolutionDetail slug={slug}/>; }
