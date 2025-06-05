import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials";
import { cookies } from "next/headers";
import { env } from "process";

const AUTH_KEY = "auth_token";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {email: { label: "Email", type: "text" },
      password: { label: "Password", type: "password" }},
      authorize: async (credentials) => { 
        const res = await fetch(env.SMART_MONEY_BE_URL + "auth/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: credentials.email,
            password: credentials.password,
          }),
        })

        const setCookie = res.headers.getSetCookie();
        const cookieStore = await cookies();
        const token = setCookie.values().next().value;
        cookieStore.set(AUTH_KEY, token);
    
        const data = await res.json()
        if (res.ok) {
          return data;
        }
        return null
      }
    })
  ],
})