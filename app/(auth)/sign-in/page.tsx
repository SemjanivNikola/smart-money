import SignInForm from "@/src/forms/SignInForm";
import DoubleContentPage from "@/src/layouts/DoubleContentPage";
import Image from "next/image";
import Link from "next/link";
import googleIcon from "../../../assets/images/google.png";
import s from "./signIn.module.css";

const LoginInitData = {
  email: "",
  password: "",
};

const MainContent = () => {
  return (
    <div id={s.loginFormWrapper} className="f col a-s gap-lg">
      <div className={s.formHeader}>
        <h2 className="mb-m">Welcome back!</h2>
        <p>Enter the e-mail address associated with your Smart Money account</p>
      </div>
      <SignInForm initData={LoginInitData} />
      <div className={s.orSpliter}>
        <span>or</span>
      </div>
      <div className="w-100 mb-m">
        <Link href="" className={s.iconLink}>
          <Image src={googleIcon} width={16} height={16} alt="Google icon" />
          <span>Continue with Google</span>
        </Link>
      </div>
      <div className="spacer-md" />
      <div id={s.linkBlok} className="w-100">
        <p>Don't have an account?</p>
        <Link href="/sign-up" style={{ color: "var(--primary)" }}>
          Create account
        </Link>
      </div>
    </div>
  );
};

const SideContent = () => {
  return (
    <div className={s.qrCodeWrapper}>
      <div className="f col gap-lg" style={{ width: "min-content" }}>
        <div className={s.qrCodePlaceholder} />
        <div className="spacer-md" />
        <div className={s.helperText}>
          <h4 className="mb-m">Sign in with QR code</h4>
          <p>Scan this code with your phone camera to sign in instantly</p>
        </div>
      </div>
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
