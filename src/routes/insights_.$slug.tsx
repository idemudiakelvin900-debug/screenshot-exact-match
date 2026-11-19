import { createFileRoute, notFound } from '@tanstack/react-router';
import { ArticleDetail } from '@/components/site/pages';
import { articles } from '@/data/site';
import { siteHead } from '@/lib/site-head';
export const Route = createFileRoute('/insights_/$slug')({
 loader: ({ params }) => { const item = articles.find(x => x.slug === params.slug); if (!item) throw notFound(); return { title: item.title, slug: item.slug }; },
 head: ({ loaderData }) => siteHead(loaderData?.title ?? 'Unavailable', 'A forthcoming perspective from The Digital Business Journal.', '/insights/' + (loaderData?.slug ?? '')),
 component: Page,
});
function Page() { const {slug} = Route.useParams(); return <ArticleDetail slug={slug}/>; }
