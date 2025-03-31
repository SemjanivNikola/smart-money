"use client";

import { Controller, FormProvider, useForm } from "react-hook-form";
import DropdownArea from "../common/dropdown-area/DropdownArea";
import SimpleForm from "../common/form/SimpleForm";
import SimpleInput from "../common/text-input/SimpleInput";
import TextInputWithDetail from "../common/text-input/TextInputWithDetail";
import { CurrcencyEnum, PaymentTypeEnum, TransactionCategoryEnum } from "../enums/PaymentEnum";

interface ArticleType {
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  vat: number;
}

interface TransactionType {
  invoiceDate: string;
  shop: string;
  total: number;
  currency: CurrcencyEnum;
  paymentType: PaymentTypeEnum;
  category: TransactionCategoryEnum | string;
  account: string;
  note: string;
  articles: ArticleType[];
}

interface ShoppingPaymentFormProps {
  initialValues: TransactionType;
  onAPISubmit: (data: TransactionType, method: () => void) => void;
  formActionButtons: React.ReactElement;
}

const ShoppingPaymentForm = ({ initialValues, onAPISubmit, formActionButtons }: ShoppingPaymentFormProps) => {
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
            name="invoiceDate"
            control={methods.control}
            rules={{
              required: true,
            }}
            render={({ field: props }) => <SimpleInput type="text" label="Invoice date" isFocused {...props} />}
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
                label="Where did shopping took place?"
                error={methods.formState.errors?.account?.message}
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
                error={methods.formState.errors?.account?.message}
                {...props}
              />
            )}
          />
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
                error={methods.formState.errors?.account?.message}
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
                label="Cash or card?"
                error={methods.formState.errors?.account?.message}
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

export default ShoppingPaymentForm;
