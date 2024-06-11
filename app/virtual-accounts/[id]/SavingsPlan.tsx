import Icon from "@/src/common/icon/Icon";

const SavingsPlan = () => {
    return (
        <div className="card px-m py-s">
            <div className="f a-c j-sb gap-s py-s">
                <b>Savings Plan</b>
                <button className="pill-btn">
                    New Plan
                    <Icon name="plus" color="var(--black)" />
                </button>
            </div>
            <ul>
                <li className="f gap-m mb-m">
                    <span className="icon-backdrop py-s px-s">
                        <Icon name="chart" />
                    </span>
                    <span className="grid-3x2">
                        <b>Buying a Tesla car</b>
                        <small>Collected</small>
                        <small className="green">14,502,00€</small>
                        <small>Target Collected on July, 2030</small>
                        <small>Target</small>
                        <small>32,502,00€</small>
                    </span>
                </li>
                <li className="f gap-m mb-m">
                    <span className="icon-backdrop py-s px-s">
                        <Icon name="chart" />
                    </span>
                    <span className="grid-3x2">
                        <b>Buying a Tesla car</b>
                        <small>Collected</small>
                        <small className="green">14,502,00€</small>
                        <small>Target Collected on July, 2030</small>
                        <small>Target</small>
                        <small>32,502,00€</small>
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default SavingsPlan;