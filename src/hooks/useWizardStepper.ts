/*
 * 1. step = 0
 * 2. step = -101.5
 * 3. step = -203
 */
export function useWizardStepper() {
  let step = -203;

  function nextStep() {
    if (step <= -200) return;

    step = step - 101.5;
  }

  function previousStep() {
    if (step >= 0) return;

    step = step + 101.5;
  }

  return { step, nextStep, previousStep };
}
