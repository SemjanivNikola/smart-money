import Table from "@/src/common/table/Table";
import TablePaymentActions from "../../common/table/TablePaymentActions";

const PaymentList = () => {
  return (
    <div className="py-m">
      <TablePaymentActions />
      <Table />
    </div>
  );
};

export default PaymentList;
