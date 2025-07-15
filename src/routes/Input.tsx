import { twMerge } from "tailwind-merge";

type Props = {
    name?: string;
    id?: string;
    className?: string;
    placeholder?: string
}

function Input({name, id, className, placeholder} : Props) {
    return(
        <input
        name={name}
        id={id}
        className={twMerge(className, "font-signup rounded-2xl, hover:border-red-800")}
        placeholder={placeholder}
        />
    )
}

export default Input