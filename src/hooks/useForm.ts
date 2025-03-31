import { ErrorsObject, FormProps, Register, RemoveError, SetData, SetError, SubmitForm } from "@/src/types/FormProps";
import { useState } from "react";

export function useForm<T extends Record<string, string | number | readonly string[] | undefined>>(
  initialValues: T
): FormProps<T> {
  const [data, setData] = useState<T>(initialValues);
  const [errors, setErrors] = useState<ErrorsObject<T>>({} as ErrorsObject<T>);

  const handleOnChange: SetData<T, keyof T> = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const __setError: SetError<T, keyof T> = (name, value) => {
    setErrors((prev) => ({ ...prev, [name]: value }));
  };

  const __removeError: RemoveError<T, keyof T> = (name) => {
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
  };

  const clearData = () => {
    setData(initialValues);
  };

  const register: Register<T> = (name, type = "text") => {
    return {
      id: name,
      name,
      value: data[name] || "",
      type: type,
      onChange: ({ target }) => {
        let value: any = target.value;

        if (type === "number") value = Number(target.value);
        if (type === "checkbox") value = (target as HTMLInputElement).checked;

        handleOnChange(name, value);
      },
      error: errors[name] || "",
    };
  };

  const onSubmit: SubmitForm<T> = (customSubmit) => (e) => {
    e.preventDefault();
    e.stopPropagation();

    customSubmit(data);
    clearData();
  };

  return {
    data,
    setData: handleOnChange,
    errors,
    register,
    onSubmit,
  };
}
