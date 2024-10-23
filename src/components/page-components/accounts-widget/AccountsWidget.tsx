"use client";

import Icon from "@/src/common/icon/Icon";
import Link from "next/link";
import "./account-widget.css";
import AccountCard from "../../account-card/AccountCard";

const AccountWidget = () => {
  return (
    <div id="account-widget">
      <div className="f a-c j-sb gap-s" style={{ marginBottom: "var(--m)" }}>
        <h2 data-multi="true" data-count="1">
          Accounts
        </h2>
        <Link href="/" className="f a-c gap-m">
          Add new
          <span className="icon-backdrop">
            <Icon name="plus" color="var(--dark)" />
          </span>
        </Link>
      </div>
      <div className="py-m">
        <span className="balance">$12,950.00</span>
        <span className="desc">Your balance (USD)</span>
      </div>
      <div className="" style={{ paddingTop: "var(--m)" }}>
        <AccountCard.Account />
      </div>
    </div>
  );
};

export default AccountWidget;
