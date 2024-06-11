import Icon from "@/src/common/icon/Icon";
import s from "./account-card.module.css"

const NewAccountCard = () => {
    return (
        <button className={s.newCardBtn}>
            <Icon name="plus-circle" size={82} color="var(--action)" />
        </button>
    )
}

export default NewAccountCard;