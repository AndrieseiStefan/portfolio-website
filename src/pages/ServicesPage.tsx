import { Container } from '../components/ui/Container';
import { PageIntro } from '../components/ui/PageIntro';
import { services } from '../data/services';

export function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Flexible QA support for testing depth, UX feedback, and release confidence."
        description="My services focus on practical testing, usability input, requirement clarification, and bug reporting that helps teams move faster."
      />

      <section className="page-shell">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="surface-card p-6">
                <h2 className="section-title text-3xl sm:text-3xl">{service.title}</h2>
                <p className="mt-4 text-secondary">{service.shortDescription}</p>
                <ul className="mt-5 space-y-2 text-muted">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
