import React, { useEffect } from "react";
import { useDebounce } from "../hooks";

interface InputProps {
  type: string;
  value: string;
  onChangeValue: any;
}

const Input = ({ type, value = "", onChangeValue }: InputProps) => {
  const [debouncedValue, input, setInput] = useDebounce<string>(value, 500);

  useEffect(() => {
    debouncedValue !== value && onChangeValue(debouncedValue);
  }, [debouncedValue]);

  useEffect(() => {
    setInput(value);
  }, [value]);

  return (
    <input
      type={type}
      value={input}
      onChange={e => {
        setInput(e.target.value);
      }}
    />
  );
};

export default Input;
