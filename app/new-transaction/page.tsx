import ScreenHeader from "@/src/components/screen-header/ScreenHeader";
import CreateTransactionForm from "@/src/forms/CreateTransactionForm";
import s from "../virtual-accounts/[id]/transactions-table.module.css";

export default function NewTransaction() {
  return (
    <div className="screen">
      <ScreenHeader title="Insert new shopping transaction" />
      {/* encType="multipart/form-data" */}
      <CreateTransactionForm />

      {/* TODO: At the moment this whole item table is optional */}
      <table className={s.table}>
        <thead>
          <tr className={s.tttr}>
            <th className={s.ttth}>Num</th>
            <th className={s.ttth}>Name</th>
            <th className={s.ttth}>Quantity</th>
            <th className={s.ttth}>Price for peace</th>
            <th className={s.ttth}>Discount/Discount price</th>
            <th className={s.ttth}>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="px-m">
            <th>1.</th>
            <th>Zubna pasta</th>
            <th>2</th>
            <th>1,13</th>
            <th>
              <span>5%</span>
              <span>0,87</span>
            </th>
            <th>1,74</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
