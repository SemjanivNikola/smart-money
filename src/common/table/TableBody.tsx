import { Fragment } from "react";

interface TableBodyProps<T> {
  list: TableBodyItem<T>[];
  renderRow: (row: T) => React.ReactNode;
}

export interface TableBodyItem<T> {
  sectionTitle: string;
  items: T[];
}

const FullWidthRow = ({ title }: { title: string }) => {
  return (
    <tr>
      <td colSpan={100}>{title}</td>
    </tr>
  );
};

const TableBody = <T,>({ list, renderRow }: TableBodyProps<T>) => {
  return (
    <tbody style={{ borderBottom: "1px solid red" }}>
      {list.map((section) => (
        <Fragment key={section.sectionTitle}>
          <FullWidthRow title={section.sectionTitle} />
          {section.items.map((row, index) => (
            <Fragment key={index}>{renderRow(row)}</Fragment>
          ))}
        </Fragment>
      ))}
    </tbody>
  );
};

TableBody.FullWidth = FullWidthRow;

export default TableBody;
