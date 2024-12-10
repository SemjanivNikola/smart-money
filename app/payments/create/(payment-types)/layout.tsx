import ScreenHeader from "@/src/components/screen-header/ScreenHeader";
import DoubleContentPage from "@/src/layouts/DoubleContentPage";
import { ReactElement } from "react";
import PaymentWizard from "../PaymentWizard";

// import "./create-payment.css";

export default function CreatePaymentTypesLayout({ children }: { children: ReactElement }) {
  // let data = await fetch('https://api.vercel.app/blog')
  // let posts = await data.json()
  const paymentData = {
    title: "Create regular payment",
    step: 1,
  };

  return (
    <section className="main w-100 f col a-s gap-lg">
      <ScreenHeader title={paymentData.title} />
      <DoubleContentPage mainContent={children} sideContent={<PaymentWizard activeStep={paymentData.step} />} reverse />
    </section>
  );
}
