"use server";

import { TableBodyItem } from "@/src/common/table/TableBody";
import { TableHeaderItem } from "@/src/common/table/TableHeader";
import { TransactionListSectionItem, WalletType } from "@/src/enums/TransactionEnum";
import { IUser } from "@/src/types/AuthType";
import { cookies } from "next/headers";

interface IDashboardData {
  transactions: {
    list: TableBodyItem<TransactionListSectionItem>[];
  };
  wallet: {
    cards: WalletType[] | null;
    totalAmount: number;
    count: number;
    currency: string;
  };
  tableHeader: TableHeaderItem[];
  userData: IUser | null;
  notifications: null;
}

const tableHeader: TableHeaderItem[] = [
  { text: "Date", textPosition: "start", width: "12%" },
  { text: "To/From", textPosition: "start" },
  { text: "Amount", textPosition: "end" },
  { text: "Status", width: "18%" },
  { text: "" },
];

export async function fetchDashData(): Promise<IDashboardData> {
  const token = (await cookies()).get("auth_token")?.value;

  if (token == null) {
    console.log("Cookie - auth token is undefined");
    throw new Error("Cookie - auth token is undefined");
  }

  const response = {
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
    tableHeader: tableHeader,
    userData: null,
    notifications: null,
  };

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    Cookie: token,
  });

  const urls = [
    process.env.SMART_MONEY_BE_URL + "users/me/",
    process.env.SMART_MONEY_BE_URL + "last-transactions/",
    process.env.SMART_MONEY_BE_URL + "wallets/top-wallets/",
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
            if (res.url.match("users/me")) response.userData = resJSON.data;
            else if (res.url.match("top-wallets")) {
              console.log(resJSON);
              response.wallet = resJSON;
            } else if (res.url.match("last-transactions")) {
              response.transactions.list = resJSON.data;
              response.transactions.count = resJSON.count;
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

  return response;
}

// CONFIGURATION 1: 0 mA ====================================
// bLength              :    0x9 (9 bytes)
// bDescriptorType      :    0x2 Configuration
// wTotalLength         :   0x19 (25 bytes)
// bNumInterfaces       :    0x1
// bConfigurationValue  :    0x1
// iConfiguration       :    0x0
// bmAttributes         :   0xe0 Self Powered, Remote Wakeup
// bMaxPower            :    0x0 (0 mA)
//  INTERFACE 0: Hub =======================================
//   bLength            :    0x9 (9 bytes)
//   bDescriptorType    :    0x4 Interface
//   bInterfaceNumber   :    0x0
//   bAlternateSetting  :    0x0
//   bNumEndpoints      :    0x1
//   bInterfaceClass    :    0x9 Hub
//   bInterfaceSubClass :    0x0
//   bInterfaceProtocol :    0x0
//   iInterface         :    0x0
//    ENDPOINT 0x81: Interrupt IN ==========================
//     bLength          :    0x7 (7 bytes)
//     bDescriptorType  :    0x5 Endpoint
//     bEndpointAddress :   0x81 IN
//     bmAttributes     :    0x3 Interrupt
//     wMaxPacketSize   :    0x4 (4 bytes)
//     bInterval        :    0xc

// ----------------------------------------------------------------
