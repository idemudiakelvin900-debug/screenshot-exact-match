import { createFileRoute } from '@tanstack/react-router';
import { ProjectsPage } from '@/components/site/pages';
import { siteHead } from '@/lib/site-head';
export const Route = createFileRoute('/projects')({ head: () => siteHead('Projects & Case Studies', 'Explore our case study approach from business challenge through implementation, adoption and outcome.', '/projects'), component: ProjectsPage });
