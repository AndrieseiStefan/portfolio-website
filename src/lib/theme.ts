export type ThemeMode = 'light' | 'dark';
export type ThemeTransitionOrigin = {
  x: number;
  y: number;
};

export const THEME_STORAGE_KEY = 'stefan-portfolio-theme';
export const THEME_TRANSITION_DURATION_MS = 560;

export function getStoredTheme(): ThemeMode | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : null;
}

export function getSystemTheme(): ThemeMode {
  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  }

  return 'light';
}

export function resolveInitialTheme(): ThemeMode {
  return getStoredTheme() ?? getSystemTheme();
}

export function applyTheme(theme: ThemeMode) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;
}

export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export function supportsViewTransitions() {
  return typeof document !== 'undefined' && 'startViewTransition' in document;
}

export function getMaxRadius(x: number, y: number) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return Math.hypot(Math.max(x, width - x), Math.max(y, height - y));
}
