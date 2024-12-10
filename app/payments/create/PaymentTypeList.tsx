import PaymentTypeItem from "./PaymentTypeItem";

const PaymentTypeList = () => {
  return (
    <div className="f col gap-s">
      <PaymentTypeItem
        title="Regular"
        description="Simple payments. E.g. groceries"
        icon="cloud-gradient"
        href="create/regular/amount"
      />
      <PaymentTypeItem
        title="Internal transfer"
        description="Send to users inside Smart Money"
        icon="cloud-gradient"
        href="create/internal-transfer"
      />
      <PaymentTypeItem
        title="Subscription"
        description="Send to users inside Smart Money"
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
