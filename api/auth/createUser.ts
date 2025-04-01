const URL = "http://127.0.0.1:8080";

export async function createUser(formData: FormData): Promise<any> {
  const response = await fetch(`${URL}/users`, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .catch((error: Error) => {
      throw error;
    });

  return response;
}
