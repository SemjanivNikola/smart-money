export async function storeShoppingPayment(formData: any): Promise<any> {
  const response = await fetch(`${process.env.SMART_MONEY_BE_URL}/payments`, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .catch((error: Error) => {
      throw error;
    });

  return response;
}
