import { useFormContext } from "react-hook-form";
import s from "./InvoiceWorkingRow.module.css";

const InvoiceItemTableUnit = ({ index }: { index: number }) => {
  const { register } = useFormContext();
  return (
    <tr className={s.trWrapper}>
      <td className={s.tdInputWrapper}>
        <input className={s.tdInput} {...register(`articles.${index}.name` as const)} />
      </td>
      <td className={s.tdInputWrapper} data-align="center">
        <input
          className={s.tdInput}
          {...register(`articles.${index}.unitPrice` as const, { valueAsNumber: true })}
          type="number"
        />
      </td>
      <td className={s.tdInputWrapper} data-align="center">
        <input className={s.tdInput} {...register(`articles.${index}.quantity` as const)} type="number" />
      </td>
      <td className={s.tdInputWrapper} data-align="center">
        <input className={s.tdInput} {...register(`articles.${index}.vat` as const)} type="number" />
      </td>
      <td className={s.tdInputWrapper} data-align="center">
        <input className={s.tdInput} {...register(`articles.${index}.total` as const)} type="number" />
      </td>
    </tr>
  );
};

export default InvoiceItemTableUnit;
