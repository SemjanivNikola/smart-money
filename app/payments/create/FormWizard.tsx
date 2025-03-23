"use client";

import { useWizardStepper } from "@/src/hooks/useWizardStepper";
import { motion } from "motion/react";
import FormWizardItem, { FormWizardItemProps } from "./FormWizardItem";

type FormWizardProps = {
  formList: FormWizardItemProps[];
};

const FormWizard = ({ formList }: FormWizardProps) => {
  const { step } = useWizardStepper();

  return (
    <div className="w-100 h-100" style={{ overflow: "hidden" }}>
      <motion.div
        className="f gap-m h-100"
        animate={{
          x: `${step}%`,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 18 }}
        style={{ width: "inherit" }}
      >
        {formList.map(({ title, component, style }) => (
          <FormWizardItem title={title} component={component} style={style} />
        ))}
      </motion.div>
    </div>
  );
};

export default FormWizard;
