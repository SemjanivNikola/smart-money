import PaymentRow from "@/app/(main)/payments/PaymentRow";
import { TransactionListSectionItem } from "@/src/enums/TransactionEnum";
import s from "./Table.module.css";
import TableBody, { TableBodyItem } from "./TableBody";
import TableHeader, { TableHeaderItem } from "./TableHeader";

interface TableProps {
  tableHeader: TableHeaderItem[];
  tableData: TableBodyItem<TransactionListSectionItem>[];
}

const Table = ({ tableHeader, tableData }: TableProps) => {
  return (
    <div className="card py-m">
      <table className={s.mainTable}>
        <TableHeader list={tableHeader} />
        <TableBody list={tableData} renderRow={(row) => <PaymentRow {...row} />} />
      </table>
    </div>
  );
};

export default Table;
