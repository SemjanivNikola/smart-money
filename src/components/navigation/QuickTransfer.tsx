"use client";

import Button from "@/src/common/button/Button";
import ButtonIcon from "@/src/common/button/ButtonIcon";
import CurrencyPicker from "@/src/common/dropdown/CurrencyPicker";
import Icon from "@/src/common/icon/Icon";
import SimpleInput from "@/src/common/text-input/SimpleInput";

const QuickTransfer = () => {
  return (
    <div className="py-xl" style={{ borderTop: "1px solid var(--gray-light)" }}>
      <div className="f a-c j-sb w-100" style={{ paddingBottom: "var(--m)" }}>
        <h4>Quick Transfer</h4>
        <Icon name="chevron-right" size={20} />
      </div>
      <form className="f col a-s px-m" style={{ backgroundColor: "var(--gray-dark)", borderRadius: "var(--m)" }}>
        <div className="f a-e j-sb py-s w-100">
          <div className="f col a-s">
            <span style={{ marginBottom: "var(--s)" }}>From</span>
            <CurrencyPicker />
          </div>
          <span>$ 4,567.00</span>
        </div>
        <SimpleInput name="amount" type="number" value={0} label="Enter the amount" onChange={() => {}} />
        <div className="f a-c j-sb py-s w-100">
          <div className="avatar-wrapper f a-c j-s" data-multi="true">
            <div className="avatar sm" data-count="+2" />
          </div>
          <ButtonIcon
            text="Add Recipient"
            bStyle="transparent"
            color="primary"
            icon="plus"
            iconColor="var(--primary)"
            iconSide="left"
            onClick={() => {}}
          />
        </div>
        <div className="py-m" style={{ width: "100%" }}>
          <Button title="Send money" type="submit" isLoading={false} bStyle="secondary" wide onClick={() => {}} />
        </div>
      </form>
    </div>
  );
};

export default QuickTransfer;
