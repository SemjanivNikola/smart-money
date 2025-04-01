"use client";

import { storeTransaction } from "@/api/transactions/storeTransaction";
import PaymentForm from "@/src/forms/PaymentForm";
import { FormEvent } from "react";

interface TransactionType {
  total: number;
  account: string;
}

const INITIAL = {
  total: 0,
  account: "",
};

const CreatePaymentForm = () => {
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
    <div className="mx-auto h-100" style={{ maxWidth: "50%" }}>
      <div className="h-100" style={{ position: "relative" }}>
        <h3>Amount & Contact</h3>
        <PaymentForm initialValues={INITIAL} onAPISubmit={onSubmit} />
      </div>
    </div>
  );
};

export default CreatePaymentForm;
