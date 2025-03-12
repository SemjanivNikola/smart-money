"use client";

import Icon from "@/src/common/icon/Icon";
import WalletCard from "@/src/components/wallet-card/WalletCard";
import Link from "next/link";

const WalletList = () => {
  return (
    <div className="w-100">
      <div className="f a-c j-sb mb-m">
        <h2 data-count="2">All wallets</h2>
        <Link href="/" className="f a-c gap-m">
          Add new
          <span className="h-icon-backdrop icon-backdrop">
            <Icon name="plus" color="var(--dark)" />
          </span>
        </Link>
      </div>
      <div className="f row gap-m">
        <WalletCard.Wallet />
      </div>
    </div>
  );
};

export default WalletList;
