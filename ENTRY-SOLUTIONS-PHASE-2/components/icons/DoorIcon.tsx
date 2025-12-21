export function DoorIcon({ className = "" }: { className?: string }) {
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
      <rect x="6" y="3" width="12" height="18" rx="1.5" />
      <rect x="8.5" y="5.5" width="7" height="13" rx="1" />
      <line x1="14.5" y1="12" x2="14.5" y2="12.5" />
    </svg>
  );
}
