import profileImage from '../../assets/profile/stefan.png';

type ProfileAvatarProps = {
  className?: string;
  sizeClassName?: string;
};

export function ProfileAvatar({
  className = '',
  sizeClassName = 'h-48 w-48 sm:h-56 sm:w-56 lg:h-72 lg:w-72 xl:h-80 xl:w-80',
}: ProfileAvatarProps) {
  return (
    <div
      className={[
        'relative isolate flex items-center justify-center rounded-full bg-white/85 p-3 shadow-panel ring-1 ring-ink/8 dark:bg-white/[0.06] dark:ring-sage/14',
        className,
      ].join(' ')}
    >
      <div className="absolute inset-3 rounded-full bg-gradient-to-br from-white/70 via-transparent to-pine/10 dark:from-white/12 dark:via-transparent dark:to-sage/10" />
      <div
        className={[
          'relative overflow-hidden rounded-full border border-white/80 bg-mist shadow-[0_18px_40px_rgba(13,27,30,0.16)] dark:border-sage/16 dark:bg-[#1a262b]',
          sizeClassName,
        ].join(' ')}
      >
        <img
          src={profileImage}
          alt="Stefan Andriesei"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}
