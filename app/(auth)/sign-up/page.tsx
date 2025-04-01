import SignUpForm from "@/src/forms/SignUpForm";
import DoubleContentPage from "@/src/layouts/DoubleContentPage";
import Link from "next/link";
import s from "../sign-in/signIn.module.css";

const SignUpInitData = {
  email: "",
  password: "",
  passCheck: "",
};

const MainContent = () => {
  return (
    <div id={s.loginFormWrapper} className="f col a-s gap-lg">
      <div className={s.formHeader}>
        <h2 className="mb-m">Sign up and...</h2>
        <p>Let your money to think smart</p>
      </div>
      <SignUpForm initData={SignUpInitData} />
      <div className="spacer-md" />
      <div id={s.linkBlok} className="w-100">
        <p>Already have an account?</p>
        <Link href="/sign-up" style={{ color: "var(--primary)" }}>
          Sign In
        </Link>
      </div>
    </div>
  );
};

const SideContent = () => {
  return <div className={s.qrCodeWrapper} />;
};

const SignUp = () => {
  return (
    <div className={s.signInWrapper}>
      <DoubleContentPage mainContent={<MainContent />} sideContent={<SideContent />} />
    </div>
  );
};

export default SignUp;
