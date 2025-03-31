import "./create-payment.css";

const PaymentWizard = ({ activeStep = 1 }: { activeStep?: number }) => {
  const step1Class = activeStep === 1 ? "step active" : "step";
  const step2Class = activeStep === 2 ? "step active" : "step";
  const step3Class = activeStep === 3 ? "step active" : "step";
  const step4Class = activeStep === 4 ? "step active" : "step";

  return (
    <div className="f gap-m" style={{ flexShrink: 0, flexGrow: 1, minWidth: "18%", maxWidth: "23%" }}>
      <div className="px-s" style={{ paddingBottom: "var(--lg)" }}>
        <span className="step-indicartor-line" />
      </div>
      <div className="f col gap-m">
        <div className={step1Class}>
          <span>Step 1</span>
          <h4>Amount & Account</h4>
        </div>
        <div className={step2Class} />
        <div className="step">
          <span>Step 2</span>
          <h4>Additional Info</h4>
        </div>
        <div className={step2Class} />
        <div className="step">
          <span>Step 3</span>
          <h4>Invoice Items</h4>
        </div>
        <div className={step2Class} />
        <div className="step">
          <span>Step 4</span>
          <h4>Review & Store</h4>
        </div>
      </div>
    </div>
  );
};

export default PaymentWizard;
