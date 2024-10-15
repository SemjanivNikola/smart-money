const URL = "http://127.0.0.1:8080";

export async function storeTransaction(formData: any): Promise<any> {
    const response = await fetch(`${URL}/transactions`, {
        method: "POST",
        body: formData,
    }).then((res) => res.json());

    return response;
}
