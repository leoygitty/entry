export function ShieldFitIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer shield */}
      <path
        d="M12 3.5c2.6 1.6 5.4 2.4 7.2 2.8V12c0 4.3-3.3 7.7-7.2 9.1C8.1 19.7 4.8 16.3 4.8 12V6.3c1.8-.4 4.6-1.2 7.2-2.8z"
        fill="#2563EB"
      />

      {/* Inner shield inset */}
      <path
        d="M12 5.2c2 1.2 4.1 1.8 5.5 2.1V12c0 3.3-2.5 6-5.5 7.1-3-1.1-5.5-3.8-5.5-7.1V7.3c1.4-.3 3.5-.9 5.5-2.1z"
        fill="#3B82F6"
      />

      {/* Door body */}
      <rect x="10.7" y="8.3" width="2.6" height="6.8" rx="0.8" fill="#FFFFFF" />

      {/* Precision / custom-fit base */}
      <rect x="10.7" y="15.4" width="2.6" height="1.1" rx="0.6" fill="#DC2626" />
    </svg>
  );
}
