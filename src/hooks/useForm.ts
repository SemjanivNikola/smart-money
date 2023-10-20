import {
    DataObject,
    ErrorsObject,
    FormProps,
    Register,
    RemoveError,
    SetData,
    SetError,
    SubmitForm,
} from "@/src/types/FormProps";
import { InputHTMLAttributes, useState } from "react";

export function useForm<T extends Record<string, InputHTMLAttributes<HTMLInputElement>["value"]>>(
    initialValues: T
): FormProps<T> {
    const [data, setData] = useState<DataObject<T>>(initialValues);
    const errors: ErrorsObject<T> = {} as ErrorsObject<T>;

    const handleOnChange: SetData<T, keyof T> = (name, value) => {
        const c = { [name]: value };
        setData({ ...data, ...c });
    };

    const __setError: SetError<T, keyof T> = (name, value) => {
        errors[name] = value;
    };

    const __removeError: RemoveError<T, keyof T> = (name) => {
        delete errors[name];
    };

    const register: Register<T> = (name, type = "text") => {
        return {
            id: name,
            name: name,
            value: data[name],
            type: type,
            onChange: ({ target }) => {
                handleOnChange(target.name, target.value);
            },
            error: errors[name],
        };
    };

    const submitForm: SubmitForm = (e) => {
        e.preventDefault();
    };

    return {
        data,
        setData: handleOnChange,
        errors,
        register,
        submitForm,
    };
}
