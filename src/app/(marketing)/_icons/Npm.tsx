import { ComponentProps } from "react";

export function NpmIcon(svgProps: ComponentProps<"svg">) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...svgProps}
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3.87H4v16h8v-13h5v13h3v-16h-8Z"
      />
    </svg>
  );
}
