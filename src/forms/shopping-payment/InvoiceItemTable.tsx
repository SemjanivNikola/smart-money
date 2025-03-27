import { IInvoiceItemForm } from "@/src/types/PaymentTypes";
import InvoiceItemTableUnit from "./InvoiceItemTableUnit";
import { useFieldArray } from "../../providers/FieldArrayProvider";
import s from "../../common/table/Table.module.css";

const InvoiceItemTable = ({ headers }: { headers: string[] }) => {
  const { fields } = useFieldArray<IInvoiceItemForm>();
  return (
    <table className={s.mainTable}>
      <thead>
        <tr className={s.thRow}>
          {headers.map((title) => (
            <th key={title} style={{ textAlign: "center" }}>
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {fields.map((field, index) => {
          return <InvoiceItemTableUnit key={field.id} index={index} />;
        })}
      </tbody>
    </table>
  );
};

export default InvoiceItemTable;
