import type {ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  type?:'button' | 'reset' | "submit";
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
};

function SignUpButton({ className, children, type='button', onClick }: Props) {
  return (
    <button
      type={type}
      className={twMerge(
        "p-3 text-nowrap overflow-auto text-gray-700 text-center flex items-center gap-10 rounded-2xl font-signup border-2 border-amber-50 transition duration-200 hover:border-amber-950",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SignUpButton;
