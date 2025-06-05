"use server";

import { TableHeaderItem } from "@/src/common/table/TableHeader";
import { IDashboardData } from "@/src/types/GeneralTypes";
import { cookies } from "next/headers";

const TABLE_HEADER: TableHeaderItem[] = [
  { text: "Date", textPosition: "start", width: "12%" },
  { text: "To/From", textPosition: "start" },
  { text: "Amount", textPosition: "end" },
  { text: "Status", width: "18%" },
  { text: "" },
];

const RESPONSE = {
  transactions: {
    list: [],
    count: 0,
  },
  wallet: {
    cards: null,
    totalAmount: 0,
    count: 0,
    currency: "EUR",
  },
  tableHeader: TABLE_HEADER,
  userData: null,
  notifications: null,
};

export async function fetchDashData(): Promise<IDashboardData> {
  const token = (await cookies()).get("auth_token")?.value;

  if (token == null) {
    console.log("Cookie - auth token is undefined");
    throw new Error("Cookie - auth token is undefined");
  }

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    Cookie: token,
  });

  const urls = [
    process.env.SMART_MONEY_BE_URL + "users/me/",
    process.env.SMART_MONEY_BE_URL + "last-transactions/",
    process.env.SMART_MONEY_BE_URL + "wallets/widget/",
  ];

  await Promise.all(
    urls.map((url) =>
      fetch(url, {
        method: "GET",
        headers: headers,
        next: {
          tags: ["dash-data"],
        },
      })
        .then((res) => {
          return res.json().then((resJSON) => {
            if (res.url.match("me")) RESPONSE.userData = resJSON.data;
            else if (res.url.match("widget")) {
              RESPONSE.wallet = resJSON;
            } else if (res.url.match("last-transactions")) {
              RESPONSE.transactions.list = resJSON.data;
              RESPONSE.transactions.count = resJSON.count;
            }

            return res;
          });
        })
        .catch((err) => {
          console.error("Failed to fetch one or more of these URLs:");
          console.log(err);
        })
    )
  );

  return RESPONSE;
}
