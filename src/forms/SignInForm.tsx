"use client";

import { signIn } from "next-auth/react";
import { FormEvent } from "react";
import Button from "../common/button/Button";
import TextInput from "../common/text-input/TextInput";

const SignInForm = () => {
  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    await signIn("credentials", {
      redirectTo: "/",
      email: formData.get("email"),
      password: formData.get("password"),
    }).catch((error) => console.log("client login error >> ", error));
  }

  return (
    <form className="f col w-100" onSubmit={onSubmit}>
      <TextInput name="email" type="email" placeholder="Email" isFocused />
      <TextInput name="password" type="password" placeholder="Password" />
      <div className="spacer-md" />
      <Button title="Sign In" type="submit" bStyle="primary" isLoading={false} />
    </form>
  );
};

export default SignInForm;
