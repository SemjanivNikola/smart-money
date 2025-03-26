import { useFormContext } from "react-hook-form";

const InvoiceItemTableUnit = ({ index }: { index: number }) => {
  const { register } = useFormContext();
  return (
    <tr>
      <td>
        <input {...register(`articles.${index}.name` as const)} />
      </td>
      <td>
        <input {...register(`articles.${index}.unitPrice` as const)} />
      </td>
      <td>
        <input {...register(`articles.${index}.quantity` as const)} />
      </td>
      <td>
        <input {...register(`articles.${index}.vat` as const)} />
      </td>
      <td>
        <input {...register(`articles.${index}.total` as const)} />
      </td>
    </tr>
  );
};

export default InvoiceItemTableUnit;
