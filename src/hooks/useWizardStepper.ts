/*
 * 1. step = 0
 * 2. step = -101.9
 * 3. step = -203.8
 */
export function useWizardStepper() {
  let step = -203.8;

  function nextStep() {
    if (step <= -200) return;

    step = step - 101.9;
  }

  function previousStep() {
    if (step >= 0) return;

    step = step + 101.9;
  }

  return { step, nextStep, previousStep };
}
