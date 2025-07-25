import { twMerge } from "tailwind-merge";
import Input from "./Input";
import Label from "./Label";
import type { RefObject } from "react";

type Props = {
  className?: string;
  children?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  ref?: RefObject<HTMLInputElement | null>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function LabelWithInput({
  className,
  children,
  name,
  placeholder,
  type,
  ref,
  onChange,
}: Props) {
  return (
    <div className={twMerge("m-4 flex items-end", className)}>
      <Label htmlFor={name}>{children}</Label>
      <Input
        name={name}
        id={name}
        placeholder={placeholder}
        type={type}
        ref={ref}
        onChange={onChange}
      />
    </div>
  );
}

export default LabelWithInput;
