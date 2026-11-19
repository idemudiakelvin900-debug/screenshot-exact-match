import { createFileRoute, notFound } from '@tanstack/react-router';
import { IndustryDetail } from '@/components/site/pages';
import { industries } from '@/data/site';
import { siteHead } from '@/lib/site-head';
export const Route = createFileRoute('/industries_/$slug')({
 loader: ({ params }) => { const item = industries.find(x => x.slug === params.slug); if (!item) throw notFound(); return { title: item.title, slug: item.slug }; },
 head: ({ loaderData }) => siteHead(loaderData?.title ?? 'Unavailable', 'Digital transformation connected to your industry and business context.', '/industries/' + (loaderData?.slug ?? '')),
 component: Page,
});
function Page() { const {slug} = Route.useParams(); return <IndustryDetail slug={slug}/>; }
