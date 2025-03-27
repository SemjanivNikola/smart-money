import SimpleInput from "@/src/common/text-input/SimpleInput";
import { useForm } from "@/src/hooks/useForm";
import { ArticleType, IInvoiceItemForm } from "@/src/types/PaymentTypes";
import { useFieldArray } from "../../providers/FieldArrayProvider";
import s from "./InvoiceWorkingRow.module.css";

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
    <div className={s.workRowWrapper}>
      <h3 className={s.sectionTitle}>Working row</h3>
      <form className="f gap-m" onSubmit={onSubmit(handleSubmit)}>
        <SimpleInput label="Name" {...register("name")} placeholder="Baguette" />
        <SimpleInput label="Unit price" {...register("unitPrice", "number")} placeholder="0.89" />
        <SimpleInput label="Quantity" {...register("quantity", "number")} placeholder="1" />
        <SimpleInput label="VAT" {...register("vat", "number")} placeholder="23%" />
        <button type="submit" style={{ display: "none" }}></button>
      </form>
    </div>
  );
};

export default InvoiceWorkingRow;