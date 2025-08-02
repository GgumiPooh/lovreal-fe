import { useRef } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
};

function Input({
  className,
  name,
  id,
  placeholder,
  type,
  value,
  onChange,
}: Props) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <input
      className={twMerge(
        "rounded-2xl border-2 border-red-200 py-1.5 pr-4 pl-2.5 font-secondary placeholder-gray-300 transition duration-300 ease-in-out outline-none hover:border-red-300 focus:border-red-600",
        className,
      )}
      ref={ref}
      required
      name={name}
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={handleChange}
    />
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(e.currentTarget.value);
  }
}

export default Input;
