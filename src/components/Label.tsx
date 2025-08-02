import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  htmlFor?: string;
  children?: string;
};

function Label({ className, htmlFor, children }: Props) {
  return (
    <label
      className={twMerge(
        "font-signup text-end text-gray-500 text-[0.9rem] p-[0.3rem] w-[7rem]",
        className
      )}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}

export default Label;
