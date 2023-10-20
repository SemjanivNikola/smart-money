import { forwardRef, useRef } from "react";
import TextInputProps from "./TextInputProps";
import style from "./text-input.module.css";

const TextInput = forwardRef<HTMLInputElement | null, TextInputProps>(
    function TextInput(
        { label, isFocused = false, error, ...otherProps },
        ref
    ) {
        const inputRef = ref ? (ref as unknown as HTMLInputElement) : null;
        const input = useRef<HTMLInputElement>(inputRef);

        return (
            <div className="relative mb-s text-start">
                <div className="relative">
                    <input autoFocus={isFocused} ref={input} {...otherProps} />
                    <label
                        id={`${otherProps.name}-label`}
                        htmlFor={otherProps.name}
                        className={`${style.input_label} ${style.idle} absolute px-s`}
                        style={{ transform: "translateY(-50%)" }}
                    >
                        {label}
                    </label>
                </div>
                <p className={style.input_error}>{error}</p>
            </div>
        );
    }
);

export default TextInput;
