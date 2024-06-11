import ScreenHeader from "@/src/components/screen-header/ScreenHeader";
import TransactionsTable from "./TransactionsTable";
import Icon from "@/src/common/icon/Icon";
import Pagination from "@/src/common/pagination/Pagination";
import Cashflow from "./Cashflow";
import SavingsPlan from "./SavingsPlan";
import MonthlyAnalytics from "./MonthlyAnalytics";

export default function VirtualAccount() {
    return (
        <div className="screen">
            <ScreenHeader title="Car savings" />
            <div className="f row gap-m">
                {/* TODO: Present account balance along with some options */}
            </div>
            {/* TODO: Display graph - include options to view it in different timelines */}
            <Cashflow />
            <div className="spacer-md" />
            <div className="tabs-card card">
                <div className="f col">
                    <ul className="f row a-c gap-s tab-list">
                        <li className="active">All Transactions</li>
                        <li>Savings Plans</li>
                        <li>Schedule Payments</li>
                        <li>Transaction History</li>
                    </ul>
                    <span className="tab-indicator" />
                </div>
                <div className="tab-screen">
                    <div id="all-transactions">
                        <div className="px-m py-m">
                            <h4>All Transactions</h4>
                            <div className="f row a-c j-sb">
                                <h6>All your transactions are recorded</h6>
                                <div className="f row a-c gap-lg">
                                    <Icon name="account" color="var(--black)" />
                                    <Icon name="account" color="var(--black)" />
                                    <div className="f row a-c gap-s">
                                        <small>This month</small>
                                        <Icon name="account" color="var(--black)" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <TransactionsTable /> */}
                    </div>
                </div>
                <Pagination />
            </div>
            <div className="spacer-md" />
            <SavingsPlan />
            <div className="spacer-md" />
            <MonthlyAnalytics />
        </div >
    );
}
