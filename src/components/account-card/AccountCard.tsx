import s from "./account-card.module.css"

const AccountCard = () => {
    return (
        <div className={s.cardWrapper}>
            <div className="f row py-s">
                <span>card</span>
                <span>Savings</span>
            </div>
            <span className={s.cardBalance}>1234 5678 9000 0921</span>
            <div className="f row j-sb py-s">
                <div className="f col">
                    <span className={s.cardSubText}>Card type</span>
                    <span className={s.cardSub}>Car savings</span>
                </div>
            </div>
        </div>
    )
}

export default AccountCard