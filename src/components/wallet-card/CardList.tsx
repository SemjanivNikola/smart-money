import { Card } from "@/src/types/WalletType";
import WalletCard from "./WalletCard";

type CardListProps = {
  list: Card[] | null;
  currencySymbol: string;
};

const CardList = ({ list, currencySymbol }: CardListProps) => {
  console.log(list);
  if (list == null) return null; // TODO: Empty list

  return (
    <>
      {list.map((card) => (
        <WalletCard.Wallet key={card.id} {...card} currencySymbol={currencySymbol} />
      ))}
    </>
  );
};

export default CardList;
