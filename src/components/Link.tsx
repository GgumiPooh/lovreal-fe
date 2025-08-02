import type { PropsWithChildren } from "react";
import { Link as _Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type Props = React.ComponentProps<"a"> & {
  className?: string;
  href: string;
};

function Link({
  className,
  href,
  children,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <_Link className={twMerge("", className)} to={href} {...props}>
      {children}
    </_Link>
  );
}

export default Link;
