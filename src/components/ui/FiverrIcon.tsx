import fiverrLogo from '../../assets/brands/fiverr-icon.svg';

export function FiverrIcon({ className = 'h-4 w-auto' }: { className?: string }) {
  return (
    <img
      src={fiverrLogo}
      alt=""
      aria-hidden="true"
      className={className}
    />
  );
}
