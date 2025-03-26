import SimpleInput from "@/src/common/text-input/SimpleInput";
import { useForm } from "@/src/hooks/useForm";
import { ArticleType, IInvoiceItemForm } from "@/src/types/PaymentTypes";
import { useFieldArray } from "../../providers/FieldArrayProvider";

const INIT = {
  name: "",
  unitPrice: 0,
  quantity: 0,
  vat: 0,
};

const InvoiceWorkingRow = () => {
  const { register, onSubmit } = useForm(INIT);
  const { append } = useFieldArray<IInvoiceItemForm>();

  function handleSubmit(data: Omit<ArticleType, "total">) {
    const total = data.unitPrice * data.quantity;

    append({
      ...data,
      total: total,
    });
  }

  return (
    <form className="f gap-m" onSubmit={onSubmit(handleSubmit)}>
      <SimpleInput label="Name" {...register("name")} />
      <SimpleInput label="Unit price" {...register("unitPrice", "number")} />
      <SimpleInput label="Quantity" {...register("quantity", "number")} />
      <SimpleInput label="VAT" {...register("vat", "number")} />
      <button type="submit" style={{ display: "none" }}></button>
    </form>
  );
};

export default InvoiceWorkingRow;
