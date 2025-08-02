import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = React.ComponentProps<"button"> & {
  className?: string;
  block?: boolean;
};

function Button({
  className,
  type = "button",
  block,
  onClick,
  children,
}: PropsWithChildren<Props>) {
  return (
    <button
      className={twMerge(
        "font-signup rounded-2xl border-2 border-amber-50 bg-brand-pink p-3 text-center text-nowrap text-red-100 transition duration-200 hover:border-amber-900",
        block && "w-full",
        className,
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
