"use client"

import { forwardRef } from "react";
import { SimpleInputProps } from "./TextInputProps";
import s from "./text-input.module.css";

const SimpleInput = forwardRef<HTMLInputElement | null, SimpleInputProps>(function TextInput(
  { label, isFocused = false, error, helperText, children, ...otherProps },
  ref
) {
  const text = error ? error : helperText;
  return (
    <div className={s.inputWrapper} data-error={!!error}>
      <label id={`${otherProps.name}-label`} htmlFor={otherProps.name} className={s.inputLabel}>
        {label}
      </label>
      <div className={s.inputContainer}>
        <input id={otherProps.name} ref={ref} autoFocus={isFocused} className={s.textInput} {...otherProps} />
        {/* Label element needs to be next to input element so css selector can find it in order to animate */}
        {children}
      </div>
      <span className={s.helperText}>{text}</span>
    </div>
  );
});

export default SimpleInput;