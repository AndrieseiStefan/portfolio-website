import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { contact } from '../../data/contact';
import { profile } from '../../data/profile';
import { Container } from '../ui/Container';
import { FiverrIcon } from '../ui/FiverrIcon';
import { ThemeToggle } from '../ui/ThemeToggle';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-shell">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <NavLink
            to="/"
            className="flex min-w-0 flex-1 items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-pine text-sm font-extrabold uppercase tracking-[0.22em] text-white shadow-panel dark:bg-[#18352f]">
              QA
            </div>
            <div className="min-w-0 pr-2">
              <p className="font-display text-lg leading-none text-ink dark:text-white sm:text-xl">
                {profile.displayName}
              </p>
              <p className="mt-1 max-w-[10.5rem] text-[10px] uppercase leading-[1.35] tracking-[0.22em] text-ink/68 dark:text-white/78 sm:max-w-none sm:text-xs sm:leading-normal sm:tracking-[0.24em]">
                QA • UX • Product Mindset
              </p>
            </div>
          </NavLink>

          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden items-center gap-2 lg:flex">
              <nav className="flex items-center gap-2">
                {navItems.map((item) => (
                  <NavItem key={item.to} to={item.to} label={item.label} />
                ))}
              </nav>
              <ThemeToggle />
              <a
                href={contact.fiverrUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Hire me on Fiverr"
                className="button-primary ml-1 min-h-11 gap-2 px-5 hover:shadow-lg"
              >
                <FiverrIcon className="h-[20px] w-auto shrink-0" />
                <span>Hire me</span>
              </a>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle compact />
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-ink/10 bg-white text-ink shadow-sm transition hover:border-pine hover:text-pine dark:border-sage/18 dark:bg-white/[0.06] dark:text-white dark:hover:border-sage dark:hover:text-sage"
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
                onClick={() => setIsOpen((open) => !open)}
              >
                <span className="space-y-1.5">
                  <span className="block h-0.5 w-5 rounded-full bg-current" />
                  <span className="block h-0.5 w-5 rounded-full bg-current" />
                  <span className="block h-0.5 w-5 rounded-full bg-current" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {isOpen ? (
          <nav className="mt-4 space-y-2 rounded-3xl border border-ink/10 bg-white p-3 shadow-panel dark:border-sage/16 dark:bg-[#0d1519] lg:hidden">
            {navItems.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                label={item.label}
                mobile
                onNavigate={() => setIsOpen(false)}
              />
            ))}
            <a
              href={contact.fiverrUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Hire me on Fiverr"
              className="button-primary min-h-11 w-full gap-2 px-4 py-2"
            >
              <FiverrIcon className="h-[20px] w-auto shrink-0" />
              <span>Hire me</span>
            </a>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}

function NavItem({
  label,
  to,
  mobile = false,
  onNavigate,
}: {
  label: string;
  to: string;
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <NavLink
      to={to}
      onClick={onNavigate}
      className={({ isActive }) =>
        [
          'inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold transition',
          mobile ? 'flex w-full justify-between px-4 py-2' : '',
          isActive
            ? 'bg-pine text-white dark:bg-[#18352f]'
            : 'text-ink/76 hover:bg-ink/5 hover:text-ink dark:text-white/82 dark:hover:bg-white/[0.06] dark:hover:text-white',
        ].join(' ')
      }
    >
      {label}
    </NavLink>
  );
}
