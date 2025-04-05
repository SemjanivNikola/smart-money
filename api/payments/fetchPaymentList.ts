"use server";

import { PaymentTableRowProps } from "@/app/(main)/payments/PaymentRow";
import { TableBodyItem } from "@/src/common/table/TableBody";
import { TableHeaderItem } from "@/src/common/table/TableHeader";

export async function fetchPaymentList(query?: string): Promise<{
  tableHeader: TableHeaderItem[];
  tableData: TableBodyItem<PaymentTableRowProps>[];
}> {
  // const response = await fetch(`${process.env.SMART_MONEY_BE_URL}/payments/draft`, {
  //   method: "GET",
  // next: {
  //   tags: ["payment-list"];
  // }
  // })
  //   .then((res) => res.json())
  //   .catch((error: Error) => {
  //     throw error;
  //   });

  const tableHeader: TableHeaderItem[] = [
    { text: "Date", textPosition: "start", width: "12%" },
    { text: "To/From", textPosition: "start" },
    { text: "Amount", textPosition: "end" },
    { text: "Status", width: "18%" },
    { text: "" },
  ];

  const tableData = [
    {
      sectionTitle: "Yesterday",
      items: [
        { id: "1234", time: "10:29 PM", toFrom: "Name Middlename Surname", amount: 129.57, status: "Completed" },
        { id: "1235", time: "10:30 PM", toFrom: "Name Middlename Surname1", amount: 130.57, status: "Pending" },
      ],
    },
  ];

  return { tableHeader, tableData };
}
