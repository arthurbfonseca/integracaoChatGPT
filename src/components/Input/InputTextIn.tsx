import React, { useState } from "react";

interface InputTextProps {
  required?: boolean;
  topLabel?: string;
  tweet?: boolean;
  onTextChange: (newValue: string) => void;
  value: string;
}

export default function InputText({
  required,
  topLabel,
  tweet,
  onTextChange,
  value,
}: InputTextProps) {
  const maxLength = 280;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;

    if (tweet) {
      if (inputText.length <= maxLength) {
        onTextChange(inputText);
      }
    }
  };

  return (
    <div className="w-1/3">
      <span className="text-sm pb-1">{topLabel}</span>
      <div className="flex justify-start border-4 border-[#10a37f] rounded-lg w-full hover:border-[#10a37f]">
        <textarea
          className="p-1 w-full rounded focus:outline-none text-black font-normal"
          value={value}
          required={required}
          onChange={handleChange}
          rows={4}
        />
      </div>
      <span className="flex justify-end mr-1 mt-1 text-sm">
        {value.length}/{maxLength}
      </span>
    </div>
  );
}
