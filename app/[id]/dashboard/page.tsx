import style from "./dashboard.module.css";

const Dashboard = () => {
    return (
        <div className={style.cardGrid}>
            <div className={style.card}>
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
        </div>
    );
};

export default Dashboard;
