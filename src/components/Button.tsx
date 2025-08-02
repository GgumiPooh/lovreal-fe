import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = React.ComponentProps<"button"> & {
  className?: string;
  block?: boolean;
};

function Button({
  className,
  block = true,
  type = "button",
  onClick,
  children,
}: PropsWithChildren<Props>) {
  return (
    <button
      type={type}
      className={twMerge(
        "font-signup items-center gap-10 overflow-auto rounded-2xl border-2 border-amber-50 p-3 text-center text-nowrap text-gray-700 transition duration-200 hover:border-amber-950",
        !block && "inline-flex w-fit",
        block && "flex w-full",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
