import { useEffect, useRef, type ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { company } from '@/data/site';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-14 ${className}`}>{children}</div>;
}
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry?.isIntersecting) { node.classList.add('is-visible'); observer.disconnect(); } }, { threshold: 0.08 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
export function SectionHeading({ label, title, text, light = false }: { label: string; title: string; text?: string; light?: boolean }) {
  return <div className="mb-10 max-w-3xl"><p className={`eyebrow mb-4 ${light ? 'text-cyan' : 'text-primary'}`}>{label}</p><h2 className={`text-3xl font-semibold leading-[1.2] md:text-[40px] ${light ? 'text-navy-foreground' : 'text-foreground'}`}>{title}</h2>{text && <p className={`mt-5 max-w-2xl text-[15px] leading-7 ${light ? 'text-navy-foreground/65' : 'text-muted-foreground'}`}>{text}</p>}</div>;
}
export function ConversationCTA() {
  return <section className="relative overflow-hidden bg-navy-glow py-16 text-navy-foreground md:py-20"><div className="tech-grid absolute inset-0 opacity-40"/><Container className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"><div className="max-w-3xl"><p className="eyebrow mb-5 text-cyan">LET’S MOVE YOUR BUSINESS FORWARD</p><h2 className="text-3xl font-semibold leading-tight md:text-[39px]">Your business does not need more technology for technology’s sake.</h2><p className="mt-5 text-navy-foreground/65">It needs the right capability, connected to the right business objective.</p></div><Button asChild variant="hero" size="xl"><Link to="/contact">Start a Conversation <ArrowRight /></Link></Button></Container></section>;
}
export function PageIntro({ label, title, text, children }: { label: string; title: string; text: string; children?: ReactNode }) {
  return <section className="relative overflow-hidden border-b border-border bg-surface py-14 md:py-20"><Container><div className="mb-9 flex items-center gap-2 text-xs text-muted-foreground"><Link to="/" className="hover:text-primary">Home</Link><ChevronRight className="size-3"/><span>{label}</span></div><p className="eyebrow mb-5 text-primary">{label}</p><h1 className="max-w-4xl text-4xl font-semibold leading-[1.15] md:text-5xl lg:text-[56px]">{title}</h1><p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">{text}</p>{children}</Container></section>;
}
export function Brand({ light = false }: { light?: boolean }) {
  return <Link to="/" aria-label={`${company} home`} className={`flex shrink-0 items-center gap-3 ${light ? 'text-navy-foreground' : 'text-navy'}`}><span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground"><span className="font-display text-[23px] font-extrabold">G<span className="text-cyan">4</span></span><span className="absolute bottom-1 right-1 h-1 w-1 bg-cyan" /></span><span><span className="block font-display text-[20px] font-extrabold leading-6">G&amp;4D’S</span><span className="block text-[9px] font-semibold tracking-[0.15em]">DIGITAL CONCEPTS</span></span></Link>;
}
