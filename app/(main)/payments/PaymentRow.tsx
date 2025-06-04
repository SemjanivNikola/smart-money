"use client";

import ButtonIcon from "@/src/common/button/ButtonIcon";
import Icon from "@/src/common/icon/Icon";
import Pill from "@/src/common/pill/Pill";
import s from "@/src/common/table/Table.module.css";
import { TransactionListSectionItem } from "@/src/enums/TransactionEnum";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

type PaymentTableRowProps = TransactionListSectionItem & {
  //   action: () => void;
};

const REDIRECT_URL = "/transactions/";

const ToFrom = ({ text }: { text: string }) => (
  <td className="f a-c gap-s">
    <Icon name="plus" />
    {text}
  </td>
);

const PaymentRow = ({ id, executed_at, type, sender, recipient, amount, status }: PaymentTableRowProps) => {
  const router = useRouter();
  const toFrom = type === "E" ? recipient : sender;
  const executedAtTime = new Date(executed_at).toLocaleTimeString();

  function redirectOnClick(event: MouseEvent<HTMLTableRowElement>) {
    event.stopPropagation();
    router.push(REDIRECT_URL + id);
  }

  return (
    <tr className={s.tbRow} onClick={redirectOnClick}>
      <td>{executedAtTime}</td>
      <ToFrom text={toFrom} />
      <td style={{ textAlign: "end" }}>{amount} USD</td>
      <td className="status">
        <Pill text={status} iconName="chevron-left" />
      </td>
      <td style={{ width: 38 }}>
        <ButtonIcon icon="plus" onClick={() => {}} />
      </td>
    </tr>
  );
};

export default PaymentRow;
