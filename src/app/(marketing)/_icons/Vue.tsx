import { ComponentProps } from "react";

export function VueIcon(svgProps: ComponentProps<"svg">) {
  return (
    
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...svgProps}
    >
      <path d="M14.5 3 12 7.156 9.857 3H2l10 18L22 3h-7.5ZM4.486 4.5h2.4L12 13.8l5.107-9.3h2.4L12 18.021 4.486 4.5Z" />
    </svg>
  );
}
