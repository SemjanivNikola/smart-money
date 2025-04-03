import PageScreen from "@/src/common/screen/PageScreen";
import PaymentTypeList from "./PaymentTypeList";
import "./create-payment.css";

export default function CreatePayment() {
  return (
    <PageScreen title="Smart Money">
      <div className="screen-min">
        <h3 className="mb-m">Amount & Contact</h3>
        <PaymentTypeList />
      </div>
    </PageScreen>
  );
}
