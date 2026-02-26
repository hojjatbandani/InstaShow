"use client";

import { useState } from "react";

interface TagInputProps {
  id?: string;
  name?: string;
  value: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
  error?: string;
  className?: string;
}

export default function TagInput({
  id,
  name,
  value,
  onChange,
  placeholder = "Type and press Enter",
  error,
  className = "",
}: TagInputProps) {
  const [input, setInput] = useState("");

  const addTag = (tag: string) => {
    const trimmed = tag.trim();
    if (trimmed && !value.includes(trimmed)) {
      onChange([...value, trimmed]);
    }
    setInput("");
  };

  const removeTag = (tag: string) => {
    onChange(value.filter((t) => t !== tag));
  };

  return (
    <>
      <div
        className={`w-full border border-gray-300 rounded-md px-4 py-2 flex flex-wrap items-center gap-2 min-h-[48px] focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition ${
          error ? "border-red-500" : ""
        } ${className}`}
      >
        {value.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="text-gray-400 hover:text-gray-600 ml-1"
            >
              &times;
            </button>
          </span>
        ))}
        <input
          type="text"
          id={id}
          name={name}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && input.trim()) {
              e.preventDefault();
              addTag(input);
            }
            if (e.key === "Backspace" && !input && value.length > 0) {
              onChange(value.slice(0, -1));
            }
          }}
          placeholder={value.length === 0 ? placeholder : ""}
          className="flex-1 min-w-[120px] outline-none text-base py-1"
        />
      </div>
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </>
  );
}
