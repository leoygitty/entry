export function DoorIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Door body */}
      <rect x="6" y="3" width="12" height="17" rx="1.8" fill="#2563EB" />

      {/* Door inner trim */}
      <rect x="7.2" y="4.2" width="9.6" height="14.6" rx="1.2" fill="#FFFFFF" />

      {/* Window frame */}
      <rect x="8.4" y="5.4" width="7.2" height="4.6" rx="0.6" fill="#2563EB" />

      {/* Window panes */}
      <rect x="9.1" y="6.1" width="2.2" height="1.6" fill="#FFFFFF" />
      <rect x="11.7" y="6.1" width="2.2" height="1.6" fill="#FFFFFF" />
      <rect x="9.1" y="7.9" width="2.2" height="1.6" fill="#FFFFFF" />
      <rect x="11.7" y="7.9" width="2.2" height="1.6" fill="#FFFFFF" />

      {/* Door handle */}
      <circle cx="15.2" cy="12.5" r="0.75" fill="#DC2626" />

      {/* Step / base */}
      <rect x="4" y="21" width="16" height="1" rx="0.5" fill="#2563EB" />
    </svg>
  );
}
