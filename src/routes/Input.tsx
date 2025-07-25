import { useEffect, useRef, useState, type RefObject } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  name?: string;
  id?: string;
  className?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  ref?: RefObject<HTMLInputElement | null>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({
  className,
  name,
  id,
  placeholder,
  type,
  value,
  ref,
  onChange,
}: Props) {
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
      onChange={onChange}
    />
  );
}

export default Input;
