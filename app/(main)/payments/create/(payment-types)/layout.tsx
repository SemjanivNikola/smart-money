import ScreenHeader from "@/src/components/screen-header/ScreenHeader";
import DoubleContentPage from "@/src/layouts/DoubleContentPage";
import { ReactElement } from "react";
import PaymentWizard from "../PaymentWizard";

export default function CreatePaymentTypesLayout({ children }: { children: ReactElement }) {
  return (
    <section className="main w-100 h-1 f col a-s gap-lg">
      <ScreenHeader title="Chose payment type" />
      <DoubleContentPage mainContent={children} sideContent={<PaymentWizard />} reverse />
    </section>
  );
}
