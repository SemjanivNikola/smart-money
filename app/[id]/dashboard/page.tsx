import style from "./dashboard.module.css";

const Dashboard = () => {
    return (
        <div className={style.cardGrid}>
            <div id="balance" className={style.card}>
                <h4>Balance</h4>
                <div className="flex-row justify-between align-center pb-1-5">
                    <span className={style.balance}>€ 15,000</span>
                    <span className={style.balancePill}>+3,27%</span>
                </div>

                <div className="flex-row align-center justify-even gap-1-5">
                    <div className={style.balanceDescItem}>
                        <h5>Income</h5>
                        <span>€ 7, 000</span>
                    </div>
                    <div className="divider-horizontal"></div>
                    <div className={style.balanceDescItem}>
                        <h5>Expenses</h5>
                        <span>€ 3,000</span>
                    </div>
                    <div className="divider-horizontal"></div>
                    <div className={style.balanceDescItem}>
                        <h5>Profit</h5>
                        <span>€ 4, 000</span>
                    </div>
                </div>
            </div>

            <div id={style.accounts} className={style.card}>
                <h4>Accounts</h4>
                <div className="flex-row justify-between align-center pb-1-5">
                    <span className={style.balance}>€ 15 000</span>
                    <span className={style.balancePill}>+3,27%</span>
                </div>

                <div className="flex-row align-center justify-even gap-1-5">
                    <div className={style.balanceDescItem}>
                        <h5>Income</h5>
                        <span>€ 7 000</span>
                    </div>
                    <div className="divider-horizontal"></div>
                    <div className={style.balanceDescItem}>
                        <h5>Expenses</h5>
                        <span>€ 3 000</span>
                    </div>
                    <div className="divider-horizontal"></div>
                    <div className={style.balanceDescItem}>
                        <h5>Profit</h5>
                        <span>€ 4 000</span>
                    </div>
                </div>
            </div>

            <div id={style.analytics} className={style.card}>
                <h4>Analytics</h4>
            </div>

            <div className={style.card}>
                <h4>Report</h4>
            </div>

            <div className={style.cardList}>
                {/* TODO: Display transaction payment source account - e.g. from which was deducted    */}
                <h4>Last transactions</h4>

                <div className={style.transactionItem}>
                    <div className={style.avatar}>N</div>
                    <div className="flex-col" style={{ flex: "1 0 50%" }}>
                        <span>Netflix</span>
                        <span className={style.dateTime}>Today, 14:26</span>
                    </div>
                    <span style={{ color: "rgb(255, 0 , 0)" }}>-35,29 €</span>
                </div>
                <div className={style.transactionItem}>
                    <div className={style.avatar}>N</div>
                    <div className="flex-col" style={{ flex: "1 0 50%" }}>
                        <span>Netflix</span>
                        <span className={style.dateTime}>Today, 14:26</span>
                    </div>
                    <span style={{ color: "rgb(255, 0 , 0)" }}>-35,29 €</span>
                </div>
                <div className={style.transactionItem}>
                    <div className={style.avatar}>N</div>
                    <div className="flex-col" style={{ flex: "1 0 50%" }}>
                        <span>Netflix</span>
                        <span className={style.dateTime}>Today, 14:26</span>
                    </div>
                    <span style={{ color: "rgb(255, 0 , 0)" }}>-35,29 €</span>
                </div>
                <div className={style.transactionItem}>
                    <div className={style.avatar}>N</div>
                    <div className="flex-col" style={{ flex: "1 0 50%" }}>
                        <span>Netflix</span>
                        <span className={style.dateTime}>Today, 14:26</span>
                    </div>
                    <span style={{ color: "rgb(255, 0 , 0)" }}>-35,29 €</span>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
