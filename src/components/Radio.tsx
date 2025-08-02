import { twMerge } from "tailwind-merge";
import Label from "./Label";

type Props = {
  className?: string;
  label: string;
  name: string;
  value: string;
  defaultChecked?: boolean;
};

function Radio({ className, label, name, value, defaultChecked }: Props) {
  return (
    <div className={twMerge("inline-flex items-center gap-x-3", className)}>
      <Label className="min-w-0" htmlFor={name}>
        {label}
      </Label>

      <input
        className="size-3.5 cursor-pointer appearance-none rounded-full ring-3 ring-pink-200 transition-colors duration-200 checked:bg-pink-300 checked:ring-pink-200 hover:ring-5"
        type="radio"
        id={name}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
      />
    </div>
  );
}

export default Radio;
