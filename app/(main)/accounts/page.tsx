import PageScreen from "@/src/common/screen/PageScreen";
import AccountList from "./AccountList";
import "./accounts.css";

export default function Accounts() {
  return (
    <PageScreen title="Accounts">
      <>
        <div className="pb-lg">
          <span className="h-balance mb-m">
            $12,950<span className="h-balance-dim">.00</span>
          </span>
          <p className="h-desc">
            Total balance in <span>EUR</span>
          </p>
        </div>
        <AccountList />
      </>
    </PageScreen>
  );
}
