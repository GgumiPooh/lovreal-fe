import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  type?: "button" | "reset" | "submit";
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
};

function Button({ className, children, type = "button", onClick }: Props) {
  return (
    <button
      type={type}
      className={twMerge(
        "flex items-center gap-10 overflow-auto rounded-2xl border-2 border-amber-50 p-3 text-center font-signup text-nowrap text-gray-700 transition duration-200 hover:border-amber-950",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
