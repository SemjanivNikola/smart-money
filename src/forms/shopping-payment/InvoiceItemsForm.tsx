"use client";

import { createPayment } from "@/api/createPayment";
import FormActionBar from "@/src/common/form/FormActionBar";
import { IInvoiceItemForm, ItemsInvoiceData } from "@/src/types/PaymentTypes";
import { FormProvider, useForm } from "react-hook-form";
import InvoiceItemTable from "./InvoiceItemTable";
import { FieldArrayProvider } from "../../providers/FieldArrayProvider";
import InvoiceWorkingRow from "./InvoiceWorkingRow";

const InvoiceItemsForm = ({ initialValues }: { initialValues: ItemsInvoiceData }) => {
  const onAPISubmit = async (data: IInvoiceItemForm) =>
    await createPayment(data)
      .then((response: any) => {
        console.log("response >> ", response);
        // response.data.message
        // reset();
      })
      .catch((error: Error) => {
        console.error("Error submitting form: ", error.message);
      });

  const methods = useForm<IInvoiceItemForm>({
    defaultValues: { articles: initialValues },
    mode: "onBlur",
  });

  return (
    <div className="w-100 pb-5">
      <FieldArrayProvider control={methods.control} name="articles">
        <InvoiceWorkingRow />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onAPISubmit)}>
            <div className="f col gap-m mb-m h-100" style={{ overflow: "hidden" }}>
              <div className="form-controller-fields f col gap-m h-100">
                <InvoiceItemTable headers={["Name", "Unit price", "Quantity", "VAT", "Total"]} />
              </div>
            </div>
            <FormActionBar title="Review & Store" isLoading={methods.formState.isLoading} />
          </form>
        </FormProvider>
      </FieldArrayProvider>
    </div>
  );
};

export default InvoiceItemsForm;
