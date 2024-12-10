import usePaymentWizard from "@/src/hooks/usePaymentWizard";

const PaymentWizard = ({ activeStep }: { activeStep: number }) => {
  const step1Class = activeStep === 1 ? "step active" : "step";
  const step2Class = activeStep === 1 ? "step active" : "step";

  return (
    <div className="f gap-m" style={{ flexShrink: 0, minWidth: "20%" }}>
      <div className="px-s" style={{ paddingBottom: "var(--lg)" }}>
        <span className="step-indicartor-line" />
      </div>
      <div className="f col">
        <div className={step1Class}>
          <span>Step 1</span>
          <h4>Amount & Contact</h4>
        </div>
        <div className={step2Class} />
        <div className="step">
          <span>Step 2</span>
          <h4>Review & Pay</h4>
        </div>
      </div>
    </div>
  );
};

export default PaymentWizard;
