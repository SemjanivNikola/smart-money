import { ChangeEvent, InputHTMLAttributes } from "react";
import { IconName } from "../icon/IconType";

export type SimpleInputProps = {
    name: string;
    type: InputHTMLAttributes<HTMLInputElement>["type"];
    value: InputHTMLAttributes<HTMLInputElement>["value"];
    autoComplete?: InputHTMLAttributes<HTMLInputElement>["autoComplete"];
    disabled?: boolean;
    isFocused?: boolean;
    error?: string;
    label: string;
    onBlur?: () => void;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    icon: IconName;
    children?: React.ReactElement;
};

export type PasswordInputProps = Omit<SimpleInputProps, "type">;
export type TextInputProps = Omit<SimpleInputProps, "children">;