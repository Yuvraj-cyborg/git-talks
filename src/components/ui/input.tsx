import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Ensure this utility function is correctly defined

export function Input({
  value,
  onChange,
  onSubmit,
  placeholder,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  placeholder: string;
}) {
  const [animating, setAnimating] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !animating) {
      e.preventDefault();
      setAnimating(true);
      onSubmit(e as any);
    }
  };

  return (
    <div className="relative max-w-xl mx-auto">
      <div className="flex items-center bg-gray-800 rounded-full p-2">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          className={cn(
            "bg-transparent text-white w-full h-12 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500",
            animating && "text-transparent"
          )}
          placeholder={value ? "" : placeholder} // Show the placeholder only when the input is empty
        />
        <button
          type="button" // Change to 'button' to prevent form submission on click
          onClick={(e) => {
            if (value) {
              setAnimating(true);
              onSubmit(e as any);
            }
          }}
          disabled={!value}
          className="ml-2 h-12 w-12 bg-purple-600 rounded-full flex items-center justify-center transition hover:bg-purple-700"
        >
          <span className="text-white">→</span>
        </button>
      </div>
    </div>
  );
}
