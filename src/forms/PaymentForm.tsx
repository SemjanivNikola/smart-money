"use client";

import { Controller, FormProvider, useForm } from "react-hook-form";
import DropdownArea from "../common/dropdown-area/DropdownArea";
import SimpleForm from "../common/form/SimpleForm";
import SimpleInput from "../common/text-input/SimpleInput";
import TextInputWithDetail from "../common/text-input/TextInputWithDetail";

interface TransactionType {
  total: number;
  account: string;
}

interface PaymentFormProps {
  initialValues: TransactionType;
  onAPISubmit: (data: TransactionType, method: () => void) => void;
  formActionButtons: React.ReactElement;
}

const PaymentForm = ({ initialValues, onAPISubmit, formActionButtons }: PaymentFormProps) => {
  const methods = useForm<TransactionType>({
    defaultValues: initialValues,
    mode: "onBlur",
  });

  methods.formState.isLoading;

  const onSubmit = async (data: TransactionType) => onAPISubmit(data, methods.reset);

  return (
    <FormProvider {...methods}>
      <SimpleForm onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="f col gap-m mb-m">
          <Controller
            name="total"
            control={methods.control}
            rules={{
              required: true,
            }}
            render={({ field: props }) => (
              <TextInputWithDetail
                type="text"
                label="Send amount"
                isFocused
                helperText="Balance: €6,950.00"
                {...props}
              />
            )}
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
                label="Select a payment account"
                isFocused
                error={methods.formState.errors?.account?.message}
                {...props}
              />
            )}
          />
        </div>
        {formActionButtons}
        <DropdownArea />
      </SimpleForm>
    </FormProvider>
  );
};

export default PaymentForm;
