"use client";

import Icon from "@/src/common/icon/Icon";
import AccountCard from "@/src/components/account-card/AccountCard";
import Link from "next/link";

const AccountList = () => {
  return (
    <div className="w-100">
      <div className="f a-c j-sb mb-m">
        <h2 data-count="2">All accounts</h2>
        <Link href="/" className="f a-c gap-m">
          Add new
          <span className="h-icon-backdrop icon-backdrop">
            <Icon name="plus" color="var(--dark)" />
          </span>
        </Link>
      </div>
      <div className="f row gap-m">
        <AccountCard.Account />
      </div>
    </div>
  );
};

export default AccountList;
