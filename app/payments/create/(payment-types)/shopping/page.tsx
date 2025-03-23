import { fetchShoppingPaymentDraft } from "@/api/fetchShoppingPaymentDraft";
import AdditionalInvoiceInfoForm from "@/src/forms/shopping-payment/AdditionalInvoiceInfoForm";
import BasicInvoiceInfoForm from "@/src/forms/shopping-payment/BasicInvoiceInfoForm";
import InvoiceItemsForm from "@/src/forms/shopping-payment/InvoiceItemsForm";
import FormWizard from "../../FormWizard";

const CreateShoppingPayment = async () => {
  const { initBasicData, initAddonData, initItemsData } = await fetchShoppingPaymentDraft();

  return (
    <FormWizard
      formList={[
        {
          title: "Amount & Account",
          component: <BasicInvoiceInfoForm initialValues={initBasicData} />,
        },
        {
          title: "Additional Info",
          component: <AdditionalInvoiceInfoForm initialValues={initAddonData} />,
        },
        {
          title: "Invoice Items",
          component: <InvoiceItemsForm initialValues={initItemsData} />,
          style: {
            innerClass: "no-max",
          },
        },
      ]}
    ></FormWizard>
  );
};

export default CreateShoppingPayment;
