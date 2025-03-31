import SimpleInput from "@/src/common/text-input/SimpleInput";
import { useForm } from "@/src/hooks/useForm";
import { ArticleType, IInvoiceItemForm } from "@/src/types/PaymentTypes";
import { useFieldArray } from "../../providers/FieldArrayProvider";
import s from "./InvoiceWorkingRow.module.css";
import { useRef } from "react";

const INIT = {
  name: "",
  unitPrice: 0,
  quantity: 0,
  vat: 0,
};

const InvoiceWorkingRow = ({ isFocused = false }: { isFocused: boolean }) => {
  const { register, onSubmit } = useForm(INIT);
  const { append } = useFieldArray<IInvoiceItemForm>();
  const nameInputEl = useRef<HTMLInputElement>(null);

  function handleSubmit(data: Omit<ArticleType, "total">) {
    const total = data.unitPrice * data.quantity;

    append(
      {
        ...data,
        total: total,
      },
      { shouldFocus: false }
    );

    nameInputEl.current?.focus();
  }

  return (
    <div className={s.workRowWrapper}>
      <h3 className={s.sectionTitle}>Working row</h3>
      <form className="f gap-m" onSubmit={onSubmit(handleSubmit)}>
        <SimpleInput
          ref={nameInputEl}
          label="Name"
          {...register("name")}
          placeholder="Baguette"
          isFocused={isFocused}
        />
        <SimpleInput label="Unit price" {...register("unitPrice", "number")} placeholder="0.89" />
        <SimpleInput label="Quantity" {...register("quantity", "number")} placeholder="1" />
        <SimpleInput label="VAT" {...register("vat", "number")} placeholder="23%" />
        <button type="submit" style={{ display: "none" }}></button>
      </form>
    </div>
  );
};

export default InvoiceWorkingRow;