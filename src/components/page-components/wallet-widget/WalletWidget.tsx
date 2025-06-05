"use client";

import Icon from "@/src/common/icon/Icon";
import Link from "next/link";
import WalletCard from "../../wallet-card/WalletCard";
import "./wallet-widget.css";
import { WalletType } from "@/src/enums/TransactionEnum";

interface WalletWidgetProps {
  widgetProps: {
    cards: WalletType[] | null;
    totalAmount: number;
    currency: string;
    count: number;
  };
}

const WalletWidget = ({ widgetProps: { cards, totalAmount, count, currency } }: WalletWidgetProps) => {
  const symbol = getCurrencySymbol(currency);
  return (
    <div id="wallet-widget">
      <div className="f a-c j-sb gap-s" style={{ marginBottom: "var(--m)" }}>
        <h2 data-multi="true" data-count={count}>
          Wallets
        </h2>
        <Link href="/" className="f a-c gap-m">
          Add new
          <span className="icon-backdrop">
            <Icon name="plus" color="var(--dark)" />
          </span>
        </Link>
      </div>
      <div className="py-m">
        <span className="balance">
          {symbol}
          {totalAmount}
        </span>
        <span className="desc">Your balance ({currency})</span>
      </div>
      <div className="" style={{ paddingTop: "var(--m)" }}>
        <WalletCard.Wallet />
      </div>
    </div>
  );
};

function getCurrencySymbol(currency: string) {
  switch (currency) {
    case "USD":
      return "$";
    default:
      return "€";
  }
}

export default WalletWidget;
