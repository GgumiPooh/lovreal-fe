import { twMerge } from "tailwind-merge";
import Input from "./Input";
import Label from "./Label";

type Props = {
  className?: string;
  children?: string;
  name?: string;
  placeholder?: string;
};

function LabelWithInput({ className, children, name, placeholder }: Props) {
  return (
    <div className={twMerge(className, "")}>
      <Label htmlFor={name}>{children}</Label>
      <Input name={name} id={name} placeholder={placeholder} />
    </div>
  );
}

export default LabelWithInput
