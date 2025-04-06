import { fetchTransactions } from "@/api/transactions/fetchTransactios";
import EmptyTable from "@/src/common/table/EmptyTable";
import Table from "@/src/common/table/Table";
import TablePaymentActions from "@/src/common/table/TablePaymentActions";

export default async function TransactionList() {
  const { tableHeader, tableData } = await fetchTransactions();

  if (tableData.length > 0)
    return (
      <div className="py-m">
        <TablePaymentActions />
        <Table tableHeader={tableHeader} tableData={tableData} />
      </div>
    );

  return <EmptyTable />;
}
