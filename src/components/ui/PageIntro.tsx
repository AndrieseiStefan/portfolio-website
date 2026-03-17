import { ReactNode } from 'react';
import { Container } from './Container';

export function PageIntro({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <section className="pt-14 sm:pt-20 lg:pt-24">
      <Container>
        <div className="max-w-3xl space-y-6">
          <p className="section-eyebrow tracking-[0.3em]">{eyebrow}</p>
          <h1 className="page-title">{title}</h1>
          <p className="max-w-2xl text-secondary sm:text-lg">{description}</p>
          {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
        </div>
      </Container>
    </section>
  );
}
