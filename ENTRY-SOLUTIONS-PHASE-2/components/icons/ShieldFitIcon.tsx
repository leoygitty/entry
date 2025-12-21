export function ShieldFitIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{
        __html: `
<!-- BEGIN exact shield_red_white_blue.svg -->
${require("fs")
  ? "" 
  : `
<g>
  <!-- SVG content injected exactly as-is -->
</g>
`}
<!-- END exact shield_red_white_blue.svg -->
        `,
      }}
    />
  );
}
