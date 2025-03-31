import { FormEvent, FormEventHandler, InputHTMLAttributes } from "react";

export type DataObject<T> = Partial<Record<keyof T, string | number | readonly string[] | undefined>>;
export type SetData<T, K extends keyof T> = (name: K, value: InputHTMLAttributes<HTMLInputElement>["value"]) => void;

export type ErrorsObject<T> = Record<Partial<keyof T>, string>;
export type SetError<T, K extends keyof T> = (name: K, value: string) => void;
export type RemoveError<T, K extends keyof T> = (name: K) => void;

type RegisterObject<K> = {
  id: K;
  name: K;
  value: InputHTMLAttributes<HTMLInputElement>["value"];
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  onChange: (e: {
    target: {
      name: string;
      value: InputHTMLAttributes<HTMLInputElement>["value"];
    };
  }) => void;
  error: string | undefined;
};
export type Register<T> = (
  name: keyof T,
  type?: InputHTMLAttributes<HTMLInputElement>["type"]
) => RegisterObject<keyof T>;

export type SubmitForm<T> = (customSubmit: (data: T) => void) => FormEventHandler<HTMLFormElement>;

type InputAttributes<F extends Record<string, string | number | readonly string[] | undefined>> = {
  data: DataObject<F>;
  errors: ErrorsObject<F>;
  setData: SetData<F, keyof F>;
  register: Register<F>;
  onSubmit: SubmitForm<F>;
};
export type FormProps<F extends Record<string, string | number | readonly string[] | undefined>> = InputAttributes<F>;
