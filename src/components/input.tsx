import React from "react";

interface Props {
  text: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ text, value, onChange }: Props) {
  return (
    <div className="input-field">
      <label>{text}</label>
      <input
        type="text"
        name={text.toLowerCase()} // ✅ IMPORTANT
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
