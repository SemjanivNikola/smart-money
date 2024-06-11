import Icon from "@/src/common/icon/Icon";

const Cashflow = () => {
    return (
        <div className="px-m py-s card">
            <div className="f row a-c j-sb py-s">
                <div className="f row a-c gap-m">
                    <div className="icon-backdrop">
                        <Icon name="account" />
                    </div>
                    <b>My Cashflow</b>
                </div>
                <p>You save as much as 200€ this month. Well done!</p>
            </div>
            <div className="f row a-c py-s gap-m">
                <div id="card-1" className="inner-card">
                    <div className="f row a-c j-sb gap-m">
                        <div className="f row a-c">
                            <span className="status-circle" />
                            <p>Your Income</p>
                        </div>
                        <div className="pill green">10%</div>
                    </div>
                    <span className="balance">2000,00€</span>
                    <p>Your income amount</p>
                </div>
                <div id="card-2" className="inner-card">
                    <div className="f row a-c j-sb gap-m">
                        <div className="f row a-c">
                            <span className="status-circle" />
                            <p>Total Expenses</p>
                        </div>
                        <div className="pill green">10%</div>
                    </div>
                    <span className="balance">2000,00€</span>
                    <p>Your total spend</p>
                </div>
                <div id="card-3" className="inner-card">
                    <div className="f row a-c j-sb gap-m">
                        <div className="f row a-c">
                            <span className="status-circle" />
                            <p>Total money</p>
                        </div>
                        <div className="pill green">10%</div>
                    </div>
                    <span className="balance">2000,00€</span>
                    <p>Total money in your wallet</p>
                </div>
            </div>
        </div>
    )
}

export default Cashflow;