import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart Money",
  description: "Manage your money flow and investments in efficient way.",
};

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="main-layout auth">{children}</main>
      </body>
    </html>
  );
};

export default AuthLayout;
