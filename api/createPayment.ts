export async function createPayment(formData: any): Promise<any> {
  console.log("data >> ", formData);
  setTimeout(() => {}, 100);
  const newStep = formData.step + 100;
  delete formData.step;
  const response = {
    step: newStep,
    ...formData,
  };

  return response;
}
