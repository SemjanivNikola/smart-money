"use client";

import { useWizardStepper } from "@/src/hooks/useWizardStepper";
import { motion } from "motion/react";
import { ReactElement } from "react";

type FormWizardProps = {
  children: ReactElement[];
  initStep: number;
};

const FormWizard = ({ children, initStep }: FormWizardProps) => {
  const { step } = useWizardStepper();

  return (
    <div className="w-100 h-100" style={{ overflow: "hidden" }}>
      <motion.div
        className="f gap-m h-100"
        animate={{
          x: `${initStep}%`,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 18 }}
        style={{ width: "inherit" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FormWizard;
