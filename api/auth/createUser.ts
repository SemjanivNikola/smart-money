"use server";

import { env } from "process";

export async function createUser(formData: FormData): Promise<{data: Object, ok: boolean}> {
  const response = await fetch(env.SMART_MONEY_BE_URL + "users/", {
    method: "POST",
    body: formData,
  }).catch((error: Error) => {
    throw error.message;
  });
  
  return {data: response.json(), ok: response.ok};
}
