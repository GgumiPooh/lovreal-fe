import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  htmlFor?: string;
  align?: "left" | "right";
};

function Label({
  className,
  htmlFor,
  align,
  children,
}: PropsWithChildren<Props>) {
  return (
    <label
      className={twMerge(
        "min-w-20 font-secondary text-sm font-semibold text-gray-500",
        align === "right" && "text-right",
        className,
      )}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}

export default Label;
