"use client";

import ButtonIcon from "@/src/common/button/ButtonIcon";
import s from "./wallet-card.module.css";

const WalletCard = () => {
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
  );
};

const Wallet = () => {
  return (
    <div className={s.walletWrapper}>
      <div className="f a-c j-sb gap-m">
        <div className="f a-c gap-s">
          <div className="avatar sm">
            <img src="" />
          </div>
          <span>USD</span>
        </div>
        <ButtonIcon icon="plus" onClick={() => {}} />
      </div>
      <div className={s.spacer} />
      <span className={s.aBalance}>
        $6.950<span className={s.aBalanceDim}>,00</span>
      </span>
      <div className="f a-c j-sb gap-m">
        <span className={s.cardSubText}>
          Limit is <span className={s.subTextImportant}>$1000</span> a month.
        </span>
        <span className={s.status}>Active</span>
      </div>
    </div>
  );
};

WalletCard.Wallet = Wallet;

export default WalletCard;
