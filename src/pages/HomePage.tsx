import { NavLink } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { FiverrIcon } from '../components/ui/FiverrIcon';
import { ProfileAvatar } from '../components/ui/ProfileAvatar';
import { SectionHeading } from '../components/ui/SectionHeading';
import { contact } from '../data/contact';
import { experience } from '../data/experience';
import { profile } from '../data/profile';
import { services } from '../data/services';
import { skills } from '../data/skills';
import { testimonials } from '../data/testimonials';

const metrics = [
  { label: 'Experience', value: profile.yearsOfExperience },
  { label: 'Location', value: profile.location },
  { label: 'Languages', value: profile.languages.join(' / ') },
];

const proofPoints = profile.hero.highlights;

const homepageServices = services.slice(0, 4);
const experiencePreview = experience.slice(0, 3);
const skillHighlights = [
  ...skills.automation.slice(0, 4),
  ...skills.testing.slice(0, 4),
  ...skills.tools.slice(0, 3),
];
const featuredTestimonial = testimonials[0];

export function HomePage() {
  return (
    <>
      <section className="overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
        <Container>
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10">
            <div className="w-full space-y-8 lg:max-w-3xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-pine/15 bg-white/90 px-4 py-2 text-sm text-ink/70 shadow-sm dark:border-sage/15 dark:bg-white/[0.06] dark:text-white/80">
                <span className="h-2.5 w-2.5 rounded-full bg-gold dark:bg-sage" />
                {profile.hero.badge}
              </div>

              <div className="space-y-6">
                <p className="section-eyebrow tracking-[0.32em]">
                  {profile.hero.eyebrow}
                </p>
                <h1 className="font-display text-5xl leading-[0.95] text-ink dark:text-white sm:text-6xl lg:text-7xl">
                  {profile.hero.headline}
                </h1>
                <p className="max-w-2xl text-secondary sm:text-lg">
                  {profile.hero.supportingText}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <NavLink
                  to="/contact"
                  className="button-primary"
                >
                  Let&apos;s Talk
                </NavLink>
                <a
                  href={contact.fiverrUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Hire me on Fiverr"
                  className="button-secondary"
                >
                  <FiverrIcon className="h-[20px] w-auto shrink-0" />
                  <span>Hire me</span>
                </a>
              </div>

              <div className="flex max-w-none flex-col gap-3 md:flex-row md:flex-nowrap md:items-stretch">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-3xl border border-ink/10 bg-white/80 p-4 shadow-sm md:min-w-0 md:flex-1 dark:border-sage/12 dark:bg-white/[0.07]"
                  >
                    <p className="text-meta text-xs uppercase tracking-[0.2em]">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-ink dark:text-white">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[32rem] lg:mx-0 lg:max-w-none">
              <div className="absolute left-8 top-10 hidden h-28 w-28 rounded-full bg-gold/15 blur-2xl dark:bg-sage/12 sm:block" />
              <div className="absolute right-6 top-24 hidden h-36 w-36 rounded-full bg-pine/15 blur-2xl sm:block" />
              <div className="surface-card-elevated relative w-full overflow-hidden p-5 sm:p-6 lg:p-8">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(129,173,157,0.16),transparent_34%)] dark:block" />
                <div className="flex flex-col items-center gap-6 text-center">
                  <div className="rounded-full border border-pine/15 bg-mist px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-pine dark:border-sage/20 dark:bg-white/[0.06] dark:text-sage">
                    {profile.fullName}
                  </div>

                  <ProfileAvatar />

                  <div className="w-full space-y-3 rounded-3xl bg-mist px-5 py-4 text-center dark:border dark:border-sage/12 dark:bg-white/[0.055]">
                    <p className="text-meta text-xs uppercase tracking-[0.2em]">
                      Value Snapshot
                    </p>
                    <p className="font-display text-3xl text-ink dark:text-white">
                      {profile.homepage.valueStatement}
                    </p>
                    <p className="mx-auto max-w-sm text-sm leading-7 text-ink/70 dark:text-white/70">
                      {profile.homepage.trustBlurb}
                    </p>
                  </div>

                  <div className="w-full rounded-3xl bg-ink p-6 text-left text-white dark:border dark:border-sage/12 dark:bg-[#0c1215]">
                    <p className="text-xs uppercase tracking-[0.26em] text-white/55 dark:text-white/65">
                      What I bring into the work
                    </p>
                    <ul className="mt-5 space-y-4 text-sm leading-7 text-white/80">
                      {proofPoints.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid w-full gap-3 sm:grid-cols-2">
                    <div className="surface-card-soft rounded-3xl p-5 text-left">
                      <p className="text-meta text-xs uppercase tracking-[0.2em]">
                        Best fit
                      </p>
                      <p className="mt-3 text-sm leading-7 text-ink/70 dark:text-white/70">
                        Teams that want testing to improve the product and the
                        user experience, not just catch defects at the end.
                      </p>
                    </div>
                    <div className="surface-card rounded-3xl p-5 text-left">
                      <p className="text-meta text-xs uppercase tracking-[0.2em]">
                        Working style
                      </p>
                      <p className="mt-3 text-sm leading-7 text-ink/70 dark:text-white/70">
                        Clear, structured feedback that helps teams prioritize,
                        clarify behavior, and move forward with confidence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="surface-card p-6 sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <SectionHeading
                eyebrow="How I Help"
                title={profile.homepage.servicesHeading}
                description={profile.homepage.servicesDescription}
              />
              <div className="grid gap-4 md:grid-cols-3">
                {homepageServices.map((item) => (
                  <article
                    key={item.title}
                    className={[
                      'rounded-3xl p-5',
                      item.secondary ? 'surface-card' : 'surface-card-soft',
                    ].join(' ')}
                  >
                    <h3 className="text-lg font-semibold text-ink dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-ink/70 dark:text-white/70">
                      {item.shortDescription}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Experience"
              title={profile.homepage.experienceHeading}
              description={profile.homepage.experienceDescription}
            />
            <div className="grid gap-4">
              {experiencePreview.map((item) => (
                <article
                  key={`${item.company}-${item.period}`}
                  className="surface-card p-6"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="section-eyebrow tracking-[0.22em]">
                        {item.company}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-ink dark:text-white">
                        {item.role}
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-ink/55 dark:text-white/58">{item.period}</p>
                  </div>
                  <p className="text-muted mt-4">
                    {item.shortSummary}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-ink/62 dark:text-white/62">
                    {item.projectContext}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="rounded-[2rem] bg-pine px-6 py-10 text-white dark:bg-[#173029] sm:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="max-w-2xl space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/72">
                  Capabilities
                </p>
                <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">
                  {profile.homepage.skillsHeading}
                </h2>
                <p className="text-base leading-8 text-white/80">
                  {profile.homepage.skillsDescription}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillHighlights.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="surface-card p-6 sm:p-8">
              <p className="section-eyebrow tracking-[0.26em]">
                {profile.homepage.testimonialHeading}
              </p>
              <blockquote className="mt-5 font-display text-2xl leading-tight text-ink dark:text-white sm:text-3xl">
                “{featuredTestimonial.shortQuote}”
              </blockquote>
              <p className="text-meta mt-5 font-semibold uppercase tracking-[0.18em]">
                {featuredTestimonial.author} • {featuredTestimonial.relationship}
              </p>
            </article>

            <div className="grid gap-4">
              <article className="surface-card-soft p-6">
                <p className="section-eyebrow tracking-[0.22em]">
                  Contact
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-3 block text-lg font-semibold text-ink transition hover:text-pine dark:text-white dark:hover:text-sage"
                >
                  {contact.email}
                </a>
                <p className="text-muted mt-3">
                  {profile.homepage.contactHeading}. {contact.availabilityNote}
                </p>
              </article>
              <article className="surface-card p-6">
                <p className="section-eyebrow tracking-[0.22em]">
                  Profiles
                </p>
                <div className="mt-4 flex flex-col gap-3 text-sm font-medium text-ink/76 dark:text-white/80">
                  <a
                    href={contact.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-pine dark:hover:text-sage"
                  >
                    LinkedIn / {contact.linkedinHandle}
                  </a>
                  <a
                    href={contact.fiverrUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-pine dark:hover:text-sage"
                  >
                    Fiverr / {contact.fiverrUsername}
                  </a>
                </div>
              </article>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-6 rounded-[2rem] bg-pine px-6 py-10 text-white dark:bg-[#18352f] sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                Ready to Collaborate
              </p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl">
                Better products come from clearer testing and sharper feedback.
              </h2>
              <p className="mt-4 text-base leading-8 text-white/80">
                If you want a QA partner who understands user experience,
                product context, and practical communication, let&apos;s start a
                conversation.
              </p>
            </div>
            <NavLink
              to="/contact"
              className="button-inverse"
            >
              Start a Conversation
            </NavLink>
          </div>
        </Container>
      </section>
    </>
  );
}
