import { createFileRoute } from "@tanstack/react-router";
import { Home } from '@/components/site/home';
import { siteHead } from '@/lib/site-head';
export const Route = createFileRoute('/')({
  head: () => siteHead('Business Enablement & Digital Transformation in Nigeria', 'G&4D’s Digital Concepts Limited connects strategy, technology, AI, data and people to turn business challenges into digital advantage.'),
  component: Home,
});
