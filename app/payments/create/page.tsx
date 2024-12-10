import ScreenHeader from "@/src/components/screen-header/ScreenHeader";
import PaymentTypeList from "./PaymentTypeList";
import "./create-payment.css";

export default function CreatePayment() {
  return (
    <main className="main w-100 f col a-s gap-lg">
      <ScreenHeader title="Create payment" />
      <div className="screen-min">
        <h3 className="mb-m">Amount & Contact</h3>
        <PaymentTypeList />
      </div>
    </main>
  );
}
