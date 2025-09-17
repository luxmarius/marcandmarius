import type { SVGProps } from "react";

export function CalculatorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <rect x="7" y="6" width="10" height="4" />
      <path d="M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" />
    </svg>
  );
}

export function BackpackIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M7 7V5a5 5 0 0 1 10 0v2" />
      <rect x="4" y="7" width="16" height="13" rx="2" />
      <path d="M12 7v13M8 12h8" />
    </svg>
  );
}
