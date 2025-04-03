import PageScreen from "@/src/common/screen/PageScreen";
import DoubleContentPage from "@/src/layouts/DoubleContentPage";
import { ReactElement } from "react";
import PaymentWizard from "../PaymentWizard";

export default function CreatePaymentTypesLayout({ children }: { children: ReactElement }) {
  return (
    <PageScreen title="Chose payment type">
      <DoubleContentPage.Divider mainContent={children} sideContent={<PaymentWizard />} sideContentBasis={20} reverse />
    </PageScreen>
  );
}
