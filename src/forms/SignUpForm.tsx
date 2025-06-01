"use client";

import { FormEvent } from "react";
import Button from "../common/button/Button";
import TextInput from "../common/text-input/TextInput";
import { useRouter } from "next/navigation";

const SignUpForm = ({ submitMethod }: { submitMethod: (data: FormData) => Promise<{ data: Object; ok: boolean }> }) => {
  const router = useRouter();
  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const res = await submitMethod(formData);

    if (res.ok) router.push("/");
  }

  return (
    <form className="f col w-100" onSubmit={onSubmit}>
      <TextInput name="email" type="email" placeholder="Email" isFocused />
      <TextInput name="password" type="password" placeholder="Password" />
      <TextInput name="passCheck" type="password" placeholder="Confirm your password" />
      <div className="spacer-md" />
      <Button title="Get started" type="submit" bStyle="primary" isLoading={false} />
    </form>
  );
};

export default SignUpForm;
