import { HTMLAttributes, ReactElement } from "react";

export type FormWizardItemProps = {
  title: string;
  component: ReactElement;
  style?: {
    innerClass: HTMLAttributes<HTMLDivElement>["className"];
  };
};

const FormWizardItem = ({ title, component, style = { innerClass: "mx-auto tabs-card" } }: FormWizardItemProps) => {
  const className = style.innerClass + " flex-col gap-s h-100";
  return (
    <div className="wizard-slide w-100 h-100">
      <div className={className}>
        <h3>{title}</h3>
        <div className="f as-s h-100 ai-s" style={{ position: "relative", overflow: "hidden" }}>
          {component}
        </div>
      </div>
    </div>
  );
};

export default FormWizardItem;
