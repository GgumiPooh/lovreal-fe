import type { ReactNode } from "react";
import { Link as _Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type Props = {
  to: string;
  children?: ReactNode;
  className?: string;
};

function Link({ to, children, className }: Props) {
  return (
    <_Link
      rel="canoncial"
      to={to}
      className={twMerge(
        "",
        className
      )}
    >
      {children}
    </_Link>
  );
}

export default Link;
