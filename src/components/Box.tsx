import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

function Box({ className, children, ...props }: PropsWithChildren<Props>) {
  return (
    <div
      className={twMerge(
        "max-w-120 rounded-2xl p-7 shadow-[0_0_10px_rgba(0,0,0,0.1)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Box;
