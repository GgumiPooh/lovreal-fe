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
        "mx-3 rounded-2xl border-2 border-red-200 py-1.5 pr-4 pl-2.5 font-signup placeholder-gray-300 transition duration-300 ease-in-out outline-none hover:border-red-300 focus:border-red-600",
        className,
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
