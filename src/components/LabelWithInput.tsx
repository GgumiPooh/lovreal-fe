import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import Input from "./Input";
import Label from "./Label";

type Props = {
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  align?: "left" | "right";
  name?: string;
  placeholder?: string;
  type?: string;
};

function LabelWithInput({
  className,
  labelClassName,
  inputClassName,
  align = "left",
  name,
  type,
  placeholder,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={twMerge(
        "flex items-center gap-x-3",
        align === "right" && "justify-end",
        className,
      )}
    >
      <Label
        className={twMerge("", labelClassName)}
        htmlFor={name}
        align={align}
      >
        {children}
      </Label>
      <Input
        className={twMerge("w-full", inputClassName)}
        name={name}
        id={name}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

export default LabelWithInput;
