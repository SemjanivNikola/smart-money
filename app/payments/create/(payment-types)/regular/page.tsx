"use client";

import { FormEvent } from "react";
import PaymentForm from "../../../../../src/forms/PaymentForm";
import { storeTransaction } from "@/api/transactions/storeTransaction";
import FormActionBar from "../../../../../src/common/form/FormActionBar";
import Button from "../../../../../src/common/button/Button";

interface TransactionType {
  total: number;
  account: string;
}

const INITIAL = {
  total: 0,
  account: "",
};

const CreatePaymentForm = ({ onFinish }: { onFinish: () => void }) => {
  async function onhandleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log("formData >> ", formData);

    try {
      const response = await storeTransaction(formData);
      console.log("res >> ", response);
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error);
    }
  }

  const onSubmit = async (data: TransactionType, reset: () => void) =>
    await storeTransaction(data)
      .then((response: any) => {
        // response.data.message
        console.log("response >> ", response);
        reset();
      })
      .catch((error: Error) => {
        console.error("Error submitting form: ", error.message);
      });

  return (
    <div className="mx-auto" style={{ maxWidth: "40%" }}>
      <h3>Amount & Contact</h3>
      <PaymentForm
        initialValues={INITIAL}
        onAPISubmit={onSubmit}
        formActionButtons={
          <FormActionBar
            title="Create"
            children={
              <Button title="Continue" type="button" onClick={onFinish} isLoading={false} bStyle="primary" wide />
            }
          />
        }
      />
    </div>
  );
};

export default CreatePaymentForm;
