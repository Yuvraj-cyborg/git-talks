// components/ui/CustomButton.tsx
import { ReactNode } from "react";

export function Button({
  children,
  onClick,
  className,
  disabled,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-purple-600 text-white py-2 px-6 rounded-lg transition duration-200 hover:bg-purple-700 ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
}
