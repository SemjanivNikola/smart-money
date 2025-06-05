"use client";

import Icon from "@/src/common/icon/Icon";
import { Card } from "@/src/types/WalletType";
import getCurrencySymbol from "@/src/utils/getCurrencySymbol";
import Link from "next/link";
import CardList from "../../wallet-card/CardList";
import "./wallet-widget.css";

interface WalletWidgetProps {
  widgetProps: {
    cards: Card[] | null;
    totalAmount: number;
    currency: string;
    count: number;
  };
}

const WalletWidget = ({ widgetProps: { cards, totalAmount, count, currency } }: WalletWidgetProps) => {
  const symbol = getCurrencySymbol(currency);
  console.log(totalAmount);
  return (
    <div id="wallet-widget">
      <div className="f a-c j-sb gap-s" style={{ marginBottom: "var(--m)" }}>
        <h2 data-multi="true" data-count={count}>
          Cards
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
        <span className="desc">Your total wallet balance ({currency})</span>
      </div>
      <div className="f col gap-lg" style={{ paddingTop: "var(--m)" }}>
        <CardList list={cards} currencySymbol={symbol} />
      </div>
    </div>
  );
};

export default WalletWidget;
