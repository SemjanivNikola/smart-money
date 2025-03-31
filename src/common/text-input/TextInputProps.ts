import { ChangeEvent, InputHTMLAttributes } from "react";
import { IconName } from "../icon/IconType";

export type SimpleInputProps = {
  name: string;
  disabled?: boolean;
  isFocused?: boolean;
  error?: string;
  helperText?: string;
  label: string;
  onBlur?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactElement;
} & InputHTMLAttributes<HTMLInputElement>;

export type PasswordInputProps = Omit<SimpleInputProps, "type">;
export type TextInputProps = Omit<SimpleInputProps, "children">;