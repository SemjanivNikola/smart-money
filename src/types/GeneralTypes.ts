import { TableBodyItem } from "../common/table/TableBody";
import { TableHeaderItem } from "../common/table/TableHeader";
import { TransactionListSectionItem } from "../enums/TransactionEnum";
import { IUser } from "./AuthType";
import { Card } from "./WalletType";

export interface IDashboardData {
  transactions: {
    list: TableBodyItem<TransactionListSectionItem>[];
  };
  wallet: {
    cards: Card[] | null;
    totalAmount: number;
    count: number;
    currency: string;
  };
  tableHeader: TableHeaderItem[];
  userData: IUser | null;
  notifications: null;
}
