import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  htmlFor?: string;
};

function Label({ className, htmlFor, children }: PropsWithChildren<Props>) {
  return (
    <label
      className={twMerge(
        "w-[7rem] p-[0.3rem] text-end font-secondary text-[0.9rem] text-gray-500",
        className,
      )}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}

export default Label;
