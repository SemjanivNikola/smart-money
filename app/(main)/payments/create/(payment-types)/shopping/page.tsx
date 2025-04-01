import { fetchShoppingPaymentDraft } from "@/api/fetchShoppingPaymentDraft";
import AdditionalInvoiceInfoForm from "@/src/forms/shopping-payment/AdditionalInvoiceInfoForm";
import BasicInvoiceInfoForm from "@/src/forms/shopping-payment/BasicInvoiceInfoForm";
import InvoiceItemsForm from "@/src/forms/shopping-payment/InvoiceItemsForm";
import FormWizard from "../../../../../../src/components/form-wizard/FormWizard";
import FormWizardItem from "../../../../../../src/components/form-wizard/FormWizardItem";

const STEP_ONE = 0;
const STEP_TWO = -101.5;
const STEP_THREE = -203;

const CreateShoppingPayment = async () => {
  const { initBasicData, initAddonData, initItemsData, initStep } = await fetchShoppingPaymentDraft();
  const formList = [
    {
      title: "Amount & Account",
      component: <BasicInvoiceInfoForm isActive={initStep === STEP_ONE} initialValues={initBasicData} />,
    },
    {
      title: "Additional Info",
      component: <AdditionalInvoiceInfoForm isActive={initStep === STEP_TWO} initialValues={initAddonData} />,
    },
    {
      title: "Invoice Items",
      component: <InvoiceItemsForm isActive={initStep === STEP_THREE} initialValues={initItemsData} />,
      style: {
        innerClass: "no-max",
      },
    },
  ];
  return (
    <FormWizard initStep={initStep}>
      {formList.map(({ title, component, style }) => (
        <FormWizardItem key={title} title={title} component={component} style={style} />
      ))}
    </FormWizard>
  );
};

export default CreateShoppingPayment;
