import { NavLink } from 'react-router-dom';
import { contact } from '../../data/contact';
import { profile } from '../../data/profile';
import { Container } from '../ui/Container';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
];

export function Footer() {
  return (
    <footer className="footer-shell">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div className="max-w-xl space-y-4">
            <p className="section-eyebrow text-xs">
              QA, UX, and product-minded support
            </p>
            <h2 className="section-title text-3xl sm:text-3xl">
              I help teams improve product quality with clearer testing and
              practical feedback.
            </h2>
            <p className="footer-copy">{profile.summary}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="footer-heading">Explore</p>
              <div className="mt-4 flex flex-col gap-2">
                {links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className="text-sm text-ink/78 transition hover:text-pine dark:text-white/82 dark:hover:text-sage"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <div>
              <p className="footer-heading">Contact</p>
              <div className="mt-4 space-y-2 text-sm text-ink/78 dark:text-white/80">
                <a
                  href={`mailto:${contact.email}`}
                  className="transition hover:text-pine dark:text-white dark:hover:text-sage"
                >
                  {contact.email}
                </a>
                <p>{contact.location}</p>
                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block transition hover:text-pine dark:hover:text-sage"
                >
                  LinkedIn / {contact.linkedinHandle}
                </a>
                <p>{contact.availabilityNote}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="panel-divider mt-10 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="footer-meta">© 2026 {profile.fullName}. Crafted for trust, clarity, and quality.</p>
          <p className="footer-meta">GitHub Pages-ready static build.</p>
        </div>
      </Container>
    </footer>
  );
}
