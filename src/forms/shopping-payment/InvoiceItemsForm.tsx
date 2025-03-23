"use client";

import { createPayment } from "@/api/createPayment";
import FormActionBar from "@/src/common/form/FormActionBar";
import { ItemsInvoiceData } from "@/src/types/PaymentTypes";
import { useFieldArray, useForm } from "react-hook-form";

interface IInvoiceItemForm {
  articles: ItemsInvoiceData;
}

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

  const { register, handleSubmit, control, formState } = useForm<IInvoiceItemForm>({
    defaultValues: { articles: initialValues },
    mode: "onBlur",
  });
  const { fields, append } = useFieldArray({
    control,
    name: "articles",
  });

  return (
    <form onSubmit={handleSubmit(onAPISubmit)} className="w-100 pb-5">
      <div className="f col gap-m mb-m h-100">
        <input
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
            console.log(typeof e);
            if (e.key === "Enter") {
              append({ name: e.currentTarget.value }, { shouldFocus: false });
              e.currentTarget.value = "";
              e.currentTarget.focus();
            }
          }}
        />
        <div className="form-controller-fields f col gap-m h-100">
          {fields.map((field, index) => {
            return <input key={field.id} {...register(`articles.${index}.name` as const)} />;
          })}
        </div>
      </div>
      <FormActionBar title="Review & Store" isLoading={formState.isLoading} />
    </form>
  );
};

export default InvoiceItemsForm;
