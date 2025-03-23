import { CurrcencyEnum, PaymentTypeEnum } from "@/src/enums/PaymentEnum";
import { AdditionalInvoiceData, BasicInvoiceData, ItemsInvoiceData } from "@/src/types/PaymentTypes";

const URL = "http://127.0.0.1:8080";

type ShoppingPaymentDraftType = {
  initBasicData: BasicInvoiceData;
  initAddonData: AdditionalInvoiceData;
  initItemsData: ItemsInvoiceData;
  initStep: number;
};

export async function fetchShoppingPaymentDraft(): Promise<ShoppingPaymentDraftType> {
  // const response = await fetch(`${URL}/payments/draft`, {
  //   method: "GET",
  // })
  //   .then((res) => res.json())
  //   .catch((error: Error) => {
  //     throw error;
  //   });

  const response = {
    initBasicData: {
      invoiceDate: "12.03.2025",
      shop: "",
      total: 0,
      currency: CurrcencyEnum.EUR,
      paymentType: PaymentTypeEnum.CASH,
      account: "",
    },
    initAddonData: {
      category: "",
      note: "",
    },
    initItemsData: [
      {
        name: "test input 1",
      },
    ],
    initStep: 0,
  };

  return response;
}
