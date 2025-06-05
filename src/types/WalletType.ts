export type Wallet = {
  balance: number | null;
  limit: number | null;
  name: string;
  number: string;
  status: string;
  tag: string;
  user: number;
  wallet_type: string;
};

export type Card = {
  id: number;
  balance: string;
  limit: string;
  masked_number: string;
  currency: string;
  is_active: boolean;
};
