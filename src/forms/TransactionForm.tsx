"use client";

import { Controller, FormProvider, useForm } from "react-hook-form";
import DropdownArea from "../common/dropdown-area/DropdownArea";
import SimpleForm from "../common/form/SimpleForm";
import SimpleInput from "../common/text-input/SimpleInput";

interface TransactionType {
  total: number;
  dateTime: string;
  shop: string;
  account: string;
}

interface TransactionFormProps {
  initialValues: TransactionType;
  onAPISubmit: (data: TransactionType, method: () => void) => void;
  formActionButtons: React.ReactElement;
}

const TransactionForm = ({ initialValues, onAPISubmit, formActionButtons }: TransactionFormProps) => {
  const methods = useForm<TransactionType>({
    defaultValues: initialValues,
    mode: "onBlur",
  });

  methods.formState.isLoading;

  const onSubmit = async (data: TransactionType) => onAPISubmit(data, methods.reset);

  return (
    <FormProvider {...methods}>
      <SimpleForm onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="f row gap-m mb-m">
          <Controller
            name="total"
            control={methods.control}
            rules={{
              required: true,
            }}
            render={({ field: props }) => (
              <SimpleInput
                type="text"
                label="Total"
                isFocused
                icon="credit-card"
                error={methods.formState.errors?.total?.message}
                {...props}
              />
            )}
          />
          <Controller
            name="dateTime"
            control={methods.control}
            rules={{
              required: true,
            }}
            render={({ field: props }) => (
              <SimpleInput
                type="text"
                label="Date and Time"
                isFocused
                icon="credit-card"
                error={methods.formState.errors?.dateTime?.message}
                {...props}
              />
            )}
          />
          <Controller
            name="shop"
            control={methods.control}
            rules={{
              required: true,
            }}
            render={({ field: props }) => (
              <SimpleInput
                type="text"
                label="Shop"
                isFocused
                icon="credit-card"
                error={methods.formState.errors?.shop?.message}
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
                label="Payment account"
                isFocused
                icon="credit-card"
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

export default TransactionForm;
