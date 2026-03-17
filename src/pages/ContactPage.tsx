import { Container } from '../components/ui/Container';
import { PageIntro } from '../components/ui/PageIntro';
import { contact } from '../data/contact';
import { profile } from '../data/profile';

const channels = [
  { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  {
    label: 'LinkedIn',
    value: `linkedin.com/in/${contact.linkedinHandle}`,
    href: contact.linkedinUrl,
  },
  { label: 'Location', value: contact.location },
  { label: 'Fiverr', value: contact.fiverrUsername, href: contact.fiverrUrl },
  { label: 'Languages', value: profile.languages.join(', ') },
  { label: 'Availability', value: contact.availabilityNote },
];

export function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Reach out for QA support, usability feedback, or collaboration."
        description="I work best with teams that value clear communication, practical testing, and thoughtful product quality across web and mobile experiences."
      />

      <section className="page-shell">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="surface-brand p-6 shadow-panel sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/68">Let&apos;s Connect</p>
              <h2 className="mt-4 font-display text-4xl">
                Looking for a senior QA who also sees the UX and product side?
              </h2>
              <p className="mt-4 text-base leading-8 text-white/80">
                {contact.availabilityNote}
              </p>
            </article>

            <div className="grid gap-4">
              {channels.map((channel) => (
                <article key={channel.label} className="surface-card p-6">
                  <p className="section-eyebrow tracking-[0.22em]">{channel.label}</p>
                  {'href' in channel && channel.href ? (
                    <a
                      href={channel.href}
                      target={channel.href.startsWith('http') ? '_blank' : undefined}
                      rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="text-primary mt-3 block text-lg font-semibold transition hover:text-pine dark:hover:text-sage"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <p className="text-primary mt-3 text-lg font-semibold">{channel.value}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
