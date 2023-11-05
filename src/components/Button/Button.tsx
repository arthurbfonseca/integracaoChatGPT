import React from "react";

interface ButtonProps {
  text: string;
  onSubmit?: () => void;
}

export default function Button({ onSubmit, text }: ButtonProps) {
  return (
    <button
      type="submit"
      onClick={onSubmit}
      className={`bg-[#10a37f] text-white font-bold py-2 px-4 rounded w-1/12`}
    >
      {text}
    </button>
  );
}
