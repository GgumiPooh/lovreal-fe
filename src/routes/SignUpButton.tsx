import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
};

function SignUpButton({ className, children, onClick }: Props) {
  return (
    <button
      className={twMerge(
        className,
        "p-4 flex items-center gap-6 rounded-2xl font-signup border-2 border-amber-50 transition duration-300 hover:border-amber-950"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SignUpButton;
