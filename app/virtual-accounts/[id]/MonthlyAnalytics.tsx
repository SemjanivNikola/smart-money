import Icon from "@/src/common/icon/Icon";

const MonthlyAnalytics = () => {
    return (
        <div className="card px-m py-s">
            <div className="f a-c j-sb gap-s py-s">
                <b>Monthly Analitycs</b>
                <button className="pill-btn fill">
                    Full Stats
                    <Icon name="account" color="var(--black)" />
                </button>
            </div>
            <div className="py-s">
                <h3 className="balance">14,502,00€</h3>
                <p>You saved 10% more than last month</p>
            </div>
            <div className="py-s">
                <div className="chart-grid">
                    <div>1</div>
                    <div className="chart-line">1 - 1</div>
                    <div>2</div>
                    <div className="chart-line">2 - 1</div>
                    <div>3</div>
                    <div className="chart-line">3 - 1</div>
                    <div>4</div>
                    <div className="chart-line">4 - 1</div>
                    <div>5</div>
                    <div>5 - 1</div>
                    <div>5 - 2</div>
                    <div>5 - 3</div>
                    <div>5 - 4</div>
                    <div>5 - 5</div>
                    <div>5 - 6</div>
                </div>
            </div>
        </div>
    )
}

export default MonthlyAnalytics;