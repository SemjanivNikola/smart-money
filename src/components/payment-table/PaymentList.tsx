import { fetchPaymentList } from "@/api/payments/fetchPaymentList";
import Table from "@/src/common/table/Table";
import TablePaymentActions from "../../common/table/TablePaymentActions";
import EmptyTable from "@/src/common/table/EmptyTable";

export default async function PaymentList() {
  const { tableHeader, tableData } = await fetchPaymentList();

  if (tableData.length > 0)
    return (
      <div className="py-m">
        <TablePaymentActions />
        <Table tableHeader={tableHeader} tableData={tableData} />
      </div>
    );

  return <EmptyTable />;
};