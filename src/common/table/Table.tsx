"use client";

import ButtonIcon from "../button/ButtonIcon";
import Icon from "../icon/Icon";
import Pill from "../pill/Pill";
import s from "./Table.module.css";
import TableHeader from "./TableHeader";

const TableOuter = () => {
  return (
    <div className="card py-m">
      <table className={s.mainTable}>
        <thead>
          <tr className={s.thRow}>
            <th>Date</th>
            <th>To/From</th>
            <th style={{ textAlign: "center" }}>Amount</th>
            <th style={{ textAlign: "center" }}>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className={s.tbRowSection}>
            <td colSpan={100}>Yesterday</td>
          </tr>
          <tr className={s.tbRow}>
            <td>10:29 PM</td>
            <ToFrom />
            <td style={{ textAlign: "center" }}>129.57 USD</td>
            <td className="status">
              <Pill text="Completed" iconName="chevron-left" />
            </td>
            <td style={{ width: 38 }}>
              <ButtonIcon icon="plus" onClick={() => {}} />
            </td>
          </tr>
          <tr className={s.tbRow}>
            <td>10:29 PM</td>
            <ToFrom />
            <td style={{ textAlign: "center" }}>129.57 USD</td>
            <td className="status">
              <Pill text="Completed" iconName="chevron-left" />
            </td>
            <td style={{ width: 38 }}>
              <ButtonIcon icon="plus" onClick={() => {}} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const ToFrom = () => (
  <td className="f a-c gap-s">
    <Icon name="plus" />
    Name Middlename Surname
  </td>
);

export default TableOuter;
