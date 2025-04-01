"use client";

import Button from "../common/button/Button";
import SimpleInput from "../common/text-input/SimpleInput";
import { useForm } from "../hooks/useForm";

interface SignInFormProps {
  initData: { email: string; password: string };
}

const SignInForm = ({ initData }: SignInFormProps) => {
  const { register, onSubmit } = useForm(initData);

  function handleSubmit() {}

  return (
    <form className="f col w-100" onSubmit={onSubmit(handleSubmit)}>
      <SimpleInput label="" {...register("email")} type="email" placeholder="Email" isFocused />
      <SimpleInput label="" {...register("password")} type="password" placeholder="Password" />
      <div className="spacer-md" />
      <Button title="Sign In" type="submit" bStyle="primary" isLoading={false} />
    </form>
  );
};

export default SignInForm;
