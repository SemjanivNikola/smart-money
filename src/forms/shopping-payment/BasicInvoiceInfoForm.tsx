"use client";

import { createPayment } from "@/api/createPayment";
import { Controller, useForm } from "react-hook-form";
import DropdownArea from "../../common/dropdown-area/DropdownArea";
import SimpleForm from "../../common/form/SimpleForm";
import SimpleInput from "../../common/text-input/SimpleInput";
import { PaymentTypeEnum } from "../../enums/PaymentEnum";
import FormActionBar from "@/src/common/form/FormActionBar";
import { BasicInvoiceData } from "@/src/types/PaymentTypes";

const BasicInvoiceInfoForm = ({ initialValues }: { initialValues: BasicInvoiceData }) => {
  const methods = useForm<BasicInvoiceData>({
    defaultValues: initialValues,
    mode: "onBlur",
  });

  const onSubmit = async (data: BasicInvoiceData) => {
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
          name="shop"
          control={methods.control}
          rules={{
            required: true,
          }}
          render={({ field: props }) => (
            <SimpleInput
              type="text"
              label="Where did shopping took place?"
              error={methods.formState.errors?.shop?.message}
              {...props}
            />
          )}
        />
        <Controller
          name="invoiceDate"
          control={methods.control}
          rules={{
            required: true,
          }}
          render={({ field: props }) => <SimpleInput type="text" label="Invoice date" isFocused {...props} />}
        />
        <Controller
          name="account"
          control={methods.control}
          rules={{
            required: true,
          }}
          render={({ field: props }) => (
            <SimpleInput
              type="text"
              label="Cash or card?"
              error={methods.formState.errors?.account?.message}
              {...props}
            />
          )}
        />
        <Controller
          name="paymentType"
          control={methods.control}
          rules={{
            required: true,
          }}
          render={({ field: props }) => (
            <SimpleInput
              type="text"
              label="How did you pay?"
              error={methods.formState.errors?.paymentType?.message}
              {...props}
            />
          )}
        />
        <Controller
          name="total"
          control={methods.control}
          rules={{
            required: true,
          }}
          render={({ field: props }) => (
            <SimpleInput
              type="number"
              label="Total invoice amount"
              error={methods.formState.errors?.total?.message}
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

export default BasicInvoiceInfoForm;
