"use client";

import Button from "../common/button/Button";
import SimpleInput from "../common/text-input/SimpleInput";
import { useForm } from "../hooks/useForm";

interface SignUpFormProps {
  initData: { email: string; password: string; passCheck: string };
}

const SignUpForm = ({ initData }: SignUpFormProps) => {
  const { register, onSubmit } = useForm(initData);

  function handleSubmit() {}

  return (
    <form className="f col w-100" onSubmit={onSubmit(handleSubmit)}>
      <SimpleInput label="" {...register("email")} type="email" placeholder="Email" isFocused />
      <SimpleInput label="" {...register("password")} type="password" placeholder="Password" />
      <SimpleInput label="" {...register("passCheck")} type="password" placeholder="Type password again" />
      <div className="spacer-md" />
      <Button title="Get started" type="submit" bStyle="primary" isLoading={false} />
    </form>
  );
};

export default SignUpForm;
