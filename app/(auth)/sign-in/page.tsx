"use client";

import { useState } from "react";
import s from "./signIn.module.css";
import DoubleContentPage from "@/src/layouts/DoubleContentPage";
import TextInputWithDetail from "@/src/common/text-input/TextInputWithDetail";
import SimpleInput from "@/src/common/text-input/SimpleInput";
import Button from "@/src/common/button/Button";

const MainContent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="f col a-s gap-lg" style={{ maxWidth: "52%", margin: "0 auto" }}>
      <div className={s.formHeader}>
        <h2 className="mb-m">Welcome back!</h2>
        <p>Enter the e-mail address associated with your Smart Money account</p>
      </div>
      <form className="f col gap-s w-100">
        <SimpleInput
          label=""
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <SimpleInput
          label=""
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Sign In" type="submit" bStyle="primary" isLoading={false} />
      </form>
      <div className={s.orSpliter}>
        <span>or</span>
      </div>
      <div className="w-100">
        <Button title="Continue with Google" bStyle="secondary" isLoading={false} wide />
      </div>
    </div>
  );
};

const SideContent = () => {
  return (
    <div className={s.qrCodeWrapper}>
      <div className={s.qrCodePlaceholder} />
    </div>
  );
};

const SignIn = () => {
  return (
    <div className={s.signInWrapper}>
      <DoubleContentPage mainContent={<MainContent />} sideContent={<SideContent />} />
    </div>
  );
};

export default SignIn;
