import React from "react";
import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
}

const Input = ({ className, error, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <input
        className={clsx(
          "border rounded-md px-3 py-2 text-1 text-black focus:outline-none",
          error ? "border-[var(--color-input-error)]" : "border-[var(--color-input-text)]",
          className
        )}
        {...props}
      />

      {error && (
        <span className="text-sm text-[var(--color-input-error)]">{error}</span>
      )}
    </div>
  );
};

export default Input;
