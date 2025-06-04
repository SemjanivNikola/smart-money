export type WalletType = {
  balance: number | null;
  limit: number | null;
  name: string;
  number: string;
  status: string;
  tag: string;
  user: number;
  wallet_type: string;
};

export type TransactionListSectionItem = {
  id: number;
  amount: string;
  recipient: string; // name of a payment recipient
  sender: string; // name of payment sender
  status: string;
  type: string; // Expense, income
  executed_at: string;
};

export type TransactionListSection = {
  sectionTitle: string;
  items: TransactionListSectionItem[];
};
