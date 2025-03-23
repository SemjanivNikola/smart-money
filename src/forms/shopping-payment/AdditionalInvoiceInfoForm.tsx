"use client";

import { createPayment } from "@/api/createPayment";
import FormActionBar from "@/src/common/form/FormActionBar";
import { Controller, useForm } from "react-hook-form";
import DropdownArea from "../../common/dropdown-area/DropdownArea";
import SimpleForm from "../../common/form/SimpleForm";
import SimpleInput from "../../common/text-input/SimpleInput";
import { TransactionCategoryEnum } from "../../enums/PaymentEnum";
import { AdditionalInvoiceData } from "@/src/types/PaymentTypes";

const AdditionalInvoiceInfoForm = ({ initialValues }: { initialValues: AdditionalInvoiceData }) => {
  const methods = useForm<AdditionalInvoiceData>({
    defaultValues: initialValues,
    mode: "onBlur",
  });

  const onSubmit = async (data: AdditionalInvoiceData) => {
    console.log("formData >> ", data);

    try {
      const response = await createPayment(data);
      console.log("res >> ", response);
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error);
    }
  };

  return (
    <SimpleForm onSubmit={methods.handleSubmit(onSubmit)}>
      <div className="f col gap-m mb-m">
        <Controller
          name="category"
          control={methods.control}
          rules={{
            required: true,
          }}
          render={({ field: props }) => (
            <SimpleInput
              type="text"
              label="Place it to category"
              error={methods.formState.errors?.category?.message}
              {...props}
            />
          )}
        />
        <Controller
          name="note"
          control={methods.control}
          rules={{
            required: true,
          }}
          render={({ field: props }) => (
            <SimpleInput
              type="text"
              label="Wanna add a note?"
              error={methods.formState.errors?.note?.message}
              {...props}
            />
          )}
        />
      </div>
      <FormActionBar title="Continue" isLoading={methods.formState.isLoading} />
      <DropdownArea />
    </SimpleForm>
  );
};

export default AdditionalInvoiceInfoForm;
