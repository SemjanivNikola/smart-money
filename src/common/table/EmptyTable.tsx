import Icon from "../icon/Icon";

const EmptyTable = () => {
  return (
    <div
      className="f col a-c j-c gap-lg"
      style={{ padding: "var(--3xl)", border: "1px solid var(--gray)", borderRadius: "var(--border-radius-m)" }}
    >
      <Icon name="plus" size={56} />
      <p style={{ color: "var(--text-gray)", fontSize: "var(--font-mlg)" }}>No payments yet</p>
    </div>
  );
};

export default EmptyTable;
