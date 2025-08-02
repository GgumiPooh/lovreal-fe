import { twMerge } from "tailwind-merge";

type Props = React.ComponentProps<"input"> & {
  className?: string;
  onChange?: (value: string) => void;
};

function Input({ className, onChange, ...props }: Props) {
  return (
    <input
      className={twMerge(
        "rounded-2xl border-2 border-red-200 py-1.5 pr-4 pl-2.5 placeholder-gray-300 transition duration-300 ease-in-out outline-none placeholder:text-sm hover:border-red-300 focus:border-red-700",
        className,
      )}
      onChange={handleChange}
      {...props}
    />
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(e.currentTarget.value);
  }
}

export default Input;
