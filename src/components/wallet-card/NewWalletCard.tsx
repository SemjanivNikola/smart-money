import Icon from "@/src/common/icon/Icon";
import s from "./account-card.module.css";

const NewWalletCard = () => {
  return (
    <button className={s.newCardBtn}>
      <Icon name="plus-circle" size={82} color="var(--action)" />
    </button>
  );
};

export default NewWalletCard;
