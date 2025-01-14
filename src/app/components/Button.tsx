import { ButtonHTMLAttributes, JSX } from "react";
import { classNames } from "../utils";

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: JSX.Element | string;
}
export const Button = ({ className, children, ...rest }: props) => {
  return (
    <button
      className={classNames(
        "p-3 hover:brightness-90 cursor-pointer",
        "rounded-lg  disabled:opacity-50 disabled:cursor-default",
        "transition-all duration-100",
        "border-x bg-transparent",
        "border-green-600  dark:text-green-100",
        "text-black",
        className,
      )}
      type={rest.type ?? "button"}
      {...rest}
    >
      {children}
    </button>
  );
};
