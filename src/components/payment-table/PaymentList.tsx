import { fetchPaymentList } from "@/api/payments/fetchPaymentList";
import Table from "@/src/common/table/Table";
import TablePaymentActions from "../../common/table/TablePaymentActions";

const PaymentList = async () => {
  const { tableHeader, tableData } = await fetchPaymentList();

  return (
    <div className="py-m">
      <TablePaymentActions />
      <Table tableHeader={tableHeader} tableData={tableData} />
    </div>
  );
};

export default PaymentList;
