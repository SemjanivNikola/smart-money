import s from "./text-input.module.css";

const TextInput = ({
  isFocused = false,
  error,
  ...otherProps
}: {
  name: string;
  type: string;
  placeholder: string;
  isFocused?: boolean;
  error?: string;
}) => {
  return (
    <>
      <div className={s.inputContainer}>
        <input id={otherProps.name} autoFocus={isFocused} className={s.textInput} {...otherProps} />
      </div>
      <span className={s.helperText}>{error}</span>
    </>
  );
};

export default TextInput;
