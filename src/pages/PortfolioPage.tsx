import { Container } from '../components/ui/Container';
import { PageIntro } from '../components/ui/PageIntro';
import { experience } from '../data/experience';

const websiteCaseStudy = {
  title: 'Designing a personal portfolio focused on clarity and UX',
  context:
    'I wanted to create a portfolio that reflects how I think about product quality, not just list my experience.',
  contextSupporting:
    'Most portfolio websites feel either too generic or too focused on visuals, without clearly communicating how someone actually works.',
  noticed: [
    'focus too much on tools instead of thinking',
    'feel overly formal or corporate',
    'don’t clearly explain how the person approaches real product problems',
  ],
  didIntro:
    'I designed this website with a focus on clarity, structure, and readability.',
  decisions: [
    'keeping the layout clean and easy to scan',
    'using simple, natural language instead of corporate wording',
    'structuring pages differently: Home for positioning, About for mindset and personality, Portfolio for real thinking examples',
    'adding a consistent dark/light experience with smooth transitions',
    'focusing on spacing, hierarchy, and flow instead of visual noise',
  ],
  outcome:
    'The result is a portfolio that feels more like a product than a presentation.',
  outcomeSupporting:
    'It clearly communicates how I think, how I work, and what it’s like to collaborate with me — not just what I’ve done.',
} as const;

export function PortfolioPage() {
  return (
    <>
      <PageIntro
        eyebrow="Portfolio"
        title="Selected work contexts that show how I contribute through QA, automation, and product-quality thinking."
        description="I use real experience data here to show the scope, domains, and the kind of quality work I bring into teams."
      />

      <section className="page-shell">
        <Container>
          <div className="space-y-6">
            <article className="surface-card p-6 sm:p-8">
              <p className="section-eyebrow tracking-[0.22em]">Case Study 01</p>
              <h2 className="section-title mt-4 max-w-3xl">
                {websiteCaseStudy.title}
              </h2>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <section className="space-y-3">
                  <h3 className="text-primary text-lg font-semibold">Context</h3>
                  <p className="text-secondary">{websiteCaseStudy.context}</p>
                  <p className="text-secondary">{websiteCaseStudy.contextSupporting}</p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-primary text-lg font-semibold">What I noticed</h3>
                  <ul className="space-y-2 text-secondary">
                    {websiteCaseStudy.noticed.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-3 h-2 w-2 rounded-full bg-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-3">
                  <h3 className="text-primary text-lg font-semibold">What I did</h3>
                  <p className="text-secondary">{websiteCaseStudy.didIntro}</p>
                  <ul className="space-y-2 text-secondary">
                    {websiteCaseStudy.decisions.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-3 h-2 w-2 rounded-full bg-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-3">
                  <h3 className="text-primary text-lg font-semibold">Outcome</h3>
                  <p className="text-secondary">{websiteCaseStudy.outcome}</p>
                  <p className="text-secondary">{websiteCaseStudy.outcomeSupporting}</p>
                </section>
              </div>
            </article>

            <div className="grid gap-4 lg:grid-cols-3">
            {experience.slice(0, 3).map((study) => (
              <article
                key={`${study.company}-${study.period}`}
                className="surface-card flex min-h-[19rem] flex-col justify-between p-6"
              >
                <div>
                  <p className="section-eyebrow tracking-[0.22em]">{study.company}</p>
                  <h2 className="section-title mt-4 text-3xl sm:text-3xl">{study.role}</h2>
                  <p className="mt-4 text-secondary">{study.shortSummary}</p>
                </div>
                <p className="text-meta mt-8 font-semibold">{study.projectContext}</p>
              </article>
            ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
