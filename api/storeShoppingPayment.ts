const URL = "http://127.0.0.1:8080";

export async function storeShoppingPayment(formData: any): Promise<any> {
  const response = await fetch(`${URL}/payments`, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .catch((error: Error) => {
      throw error;
    });

  return response;
}
