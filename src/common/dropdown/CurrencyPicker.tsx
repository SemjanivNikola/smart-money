import Icon from "../icon/Icon";

const CurrencyPicker = () => {
  function onClick() {}
  return (
    <div>
      <div className="flex a-e j-c gap-05" onClick={onClick}>
        <span className="currency-flag" />
        <span>USD</span>
        <Icon name="chevron-right" size={20} />
      </div>
      <div style={{ display: "none" }}>
        <div className="flex a-s j-c gap-05">
          <span className="currency-flag" />
          <span>USD</span>
        </div>
      </div>
    </div>
  );
};

export default CurrencyPicker;
