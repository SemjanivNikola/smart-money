import { CurrcencyEnum, PaymentTypeEnum } from "@/src/enums/PaymentEnum";
import { AdditionalInvoiceData, BasicInvoiceData, ItemsInvoiceData } from "@/src/types/PaymentTypes";

type ShoppingPaymentDraftType = {
  initBasicData: BasicInvoiceData;
  initAddonData: AdditionalInvoiceData;
  initItemsData: ItemsInvoiceData;
  initStep: number;
};

export async function fetchShoppingPaymentDraft(): Promise<ShoppingPaymentDraftType> {
  // const response = await fetch(`${process.env.SMART_MONEY_BE_URL}/payments/draft`, {
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
        name: "test item 1",
        unitPrice: 1.38,
        quantity: 2,
        vat: 23,
        total: 2.76,
      },
    ],
    initStep: 0,
  };

  return response;
}
