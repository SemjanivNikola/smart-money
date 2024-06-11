// import styles from "./page.module.css";

import AccountCard from "@/src/components/account-card/AccountCard";
import NewAccountCard from "@/src/components/account-card/NewAccountCard";
import ScreenHeader from "@/src/components/screen-header/ScreenHeader";

export default function VirtualAccounts() {
    return (
        <div className="screen">
            <ScreenHeader title="Virtual Accounts" />
            <div className="f row gap-m">
                <AccountCard />
                <NewAccountCard />
            </div>
        </div>
    );
}
