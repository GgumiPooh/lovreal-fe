import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = React.ComponentProps<"form"> & {
  className?: string;
};

function Form({ className, children, ...props }: PropsWithChildren<Props>) {
  return (
    <form
      className={twMerge(
        "max-w-120 rounded-2xl p-7 shadow-[0_0_10px_rgba(0,0,0,0.1)]",
        className,
      )}
      {...props}
    >
      {children}
    </form>
  );
}

export default Form;
