import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
}

export default function Button({
  children,
  loading,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={clsx(
        "w-full rounded-xl bg-primary px-4 py-3 text-white font-medium transition-all duration-200 hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}
