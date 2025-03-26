import { IInvoiceItemForm } from "@/src/types/PaymentTypes";
import InvoiceItemTableUnit from "./InvoiceItemTableUnit";
import { useFieldArray } from "../../providers/FieldArrayProvider";

const InvoiceItemTable = ({ headers }: { headers: string[] }) => {
  const { fields } = useFieldArray<IInvoiceItemForm>();
  return (
    <table>
      <thead>
        <tr>
          {headers.map((title) => (
            <th>{title}</th>
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
