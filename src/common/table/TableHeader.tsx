import s from "./Table.module.css";

interface TableHeaderProps {
  list: TableHeaderItem[];
}

export interface TableHeaderItem {
  text: string;
  textPosition?: "center" | "end" | "start";
  width?: string;
}

const TableHeader = ({ list }: TableHeaderProps) => {
  return (
    <thead>
      <tr className={s.thRow}>
        {list.map(({ text, textPosition = "center", width }, index) => (
          <th key={index} style={{ textAlign: textPosition, width: width }}>
            {text}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const FullWidthHeader = ({ title }: { title: string }) => {
  return (
    <thead>
      <tr className={s.thRow}>
        <th colSpan={100}>{title}</th>
      </tr>
    </thead>
  );
};

TableHeader.Simple = FullWidthHeader;

export default TableHeader;
