import { InputHTMLAttributes, ReactNode } from "react";

interface TextInputProps {
    id: string;
    type: InputHTMLAttributes<HTMLInputElement>["type"];
    name: string;
    autoComplete?: InputHTMLAttributes<HTMLInputElement>["autoComplete"];
    isFocused?: boolean;
    error?: string;
    label: string;
    value?: InputHTMLAttributes<HTMLInputElement>["value"];
    readOnly?: InputHTMLAttributes<HTMLInputElement>["readOnly"];
    required?: InputHTMLAttributes<HTMLInputElement>["required"];
    onChange: (e: any) => void;
}

export type TooltipTextInputProps = TextInputProps & { children: ReactNode };

export default TextInputProps;
