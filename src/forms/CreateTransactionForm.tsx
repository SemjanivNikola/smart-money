"use client";

import { FormEvent } from "react";
import TransactionForm from "./TransactionForm";
import { storeTransaction } from "@/api/transactions/storeTransaction";
import FormActionBar from "../common/form/FormActionBar";

interface TransactionType {
  total: number;
  dateTime: string;
  shop: string;
  account: string;
}

const INITIAL = {
  total: 0,
  dateTime: "",
  shop: "",
  account: "",
};

const CreateTransactionForm = () => {
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
    <TransactionForm
      initialValues={INITIAL}
      onAPISubmit={onSubmit}
      formActionButtons={<FormActionBar title="Create" />}
    />
  );
};

export default CreateTransactionForm;
