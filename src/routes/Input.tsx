import { twMerge } from "tailwind-merge";

type Props = {
  name?: string;
  id?: string;
  className?: string;
  placeholder?: string;
  type?: string;
};

function Input({ name, id, className, placeholder, type }: Props) {
  return (
    <input
      name={name}
      id={id}
      className={twMerge(
        "font-signup outline-none rounded-2xl mx-3 py-1.5 pl-2.5 pr-4 border-2 placeholder-gray-300 border-red-200 focus:border-red-600 hover:border-red-300 transition duration-300 ease-in-out",
        className
      )}
      placeholder={placeholder}
      type={type}
    />
  );
}

export default Input;
