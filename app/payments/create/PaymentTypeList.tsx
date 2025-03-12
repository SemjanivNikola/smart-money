import PaymentTypeItem from "./PaymentTypeItem";

const PaymentTypeList = () => {
  return (
    <div className="f col gap-s">
      <PaymentTypeItem
        title="Regular"
        description="Simple payments and transfers. E.g. groceries or house utilities"
        icon="cloud-gradient"
        href="create/regular"
      />
      <PaymentTypeItem
        title="Internal transfer"
        description="Move money between your accounts and cards"
        icon="cloud-gradient"
        href="create/internal-transfer"
      />
      <PaymentTypeItem
        title="Subscription"
        description="Automate known, monthly expenses"
        icon="cloud-gradient"
        href="create/subscription"
      />
      <PaymentTypeItem title="Group" description="Settle expenses with friends" icon="cloud-gradient" href="group" />
      <PaymentTypeItem
        title="Create a payment link"
        description="Send or receive money with a link"
        icon="cloud-gradient"
        href="create/payment-link"
      />
    </div>
  );
};

export default PaymentTypeList;
