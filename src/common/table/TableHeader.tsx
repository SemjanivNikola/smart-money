const TableHeader = ({ list }: { list: string[] }) => {
  return (
    <thead style={{ borderBottom: "1px solid red" }}>
      <tr className="{s.thRow}">
        {list.map((item) => (
          <th>{item}</th>
        ))}
      </tr>
    </thead>
  );
};

const FullWidthHeader = ({ title }: { title: string }) => {
  return (
    <thead>
      <tr>
        <th colSpan={100}>{title}</th>
      </tr>
    </thead>
  );
};

TableHeader.Simple = FullWidthHeader;

export default TableHeader;
