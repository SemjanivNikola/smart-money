export async function createUser(formData: FormData): Promise<any> {
  const response = await fetch(`${process.env.SMART_MONEY_BE_URL}/users`, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .catch((error: Error) => {
      throw error;
    });

  return response;
}
