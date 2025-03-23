import { PaymentTypeEnum, TransactionCategoryEnum } from "../enums/PaymentEnum";

export interface BasicInvoiceData {
  shop: string;
  invoiceDate: string;
  account: string;
  paymentType: PaymentTypeEnum;
  total: number;
}

export interface AdditionalInvoiceData {
  category: TransactionCategoryEnum | string;
  note: string;
}

export type ItemsInvoiceData = ArticleType[];

interface ArticleType {
  name: string;
  // quantity: number;
  // unitPrice: number;
  // totalPrice: number;
  // vat: number;
}
