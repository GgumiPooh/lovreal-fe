import { twMerge } from "tailwind-merge";
import Input from "./Input";
import Label from "./Label";

type Props = {
  className?: string;
  children?: string;
  name?: string;
  placeholder?: string;
  type?: string
};

function LabelWithInput({ className, children, name, placeholder, type }: Props) {
  return (
    <div className={twMerge(className, "flex gap-5 justify-end m-4")}>
      <Label htmlFor={name}>{children}</Label>
      <Input name={name} id={name} placeholder={placeholder} type={type} />
    </div>
  );
}

export default LabelWithInput
