export function InstallationIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="6" y1="4" x2="6" y2="20" />
      <rect x="10" y="6" width="8" height="4" rx="1" />
      <rect x="12" y="10" width="4" height="8" rx="1" />
    </svg>
  );
}
