import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  name?: string;
  id?: string;
  className?: string;
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

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!ref.current?.validity) {
      setMessage("asdasd");
    }
  }, [ref.current?.validity]);

  return (
    <input
      ref={ref}
      required
      name={name}
      id={id}
      className={twMerge(
        "font-signup outline-none rounded-2xl mx-3 py-1.5 pl-2.5 pr-4 border-2 placeholder-gray-300 border-red-200 focus:border-red-600 hover:border-red-300 transition duration-300 ease-in-out",
        className
      )}
      placeholder={placeholder}
      type={type}
      value={value}
      maxLength={24}
      onChange={handleChange}
    />
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(e.currentTarget.value);
  }
}

export default Input;
