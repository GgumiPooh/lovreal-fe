import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import Input from "./Input";
import Label from "./Label";

type Props = {
  className?: string;
  name?: string;
  placeholder?: string;
  type?: string;
};

function LabelWithInput({
  className,
  name,
  placeholder,
  type,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className={twMerge("flex items-end gap-x-3", className)}>
      <Label htmlFor={name}>{children}</Label>
      <Input name={name} id={name} placeholder={placeholder} type={type} />
    </div>
  );
}

export default LabelWithInput;
