import { Container } from '../components/ui/Container';
import { PageIntro } from '../components/ui/PageIntro';
import { profile } from '../data/profile';

export function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Personal Introduction"
        title={profile.about.introTitle}
        description="This page is a more personal look at how I think about quality, products, UX, and collaboration."
      />

      <section className="page-shell">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6">
              <section className="surface-card p-6 sm:p-8">
                <h2 className="section-title">Who I am and how I work</h2>
                <div className="mt-5 space-y-4">
                  {profile.about.intro.map((paragraph) => (
                    <p key={paragraph} className="text-secondary">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {profile.about.sections.map((section) => (
                <section key={section.title} className="surface-card p-6 sm:p-8">
                  <h2 className="section-title">{section.title}</h2>
                  <div className="mt-5 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-secondary">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
