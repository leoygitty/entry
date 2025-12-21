export function ShieldFitIcon({ className = "" }: { className?: string }) {
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
      <path d="M12 3l7 4v6c0 4.5-3.2 6.8-7 8-3.8-1.2-7-3.5-7-8V7l7-4z" />
      <rect x="10" y="9" width="4" height="6" rx="0.75" />
    </svg>
  );
}
