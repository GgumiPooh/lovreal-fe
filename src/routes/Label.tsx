import { twMerge } from "tailwind-merge";

type Props = {
    className?: string;
    htmlFor?: string;
    children?: string
}

function Label({className, htmlFor, children} : Props) {
    return(
        <label
        className={twMerge(className, "font-signup")}
        htmlFor={htmlFor}
        >{children}</label>
    )
}

export default Label