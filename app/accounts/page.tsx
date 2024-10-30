import ScreenHeader from "@/src/components/screen-header/ScreenHeader";
import AccountList from "./AccountList";
import "./accounts.css";
import Link from "next/link";
import Icon from "@/src/common/icon/Icon";

export default function Accounts() {
  return (
    <div className="main w-100 f col a-s gap-lg">
      <ScreenHeader title="Accounts" />
      <div className="py-lg">
        <span className="h-balance mb-m">
          $12,950<span className="h-balance-dim">.00</span>
        </span>
        <p className="h-desc">
          Total balance in <span>EUR</span>
        </p>
      </div>
      <AccountList />
    </div>
  );
}
