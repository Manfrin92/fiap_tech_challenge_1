import React from "react";
import { tv } from "tailwind-variants";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
}

const inputVariants = tv({
  base: "border rounded-md px-3 py-2 text-1 text-black focus:outline-none",
  variants: {
    error: {
      true: "border-[var(--color-input-error)]",
      false: "",
    },
  },
});

const Input = ({ className, error, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <input
        className={`${inputVariants({ error: !!error })} ${className ?? ""}`}
        {...props}
      />

      {error && (
        <span className="text-sm text-[var(--color-input-error)]">{error}</span>
      )}
    </div>
  );
};

export default Input;
