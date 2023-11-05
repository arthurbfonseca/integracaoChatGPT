import React, { useState, ChangeEvent } from "react";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  topLabel: string;
  label: string;
}

export default function InputText({ label, topLabel }: InputTextProps) {
  const maxLength = 280;

  return (
    <div className="w-1/3">
      <span className="text-sm pb-1">{topLabel}</span>
      <div className="flex justify-start border-4 border-[#10a37f] rounded-lg w-full hover:border-[#10a37f]">
        <textarea
          className="p-1 text-black font-normal w-full rounded focus:outline-none"
          value={label}
          rows={4}
        />
      </div>
      <span className="flex justify-end mr-1 mt-1 text-sm">
        {label.length}/{maxLength}
      </span>
    </div>
  );
}
